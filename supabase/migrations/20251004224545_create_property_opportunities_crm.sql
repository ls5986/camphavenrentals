-- Camp Haven Rentals Database Schema
-- Run this script in your Supabase SQL editor to create the necessary tables

-- Admin Users Table (must be created first due to foreign key references)
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'reviewer' CHECK (role IN ('admin', 'reviewer')),
  is_active BOOLEAN DEFAULT TRUE
);

-- Owner Inquiries Table
CREATE TABLE IF NOT EXISTS owner_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  property_address TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'questionnaire_sent', 'completed', 'rejected')),
  notes TEXT,
  admin_user_id UUID REFERENCES admin_users(id)
);

-- Property Questionnaires Table
CREATE TABLE IF NOT EXISTS property_questionnaires (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  owner_inquiry_id UUID REFERENCES owner_inquiries(id),
  owner_id TEXT NOT NULL, -- This will be replaced with proper auth user ID later
  
  -- Property Details
  property_address TEXT NOT NULL,
  property_type TEXT CHECK (property_type IN ('house', 'condo', 'adu', 'duplex')),
  square_footage INTEGER,
  year_built INTEGER,
  parking_availability TEXT,
  hoa BOOLEAN DEFAULT FALSE,
  hoa_documents TEXT[],
  
  -- Furnishing Status
  furnished BOOLEAN DEFAULT FALSE,
  included_items TEXT[],
  personal_items_on_site BOOLEAN DEFAULT FALSE,
  linens_included BOOLEAN DEFAULT FALSE,
  kitchenware_included BOOLEAN DEFAULT FALSE,
  current_photos TEXT[],
  
  -- Maintenance & Landscaping
  existing_landscaping BOOLEAN DEFAULT FALSE,
  landscaping_company TEXT,
  landscaping_frequency TEXT,
  landscaping_contact TEXT,
  landscaping_payer TEXT CHECK (landscaping_payer IN ('owner', 'camp_haven', 'split')),
  special_requirements TEXT,
  
  -- Utilities & Services
  utilities_included BOOLEAN DEFAULT FALSE,
  electricity_provider TEXT,
  water_provider TEXT,
  gas_provider TEXT,
  trash_provider TEXT,
  internet_provider TEXT,
  monthly_electricity_cost DECIMAL,
  monthly_water_cost DECIMAL,
  monthly_gas_cost DECIMAL,
  monthly_trash_cost DECIMAL,
  monthly_internet_cost DECIMAL,
  solar_backup BOOLEAN DEFAULT FALSE,
  smart_home_devices TEXT[],
  
  -- Appliances & Systems
  appliances JSONB, -- Store as JSON array of objects
  last_hvac_service DATE,
  
  -- Insurance & Liability
  homeowner_insurance BOOLEAN DEFAULT FALSE,
  maintain_insurance BOOLEAN DEFAULT FALSE,
  additional_insured_required BOOLEAN DEFAULT FALSE,
  insurance_documents TEXT[],
  
  -- Availability & Preferences
  desired_start_date DATE,
  minimum_lease_term INTEGER DEFAULT 12,
  blackout_periods TEXT[],
  max_occupancy INTEGER,
  pet_policy TEXT,
  
  -- Financial
  expected_monthly_rent DECIMAL NOT NULL,
  deposit_required DECIMAL,
  payment_method_preference TEXT,
  automatic_payments_required BOOLEAN DEFAULT FALSE,
  
  -- Document Uploads
  lease_title_documents TEXT[],
  insurance_certificates TEXT[],
  hoa_rules TEXT[],
  appliance_receipts TEXT[],
  floor_plan TEXT[],
  
  -- Final Acknowledgment
  information_accurate BOOLEAN DEFAULT FALSE,
  signed_at TIMESTAMP WITH TIME ZONE,
  
  -- Admin Fields
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'submitted', 'under_review', 'approved', 'rejected')),
  admin_notes TEXT,
  review_score INTEGER CHECK (review_score >= 0 AND review_score <= 10),
  admin_user_id UUID REFERENCES admin_users(id)
);

