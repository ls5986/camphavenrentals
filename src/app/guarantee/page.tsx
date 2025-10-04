import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Camera, FileText, AlertTriangle, DollarSign, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Our Guarantee",
  description: "Learn about Camp Haven Rentals' comprehensive guarantee including pre-lease inspection, wear-and-tear liability, and damage coverage.",
}

export default function GuaranteePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Guarantee
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive protection for property owners with our unique liability transfer model.
            </p>
          </div>
        </div>
      </section>

      {/* Pre-Lease Inspection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pre-Lease Inspection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We verify all systems and document everything before we start.
            </p>
          </div>
          
          {/* Inspection Photos */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg flex items-center justify-center">
                <span className="text-amber-700 font-medium">Water System Testing</span>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-amber-200 rounded-lg flex items-center justify-center">
                <span className="text-amber-700 font-medium">HVAC Inspection</span>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg flex items-center justify-center">
                <span className="text-amber-700 font-medium">Photo Documentation</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-amber-600" />
                  <CardTitle>Water Systems</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We test wells, pumps, septic systems, and all water-related infrastructure to ensure proper function.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-amber-600" />
                  <CardTitle>HVAC & Electrical</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete testing of heating, cooling, and electrical systems for safety and functionality.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Camera className="h-8 w-8 text-amber-600" />
                  <CardTitle>Photo & Video Documentation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive visual documentation of property condition with signed baseline report.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wear-and-Tear Liability */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Wear-and-Tear Liability
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike standard leases, we assume all liability for guest-related wear and tear.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What We Cover
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Guest Usage Wear</h4>
                    <p className="text-gray-600">Normal wear from guest occupancy and use</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Furniture & Fixtures</h4>
                    <p className="text-gray-600">Replacement and repair of guest-accessible items</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Operational Maintenance</h4>
                    <p className="text-gray-600">Regular maintenance from high-frequency use</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <DollarSign className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    You&apos;re Not Billed
                  </h3>
                  <p className="text-gray-600 text-lg">
                    All wear and tear from guest use is covered by us. No surprise charges or maintenance bills.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exceptions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Exceptions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Only pre-existing or disclosed faulty systems remain on the owner.
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-8 w-8 text-amber-600" />
                <CardTitle className="text-xl">Owner Responsibility</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Pre-Existing Conditions</h4>
                    <p className="text-gray-600">Any issues documented in our baseline inspection report</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Disclosed Faulty Systems</h4>
                    <p className="text-gray-600">Systems you&apos;ve disclosed as having known issues</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Structural Issues</h4>
                    <p className="text-gray-600">Foundation, roof, and structural elements not related to guest use</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Damage Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Damage Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All damages are handled by us, whether from guests or operational issues.
            </p>
          </div>
          
          {/* Coverage Photos */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg flex items-center justify-center">
                <span className="text-amber-700 font-medium">Insurance Documentation</span>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-amber-200 rounded-lg flex items-center justify-center">
                <span className="text-amber-700 font-medium">Damage Assessment</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-amber-600" />
                  Guest Damage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Any damage caused by guests is covered by our insurance and handled directly by us.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Broken furniture or fixtures</li>
                  <li>• Accidental damage to property</li>
                  <li>• Cleaning beyond normal wear</li>
                  <li>• Lost or damaged items</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-amber-600" />
                  Operational Damage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Damage from our operations, maintenance, or vendor services is our responsibility.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Maintenance-related damage</li>
                  <li>• Vendor service issues</li>
                  <li>• Operational equipment failure</li>
                  <li>• System malfunctions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Break Clause */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Break Clause
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible terms that work for your changing circumstances.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="text-center">
                  <FileText className="h-16 w-16 text-amber-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    60-90 Days Notice
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Owners may terminate early with proper notice if selling or reclaiming the property.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Valid Reasons</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Property sale</li>
                        <li>• Personal use</li>
                        <li>• Family circumstances</li>
                        <li>• Investment strategy change</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Process</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Written notice required</li>
                        <li>• 60-90 day transition period</li>
                        <li>• Property restoration</li>
                        <li>• Final inspection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Profit-Share Option */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Profit-Share Option
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Share in the upside when your property outperforms expectations.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <DollarSign className="h-16 w-16 text-amber-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Above Threshold Sharing
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    When monthly profits exceed our threshold, you receive a percentage of the additional profit.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-600 mb-2">
                        $3,000
                      </div>
                      <p className="text-gray-600">Monthly Threshold</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-600 mb-2">
                        20%
                      </div>
                      <p className="text-gray-600">Your Share</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-600 mb-2">
                        Monthly
                      </div>
                      <p className="text-gray-600">Profit Distribution</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Our Guarantee?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join property owners who trust us with their most valuable assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-amber-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Get Started Today
            </a>
            <a
              href="/insurance"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-amber-600 transition-colors"
            >
              View Insurance Details
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
