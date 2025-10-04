import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  FileText, 
  Download, 
  Eye,
  CheckCircle,
  AlertTriangle,
  Calendar,
  DollarSign,
  Shield,
  Wrench,
  Home
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Lease Agreement | Owner Portal | Camp Haven Rentals",
  description: "Property lease agreement template and terms for guaranteed rent program.",
}

const leaseTerms = [
  {
    section: "Lease Term & Rent",
    items: [
      "Initial lease term: 12-36 months (owner's choice)",
      "Guaranteed monthly rent: $[AMOUNT] (fixed regardless of occupancy)",
      "Rent payment: 1st of each month via ACH or check",
      "Lease renewal: Automatic unless 60 days notice given"
    ]
  },
  {
    section: "Wear & Tear Coverage",
    items: [
      "All guest-related wear and tear covered by tenant",
      "Appliances under 5 years old: Full maintenance and replacement",
      "Hot tubs, HVAC, plumbing: Full coverage for guest usage",
      "Flooring, paint, furniture: Guest wear-and-tear covered",
      "Emergency repairs: 24/7 response covered by tenant"
    ]
  },
  {
    section: "Landlord Responsibilities",
    items: [
      "General property maintenance (gutters, landscaping, pest control)",
      "Seasonal maintenance (snow removal, tree trimming)",
      "Structural repairs not related to guest usage",
      "Property taxes, insurance, and HOA fees",
      "Utilities for common areas and systems"
    ]
  },
  {
    section: "Property Access & Management",
    items: [
      "Tenant has exclusive right to operate as short-term rental",
      "Owner access: 24 hours notice required for non-emergency visits",
      "Property inspections: Quarterly with 48 hours notice",
      "Guest screening and management handled by tenant",
      "Marketing and booking management by tenant"
    ]
  },
  {
    section: "Insurance & Liability",
    items: [
      "Owner maintains landlord insurance policy",
      "Tenant provides STR liability insurance coverage",
      "All guest-related incidents covered by tenant insurance",
      "Property damage from guests covered by tenant",
      "Clear separation of coverage responsibilities"
    ]
  },
  {
    section: "Termination & Break Clause",
    items: [
      "Owner termination: 60-90 days written notice",
      "Tenant termination: 60 days written notice",
      "Property sale: Owner can terminate with 90 days notice",
      "Force majeure: Natural disasters, regulatory changes",
      "Default remedies: Standard lease default procedures"
    ]
  }
]

const coverageDetails = {
  covered: [
    "Refrigerators, dishwashers, washing machines (under 5 years)",
    "Hot tubs, water heaters, pool equipment",
    "HVAC systems, central air, heat pumps",
    "Guest wear on flooring, paint, furniture",
    "Plumbing repairs from guest usage",
    "Electrical issues from guest usage",
    "Emergency repairs 24/7"
  ],
  notCovered: [
    "Appliances over 5 years old (wear-and-tear only)",
    "Gutter cleaning and leaf removal",
    "Landscaping and plant maintenance",
    "Pest control and prevention",
    "Snow removal and winter maintenance",
    "Structural repairs not guest-related",
    "Pre-existing conditions documented at lease start"
  ]
}

export default function ContractPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Lease Agreement</h1>
              <p className="text-gray-600">Property lease terms and conditions</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>Preview</span>
              </Button>
              <Button className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Contract Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contract Header */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Property Lease Agreement</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Property Details</h3>
                    <p className="text-sm text-gray-600">[Property Address]</p>
                    <p className="text-sm text-gray-600">[Property Type]</p>
                    <p className="text-sm text-gray-600">[Bedrooms/Bathrooms]</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Lease Information</h3>
                    <p className="text-sm text-gray-600">Lease Start: [Date]</p>
                    <p className="text-sm text-gray-600">Lease Term: [12-36 months]</p>
                    <p className="text-sm text-gray-600">Monthly Rent: $[Amount]</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lease Terms */}
            {leaseTerms.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{section.section}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}

            {/* Coverage Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Coverage Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-green-800 mb-3">Covered by Tenant</h3>
                    <ul className="space-y-2">
                      {coverageDetails.covered.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-3">Landlord Responsibility</h3>
                    <ul className="space-y-2">
                      {coverageDetails.notCovered.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <AlertTriangle className="h-4 w-4 text-amber-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Terms */}
            <Card>
              <CardHeader>
                <CardTitle>Legal Terms & Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm text-gray-600">
                  <p>
                    This lease agreement is governed by the laws of [State] and contains the complete 
                    understanding between the parties. Any modifications must be in writing and signed by both parties.
                  </p>
                  <p>
                    The tenant (Camp Haven Rentals) assumes all liability for guest-related incidents, 
                    property damage from guest usage, and operation of the property as a short-term rental.
                  </p>
                  <p>
                    The landlord retains ownership and responsibility for property taxes, insurance, 
                    structural maintenance, and general property upkeep not related to guest usage.
                  </p>
                  <p>
                    Both parties agree to maintain appropriate insurance coverage and provide certificates 
                    of insurance upon request.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>View Full Contract</span>
                </Button>
                <Button variant="outline" className="w-full flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </Button>
                <Button variant="outline" className="w-full flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>Preview Changes</span>
                </Button>
              </CardContent>
            </Card>

            {/* Contract Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contract Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Status</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Start Date</span>
                    <span className="text-sm font-medium">[Date]</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">End Date</span>
                    <span className="text-sm font-medium">[Date]</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Monthly Rent</span>
                    <span className="text-sm font-medium">$[Amount]</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Dates */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Key Dates</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Next Rent Payment</span>
                    <span className="text-sm font-medium">[Date]</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Property Inspection</span>
                    <span className="text-sm font-medium">[Date]</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Lease Renewal</span>
                    <span className="text-sm font-medium">[Date]</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Property Manager</span>
                    <p className="text-gray-600">[Manager Name]</p>
                    <p className="text-gray-600">[Phone]</p>
                    <p className="text-gray-600">[Email]</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Legal Questions</span>
                    <p className="text-gray-600">legal@camphavenrentals.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