-- Enable Row Level Security
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE owner_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE property_questionnaires ENABLE ROW LEVEL SECURITY;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_owner_inquiries_status ON owner_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_owner_inquiries_created_at ON owner_inquiries(created_at);
CREATE INDEX IF NOT EXISTS idx_property_questionnaires_status ON property_questionnaires(status);
CREATE INDEX IF NOT EXISTS idx_property_questionnaires_owner_inquiry_id ON property_questionnaires(owner_inquiry_id);
CREATE INDEX IF NOT EXISTS idx_property_questionnaires_created_at ON property_questionnaires(created_at);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_owner_inquiries_updated_at 
    BEFORE UPDATE ON owner_inquiries 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_property_questionnaires_updated_at 
    BEFORE UPDATE ON property_questionnaires 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert default admin user (replace with your actual admin email)
INSERT INTO admin_users (email, name, role) 
VALUES ('admin@camphavenrentals.com', 'Admin User', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Row Level Security Policies

-- Owner Inquiries: Allow public to insert, admins to read/update
CREATE POLICY "Allow public to insert inquiries" ON owner_inquiries
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow admins to read inquiries" ON owner_inquiries
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM admin_users 
            WHERE admin_users.email = auth.jwt() ->> 'email' 
            AND admin_users.is_active = true
        )
    );

CREATE POLICY "Allow admins to update inquiries" ON owner_inquiries
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM admin_users 
            WHERE admin_users.email = auth.jwt() ->> 'email' 
            AND admin_users.is_active = true
        )
    );

-- Property Questionnaires: Allow public to insert, admins to read/update
CREATE POLICY "Allow public to insert questionnaires" ON property_questionnaires
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to update own questionnaires" ON property_questionnaires
    FOR UPDATE USING (
        owner_id = auth.jwt() ->> 'sub' OR
        EXISTS (
            SELECT 1 FROM admin_users 
            WHERE admin_users.email = auth.jwt() ->> 'email' 
            AND admin_users.is_active = true
        )
    );

CREATE POLICY "Allow admins to read questionnaires" ON property_questionnaires
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM admin_users 
            WHERE admin_users.email = auth.jwt() ->> 'email' 
            AND admin_users.is_active = true
        )
    );

-- Admin Users: Only admins can manage admin users
CREATE POLICY "Allow admins to manage admin users" ON admin_users
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM admin_users 
            WHERE admin_users.email = auth.jwt() ->> 'email' 
            AND admin_users.role = 'admin' 
            AND admin_users.is_active = true
        )
    );

