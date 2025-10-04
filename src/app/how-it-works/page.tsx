import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, X, DollarSign, Shield, Clock, Users, AlertTriangle, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "How It Works - Camp Haven Rentals",
  description: "Compare our guaranteed rental model to typical renting. See why we're lower risk with better returns and comprehensive protection.",
}

const comparisonData = [
  {
    category: "Monthly Income",
    campHaven: {
      value: "Guaranteed fixed rent",
      details: "Consistent income regardless of occupancy",
      icon: DollarSign,
      color: "text-green-600"
    },
    typicalRenting: {
      value: "Variable or no income",
      details: "Depends on tenant payment and vacancy",
      icon: AlertTriangle,
      color: "text-red-600"
    }
  },
  {
    category: "Wear & Tear",
    campHaven: {
      value: "We cover everything",
      details: "All guest usage wear is our responsibility",
      icon: Shield,
      color: "text-green-600"
    },
    typicalRenting: {
      value: "You pay for everything",
      details: "Normal wear, damage, and maintenance costs",
      icon: X,
      color: "text-red-600"
    }
  },
  {
    category: "Property Management",
    campHaven: {
      value: "Full-service management",
      details: "Marketing, bookings, cleaning, maintenance",
      icon: Users,
      color: "text-green-600"
    },
    typicalRenting: {
      value: "You manage everything",
      details: "Or pay 8-12% management fees",
      icon: Clock,
      color: "text-red-600"
    }
  },
  {
    category: "Risk Level",
    campHaven: {
      value: "Low risk",
      details: "Professional operations, insurance, documented",
      icon: Shield,
      color: "text-green-600"
    },
    typicalRenting: {
      value: "High risk",
      details: "Tenant damage, non-payment, legal issues",
      icon: AlertTriangle,
      color: "text-red-600"
    }
  },
  {
    category: "Property Protection",
    campHaven: {
      value: "Comprehensive coverage",
      details: "Pre-lease inspection, documentation, insurance",
      icon: Shield,
      color: "text-green-600"
    },
    typicalRenting: {
      value: "Limited protection",
      details: "Security deposits often insufficient",
      icon: X,
      color: "text-red-600"
    }
  },
  {
    category: "Flexibility",
    campHaven: {
      value: "Owner-friendly terms",
      details: "60-90 day break clause, 1-3 year leases",
      icon: Clock,
      color: "text-green-600"
    },
    typicalRenting: {
      value: "Rigid terms",
      details: "Long-term commitments, difficult to exit",
      icon: AlertTriangle,
      color: "text-red-600"
    }
  }
]

const benefits = [
  {
    title: "Guaranteed Income",
    description: "Fixed monthly rent regardless of occupancy or seasonality",
    icon: DollarSign,
    metric: "100%"
  },
  {
    title: "Zero Maintenance Costs",
    description: "We handle all wear, tear, and operational expenses",
    icon: Shield,
    metric: "$0"
  },
  {
    title: "Professional Operations",
    description: "Expert management with documented processes",
    icon: Users,
    metric: "24/7"
  },
  {
    title: "Risk Mitigation",
    description: "Comprehensive insurance and liability transfer",
    icon: TrendingUp,
    metric: "Low"
  }
]

