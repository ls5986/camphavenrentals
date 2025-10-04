-- Add user authentication tables

-- Enable RLS on auth.users (if not already enabled)
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Create user_profiles table to extend auth.users
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('owner', 'admin')),
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true,
  
  -- Owner-specific fields
  company_name TEXT,
  emergency_contact_name TEXT,
  emergency_contact_phone TEXT,
  
  -- Admin-specific fields
  admin_level TEXT DEFAULT 'standard' CHECK (admin_level IN ('standard', 'super')),
  last_login TIMESTAMP WITH TIME ZONE
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_user_profiles_email ON public.user_profiles(email);
CREATE INDEX IF NOT EXISTS idx_user_profiles_role ON public.user_profiles(role);
CREATE INDEX IF NOT EXISTS idx_user_profiles_active ON public.user_profiles(is_active);

-- Enable RLS
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for user_profiles
CREATE POLICY "Users can view own profile" ON public.user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.user_profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON public.user_profiles
  FOR SELECT USING (
    auth.uid() IN (
      SELECT id FROM public.user_profiles 
      WHERE role = 'admin' AND is_active = true
    )
  );

CREATE POLICY "Admins can update all profiles" ON public.user_profiles
  FOR UPDATE USING (
    auth.uid() IN (
      SELECT id FROM public.user_profiles 
      WHERE role = 'admin' AND is_active = true
    )
  );

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'role', 'owner')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Update existing tables to reference user_profiles
ALTER TABLE public.owner_inquiries 
ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES public.user_profiles(id);

ALTER TABLE public.property_questionnaires 
ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES public.user_profiles(id);

ALTER TABLE public.property_opportunities 
ADD COLUMN IF NOT EXISTS created_by_user UUID REFERENCES public.user_profiles(id);

-- Create user_properties table to link owners with their properties
CREATE TABLE IF NOT EXISTS public.user_properties (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  property_opportunity_id UUID REFERENCES public.property_opportunities(id),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'active', 'terminated')),
  lease_start_date DATE,
  lease_end_date DATE,
  monthly_rent DECIMAL(10,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on user_properties
ALTER TABLE public.user_properties ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for user_properties
CREATE POLICY "Users can view own properties" ON public.user_properties
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own properties" ON public.user_properties
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all properties" ON public.user_properties
  FOR ALL USING (
    auth.uid() IN (
      SELECT id FROM public.user_profiles 
      WHERE role = 'admin' AND is_active = true
    )
  );

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_user_properties_user_id ON public.user_properties(user_id);
CREATE INDEX IF NOT EXISTS idx_user_properties_status ON public.user_properties(status);
