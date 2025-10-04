import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Wrench,
  Droplets,
  Zap,
  Home,
  Snowflake,
  Calendar,
  FileText,
  DollarSign
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Coverage & Guarantees | Camp Haven Rentals",
  description: "Comprehensive coverage details for appliances, systems, and wear-and-tear. Learn what we cover and our 5-year appliance policy.",
  keywords: "property coverage, appliance coverage, wear and tear, hot tub maintenance, HVAC coverage, plumbing coverage",
}

const coverageCategories = [
  {
    icon: Home,
    title: "Appliances & Kitchen",
    items: [
      "Refrigerators and freezers",
      "Dishwashers and garbage disposals", 
      "Ovens, stoves, and microwaves",
      "Washing machines and dryers",
      "Coffee makers and small appliances"
    ],
    note: "All appliances under 5 years old are fully covered for guest usage wear-and-tear"
  },
  {
    icon: Droplets,
    title: "Plumbing & Water Systems",
    items: [
      "Hot tubs and spa equipment",
      "Water heaters and boilers",
      "Well pumps and water filtration",
      "Septic system maintenance",
      "Plumbing fixtures and pipes",
      "Pool equipment and chemicals"
    ],
    note: "Increased usage from multiple guest turnovers is fully covered"
  },
  {
    icon: Zap,
    title: "HVAC & Electrical",
    items: [
      "Central air conditioning systems",
      "Heat pumps and furnaces",
      "Ductwork and ventilation",
      "Electrical outlets and fixtures",
      "Solar panel maintenance",
      "Generator systems"
    ],
    note: "All HVAC maintenance and filter changes included"
  },
  {
    icon: Wrench,
    title: "Interior & Exterior",
    items: [
      "Flooring (carpet, hardwood, tile)",
      "Interior and exterior painting",
      "Windows and doors",
      "Outdoor furniture and amenities",
      "Guest-related wear and tear repairs"
    ],
    note: "Guest-related wear-and-tear covered. Property maintenance (gutters, landscaping, pest control) billed separately"
  }
]

const guaranteeDetails = [
  {
    title: "5-Year Appliance Policy",
    description: "Any appliance or major system under 5 years old at lease start is fully covered for all maintenance, repairs, and replacements due to guest usage.",
    details: [
      "Documented baseline inspection before lease start",
      "Full replacement coverage for guest-related damage",
      "Regular maintenance and servicing included",
      "No deductibles or co-pays for covered items"
    ]
  },
  {
    title: "Wear-and-Tear Coverage",
    description: "Unlike traditional leases, we assume all liability for normal wear-and-tear from constant guest use.",
    details: [
      "No charges for normal guest usage",
      "Comprehensive coverage for high-traffic areas",
      "Regular deep cleaning and maintenance",
      "Professional restoration when needed"
    ]
  },
  {
    title: "Emergency Response",
    description: "24/7 emergency repair service with local contractors and rapid response times.",
    details: [
      "Immediate response to urgent issues",
      "Qualified local contractors",
      "Emergency hotline for critical problems",
      "Coordination with insurance when needed"
    ]
  },
  {
    title: "Pre-Existing Condition Protection",
    description: "Thorough baseline documentation protects you from being charged for pre-existing issues.",
    details: [
      "Comprehensive pre-lease inspection",
      "Photo and video documentation",
      "Signed baseline condition report",
      "Clear separation of existing vs. new damage"
    ]
  }
]

const excludedItems = [
  "Appliances over 5 years old at lease start (wear-and-tear only)",
  "Structural issues not related to guest usage",
  "Natural disasters and acts of God",
  "Pre-existing conditions documented in baseline",
  "Damage from owner or family use during lease"
]

const landlordResponsibilities = [
  "Gutter cleaning and leaf removal",
  "Landscaping and plant maintenance",
  "Pest control and prevention",
  "Snow removal and winter maintenance",
  "Tree trimming and pruning",
  "Exterior pressure washing (non-guest related)",
  "Seasonal property preparation",
  "Structural repairs and maintenance"
]

