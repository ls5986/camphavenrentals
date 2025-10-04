import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  AlertTriangle, 
  Download, 
  Printer,
  CheckCircle,
  Phone,
  Clock,
  Shield,
  Wrench
} from "lucide-react"

export const metadata = {
  title: "Emergency Response Agreement | Camp Haven Rentals",
  description: "24/7 emergency response and incident management agreement.",
}

export default function EmergencyResponsePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Emergency Response Agreement</h1>
              <p className="text-gray-600 mt-2">24/7 emergency response and incident management protocol</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-2">EMERGENCY RESPONSE AGREEMENT</h2>
              <p className="text-gray-600">24/7 Emergency Services and Incident Management</p>
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
                  <h4 className="font-medium text-gray-900">EMERGENCY RESPONSE PROVIDER</h4>
                  <p className="text-sm text-gray-600">Camp Haven Rentals LLC</p>
                  <p className="text-sm text-gray-600">[Company Address]</p>
                  <p className="text-sm text-gray-600">Emergency Line: [Phone]</p>
                  <p className="text-sm text-gray-600">[Email]</p>
                </div>
              </div>
            </div>

            {/* Property Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Description</h3>
              <p className="text-gray-700">
                The property located at <strong>[Property Address]</strong>, including all buildings, 
                improvements, and systems (the &ldquo;Property&rdquo;).
              </p>
            </div>

            {/* Emergency Services */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Services Provided</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">24/7 Emergency Hotline</h4>
                    <p className="text-sm text-gray-600">
                      Dedicated emergency response line available 24 hours a day, 7 days a week, 
                      365 days a year for immediate assistance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Rapid Response Team</h4>
                    <p className="text-sm text-gray-600">
                      Local emergency response team available for immediate dispatch to handle 
                      urgent property issues and guest incidents.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Contractor Network</h4>
                    <p className="text-sm text-gray-600">
                      Pre-vetted network of emergency contractors including plumbers, electricians, 
                      HVAC technicians, and security services.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Incident Management</h4>
                    <p className="text-sm text-gray-600">
                      Complete incident documentation, insurance coordination, and follow-up 
                      to ensure resolution and prevent future issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Times */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Response Time Standards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h4 className="font-medium text-red-800 mb-2 flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4" />
                      <span>Critical Emergencies</span>
                    </h4>
                    <p className="text-sm text-red-700 mb-2">Response: Within 2 hours</p>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Fire or smoke</li>
                      <li>• Gas leaks</li>
                      <li>• Flooding or water damage</li>
                      <li>• Electrical hazards</li>
                      <li>• Security breaches</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <h4 className="font-medium text-orange-800 mb-2 flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Urgent Issues</span>
                    </h4>
                    <p className="text-sm text-orange-700 mb-2">Response: Within 4 hours</p>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• HVAC failure</li>
                      <li>• Plumbing emergencies</li>
                      <li>• Appliance malfunctions</li>
                      <li>• Lockouts</li>
                      <li>• Power outages</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-medium text-yellow-800 mb-2 flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>Non-Emergency</span>
                    </h4>
                    <p className="text-sm text-yellow-700 mb-2">Response: Within 24 hours</p>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Minor repairs</li>
                      <li>• Maintenance requests</li>
                      <li>• Guest complaints</li>
                      <li>• Routine issues</li>
                      <li>• General inquiries</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2 flex items-center space-x-2">
                      <Shield className="h-4 w-4" />
                      <span>Guest Incidents</span>
                    </h4>
                    <p className="text-sm text-blue-700 mb-2">Response: Immediate</p>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Medical emergencies</li>
                      <li>• Noise complaints</li>
                      <li>• Property damage</li>
                      <li>• Security issues</li>
                      <li>• Guest disputes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Procedures */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Procedures</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Initial Response</h4>
                  <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                    <li>Emergency call received and logged with timestamp</li>
                    <li>Incident severity assessed and categorized</li>
                    <li>Appropriate response team dispatched</li>
                    <li>Property owner notified of incident</li>
                    <li>Emergency services contacted if needed</li>
                  </ol>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Resolution Process</h4>
                  <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                    <li>On-site assessment and immediate stabilization</li>
                    <li>Professional contractor dispatched if needed</li>
                    <li>Work completed and property secured</li>
                    <li>Incident documentation and photos taken</li>
                    <li>Follow-up inspection and owner notification</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Coverage & Billing */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Coverage & Billing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Covered by Tenant</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• All guest-related emergencies</li>
                    <li>• Appliance failures from guest use</li>
                    <li>• Plumbing issues from guest use</li>
                    <li>• Electrical problems from guest use</li>
                    <li>• Guest incidents and complaints</li>
                  </ul>
                </div>
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <h4 className="font-medium text-amber-800 mb-2">Billed to Owner</h4>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• Structural emergencies not guest-related</li>
                    <li>• Weather-related damage</li>
                    <li>• Pre-existing condition failures</li>
                    <li>• Owner-requested emergency services</li>
                    <li>• Non-guest related incidents</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Communication Protocol */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Communication Protocol</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Emergency Contact Information</h4>
                    <p className="text-sm text-gray-600">
                      Primary emergency line: [Phone] | Secondary: [Phone] | Email: [Email]
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Notification Schedule</h4>
                    <p className="text-sm text-gray-600">
                      Owner notified immediately for critical emergencies, within 4 hours for urgent issues, 
                      and within 24 hours for routine matters.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Documentation</h4>
                    <p className="text-sm text-gray-600">
                      All emergency responses documented with photos, work orders, and incident reports. 
                      Complete records maintained for insurance and legal purposes.
                    </p>
                  </div>
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
                    <h4 className="font-medium text-gray-900">Emergency Access</h4>
                    <p className="text-sm text-gray-600">
                      Owner provides emergency access codes, keys, and contact information for immediate 
                      property access during emergencies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Payment Authorization</h4>
                    <p className="text-sm text-gray-600">
                      Owner authorizes emergency repairs up to $[Amount] without prior approval. 
                      Higher amounts require owner approval or emergency authorization.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Insurance Coordination</h4>
                    <p className="text-sm text-gray-600">
                      Owner maintains appropriate insurance coverage and provides insurance information 
                      for claim coordination during emergencies.
                    </p>
                  </div>
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
                    <p className="text-sm text-gray-600">Emergency Response Provider Signature</p>
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
                <strong>Legal Notice:</strong> This emergency response agreement is designed to provide rapid, 
                professional emergency services while clearly defining responsibilities and coverage. 
                All emergency responses are subject to the terms of the main lease agreement.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