-- Property Opportunities CRM Table
CREATE TABLE IF NOT EXISTS property_opportunities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Basic Property Info
  address TEXT NOT NULL,
  city TEXT,
  state TEXT,
  zip_code TEXT,
  county TEXT,
  coordinates POINT, -- For mapping
  
  -- Property Details
  property_type TEXT CHECK (property_type IN ('house', 'condo', 'adu', 'duplex', 'townhouse', 'cabin', 'tiny_home')),
  bedrooms INTEGER,
  bathrooms DECIMAL,
  square_footage INTEGER,
  lot_size DECIMAL,
  year_built INTEGER,
  
  -- AirDNA Data
  airdna_id TEXT,
  airdna_revenue_estimate DECIMAL,
  airdna_occupancy_estimate DECIMAL,
  airdna_adr_estimate DECIMAL, -- Average Daily Rate
  airdna_revpar DECIMAL, -- Revenue Per Available Room
  airdna_competition_score INTEGER,
  airdna_demand_score INTEGER,
  airdna_seasonality JSONB,
  airdna_last_updated TIMESTAMP WITH TIME ZONE,
  
  -- Property Assets & Features
  has_hot_tub BOOLEAN DEFAULT FALSE,
  has_pool BOOLEAN DEFAULT FALSE,
  has_fireplace BOOLEAN DEFAULT FALSE,
  has_pet_friendly BOOLEAN DEFAULT FALSE,
  has_parking BOOLEAN DEFAULT FALSE,
  has_garage BOOLEAN DEFAULT FALSE,
  has_wifi BOOLEAN DEFAULT FALSE,
  has_kitchen BOOLEAN DEFAULT FALSE,
  has_laundry BOOLEAN DEFAULT FALSE,
  has_ac BOOLEAN DEFAULT FALSE,
  has_heating BOOLEAN DEFAULT FALSE,
  is_remote BOOLEAN DEFAULT FALSE,
  is_off_grid BOOLEAN DEFAULT FALSE,
  has_well_water BOOLEAN DEFAULT FALSE,
  has_septic BOOLEAN DEFAULT FALSE,
  has_solar BOOLEAN DEFAULT FALSE,
  custom_assets TEXT[],
  
  -- Market Analysis
  market_type TEXT CHECK (market_type IN ('urban', 'suburban', 'rural', 'remote', 'tourist', 'business')),
  proximity_amenities JSONB, -- Stores distance to key amenities
  local_attractions TEXT[],
  accessibility_score INTEGER CHECK (accessibility_score >= 1 AND accessibility_score <= 10),
  uniqueness_score INTEGER CHECK (uniqueness_score >= 1 AND uniqueness_score <= 10),
  
  -- Owner Information (if available)
  owner_name TEXT,
  owner_email TEXT,
  owner_phone TEXT,
  owner_type TEXT CHECK (owner_type IN ('individual', 'investor', 'corporation', 'unknown')),
  
  -- Opportunity Status
  status TEXT DEFAULT 'prospecting' CHECK (status IN (
    'prospecting', 'researching', 'contacted', 'interested', 
    'questionnaire_sent', 'under_review', 'approved', 
    'lease_sent', 'lease_signed', 'active', 'rejected', 'lost'
  )),
  
  -- Financial Analysis
  estimated_monthly_rent DECIMAL,
  estimated_annual_revenue DECIMAL,
  estimated_occupancy_rate DECIMAL,
  estimated_adr DECIMAL,
  estimated_operating_costs DECIMAL,
  estimated_net_profit DECIMAL,
  cap_rate DECIMAL,
  roi_percentage DECIMAL,
  
  -- CRM Fields
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  source TEXT, -- How we found this opportunity
  assigned_to UUID REFERENCES admin_users(id),
  next_action TEXT,
  next_action_date DATE,
  notes TEXT,
  tags TEXT[],
  
  -- Pipeline Tracking
  last_contact_date DATE,
  contact_frequency TEXT, -- How often to follow up
  lease_start_date DATE,
  lease_end_date DATE,
  contract_value DECIMAL,
  
  -- Linked Records
  owner_inquiry_id UUID REFERENCES owner_inquiries(id),
  property_questionnaire_id UUID REFERENCES property_questionnaires(id),
  lease_contract_id UUID, -- Will link to lease contracts when created
  
  -- Admin Fields
  created_by UUID REFERENCES admin_users(id),
  admin_notes TEXT,
  internal_score INTEGER CHECK (internal_score >= 1 AND internal_score <= 10)
);

-- Create indexes for property opportunities
CREATE INDEX IF NOT EXISTS idx_property_opportunities_status ON property_opportunities(status);
CREATE INDEX IF NOT EXISTS idx_property_opportunities_priority ON property_opportunities(priority);
CREATE INDEX IF NOT EXISTS idx_property_opportunities_assigned_to ON property_opportunities(assigned_to);
CREATE INDEX IF NOT EXISTS idx_property_opportunities_city_state ON property_opportunities(city, state);
CREATE INDEX IF NOT EXISTS idx_property_opportunities_airdna_revenue ON property_opportunities(airdna_revenue_estimate);
CREATE INDEX IF NOT EXISTS idx_property_opportunities_created_at ON property_opportunities(created_at);

-- Create trigger for property opportunities updated_at
CREATE TRIGGER update_property_opportunities_updated_at 
    BEFORE UPDATE ON property_opportunities 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security for Property Opportunities
ALTER TABLE property_opportunities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow admins to manage opportunities" ON property_opportunities
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM admin_users 
            WHERE admin_users.email = auth.jwt() ->> 'email' 
            AND admin_users.is_active = true
        )
    );

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;