export default function CoveragePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Coverage & Guarantees
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive coverage for all appliances, systems, and wear-and-tear. 
              Our 5-year appliance policy ensures your property is fully protected.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">What We Cover</h2>
              </div>
              <p className="text-gray-600">
                All appliances and major systems under 5 years old are fully covered for maintenance, 
                repairs, and replacements due to guest usage. No deductibles, no co-pays, no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What&apos;s Covered
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive coverage includes all major systems and appliances in your property.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coverageCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <IconComponent className="h-6 w-6 text-amber-600" />
                      <span>{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <p className="text-sm text-amber-800 font-medium">
                        {category.note}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Guarantee Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Guarantees
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear policies and comprehensive protection for your peace of mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guaranteeDetails.map((guarantee, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{guarantee.title}</CardTitle>
                  <p className="text-gray-600">{guarantee.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {guarantee.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Year Policy Details */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The 5-Year Appliance Policy
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our most comprehensive coverage applies to all appliances and major systems 
                under 5 years old at lease start. This includes full replacement coverage 
                for any guest-related damage or excessive wear.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Age Documentation</h3>
                    <p className="text-gray-600">We verify and document the age of all major appliances and systems during our pre-lease inspection.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Baseline Report</h3>
                    <p className="text-gray-600">Complete condition documentation with photos, videos, and signed baseline report protects both parties.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <DollarSign className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">No Hidden Costs</h3>
                    <p className="text-gray-600">Full coverage with no deductibles, co-pays, or surprise charges for covered items.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Coverage Examples</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Fully Covered</h4>
                  <p className="text-sm text-gray-600">3-year-old dishwasher breaks from heavy guest usage</p>
                  <p className="text-sm text-green-600 font-medium">✓ Full replacement covered</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Fully Covered</h4>
                  <p className="text-sm text-gray-600">2-year-old hot tub needs new pump from frequent use</p>
                  <p className="text-sm text-green-600 font-medium">✓ Full replacement covered</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Fully Covered</h4>
                  <p className="text-sm text-gray-600">4-year-old HVAC system needs major repair</p>
                  <p className="text-sm text-green-600 font-medium">✓ Full repair/replacement covered</p>
                </div>
                
                <div className="border-l-4 border-amber-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Wear-and-Tear Only</h4>
                  <p className="text-sm text-gray-600">7-year-old refrigerator (over 5 years at lease start)</p>
                  <p className="text-sm text-amber-600 font-medium">⚠ Normal wear covered, pre-existing issues excluded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landlord Responsibilities */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Landlord Responsibilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Property maintenance not related to guest usage remains the landlord&apos;s responsibility. 
              We can coordinate services and bill directly to you.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-blue-800">
                  <Home className="h-6 w-6" />
                  <span>Property Maintenance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {landlordResponsibilities.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Home className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-blue-800">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Our Service</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    We can coordinate all property maintenance services for you at competitive rates. 
                    Services are billed directly to you with no markup.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Options:</strong> You can handle maintenance yourself, use your preferred vendors, 
                    or let us coordinate everything for convenience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Not Covered */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What&apos;s Not Covered
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Items that fall outside our guest-related wear-and-tear coverage.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-amber-800">
                  <AlertTriangle className="h-6 w-6" />
                  <span>Exclusions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {excludedItems.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <AlertTriangle className="h-4 w-4 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-amber-800">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> All exclusions are clearly documented in your lease agreement 
                    and baseline inspection report. We believe in complete transparency about coverage terms.
                  </p>
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
            Ready to Protect Your Investment?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get comprehensive coverage for your property with our guaranteed rent model. 
            No surprises, no hidden costs, just peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-amber-600 hover:bg-gray-50">
              <Link href="/contact">Get Coverage Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-amber-600">
              <Link href="/faq">View Full FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