const processSteps = [
  {
    step: "1",
    title: "Pre-Lease Inspection",
    description: "We document everything - water systems, HVAC, electrical, and current condition with photos and video.",
    timeframe: "Week 1"
  },
  {
    step: "2", 
    title: "Property Setup",
    description: "We furnish, insure, and optimize your property for maximum guest appeal and revenue.",
    timeframe: "Weeks 2-3"
  },
  {
    step: "3",
    title: "Go Live",
    description: "Your property starts generating income with our full-service management and guaranteed rent.",
    timeframe: "Week 4"
  }
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See why our guaranteed rental model is lower risk and higher value than typical renting.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Camp Haven vs. Typical Renting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare the value, risk, and benefits of our model versus traditional rental approaches.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">Camp Haven Rentals</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-red-600">Typical Renting</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonData.map((item, index) => {
                    const CampIcon = item.campHaven.icon
                    const TypicalIcon = item.typicalRenting.icon
                    
                    return (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-900">{item.category}</div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex flex-col items-center space-y-2">
                            <CampIcon className={`h-6 w-6 ${item.campHaven.color}`} />
                            <div className="font-medium text-gray-900">{item.campHaven.value}</div>
                            <div className="text-sm text-gray-600">{item.campHaven.details}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex flex-col items-center space-y-2">
                            <TypicalIcon className={`h-6 w-6 ${item.typicalRenting.color}`} />
                            <div className="font-medium text-gray-900">{item.typicalRenting.value}</div>
                            <div className="text-sm text-gray-600">{item.typicalRenting.details}</div>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why property owners choose our guaranteed rental model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <IconComponent className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-amber-600 mb-2">{benefit.metric}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From inspection to income in just 4 weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                      <p className="text-amber-600 font-medium">{step.timeframe}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we maintain and operate properties to maximize value and minimize risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg flex items-center justify-center">
              <span className="text-amber-700 font-medium">Property Inspection</span>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-amber-200 rounded-lg flex items-center justify-center">
              <span className="text-amber-700 font-medium">Professional Staging</span>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg flex items-center justify-center">
              <span className="text-amber-700 font-medium">Guest Management</span>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-amber-200 rounded-lg flex items-center justify-center">
              <span className="text-amber-700 font-medium">Maintenance Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Risk Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the risks and how we mitigate them.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-red-800">
                  <AlertTriangle className="h-6 w-6" />
                  Typical Renting Risks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <X className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Tenant Non-Payment</h4>
                      <p className="text-gray-600">Months of lost income and eviction costs</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <X className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Property Damage</h4>
                      <p className="text-gray-600">Expensive repairs often exceed security deposits</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <X className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Vacancy Losses</h4>
                      <p className="text-gray-600">No income during turnover periods</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <X className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Legal Issues</h4>
                      <p className="text-gray-600">Eviction proceedings and tenant disputes</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-green-800">
                  <Shield className="h-6 w-6" />
                  Camp Haven Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Guaranteed Income</h4>
                      <p className="text-gray-600">Fixed rent regardless of occupancy or tenant issues</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Comprehensive Coverage</h4>
                      <p className="text-gray-600">All damage and wear covered by our insurance</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Operations</h4>
                      <p className="text-gray-600">Expert management reduces operational risks</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Documented Processes</h4>
                      <p className="text-gray-600">Baseline inspections and ongoing documentation</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Owner Portal Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Owner Portal & Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your investment is available 24/7 in our secure owner portal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Portal Features</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-Time Dashboard</h4>
                    <p className="text-gray-600">View occupancy rates, performance metrics, and property status</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Payment Management</h4>
                    <p className="text-gray-600">Monthly statements, payment history, and profit share tracking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Contract Signing</h4>
                    <p className="text-gray-600">Digital contract management with e-signature capabilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Communication Hub</h4>
                    <p className="text-gray-600">Direct messaging with our team and maintenance request tracking</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Documentation Access</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Baseline inspection reports</li>
                    <li>• Monthly performance statements</li>
                    <li>• Maintenance logs and photos</li>
                    <li>• Insurance certificates</li>
                    <li>• Tax documents and 1099s</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Communication</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Direct messaging with property managers</li>
                    <li>• Maintenance request submissions</li>
                    <li>• Emergency contact system</li>
                    <li>• Monthly performance updates</li>
                    <li>• Contract renewal notifications</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Lower Risk, Higher Value?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join property owners who&apos;ve chosen guaranteed income over traditional rental risks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-amber-600 hover:bg-gray-50">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-amber-600">
              <Link href="/guarantee">View Our Guarantee</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
