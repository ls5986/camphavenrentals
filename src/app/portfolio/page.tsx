import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Star, DollarSign, Calendar, Users } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Portfolio",
  description: "Case studies and examples of successful properties managed by Camp Haven Rentals.",
}

const caseStudies = [
  {
    id: 1,
    title: "Joshua Tree Desert Retreat",
    location: "Joshua Tree, CA",
    type: "Off-Grid Cabin",
    image: "/Joshua-Tree-Airbnb-Photographer.jpg.jpg",
    description: "A stunning 2-bedroom off-grid cabin with solar power, well water, and septic system.",
    metrics: {
      occupancy: "78%",
      adr: "$285",
      revenue: "$6,200/month",
      guests: "156/year"
    },
    features: ["Solar Power", "Well Water", "Septic System", "Hot Tub", "Desert Views"],
    testimonial: "Camp Haven Rentals transformed our remote property into a profitable investment. Their expertise with off-grid systems is unmatched."
  },
  {
    id: 2,
    title: "Big Bear Mountain Lodge",
    location: "Big Bear Lake, CA",
    type: "Mountain Cabin",
    image: "/C8E386CA-E68F-E483-2C9C8C50BA8B4DEE.jpg",
    description: "A cozy 3-bedroom mountain cabin with propane heating and winterization features.",
    metrics: {
      occupancy: "82%",
      adr: "$320",
      revenue: "$7,800/month",
      guests: "142/year"
    },
    features: ["Propane Heating", "Winterization", "Fireplace", "Mountain Views", "Bear Box"],
    testimonial: "The team handles everything from snow removal to guest management. We couldn&apos;t be happier with the results."
  },
  {
    id: 3,
    title: "Moroccan Sol Villa",
    location: "Joshua Tree, CA",
    type: "Desert Villa",
    image: "/Moroccan-Sol-Airbnb-Joshua-Tree-Mikeal-Beland-10-3.webp",
    description: "A luxurious 4-bedroom villa with panoramic red rock views and modern amenities.",
    metrics: {
      occupancy: "85%",
      adr: "$450",
      revenue: "$11,500/month",
      guests: "98/year"
    },
    features: ["Red Rock Views", "Pool", "Hot Tub", "Modern Kitchen", "Spiritual Retreat"],
    testimonial: "Our Sedona property has exceeded all expectations. The demand for unique desert experiences is incredible."
  },
  {
    id: 4,
    title: "Moab Adventure Base",
    location: "Moab, UT",
    type: "Adventure Lodge",
    image: "/Joshua-Tree-Airbnb-Photographer.jpg.jpg",
    description: "A 3-bedroom base camp for outdoor enthusiasts with gear storage and bike wash.",
    metrics: {
      occupancy: "76%",
      adr: "$380",
      revenue: "$8,600/month",
      guests: "134/year"
    },
    features: ["Gear Storage", "Bike Wash", "Adventure Planning", "National Park Access", "Outdoor Shower"],
    testimonial: "Perfect for adventure seekers. The property is always booked with outdoor enthusiasts."
  },
  {
    id: 5,
    title: "Santa Fe Adobe House",
    location: "Santa Fe, NM",
    type: "Adobe Retreat",
    image: "/Joshua-Tree-Airbnb-Photographer.jpg.jpg",
    description: "A traditional 2-bedroom adobe house with authentic Southwestern charm.",
    metrics: {
      occupancy: "71%",
      adr: "$295",
      revenue: "$6,300/month",
      guests: "128/year"
    },
    features: ["Adobe Construction", "Traditional Design", "Art Gallery", "Desert Garden", "Cultural Heritage"],
    testimonial: "The authentic adobe experience attracts art lovers and culture seekers from around the world."
  },
  {
    id: 6,
    title: "Idyllwild Forest Cabin",
    location: "Idyllwild, CA",
    type: "Forest Retreat",
    image: "/Joshua-Tree-Airbnb-Photographer.jpg.jpg",
    description: "A charming 2-bedroom cabin nestled in the San Jacinto Mountains.",
    metrics: {
      occupancy: "73%",
      adr: "$265",
      revenue: "$5,800/month",
      guests: "146/year"
    },
    features: ["Forest Setting", "Wood Stove", "Hiking Trails", "Mountain Air", "Peaceful Retreat"],
    testimonial: "Our forest cabin provides the perfect escape from city life. Guests love the tranquility."
  }
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Case studies of successful properties we manage across our target markets.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((property) => (
              <Card key={property.id} className="overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{property.title}</CardTitle>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                    </div>
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                      {property.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{property.description}</p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <Calendar className="h-4 w-4 text-amber-600" />
                        <span className="text-sm font-medium text-gray-900">{property.metrics.occupancy}</span>
                      </div>
                      <p className="text-xs text-gray-600">Occupancy</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <DollarSign className="h-4 w-4 text-amber-600" />
                        <span className="text-sm font-medium text-gray-900">{property.metrics.adr}</span>
                      </div>
                      <p className="text-xs text-gray-600">Average Daily Rate</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <DollarSign className="h-4 w-4 text-amber-600" />
                        <span className="text-sm font-medium text-gray-900">{property.metrics.revenue}</span>
                      </div>
                      <p className="text-xs text-gray-600">Monthly Revenue</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <Users className="h-4 w-4 text-amber-600" />
                        <span className="text-sm font-medium text-gray-900">{property.metrics.guests}</span>
                      </div>
                      <p className="text-xs text-gray-600">Annual Guests</p>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {property.features.map((feature, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-1 mb-2">
                      <Star className="h-4 w-4 text-amber-500 fill-current" />
                      <Star className="h-4 w-4 text-amber-500 fill-current" />
                      <Star className="h-4 w-4 text-amber-500 fill-current" />
                      <Star className="h-4 w-4 text-amber-500 fill-current" />
                      <Star className="h-4 w-4 text-amber-500 fill-current" />
                    </div>
                    <p className="text-xs text-gray-700 italic">&ldquo;{property.testimonial}&rdquo;</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portfolio Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our properties consistently outperform market averages in their respective categories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">78%</div>
              <p className="text-gray-600">Average Occupancy Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">$340</div>
              <p className="text-gray-600">Average Daily Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">$7,400</div>
              <p className="text-gray-600">Average Monthly Revenue</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">134</div>
              <p className="text-gray-600">Average Annual Guests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Properties Succeed */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Properties Succeed
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Market Expertise
              </h3>
              <p className="text-gray-600">
                Deep knowledge of each market&apos;s unique characteristics, demand patterns, and guest preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Off-Grid Specialization
              </h3>
              <p className="text-gray-600">
                Specialized expertise in managing properties with wells, septic systems, solar power, and propane.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Premium Positioning
              </h3>
              <p className="text-gray-600">
                Positioning properties as unique experiences that command premium rates and attract quality guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Portfolio?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can turn your property into a successful case study.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-amber-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Get Started Today
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
