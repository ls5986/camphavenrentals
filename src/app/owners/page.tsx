import { Timeline } from "@/components/Timeline"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/site.config"
import { CheckCircle, DollarSign, Home, FileText } from "lucide-react"

export const metadata = {
  title: "How It Works",
  description: "Learn how Camp Haven Rentals works with property owners to provide guaranteed rent and boutique care for off-grid properties.",
}

export default function OwnersPage() {
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
              We make property management simple with our proven 3-step process and flexible deal structures.
            </p>
          </div>
        </div>
      </section>

      {/* The Model in 3 Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Model in 3 Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial inspection to generating income, we handle everything.
            </p>
          </div>
          
          <Timeline />
        </div>
      </section>

      {/* Deal Structures */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Deal Structures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the structure that works best for your investment goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.dealStructures.map((deal, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    {index === 0 && <DollarSign className="h-8 w-8 text-amber-600" />}
                    {index === 1 && <FileText className="h-8 w-8 text-amber-600" />}
                    {index === 2 && <Home className="h-8 w-8 text-amber-600" />}
                    <CardTitle className="text-xl">{deal.name}</CardTitle>
                  </div>
                  <p className="text-amber-600 font-semibold">{deal.description}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{deal.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Property Owners Choose Us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Guaranteed Income
              </h3>
              <p className="text-gray-600">
                Fixed monthly rent regardless of occupancy
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No Wear & Tear Costs
              </h3>
              <p className="text-gray-600">
                We cover all guest-related wear and tear
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Flexible Terms
              </h3>
              <p className="text-gray-600">
                1-3 year leases with break clause
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Full Management
              </h3>
              <p className="text-gray-600">
                We handle everything from setup to maintenance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Own a property in one of our target markets? Let&apos;s discuss how we can turn it into a profitable investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-amber-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Tell Us About Your Property
            </a>
            <a
              href="/guarantee"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-amber-600 transition-colors"
            >
              Our Guarantee
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
