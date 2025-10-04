import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileText, Camera, CheckCircle, Users, Building } from "lucide-react"

export const metadata = {
  title: "Insurance & Documentation",
  description: "Comprehensive insurance coverage and documentation for your property with Camp Haven Rentals.",
}

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Insurance & Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage and transparent documentation for complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Insurance Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Layered protection for maximum coverage and compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-amber-600" />
                  <CardTitle>Landlord Policy</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  You maintain your existing landlord insurance policy for property coverage.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Property damage coverage</li>
                  <li>• Building structure protection</li>
                  <li>• Owner liability coverage</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-amber-600" />
                  <CardTitle>STR Liability</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We add short-term rental liability insurance for guest-related incidents.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Guest injury coverage</li>
                  <li>• Property damage by guests</li>
                  <li>• Legal defense costs</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-amber-600" />
                  <CardTitle>Vendor COIs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  All service providers carry certificates of insurance for their work.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cleaning services</li>
                  <li>• Maintenance contractors</li>
                  <li>• Landscaping services</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete transparency with detailed documentation of all property activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <FileText className="h-8 w-8 text-amber-600" />
                  <CardTitle>Baseline Inspection</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive pre-lease inspection documenting all systems and conditions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• System functionality tests</li>
                  <li>• Condition assessment</li>
                  <li>• Photo documentation</li>
                  <li>• Signed baseline report</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Camera className="h-8 w-8 text-amber-600" />
                  <CardTitle>Before/After Stay Logs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Photo documentation before and after each guest stay for complete transparency.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Pre-stay condition photos</li>
                  <li>• Post-stay condition photos</li>
                  <li>• Damage documentation</li>
                  <li>• Timestamped records</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <FileText className="h-8 w-8 text-amber-600" />
                  <CardTitle>Monthly Reports</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Regular performance and maintenance reports for complete visibility.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Occupancy statistics</li>
                  <li>• Revenue reports</li>
                  <li>• Maintenance activities</li>
                  <li>• Property condition updates</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Building className="h-8 w-8 text-amber-600" />
                  <CardTitle>Compliance Records</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Documentation of all regulatory compliance and permit requirements.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• STR permit status</li>
                  <li>• Local regulation compliance</li>
                  <li>• Safety inspections</li>
                  <li>• Tax documentation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle all regulatory requirements and adapt to changing rules.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                STR Permits & Regulations
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Permit Management</h4>
                    <p className="text-gray-600">We handle all STR permit applications and renewals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Regulatory Compliance</h4>
                    <p className="text-gray-600">Stay current with all local short-term rental regulations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Adaptive Strategy</h4>
                    <p className="text-gray-600">Pivot to mid-term or corporate rentals if rules change</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <Shield className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Full Compliance
                  </h3>
                  <p className="text-gray-600 text-lg">
                    We monitor regulatory changes and adapt our strategy to maintain compliance and profitability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vendor Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vendor Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All service providers are fully insured and bonded.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-amber-600" />
                  <CardTitle>Cleaning Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional cleaning teams with comprehensive liability coverage.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• General liability insurance</li>
                  <li>• Bonded and background checked</li>
                  <li>• Property damage coverage</li>
                  <li>• COI on file</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-amber-600" />
                  <CardTitle>Maintenance Contractors</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Licensed contractors with full insurance coverage for all work.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Licensed and insured</li>
                  <li>• Workers compensation</li>
                  <li>• Professional liability</li>
                  <li>• COI on file</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-amber-600" />
                  <CardTitle>Other Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Landscaping, pool maintenance, and other service providers.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Landscaping services</li>
                  <li>• Pool maintenance</li>
                  <li>• Pest control</li>
                  <li>• All COIs on file</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Insurance Approach Works
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Layered Protection
              </h3>
              <p className="text-gray-600">
                Multiple insurance layers for comprehensive coverage
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Complete Transparency
              </h3>
              <p className="text-gray-600">
                Full documentation of all activities and conditions
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Regulatory Compliance
              </h3>
              <p className="text-gray-600">
                Stay current with all local regulations and permits
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Vendor Protection
              </h3>
              <p className="text-gray-600">
                All service providers fully insured and bonded
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Complete Protection?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join property owners who trust us with comprehensive insurance and documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-amber-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Get Started Today
            </a>
            <a
              href="/guarantee"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-amber-600 transition-colors"
            >
              View Our Guarantee
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
