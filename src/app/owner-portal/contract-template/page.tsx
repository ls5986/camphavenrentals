import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  FileText, 
  Download, 
  Printer,
  CheckCircle,
  AlertTriangle
} from "lucide-react"

export const metadata = {
  title: "Lease Agreement Template | Camp Haven Rentals",
  description: "Standard lease agreement template for property owners.",
}

export default function ContractTemplatePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Property Lease Agreement</h1>
              <p className="text-gray-600 mt-2">Standard lease agreement template for guaranteed rent program</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" className="flex items-center space-x-2">
                <Printer className="h-4 w-4" />
                <span>Print</span>
              </Button>
              <Button className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contract Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="bg-white">
          <CardContent className="p-8">
            {/* Contract Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">PROPERTY LEASE AGREEMENT</h2>
              <p className="text-gray-600">Guaranteed Rent Program</p>
            </div>

            {/* Parties */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Parties</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900">LANDLORD</h4>
                  <p className="text-sm text-gray-600">[Owner Name]</p>
                  <p className="text-sm text-gray-600">[Address]</p>
                  <p className="text-sm text-gray-600">[Phone]</p>
                  <p className="text-sm text-gray-600">[Email]</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">TENANT</h4>
                  <p className="text-sm text-gray-600">Camp Haven Rentals LLC</p>
                  <p className="text-sm text-gray-600">[Company Address]</p>
                  <p className="text-sm text-gray-600">[Phone]</p>
                  <p className="text-sm text-gray-600">[Email]</p>
                </div>
              </div>
            </div>

            {/* Property Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Description</h3>
              <p className="text-gray-700 mb-2">
                The property located at <strong>[Property Address]</strong>, including all buildings, 
                improvements, fixtures, and appliances located thereon (the &ldquo;Property&rdquo;).
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="text-center p-3 bg-gray-50 rounded">
                  <div className="font-semibold text-gray-900">[X]</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded">
                  <div className="font-semibold text-gray-900">[X]</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded">
                  <div className="font-semibold text-gray-900">[X]</div>
                  <div className="text-sm text-gray-600">Square Feet</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded">
                  <div className="font-semibold text-gray-900">[X]</div>
                  <div className="text-sm text-gray-600">Lot Size</div>
                </div>
              </div>
            </div>

            {/* Lease Terms */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Lease Terms</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium text-gray-900">Lease Term</span>
                  <span className="text-gray-700">[12-36] months beginning [Start Date]</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium text-gray-900">Monthly Rent</span>
                  <span className="text-gray-700">$[Amount] (guaranteed regardless of occupancy)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium text-gray-900">Rent Payment Due</span>
                  <span className="text-gray-700">1st day of each month</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium text-gray-900">Security Deposit</span>
                  <span className="text-gray-700">$[Amount] (if applicable)</span>
                </div>
              </div>
            </div>

            {/* Tenant Responsibilities */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tenant Responsibilities</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Wear and Tear Coverage</h4>
                    <p className="text-sm text-gray-600">
                      Tenant assumes all liability for wear and tear from guest usage, including but not limited to 
                      appliances, furniture, flooring, paint, and fixtures.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Appliance Maintenance</h4>
                    <p className="text-sm text-gray-600">
                      All appliances and systems under 5 years old at lease start are fully covered for maintenance, 
                      repairs, and replacements due to guest usage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Guest Management</h4>
                    <p className="text-sm text-gray-600">
                      Tenant is responsible for all guest screening, communication, check-in/out procedures, 
                      and incident management.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Insurance Coverage</h4>
                    <p className="text-sm text-gray-600">
                      Tenant maintains comprehensive STR liability insurance covering all guest-related incidents 
                      and property damage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Emergency Response</h4>
                    <p className="text-sm text-gray-600">
                      Tenant provides 24/7 emergency response for all guest-related issues and property emergencies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Landlord Responsibilities */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Landlord Responsibilities</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Property Maintenance</h4>
                    <p className="text-sm text-gray-600">
                      Landlord remains responsible for general property maintenance including landscaping, 
                      gutter cleaning, pest control, and structural repairs not related to guest usage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Property Expenses</h4>
                    <p className="text-sm text-gray-600">
                      Property taxes, insurance, HOA fees, and utilities for common areas remain landlord&apos;s responsibility.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Seasonal Maintenance</h4>
                    <p className="text-sm text-gray-600">
                      Snow removal, seasonal preparations, and weather-related maintenance remain landlord&apos;s responsibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Termination</h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Owner Termination Rights</h4>
                  <p className="text-sm text-gray-600">
                    Owner may terminate this lease with 60-90 days written notice for property sale, 
                    personal use, or other legitimate reasons.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Tenant Termination Rights</h4>
                  <p className="text-sm text-gray-600">
                    Tenant may terminate with 60 days written notice. Early termination fees may apply 
                    if property requires significant preparation for re-leasing.
                  </p>
                </div>
              </div>
            </div>

            {/* Signatures */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Signatures</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="border-b-2 border-gray-300 pb-2">
                    <p className="text-sm text-gray-600">Landlord Signature</p>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Date</span>
                    <span className="text-sm text-gray-600">________________</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-b-2 border-gray-300 pb-2">
                    <p className="text-sm text-gray-600">Tenant Signature</p>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Date</span>
                    <span className="text-sm text-gray-600">________________</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Notice */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-800">
                <strong>Legal Notice:</strong> This is a template document. All terms should be reviewed by legal counsel 
                and customized for specific properties and jurisdictions. Camp Haven Rentals recommends consulting with 
                an attorney before executing any lease agreement.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
