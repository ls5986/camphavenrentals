"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"
import { 
  CheckCircle, 
  Home, 
  Upload, 
  ArrowRight, 
  ArrowLeft,
  Plus,
  Trash2
} from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

export const metadata = {
  title: "Property Questionnaire | Camp Haven Rentals",
  description: "Complete property details for Camp Haven Rentals evaluation.",
}

const steps = [
  { id: 1, title: "Property Details", description: "Basic property information" },
  { id: 2, title: "Furnishing Status", description: "Current furnishings and items" },
  { id: 3, title: "Maintenance & Landscaping", description: "Existing services and requirements" },
  { id: 4, title: "Utilities & Services", description: "Utility providers and costs" },
  { id: 5, title: "Appliances & Systems", description: "Major appliances and warranties" },
  { id: 6, title: "Insurance & Liability", description: "Current insurance coverage" },
  { id: 7, title: "Availability & Preferences", description: "Lease terms and preferences" },
  { id: 8, title: "Financial Details", description: "Rent expectations and payment methods" },
  { id: 9, title: "Document Uploads", description: "Upload required documents" },
  { id: 10, title: "Final Review", description: "Review and submit questionnaire" }
]

export default function OwnerQuestionnairePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const inquiryId = searchParams.get('inquiry_id')

  const [formData, setFormData] = useState({
    // Property Details
    property_address: "",
    property_type: "house" as "house" | "condo" | "adu" | "duplex",
    square_footage: "",
    year_built: "",
    parking_availability: "",
    hoa: false,
    hoa_documents: [] as string[],
    
    // Furnishing Status
    furnished: false,
    included_items: [] as string[],
    personal_items_on_site: false,
    linens_included: false,
    kitchenware_included: false,
    current_photos: [] as string[],
    
    // Maintenance & Landscaping
    existing_landscaping: false,
    landscaping_company: "",
    landscaping_frequency: "",
    landscaping_contact: "",
    landscaping_payer: "owner" as "owner" | "camp_haven" | "split",
    special_requirements: "",
    
    // Utilities & Services
    utilities_included: false,
    electricity_provider: "",
    water_provider: "",
    gas_provider: "",
    trash_provider: "",
    internet_provider: "",
    monthly_electricity_cost: "",
    monthly_water_cost: "",
    monthly_gas_cost: "",
    monthly_trash_cost: "",
    monthly_internet_cost: "",
    solar_backup: false,
    smart_home_devices: [] as string[],
    
    // Appliances & Systems
    appliances: [] as Array<{
      name: string
      age: string
      condition: "excellent" | "good" | "fair" | "poor"
      under_warranty: boolean
      warranty_documents: string[]
    }>,
    last_hvac_service: "",
    
    // Insurance & Liability
    homeowner_insurance: false,
    maintain_insurance: false,
    additional_insured_required: false,
    insurance_documents: [] as string[],
    
    // Availability & Preferences
    desired_start_date: "",
    minimum_lease_term: 12,
    blackout_periods: [] as string[],
    max_occupancy: "",
    pet_policy: "",
    
    // Financial
    expected_monthly_rent: "",
    deposit_required: "",
    payment_method_preference: "",
    automatic_payments_required: false,
    
    // Document Uploads
    lease_title_documents: [] as string[],
    insurance_certificates: [] as string[],
    hoa_rules: [] as string[],
    appliance_receipts: [] as string[],
    floor_plan: [] as string[],
    
    // Final Acknowledgment
    information_accurate: false,
    signed_at: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleArrayAdd = (fieldName: string, newItem: string) => {
    if (!newItem.trim()) return
    setFormData(prev => ({
      ...prev,
      [fieldName]: [...(prev[fieldName] as string[]), newItem]
    }))
  }

  const handleArrayRemove = (fieldName: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: (prev[fieldName] as string[]).filter((_, i) => i !== index)
    }))
  }

  const handleApplianceAdd = () => {
    setFormData(prev => ({
      ...prev,
      appliances: [...prev.appliances, {
        name: "",
        age: "",
        condition: "good",
        under_warranty: false,
        warranty_documents: []
      }]
    }))
  }

  const handleApplianceChange = (index: number, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      appliances: prev.appliances.map((appliance, i) => 
        i === index ? { ...appliance, [field]: value } : appliance
      )
    }))
  }

  const handleApplianceRemove = (index: number) => {
    setFormData(prev => ({
      ...prev,
      appliances: prev.appliances.filter((_, i) => i !== index)
    }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const { data, error } = await supabase
        .from('property_questionnaires')
        .insert([{
          ...formData,
          owner_inquiry_id: inquiryId,
          owner_id: 'temp', // You'll need to get this from auth
          status: 'submitted',
          signed_at: new Date().toISOString()
        }])
        .select()

      if (error) throw error

      setIsSubmitted(true)
    } catch (err) {
      console.error('Error submitting questionnaire:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <Card className="w-full max-w-md">
          <CardContent className="pt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Questionnaire Submitted!
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you for completing the detailed questionnaire. Our team will review your property details and contact you within 48 hours.
              </p>
              <Button 
                onClick={() => router.push('/')}
                className="w-full"
              >
                Return to Homepage
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1: // Property Details
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="property_address">Property Address *</Label>
              <Input
                id="property_address"
                name="property_address"
                required
                value={formData.property_address}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="property_type">Property Type *</Label>
              <select
                id="property_type"
                name="property_type"
                value={formData.property_type}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              >
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="adu">ADU (Accessory Dwelling Unit)</option>
                <option value="duplex">Duplex</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="square_footage">Square Footage *</Label>
                <Input
                  id="square_footage"
                  name="square_footage"
                  type="number"
                  required
                  value={formData.square_footage}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="year_built">Year Built *</Label>
                <Input
                  id="year_built"
                  name="year_built"
                  type="number"
                  required
                  value={formData.year_built}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="parking_availability">Parking Availability *</Label>
              <Input
                id="parking_availability"
                name="parking_availability"
                required
                value={formData.parking_availability}
                onChange={handleInputChange}
                placeholder="e.g., 2-car garage, street parking, driveway"
                className="mt-1"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="hoa"
                name="hoa"
                checked={formData.hoa}
                onChange={handleInputChange}
                className="rounded border-gray-300"
              />
              <Label htmlFor="hoa">Property is part of an HOA</Label>
            </div>
          </div>
        )

      case 2: // Furnishing Status
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="furnished"
                name="furnished"
                checked={formData.furnished}
                onChange={handleInputChange}
                className="rounded border-gray-300"
              />
              <Label htmlFor="furnished">Property is furnished</Label>
            </div>

            {formData.furnished && (
              <div>
                <Label>Included Items (add one per line)</Label>
                <div className="space-y-2">
                  {formData.included_items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="flex-1 p-2 border rounded">{item}</span>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleArrayRemove('included_items', index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add item (e.g., Queen bed, Sofa, Dining table)"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          handleArrayAdd('included_items', e.currentTarget.value)
                          e.currentTarget.value = ''
                        }
                      }}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        const input = document.querySelector('input[placeholder*="Add item"]') as HTMLInputElement
                        if (input?.value) {
                          handleArrayAdd('included_items', input.value)
                          input.value = ''
                        }
                      }}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="personal_items_on_site"
                  name="personal_items_on_site"
                  checked={formData.personal_items_on_site}
                  onChange={handleInputChange}
                  className="rounded border-gray-300"
                />
                <Label htmlFor="personal_items_on_site">Personal items will remain on-site</Label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="linens_included"
                  name="linens_included"
                  checked={formData.linens_included}
                  onChange={handleInputChange}
                  className="rounded border-gray-300"
                />
                <Label htmlFor="linens_included">Linens and towels included</Label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="kitchenware_included"
                  name="kitchenware_included"
                  checked={formData.kitchenware_included}
                  onChange={handleInputChange}
                  className="rounded border-gray-300"
                />
                <Label htmlFor="kitchenware_included">Kitchenware and cookware included</Label>
              </div>
            </div>
          </div>
        )

      case 3: // Maintenance & Landscaping
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="existing_landscaping"
                name="existing_landscaping"
                checked={formData.existing_landscaping}
                onChange={handleInputChange}
                className="rounded border-gray-300"
              />
              <Label htmlFor="existing_landscaping">Have existing landscaping or pool service</Label>
            </div>

            {formData.existing_landscaping && (
              <div className="space-y-4 pl-6 border-l-2 border-gray-200">
                <div>
                  <Label htmlFor="landscaping_company">Service Company Name</Label>
                  <Input
                    id="landscaping_company"
                    name="landscaping_company"
                    value={formData.landscaping_company}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="landscaping_frequency">Service Frequency</Label>
                  <select
                    id="landscaping_frequency"
                    name="landscaping_frequency"
                    value={formData.landscaping_frequency}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  >
                    <option value="">Select frequency</option>
                    <option value="weekly">Weekly</option>
                    <option value="bi-weekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="seasonal">Seasonal</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="landscaping_contact">Contact Information</Label>
                  <Input
                    id="landscaping_contact"
                    name="landscaping_contact"
                    value={formData.landscaping_contact}
                    onChange={handleInputChange}
                    placeholder="Phone number or email"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="landscaping_payer">Who pays for the service?</Label>
                  <select
                    id="landscaping_payer"
                    name="landscaping_payer"
                    value={formData.landscaping_payer}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  >
                    <option value="owner">Owner pays</option>
                    <option value="camp_haven">Camp Haven pays</option>
                    <option value="split">Split cost</option>
                  </select>
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="special_requirements">Special Yard or Irrigation Requirements</Label>
              <textarea
                id="special_requirements"
                name="special_requirements"
                value={formData.special_requirements}
                onChange={handleInputChange}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                placeholder="Any special care instructions, irrigation schedules, or maintenance requirements..."
              />
            </div>
          </div>
        )

      case 4: // Utilities & Services
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="utilities_included"
                name="utilities_included"
                checked={formData.utilities_included}
                onChange={handleInputChange}
                className="rounded border-gray-300"
              />
              <Label htmlFor="utilities_included">Utilities included in rent</Label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="electricity_provider">Electricity Provider</Label>
                <Input
                  id="electricity_provider"
                  name="electricity_provider"
                  value={formData.electricity_provider}
                  onChange={handleInputChange}
                  placeholder="SCE, SDGE, or other"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="monthly_electricity_cost">Monthly Electricity Cost ($)</Label>
                <Input
                  id="monthly_electricity_cost"
                  name="monthly_electricity_cost"
                  type="number"
                  value={formData.monthly_electricity_cost}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="water_provider">Water Provider</Label>
                <Input
                  id="water_provider"
                  name="water_provider"
                  value={formData.water_provider}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="monthly_water_cost">Monthly Water Cost ($)</Label>
                <Input
                  id="monthly_water_cost"
                  name="monthly_water_cost"
                  type="number"
                  value={formData.monthly_water_cost}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="internet_provider">Internet/Wi-Fi Provider</Label>
                <Input
                  id="internet_provider"
                  name="internet_provider"
                  value={formData.internet_provider}
                  onChange={handleInputChange}
                  placeholder="Spectrum, AT&T, etc."
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="monthly_internet_cost">Monthly Internet Cost ($)</Label>
                <Input
                  id="monthly_internet_cost"
                  name="monthly_internet_cost"
                  type="number"
                  value={formData.monthly_internet_cost}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="solar_backup"
                  name="solar_backup"
                  checked={formData.solar_backup}
                  onChange={handleInputChange}
                  className="rounded border-gray-300"
                />
                <Label htmlFor="solar_backup">Property has solar panels or battery backup</Label>
              </div>

              <div>
                <Label>Smart Home Devices (add one per line)</Label>
                <div className="space-y-2">
                  {formData.smart_home_devices.map((device, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="flex-1 p-2 border rounded">{device}</span>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleArrayRemove('smart_home_devices', index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add device (e.g., Nest thermostat, Ring doorbell)"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          handleArrayAdd('smart_home_devices', e.currentTarget.value)
                          e.currentTarget.value = ''
                        }
                      }}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        const input = document.querySelector('input[placeholder*="Add device"]') as HTMLInputElement
                        if (input?.value) {
                          handleArrayAdd('smart_home_devices', input.value)
                          input.value = ''
                        }
                      }}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 5: // Appliances & Systems
        return (
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <Label>Major Appliances</Label>
                <Button type="button" variant="outline" onClick={handleApplianceAdd}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Appliance
                </Button>
              </div>

              {formData.appliances.map((appliance, index) => (
                <Card key={index} className="mb-4">
                  <CardContent className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <Label>Appliance Name</Label>
                        <Input
                          value={appliance.name}
                          onChange={(e) => handleApplianceChange(index, 'name', e.target.value)}
                          placeholder="e.g., Refrigerator"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label>Age (years)</Label>
                        <Input
                          type="number"
                          value={appliance.age}
                          onChange={(e) => handleApplianceChange(index, 'age', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label>Condition</Label>
                        <select
                          value={appliance.condition}
                          onChange={(e) => handleApplianceChange(index, 'condition', e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                        >
                          <option value="excellent">Excellent</option>
                          <option value="good">Good</option>
                          <option value="fair">Fair</option>
                          <option value="poor">Poor</option>
                        </select>
                      </div>
                      <div className="flex items-end">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={appliance.under_warranty}
                            onChange={(e) => handleApplianceChange(index, 'under_warranty', e.target.checked)}
                            className="rounded border-gray-300"
                          />
                          <Label>Under Warranty</Label>
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => handleApplianceRemove(index)}
                          className="ml-2"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <Label htmlFor="last_hvac_service">Last HVAC Service Date</Label>
              <Input
                id="last_hvac_service"
                name="last_hvac_service"
                type="date"
                value={formData.last_hvac_service}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
          </div>
        )

      case 6: // Insurance & Liability
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="homeowner_insurance"
                  name="homeowner_insurance"
                  checked={formData.homeowner_insurance}
                  onChange={handleInputChange}
                  className="rounded border-gray-300"
                />
                <Label htmlFor="homeowner_insurance">Currently carry homeowner&apos;s insurance</Label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="maintain_insurance"
                  name="maintain_insurance"
                  checked={formData.maintain_insurance}
                  onChange={handleInputChange}
                  className="rounded border-gray-300"
                />
                <Label htmlFor="maintain_insurance">Will maintain insurance during lease</Label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="additional_insured_required"
                  name="additional_insured_required"
                  checked={formData.additional_insured_required}
                  onChange={handleInputChange}
                  className="rounded border-gray-300"
                />
                <Label htmlFor="additional_insured_required">Require Camp Haven as additional insured</Label>
              </div>
            </div>
          </div>
        )

      case 7: // Availability & Preferences
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="desired_start_date">Desired Lease Start Date</Label>
                <Input
                  id="desired_start_date"
                  name="desired_start_date"
                  type="date"
                  value={formData.desired_start_date}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="minimum_lease_term">Minimum Lease Term (months)</Label>
                <select
                  id="minimum_lease_term"
                  name="minimum_lease_term"
                  value={formData.minimum_lease_term}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                >
                  <option value={12}>12 months</option>
                  <option value={18}>18 months</option>
                  <option value={24}>24 months</option>
                  <option value={36}>36 months</option>
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="max_occupancy">Maximum Occupancy Allowed</Label>
              <Input
                id="max_occupancy"
                name="max_occupancy"
                type="number"
                value={formData.max_occupancy}
                onChange={handleInputChange}
                placeholder="e.g., 6 guests"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="pet_policy">Pet Policy Preferences</Label>
              <select
                id="pet_policy"
                name="pet_policy"
                value={formData.pet_policy}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              >
                <option value="">Select pet policy</option>
                <option value="no_pets">No pets allowed</option>
                <option value="small_pets">Small pets only</option>
                <option value="pets_allowed">Pets allowed with deposit</option>
                <option value="case_by_case">Case by case basis</option>
              </select>
            </div>

            <div>
              <Label>Blackout Periods (add one per line)</Label>
              <div className="space-y-2">
                {formData.blackout_periods.map((period, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="flex-1 p-2 border rounded">{period}</span>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => handleArrayRemove('blackout_periods', index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <div className="flex space-x-2">
                  <Input
                    placeholder="Add blackout period (e.g., Dec 20-30 for family visit)"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        handleArrayAdd('blackout_periods', e.currentTarget.value)
                        e.currentTarget.value = ''
                      }
                    }}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      const input = document.querySelector('input[placeholder*="Add blackout period"]') as HTMLInputElement
                      if (input?.value) {
                        handleArrayAdd('blackout_periods', input.value)
                        input.value = ''
                      }
                    }}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )

      case 8: // Financial Details
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expected_monthly_rent">Expected Monthly Rent ($) *</Label>
                <Input
                  id="expected_monthly_rent"
                  name="expected_monthly_rent"
                  type="number"
                  required
                  value={formData.expected_monthly_rent}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="deposit_required">Security Deposit Required ($)</Label>
                <Input
                  id="deposit_required"
                  name="deposit_required"
                  type="number"
                  value={formData.deposit_required}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="payment_method_preference">Preferred Payment Method</Label>
              <select
                id="payment_method_preference"
                name="payment_method_preference"
                value={formData.payment_method_preference}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              >
                <option value="">Select payment method</option>
                <option value="ach">ACH/Bank Transfer</option>
                <option value="check">Check</option>
                <option value="wire">Wire Transfer</option>
                <option value="venmo">Venmo</option>
                <option value="zelle">Zelle</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="automatic_payments_required"
                name="automatic_payments_required"
                checked={formData.automatic_payments_required}
                onChange={handleInputChange}
                className="rounded border-gray-300"
              />
              <Label htmlFor="automatic_payments_required">Require automatic payments</Label>
            </div>
          </div>
        )

      case 9: // Document Uploads
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Document Uploads</h3>
              <p className="text-gray-600 mb-6">
                Upload any relevant documents. You can also provide these later if needed.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label>Lease or Title Documents</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX (max 10MB)</p>
                </div>
              </div>

              <div>
                <Label>Insurance Certificates</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PDF, JPG, PNG (max 10MB)</p>
                </div>
              </div>

              <div>
                <Label>HOA Rules/Restrictions</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX (max 10MB)</p>
                </div>
              </div>

              <div>
                <Label>Appliance Receipts/Warranties</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PDF, JPG, PNG (max 10MB)</p>
                </div>
              </div>

              <div>
                <Label>Floor Plan or Site Plan</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PDF, JPG, PNG (max 10MB)</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 10: // Final Review
        return (
          <div className="space-y-6">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Final Review</h3>
              <p className="text-gray-600">
                Please review your information and acknowledge that it is accurate.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Important Notice</h4>
              <p className="text-sm text-blue-800 mb-4">
                Camp Haven will perform a pre-lease inspection to document the property condition before assuming 
                liability for wear-and-tear or guest-related damage. All information provided will be verified 
                during this inspection process.
              </p>
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="information_accurate"
                  name="information_accurate"
                  checked={formData.information_accurate}
                  onChange={handleInputChange}
                  className="rounded border-gray-300 mt-1"
                  required
                />
                <Label htmlFor="information_accurate" className="text-sm">
                  I certify that all information provided is accurate and understand that Camp Haven will perform 
                  a pre-lease inspection to document condition before assuming liability for wear-and-tear or 
                  guest-related damage.
                </Label>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Next Steps</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Our team will review your questionnaire within 48 hours</li>
                <li>• We&apos;ll contact you to schedule a property inspection</li>
                <li>• After inspection, we&apos;ll draft your lease agreement</li>
                <li>• Once signed, your property will be activated in our system</li>
              </ul>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Property Questionnaire</h1>
              <p className="text-gray-600">Step {currentStep} of {steps.length}</p>
            </div>
            <Button
              variant="outline"
              onClick={() => router.push('/')}
            >
              Save & Exit
            </Button>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep > step.id 
                    ? 'bg-green-600 text-white' 
                    : currentStep === step.id 
                    ? 'bg-amber-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    step.id
                  )}
                </div>
                <div className="ml-2 hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">{step.title}</p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-8 h-0.5 bg-gray-200 mx-4 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{steps[currentStep - 1].title}</CardTitle>
              <p className="text-gray-600">{steps[currentStep - 1].description}</p>
            </CardHeader>
            <CardContent>
              {renderStep()}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            {currentStep === steps.length ? (
              <Button
                onClick={handleSubmit}
                disabled={!formData.information_accurate || isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Questionnaire'}
              </Button>
            ) : (
              <Button onClick={nextStep}>
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
