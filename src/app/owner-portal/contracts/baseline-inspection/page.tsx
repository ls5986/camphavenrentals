import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  FileText, 
  Download, 
  Printer,
  CheckCircle,
  AlertTriangle,
  Camera,
  Home,
  Wrench
} from "lucide-react"

export const metadata = {
  title: "Baseline Inspection Agreement | Camp Haven Rentals",
  description: "Property baseline inspection and condition documentation agreement.",
}

export default function BaselineInspectionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Baseline Inspection Agreement</h1>
              <p className="text-gray-600 mt-2">Property condition documentation and inspection protocol</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-2">BASELINE INSPECTION AGREEMENT</h2>
              <p className="text-gray-600">Property Condition Documentation Protocol</p>
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
                  <h4 className="font-medium text-gray-900">INSPECTION COMPANY</h4>
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
                improvements, fixtures, and appliances (the &ldquo;Property&rdquo;).
              </p>
            </div>

            {/* Inspection Purpose */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Inspection Purpose</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-blue-800">
                  This baseline inspection establishes the condition of the property at the commencement of the lease 
                  agreement. It serves as the reference point for determining what constitutes normal wear-and-tear 
                  versus pre-existing conditions.
                </p>
              </div>
            </div>

            {/* Inspection Scope */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Inspection Scope</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Comprehensive Documentation</h4>
                    <p className="text-sm text-gray-600">
                      Complete visual inspection of all rooms, systems, appliances, fixtures, and exterior elements. 
                      Detailed documentation of existing conditions, wear patterns, and any pre-existing issues.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Photographic Evidence</h4>
                    <p className="text-sm text-gray-600">
                      High-resolution photographs of all areas, with special attention to existing damage, 
                      wear patterns, appliance conditions, and system status.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">System Testing</h4>
                    <p className="text-sm text-gray-600">
                      Functional testing of all major systems including HVAC, plumbing, electrical, 
                      appliances, and safety systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Appliance Assessment</h4>
                    <p className="text-sm text-gray-600">
                      Documentation of all appliances including age, condition, functionality, 
                      and any existing issues or maintenance needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inspection Areas */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Inspection Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center space-x-2">
                      <Home className="h-4 w-4" />
                      <span>Interior</span>
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• All rooms and living spaces</li>
                      <li>• Floors, walls, ceilings</li>
                      <li>• Windows and doors</li>
                      <li>• Light fixtures and outlets</li>
                      <li>• Cabinets and built-ins</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center space-x-2">
                      <Wrench className="h-4 w-4" />
                      <span>Systems</span>
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• HVAC system and controls</li>
                      <li>• Plumbing fixtures and water pressure</li>
                      <li>• Electrical panel and circuits</li>
                      <li>• Water heater and well/septic</li>
                      <li>• Smoke detectors and safety</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center space-x-2">
                      <Home className="h-4 w-4" />
                      <span>Appliances</span>
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Kitchen appliances (age/condition)</li>
                      <li>• Laundry equipment</li>
                      <li>• Hot tub and pool equipment</li>
                      <li>• Garage door and openers</li>
                      <li>• Security systems</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center space-x-2">
                      <Home className="h-4 w-4" />
                      <span>Exterior</span>
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Roof and gutters</li>
                      <li>• Siding and paint</li>
                      <li>• Windows and doors</li>
                      <li>• Driveway and walkways</li>
                      <li>• Landscaping and drainage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Documentation Standards */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Documentation Standards</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Camera className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Photographic Requirements</h4>
                    <p className="text-sm text-gray-600">
                      Minimum 50 high-resolution photos covering all areas, with timestamps and location data. 
                      Special attention to existing damage, wear patterns, and appliance conditions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Written Documentation</h4>
                    <p className="text-sm text-gray-600">
                      Detailed written report describing all findings, including existing damage, 
                      maintenance needs, and system conditions. Age verification for all appliances.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Digital Archive</h4>
                    <p className="text-sm text-gray-600">
                      All documentation stored digitally with backup copies. Accessible to both parties 
                      for reference throughout the lease term.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Owner Cooperation */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Owner Cooperation</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Property Access</h4>
                    <p className="text-sm text-gray-600">
                      Owner provides full access to property for inspection. All utilities must be operational 
                      for system testing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Information Disclosure</h4>
                    <p className="text-sm text-gray-600">
                      Owner discloses all known issues, recent repairs, maintenance history, and any 
                      existing problems or concerns.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Appliance Documentation</h4>
                    <p className="text-sm text-gray-600">
                      Owner provides purchase dates, warranties, service records, and manuals for all 
                      major appliances and systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Report Delivery */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Report Delivery</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-3">Timeline & Delivery</h4>
                <div className="space-y-2 text-sm text-green-700">
                  <p>• Inspection completed within 48 hours of access</p>
                  <p>• Written report delivered within 5 business days</p>
                  <p>• Digital photo archive available immediately</p>
                  <p>• Both parties receive complete documentation</p>
                  <p>• Owner has 7 days to review and dispute findings</p>
                </div>
              </div>
            </div>

            {/* Legal Binding */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal Effect</h3>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  This baseline inspection report becomes the official record of property condition at lease commencement. 
                  Any conditions not documented in this report will be considered normal wear-and-tear and covered 
                  under the lease agreement&apos;s wear-and-tear provisions.
                </p>
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
                    <p className="text-sm text-gray-600">Inspector Signature</p>
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
                <strong>Legal Notice:</strong> This baseline inspection is legally binding and serves as the foundation 
                for determining wear-and-tear responsibilities. Both parties should review all findings carefully 
                and seek legal counsel if questions arise.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

