import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side client with service role key
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// Types for our database tables
export interface OwnerInquiry {
  id: string
  created_at: string
  name: string
  email: string
  phone: string
  property_address: string
  status: 'pending' | 'contacted' | 'questionnaire_sent' | 'completed' | 'rejected'
  notes?: string
}

export interface PropertyQuestionnaire {
  id: string
  created_at: string
  owner_inquiry_id: string
  owner_id: string
  
  // Property Details
  property_address: string
  property_type: 'house' | 'condo' | 'adu' | 'duplex'
  square_footage: number
  year_built: number
  parking_availability: string
  hoa: boolean
  hoa_documents?: string[]
  
  // Furnishing Status
  furnished: boolean
  included_items?: string[]
  personal_items_on_site: boolean
  linens_included: boolean
  kitchenware_included: boolean
  current_photos?: string[]
  
  // Maintenance & Landscaping
  existing_landscaping: boolean
  landscaping_company?: string
  landscaping_frequency?: string
  landscaping_contact?: string
  landscaping_payer: 'owner' | 'camp_haven' | 'split'
  special_requirements?: string
  
  // Utilities & Services
  utilities_included: boolean
  electricity_provider?: string
  water_provider?: string
  gas_provider?: string
  trash_provider?: string
  internet_provider?: string
  monthly_electricity_cost?: number
  monthly_water_cost?: number
  monthly_gas_cost?: number
  monthly_trash_cost?: number
  monthly_internet_cost?: number
  solar_backup: boolean
  smart_home_devices?: string[]
  
  // Appliances & Systems
  appliances?: Array<{
    name: string
    age: number
    condition: 'excellent' | 'good' | 'fair' | 'poor'
    under_warranty: boolean
    warranty_documents?: string[]
  }>
  last_hvac_service?: string
  
  // Insurance & Liability
  homeowner_insurance: boolean
  maintain_insurance: boolean
  additional_insured_required: boolean
  insurance_documents?: string[]
  
  // Availability & Preferences
  desired_start_date?: string
  minimum_lease_term: number
  blackout_periods?: string[]
  max_occupancy?: number
  pet_policy?: string
  
  // Financial
  expected_monthly_rent: number
  deposit_required?: number
  payment_method_preference?: string
  automatic_payments_required: boolean
  
  // Document Uploads
  lease_title_documents?: string[]
  insurance_certificates?: string[]
  hoa_rules?: string[]
  appliance_receipts?: string[]
  floor_plan?: string[]
  
  // Final Acknowledgment
  information_accurate: boolean
  signed_at?: string
  
  status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected'
  admin_notes?: string
  review_score?: number
}

export interface AdminUser {
  id: string
  email: string
  name: string
  role: 'admin' | 'reviewer'
  created_at: string
}

export interface PropertyOpportunity {
  id: string
  created_at: string
  updated_at: string
  
  // Basic Property Info
  address: string
  city?: string
  state?: string
  zip_code?: string
  county?: string
  coordinates?: { x: number; y: number }
  
  // Property Details
  property_type?: 'house' | 'condo' | 'adu' | 'duplex' | 'townhouse' | 'cabin' | 'tiny_home'
  bedrooms?: number
  bathrooms?: number
  square_footage?: number
  lot_size?: number
  year_built?: number
  
  // AirDNA Data
  airdna_id?: string
  airdna_revenue_estimate?: number
  airdna_occupancy_estimate?: number
  airdna_adr_estimate?: number
  airdna_revpar?: number
  airdna_competition_score?: number
  airdna_demand_score?: number
  airdna_seasonality?: any
  airdna_last_updated?: string
  
  // Property Assets & Features
  has_hot_tub?: boolean
  has_pool?: boolean
  has_fireplace?: boolean
  has_pet_friendly?: boolean
  has_parking?: boolean
  has_garage?: boolean
  has_wifi?: boolean
  has_kitchen?: boolean
  has_laundry?: boolean
  has_ac?: boolean
  has_heating?: boolean
  is_remote?: boolean
  is_off_grid?: boolean
  has_well_water?: boolean
  has_septic?: boolean
  has_solar?: boolean
  custom_assets?: string[]
  
  // Market Analysis
  market_type?: 'urban' | 'suburban' | 'rural' | 'remote' | 'tourist' | 'business'
  proximity_amenities?: any
  local_attractions?: string[]
  accessibility_score?: number
  uniqueness_score?: number
  
  // Owner Information
  owner_name?: string
  owner_email?: string
  owner_phone?: string
  owner_type?: 'individual' | 'investor' | 'corporation' | 'unknown'
  
  // Opportunity Status
  status: 'prospecting' | 'researching' | 'contacted' | 'interested' | 'questionnaire_sent' | 'under_review' | 'approved' | 'lease_sent' | 'lease_signed' | 'active' | 'rejected' | 'lost'
  
  // Financial Analysis
  estimated_monthly_rent?: number
  estimated_annual_revenue?: number
  estimated_occupancy_rate?: number
  estimated_adr?: number
  estimated_operating_costs?: number
  estimated_net_profit?: number
  cap_rate?: number
  roi_percentage?: number
  
  // CRM Fields
  priority: 'low' | 'medium' | 'high' | 'urgent'
  source?: string
  assigned_to?: string
  next_action?: string
  next_action_date?: string
  notes?: string
  tags?: string[]
  
  // Pipeline Tracking
  last_contact_date?: string
  contact_frequency?: string
  lease_start_date?: string
  lease_end_date?: string
  contract_value?: number
  
  // Linked Records
  owner_inquiry_id?: string
  property_questionnaire_id?: string
  lease_contract_id?: string
  
  // Admin Fields
  created_by?: string
  admin_notes?: string
  internal_score?: number
}
