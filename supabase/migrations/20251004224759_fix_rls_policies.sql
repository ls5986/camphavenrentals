-- Fix Row Level Security policies to prevent infinite recursion

-- Drop existing policies
DROP POLICY IF EXISTS "Allow public to insert inquiries" ON owner_inquiries;
DROP POLICY IF EXISTS "Allow admins to read inquiries" ON owner_inquiries;
DROP POLICY IF EXISTS "Allow admins to update inquiries" ON owner_inquiries;
DROP POLICY IF EXISTS "Allow public to insert questionnaires" ON property_questionnaires;
DROP POLICY IF EXISTS "Allow public to update own questionnaires" ON property_questionnaires;
DROP POLICY IF EXISTS "Allow admins to read questionnaires" ON property_questionnaires;
DROP POLICY IF EXISTS "Allow admins to manage admin users" ON admin_users;
DROP POLICY IF EXISTS "Allow admins to manage opportunities" ON property_opportunities;

-- Create simpler policies that don't cause recursion

-- Owner Inquiries: Allow public to insert, authenticated users to read/update
CREATE POLICY "Enable insert for public" ON owner_inquiries
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users" ON owner_inquiries
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users" ON owner_inquiries
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Property Questionnaires: Allow public to insert, authenticated users to read/update
CREATE POLICY "Enable insert for public" ON property_questionnaires
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users" ON property_questionnaires
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users" ON property_questionnaires
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Admin Users: Allow authenticated users to manage
CREATE POLICY "Enable all for authenticated users" ON admin_users
    FOR ALL USING (auth.role() = 'authenticated');

-- Property Opportunities: Allow authenticated users to manage
CREATE POLICY "Enable all for authenticated users" ON property_opportunities
    FOR ALL USING (auth.role() = 'authenticated');
