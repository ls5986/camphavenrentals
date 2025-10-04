import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Wrench, 
  Download, 
  Printer,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Calendar
} from "lucide-react"

export const metadata = {
  title: "Maintenance Service Agreement | Camp Haven Rentals",
  description: "Property maintenance service coordination agreement for landlords.",
}

export default function MaintenanceAgreementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Maintenance Service Agreement</h1>
              <p className="text-gray-600 mt-2">Property maintenance coordination services for landlords</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-2">MAINTENANCE SERVICE AGREEMENT</h2>
              <p className="text-gray-600">Property Maintenance Coordination Services</p>
            </div>

            {/* Parties */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Parties</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900">PROPERTY OWNER</h4>
                  <p className="text-sm text-gray-600">[Owner Name]</p>
                  <p className="text-sm text-gray-600">[Address]</p>
                  <p className="text-sm text-gray-600">[Phone]</p>
                  <p className="text-sm text-gray-600">[Email]</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">SERVICE COORDINATOR</h4>
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
              <p className="text-gray-700">
                The property located at <strong>[Property Address]</strong>, including all buildings, 
                improvements, and grounds (the &ldquo;Property&rdquo;).
              </p>
            </div>

            {/* Service Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Services Provided</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Vendor Coordination</h4>
                    <p className="text-sm text-gray-600">
                      Arrange and coordinate qualified contractors for property maintenance services including 
                      landscaping, gutter cleaning, pest control, snow removal, and seasonal maintenance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Quality Assurance</h4>
                    <p className="text-sm text-gray-600">
                      Vet contractors for licensing, insurance, and quality of work. Monitor service completion 
                      and ensure work meets standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Scheduling & Communication</h4>
                    <p className="text-sm text-gray-600">
                      Coordinate service schedules, provide advance notice, and communicate with both owner 
                      and contractors regarding timing and access.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Billing & Documentation</h4>
                    <p className="text-sm text-gray-600">
                      Provide detailed invoices, receipts, and service documentation. No markup on services - 
                      owner pays contractor rates directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Maintenance Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Seasonal Services</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Gutter cleaning and maintenance</li>
                    <li>• Leaf removal and yard cleanup</li>
                    <li>• Snow removal and winterization</li>
                    <li>• Seasonal HVAC preparation</li>
                    <li>• Pool opening/closing (if applicable)</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Regular Maintenance</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Landscaping and lawn care</li>
                    <li>• Pest control and prevention</li>
                    <li>• Tree trimming and pruning</li>
                    <li>• Pressure washing (exterior)</li>
                    <li>• General property upkeep</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Owner Responsibilities */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Owner Responsibilities</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Payment Authorization</h4>
                    <p className="text-sm text-gray-600">
                      Owner authorizes Camp Haven Rentals to coordinate services and agrees to pay contractor 
                      invoices directly within 30 days of service completion.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Property Access</h4>
                    <p className="text-sm text-gray-600">
                      Owner provides necessary access codes, keys, or arrangements for contractors to access 
                      property for scheduled maintenance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Service Approval</h4>
                    <p className="text-sm text-gray-600">
                      Owner approves service requests over $[Amount] threshold. Emergency services may be 
                      authorized without prior approval.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fee Structure */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Fee Structure</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-3">No Markup Policy</h4>
                <div className="space-y-2 text-sm text-green-700">
                  <p>• Owner pays contractor rates directly</p>
                  <p>• No markup or hidden fees on services</p>
                  <p>• Coordination fee: $[Amount] per service (if applicable)</p>
                  <p>• All invoices provided with detailed breakdown</p>
                </div>
              </div>
            </div>

            {/* Service Standards */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Standards</h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Response Times</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Emergency services: 4 hours or less</li>
                    <li>• Routine maintenance: 48 hours notice</li>
                    <li>• Seasonal services: 1 week advance scheduling</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Quality Standards</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Licensed and insured contractors only</li>
                    <li>• Written estimates for services over $[Amount]</li>
                    <li>• Photos of work completion provided</li>
                    <li>• Follow-up inspection for major services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Termination</h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Termination Rights</h4>
                  <p className="text-sm text-gray-600">
                    Either party may terminate this agreement with 30 days written notice. Owner remains 
                    responsible for any outstanding service invoices.
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
                    <p className="text-sm text-gray-600">Property Owner Signature</p>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Date</span>
                    <span className="text-sm text-gray-600">________________</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-b-2 border-gray-300 pb-2">
                    <p className="text-sm text-gray-600">Service Coordinator Signature</p>
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
                an attorney before executing any service agreement.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

