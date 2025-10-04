import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Download, 
  Printer,
  CheckCircle,
  AlertTriangle,
  FileText,
  DollarSign,
  Home
} from "lucide-react"

export const metadata = {
  title: "Insurance Coordination Agreement | Camp Haven Rentals",
  description: "Insurance coverage coordination and liability management agreement.",
}

export default function InsuranceCoordinationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Insurance Coordination Agreement</h1>
              <p className="text-gray-600 mt-2">Insurance coverage coordination and liability management</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-2">INSURANCE COORDINATION AGREEMENT</h2>
              <p className="text-gray-600">Insurance Coverage and Liability Management</p>
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
                  <h4 className="font-medium text-gray-900">TENANT/OPERATOR</h4>
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
                improvements, and contents (the &ldquo;Property&rdquo;).
              </p>
            </div>

            {/* Insurance Overview */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Insurance Coverage Overview</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-blue-800">
                  This agreement establishes the insurance coverage responsibilities for the property during 
                  the lease term. Both parties maintain separate insurance policies with clear coverage boundaries 
                  to ensure comprehensive protection.
                </p>
              </div>
            </div>

            {/* Owner Insurance Requirements */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Owner Insurance Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Landlord Insurance Policy</h4>
                    <p className="text-sm text-gray-600">
                      Owner maintains comprehensive landlord insurance covering property structure, 
                      liability, and loss of rental income. Minimum coverage: $[Amount].
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Property Coverage</h4>
                    <p className="text-sm text-gray-600">
                      Coverage for property structure, fixtures, and owner&apos;s personal property 
                      not related to short-term rental operations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Liability Coverage</h4>
                    <p className="text-sm text-gray-600">
                      General liability coverage for property-related incidents not involving guests 
                      or short-term rental operations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Certificate Requirements</h4>
                    <p className="text-sm text-gray-600">
                      Owner provides certificate of insurance naming Camp Haven Rentals as additional insured 
                      for property-related claims.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tenant Insurance Requirements */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tenant Insurance Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Commercial General Liability</h4>
                    <p className="text-sm text-gray-600">
                      Comprehensive commercial liability insurance covering all guest-related incidents, 
                      property damage, and business operations. Minimum coverage: $2,000,000.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Short-Term Rental Coverage</h4>
                    <p className="text-sm text-gray-600">
                      Specialized STR liability insurance covering guest injuries, property damage from guests, 
                      and rental-related incidents.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Contents Coverage</h4>
                    <p className="text-sm text-gray-600">
                      Coverage for all furnishings, appliances, and equipment provided by tenant for 
                      short-term rental operations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Business Interruption</h4>
                    <p className="text-sm text-gray-600">
                      Coverage for loss of rental income due to covered perils affecting short-term 
                      rental operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Boundaries */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Coverage Boundaries</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-3">Tenant Coverage</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• All guest-related incidents</li>
                    <li>• Guest injuries and accidents</li>
                    <li>• Property damage from guests</li>
                    <li>• Appliance damage from guest use</li>
                    <li>• Wear-and-tear from rental operations</li>
                    <li>• Business liability and operations</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-3">Owner Coverage</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Property structure and fixtures</li>
                    <li>• Weather-related damage</li>
                    <li>• Structural maintenance issues</li>
                    <li>• Owner&apos;s personal property</li>
                    <li>• Non-guest related incidents</li>
                    <li>• Loss of rental income (if applicable)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Claims Process */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Claims Process</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Incident Reporting</h4>
                  <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                    <li>Incident occurs and is immediately documented</li>
                    <li>Appropriate party notified based on coverage responsibility</li>
                    <li>Insurance carrier contacted within 24 hours</li>
                    <li>Claim filed with supporting documentation</li>
                    <li>Adjuster assigned and property inspected</li>
                  </ol>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Claims Coordination</h4>
                  <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                    <li>Both parties coordinate with respective insurance carriers</li>
                    <li>Joint inspections scheduled when necessary</li>
                    <li>Repair estimates obtained and approved</li>
                    <li>Work completed by approved contractors</li>
                    <li>Final documentation and claim closure</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Documentation Requirements */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Documentation Requirements</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Insurance Certificates</h4>
                    <p className="text-sm text-gray-600">
                      Both parties provide current certificates of insurance with minimum coverage amounts 
                      and additional insured designations as required.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Policy Updates</h4>
                    <p className="text-sm text-gray-600">
                      Insurance policies must be maintained throughout lease term with 30 days notice 
                      of any changes or cancellations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Claims Documentation</h4>
                    <p className="text-sm text-gray-600">
                      All incidents documented with photos, reports, and supporting evidence. 
                      Complete records maintained for insurance and legal purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Indemnification */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Indemnification</h3>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-semibold text-amber-800 mb-3">Mutual Indemnification</h4>
                <div className="space-y-2 text-sm text-amber-700">
                  <p>• Each party indemnifies the other for claims within their respective coverage areas</p>
                  <p>• Owner indemnifies tenant for structural issues and pre-existing conditions</p>
                  <p>• Tenant indemnifies owner for all guest-related incidents and operations</p>
                  <p>• Both parties maintain adequate insurance to support indemnification obligations</p>
                  <p>• Insurance is primary coverage with indemnification as secondary</p>
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
                <strong>Legal Notice:</strong> This insurance coordination agreement establishes coverage 
                boundaries and responsibilities. Both parties should review their insurance policies 
                with qualified insurance professionals to ensure adequate coverage.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

