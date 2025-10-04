"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"
import { 
  ArrowLeft,
  Save,
  Plus,
  Trash2,
  MapPin,
  DollarSign,
  TrendingUp,
  Home,
  Phone,
  Mail,
  Target,
  Star
} from "lucide-react"
import { useRouter } from "next/navigation"


export default function AddOpportunityPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [customAssets, setCustomAssets] = useState<string[]>([''])
  const [localAttractions, setLocalAttractions] = useState<string[]>([''])
  const [tags, setTags] = useState<string[]>([''])
  const router = useRouter()

  const [formData, setFormData] = useState({
    // Basic Property Info
    address: '',
    city: '',
    state: '',
    zip_code: '',
    county: '',
    
    // Property Details
    property_type: 'house' as 'house' | 'condo' | 'adu' | 'duplex' | 'townhouse' | 'cabin' | 'tiny_home',
    bedrooms: '',
    bathrooms: '',
    square_footage: '',
    lot_size: '',
    year_built: '',
    
    // AirDNA Data
    airdna_id: '',
    airdna_revenue_estimate: '',
    airdna_occupancy_estimate: '',
    airdna_adr_estimate: '',
    airdna_revpar: '',
    airdna_competition_score: '',
    airdna_demand_score: '',
    
    // Property Assets & Features
    has_hot_tub: false,
    has_pool: false,
    has_fireplace: false,
    has_pet_friendly: false,
    has_parking: false,
    has_garage: false,
    has_wifi: false,
    has_kitchen: false,
    has_laundry: false,
    has_ac: false,
    has_heating: false,
    is_remote: false,
    is_off_grid: false,
    has_well_water: false,
    has_septic: false,
    has_solar: false,
    
    // Market Analysis
    market_type: 'tourist' as 'urban' | 'suburban' | 'rural' | 'remote' | 'tourist' | 'business',
    accessibility_score: '',
    uniqueness_score: '',
    
    // Owner Information
    owner_name: '',
    owner_email: '',
    owner_phone: '',
    owner_type: 'individual' as 'individual' | 'investor' | 'corporation' | 'unknown',
    
    // Opportunity Status
    status: 'prospecting' as 'prospecting' | 'researching' | 'contacted' | 'interested' | 'questionnaire_sent' | 'under_review' | 'approved' | 'lease_sent' | 'lease_signed' | 'active' | 'rejected' | 'lost',
    
    // Financial Analysis
    estimated_monthly_rent: '',
    estimated_annual_revenue: '',
    estimated_occupancy_rate: '',
    estimated_adr: '',
    estimated_operating_costs: '',
    estimated_net_profit: '',
    cap_rate: '',
    roi_percentage: '',
    
    // CRM Fields
    priority: 'medium' as 'low' | 'medium' | 'high' | 'urgent',
    source: '',
    next_action: '',
    next_action_date: '',
    notes: '',
    contact_frequency: '',
    internal_score: '',
    
    // Admin Fields
    admin_notes: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleArrayAdd = (fieldName: string, newItem: string, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (!newItem.trim()) return
    setter(prev => [...prev.filter(item => item.trim()), newItem])
  }

  const handleArrayRemove = (fieldName: string, index: number, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter(prev => prev.filter((_, i) => i !== index))
  }

  const handleArrayInput = (value: string, index: number, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter(prev => prev.map((item, i) => i === index ? value : item))
  }

  const calculateFinancials = () => {
    const monthlyRent = parseFloat(formData.estimated_monthly_rent) || 0
    const annualRevenue = parseFloat(formData.airdna_revenue_estimate) || (monthlyRent * 12)
    const occupancyRate = parseFloat(formData.airdna_occupancy_estimate) || 0.65
    const operatingCosts = parseFloat(formData.estimated_operating_costs) || (annualRevenue * 0.3)
    const netProfit = annualRevenue - operatingCosts
    const roi = monthlyRent > 0 ? ((netProfit / (monthlyRent * 12)) * 100) : 0

    setFormData(prev => ({
      ...prev,
      estimated_annual_revenue: annualRevenue.toString(),
      estimated_occupancy_rate: occupancyRate.toString(),
      estimated_net_profit: netProfit.toString(),
      roi_percentage: roi.toString()
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const opportunityData = {
        ...formData,
        bedrooms: formData.bedrooms ? parseInt(formData.bedrooms) : null,
        bathrooms: formData.bathrooms ? parseFloat(formData.bathrooms) : null,
        square_footage: formData.square_footage ? parseInt(formData.square_footage) : null,
        lot_size: formData.lot_size ? parseFloat(formData.lot_size) : null,
        year_built: formData.year_built ? parseInt(formData.year_built) : null,
        airdna_revenue_estimate: formData.airdna_revenue_estimate ? parseFloat(formData.airdna_revenue_estimate) : null,
        airdna_occupancy_estimate: formData.airdna_occupancy_estimate ? parseFloat(formData.airdna_occupancy_estimate) : null,
        airdna_adr_estimate: formData.airdna_adr_estimate ? parseFloat(formData.airdna_adr_estimate) : null,
        airdna_revpar: formData.airdna_revpar ? parseFloat(formData.airdna_revpar) : null,
        airdna_competition_score: formData.airdna_competition_score ? parseInt(formData.airdna_competition_score) : null,
        airdna_demand_score: formData.airdna_demand_score ? parseInt(formData.airdna_demand_score) : null,
        accessibility_score: formData.accessibility_score ? parseInt(formData.accessibility_score) : null,
        uniqueness_score: formData.uniqueness_score ? parseInt(formData.uniqueness_score) : null,
        estimated_monthly_rent: formData.estimated_monthly_rent ? parseFloat(formData.estimated_monthly_rent) : null,
        estimated_annual_revenue: formData.estimated_annual_revenue ? parseFloat(formData.estimated_annual_revenue) : null,
        estimated_occupancy_rate: formData.estimated_occupancy_rate ? parseFloat(formData.estimated_occupancy_rate) : null,
        estimated_adr: formData.estimated_adr ? parseFloat(formData.estimated_adr) : null,
        estimated_operating_costs: formData.estimated_operating_costs ? parseFloat(formData.estimated_operating_costs) : null,
        estimated_net_profit: formData.estimated_net_profit ? parseFloat(formData.estimated_net_profit) : null,
        cap_rate: formData.cap_rate ? parseFloat(formData.cap_rate) : null,
        roi_percentage: formData.roi_percentage ? parseFloat(formData.roi_percentage) : null,
        internal_score: formData.internal_score ? parseInt(formData.internal_score) : null,
        custom_assets: customAssets.filter(item => item.trim()),
        local_attractions: localAttractions.filter(item => item.trim()),
        tags: tags.filter(item => item.trim()),
        airdna_last_updated: new Date().toISOString()
      }

      const { data, error } = await supabase
        .from('property_opportunities')
        .insert([opportunityData])
        .select()

      if (error) throw error

      router.push('/admin/crm')
    } catch (error) {
      console.error('Error creating opportunity:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => router.back()}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Add Property Opportunity</h1>
                <p className="text-gray-600">Add a new property to your CRM pipeline</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Property Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Property Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="address">Property Address *</Label>
                <Input
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="123 Main St"
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Joshua Tree"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="CA"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="zip_code">ZIP Code</Label>
                  <Input
                    id="zip_code"
                    name="zip_code"
                    value={formData.zip_code}
                    onChange={handleInputChange}
                    placeholder="92252"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="property_type">Property Type</Label>
                  <select
                    id="property_type"
                    name="property_type"
                    value={formData.property_type}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  >
                    <option value="house">House</option>
                    <option value="condo">Condo</option>
                    <option value="adu">ADU</option>
                    <option value="duplex">Duplex</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="cabin">Cabin</option>
                    <option value="tiny_home">Tiny Home</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Input
                    id="bedrooms"
                    name="bedrooms"
                    type="number"
                    value={formData.bedrooms}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="bathrooms">Bathrooms</Label>
                  <Input
                    id="bathrooms"
                    name="bathrooms"
                    type="number"
                    step="0.5"
                    value={formData.bathrooms}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="square_footage">Square Footage</Label>
                  <Input
                    id="square_footage"
                    name="square_footage"
                    type="number"
                    value={formData.square_footage}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="year_built">Year Built</Label>
                  <Input
                    id="year_built"
                    name="year_built"
                    type="number"
                    value={formData.year_built}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lot_size">Lot Size (acres)</Label>
                  <Input
                    id="lot_size"
                    name="lot_size"
                    type="number"
                    step="0.1"
                    value={formData.lot_size}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AirDNA Data */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>AirDNA Market Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="airdna_id">AirDNA Property ID</Label>
                  <Input
                    id="airdna_id"
                    name="airdna_id"
                    value={formData.airdna_id}
                    onChange={handleInputChange}
                    placeholder="123456789"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="airdna_revenue_estimate">Est. Annual Revenue ($)</Label>
                  <Input
                    id="airdna_revenue_estimate"
                    name="airdna_revenue_estimate"
                    type="number"
                    value={formData.airdna_revenue_estimate}
                    onChange={handleInputChange}
                    placeholder="85000"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="airdna_occupancy_estimate">Est. Occupancy Rate</Label>
                  <Input
                    id="airdna_occupancy_estimate"
                    name="airdna_occupancy_estimate"
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    value={formData.airdna_occupancy_estimate}
                    onChange={handleInputChange}
                    placeholder="0.65"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="airdna_adr_estimate">Est. Average Daily Rate ($)</Label>
                  <Input
                    id="airdna_adr_estimate"
                    name="airdna_adr_estimate"
                    type="number"
                    value={formData.airdna_adr_estimate}
                    onChange={handleInputChange}
                    placeholder="185"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="airdna_demand_score">Demand Score (0-100)</Label>
                  <Input
                    id="airdna_demand_score"
                    name="airdna_demand_score"
                    type="number"
                    min="0"
                    max="100"
                    value={formData.airdna_demand_score}
                    onChange={handleInputChange}
                    placeholder="85"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="airdna_competition_score">Competition Score (0-100)</Label>
                  <Input
                    id="airdna_competition_score"
                    name="airdna_competition_score"
                    type="number"
                    min="0"
                    max="100"
                    value={formData.airdna_competition_score}
                    onChange={handleInputChange}
                    placeholder="72"
                    className="mt-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Property Assets & Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Home className="h-5 w-5" />
                <span>Property Assets & Features</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { key: 'has_hot_tub', label: 'Hot Tub' },
                  { key: 'has_pool', label: 'Pool' },
                  { key: 'has_fireplace', label: 'Fireplace' },
                  { key: 'has_pet_friendly', label: 'Pet Friendly' },
                  { key: 'has_parking', label: 'Parking' },
                  { key: 'has_garage', label: 'Garage' },
                  { key: 'has_wifi', label: 'WiFi' },
                  { key: 'has_kitchen', label: 'Kitchen' },
                  { key: 'has_laundry', label: 'Laundry' },
                  { key: 'has_ac', label: 'Air Conditioning' },
                  { key: 'has_heating', label: 'Heating' },
                  { key: 'is_remote', label: 'Remote Location' },
                  { key: 'is_off_grid', label: 'Off-Grid' },
                  { key: 'has_well_water', label: 'Well Water' },
                  { key: 'has_septic', label: 'Septic System' },
                  { key: 'has_solar', label: 'Solar Panels' }
                ].map((asset) => (
                  <div key={asset.key} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={asset.key}
                      name={asset.key}
                      checked={formData[asset.key as keyof typeof formData] as boolean}
                      onChange={handleInputChange}
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor={asset.key} className="text-sm">{asset.label}</Label>
                  </div>
                ))}
              </div>

              {/* Custom Assets */}
              <div className="mt-6">
                <Label>Custom Assets</Label>
                <div className="space-y-2 mt-2">
                  {customAssets.map((asset, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Input
                        value={asset}
                        onChange={(e) => handleArrayInput(e.target.value, index, setCustomAssets)}
                        placeholder="Add custom asset (e.g., Game Room, Theater Room)"
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleArrayRemove('custom_assets', index, setCustomAssets)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCustomAssets(prev => [...prev, ''])}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Custom Asset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Owner Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Owner Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="owner_name">Owner Name</Label>
                <Input
                  id="owner_name"
                  name="owner_name"
                  value={formData.owner_name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="owner_email">Owner Email</Label>
                  <Input
                    id="owner_email"
                    name="owner_email"
                    type="email"
                    value={formData.owner_email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="owner_phone">Owner Phone</Label>
                  <Input
                    id="owner_phone"
                    name="owner_phone"
                    type="tel"
                    value={formData.owner_phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="owner_type">Owner Type</Label>
                <select
                  id="owner_type"
                  name="owner_type"
                  value={formData.owner_type}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                >
                  <option value="individual">Individual</option>
                  <option value="investor">Investor</option>
                  <option value="corporation">Corporation</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* CRM & Pipeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>CRM & Pipeline</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="status">Status</Label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  >
                    <option value="prospecting">Prospecting</option>
                    <option value="researching">Researching</option>
                    <option value="contacted">Contacted</option>
                    <option value="interested">Interested</option>
                    <option value="questionnaire_sent">Questionnaire Sent</option>
                    <option value="under_review">Under Review</option>
                    <option value="approved">Approved</option>
                    <option value="lease_sent">Lease Sent</option>
                    <option value="lease_signed">Lease Signed</option>
                    <option value="active">Active</option>
                    <option value="rejected">Rejected</option>
                    <option value="lost">Lost</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="priority">Priority</Label>
                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="source">Source</Label>
                  <Input
                    id="source"
                    name="source"
                    value={formData.source}
                    onChange={handleInputChange}
                    placeholder="AirDNA, MLS, Referral, etc."
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="next_action">Next Action</Label>
                  <Input
                    id="next_action"
                    name="next_action"
                    value={formData.next_action}
                    onChange={handleInputChange}
                    placeholder="Call owner, Send questionnaire, etc."
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="next_action_date">Next Action Date</Label>
                  <Input
                    id="next_action_date"
                    name="next_action_date"
                    type="date"
                    value={formData.next_action_date}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contact_frequency">Contact Frequency</Label>
                  <select
                    id="contact_frequency"
                    name="contact_frequency"
                    value={formData.contact_frequency}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  >
                    <option value="">Select frequency</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="bi-weekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="as_needed">As Needed</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="internal_score">Internal Score (1-10)</Label>
                  <Input
                    id="internal_score"
                    name="internal_score"
                    type="number"
                    min="1"
                    max="10"
                    value={formData.internal_score}
                    onChange={handleInputChange}
                    placeholder="8"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="notes">Notes</Label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  placeholder="Add any notes about this opportunity..."
                />
              </div>

              <div>
                <Label htmlFor="admin_notes">Admin Notes</Label>
                <textarea
                  id="admin_notes"
                  name="admin_notes"
                  value={formData.admin_notes}
                  onChange={handleInputChange}
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  placeholder="Internal notes for team members..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Financial Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5" />
                <span>Financial Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="estimated_monthly_rent">Estimated Monthly Rent ($)</Label>
                  <Input
                    id="estimated_monthly_rent"
                    name="estimated_monthly_rent"
                    type="number"
                    value={formData.estimated_monthly_rent}
                    onChange={handleInputChange}
                    placeholder="3500"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="estimated_operating_costs">Est. Operating Costs ($/year)</Label>
                  <Input
                    id="estimated_operating_costs"
                    name="estimated_operating_costs"
                    type="number"
                    value={formData.estimated_operating_costs}
                    onChange={handleInputChange}
                    placeholder="25000"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Calculated Values</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-blue-700">Est. Annual Revenue:</span>
                    <span className="ml-2 font-semibold">
                      ${formData.estimated_annual_revenue ? parseFloat(formData.estimated_annual_revenue).toLocaleString() : '0'}
                    </span>
                  </div>
                  <div>
                    <span className="text-blue-700">Est. Net Profit:</span>
                    <span className="ml-2 font-semibold">
                      ${formData.estimated_net_profit ? parseFloat(formData.estimated_net_profit).toLocaleString() : '0'}
                    </span>
                  </div>
                  <div>
                    <span className="text-blue-700">ROI:</span>
                    <span className="ml-2 font-semibold">
                      {formData.roi_percentage ? parseFloat(formData.roi_percentage).toFixed(1) : '0'}%
                    </span>
                  </div>
                  <div>
                    <span className="text-blue-700">Occupancy Rate:</span>
                    <span className="ml-2 font-semibold">
                      {formData.estimated_occupancy_rate ? (parseFloat(formData.estimated_occupancy_rate) * 100).toFixed(0) : '0'}%
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              <Save className="h-4 w-4 mr-2" />
              {isSubmitting ? 'Creating...' : 'Create Opportunity'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
