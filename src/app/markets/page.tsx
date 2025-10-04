import { MarketsGrid } from "@/components/MarketsGrid"
import { siteConfig } from "@/site.config"

export const metadata = {
  title: "Markets Overview",
  description: "Explore the markets where Camp Haven Rentals operates, specializing in off-grid and remote properties.",
}

export default function MarketsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Markets Overview
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in off-grid and hard-to-rent properties in markets with low neighbor density and unique appeal.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Markets */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MarketsGrid 
            markets={siteConfig.primaryMarkets} 
            title="Primary Markets" 
            isPrimary={true}
          />
        </div>
      </section>

      {/* Additional Markets */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MarketsGrid 
            markets={siteConfig.additionalMarkets} 
            title="Additional Markets"
            isPrimary={false}
          />
        </div>
      </section>

      {/* Market Strategy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Market Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We focus on markets that offer unique opportunities for off-grid and remote properties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Remote Locations
              </h3>
              <p className="text-gray-600">
                Properties in scenic, remote areas with unique appeal and lower neighbor density.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Off-Grid Systems
              </h3>
              <p className="text-gray-600">
                Properties with wells, septic systems, solar power, and propane that require special expertise.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                High Demand
              </h3>
              <p className="text-gray-600">
                Markets with strong tourism appeal and growing demand for unique accommodation experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Markets */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why These Markets?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Low Neighbor Density
              </h3>
              <p className="text-gray-600 mb-6">
                Remote properties mean fewer neighbor complaints and less regulatory pressure. 
                We focus on areas where short-term rentals are more accepted and less likely to face restrictions.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Unique Appeal
              </h3>
              <p className="text-gray-600 mb-6">
                Off-grid properties offer guests a unique experience they can&apos;t find in traditional hotels. 
                This creates strong demand and allows for premium pricing.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Specialized Expertise
              </h3>
              <p className="text-gray-600">
                Our team understands the complexities of managing properties with wells, septic systems, 
                solar power, and propane. This expertise creates barriers to entry for competitors.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Market Advantages
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Fewer regulatory restrictions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Higher average daily rates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Strong seasonal demand</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Limited competition</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Unique guest experiences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Own a Property in One of These Markets?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can turn your off-grid or remote property into a profitable investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-amber-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Tell Us About Your Property
            </a>
            <a
              href="/owners"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-amber-600 transition-colors"
            >
              Learn How It Works
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
