import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  DollarSign, 
  Calendar, 
  Users, 
  Star,
  CheckCircle,
  TrendingUp,
  Shield,
  Home,
  Mountain,
  Sun,
  Heart
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Lease Your Sedona Property | Guaranteed Rent | Camp Haven Rentals",
  description: "We lease Sedona properties for guaranteed monthly rent and operate them as premium Airbnb rentals. Specializing in red rock properties and spiritual retreats.",
  keywords: "lease Sedona property, guaranteed rent Sedona, Airbnb property leasing, red rock property leasing, Sedona spiritual retreat leasing",
}

const sedonaStats = {
  averageOccupancy: 85,
  averageDailyRate: 450,
  averageMonthlyRevenue: 11500,
  propertiesManaged: 22
}

const sedonaFeatures = [
  {
    icon: Mountain,
    title: "Red Rock Expertise",
    description: "Understanding of SedonaSedonaSedona'sapos;sapos;s unique landscape, vortex sites, and spiritual tourism market"
  },
  {
    icon: Sun,
    title: "Desert Climate Management",
    description: "Expert handling of desert-specific maintenance, water conservation, and seasonal challenges"
  },
  {
    icon: Heart,
    title: "Spiritual Retreat Market",
    description: "Specialized knowledge of wellness tourism, meditation retreats, and healing center demand"
  },
  {
    icon: MapPin,
    title: "Local Market Knowledge",
    description: "Deep understanding of SedonaSedonaSedona'sapos;sapos;s tourism patterns, seasonal demand, and guest preferences"
  }
]

const sedonaTestimonials = [
  {
    name: "Jennifer Walsh",
    property: "Red Rock Vista Villa",
    quote: "Our Sedona property has exceeded all expectations. The demand for unique desert experiences is incredible, and Camp Haven handles everything perfectly.",
    income: "$4,800/month",
    rating: 5
  },
  {
    name: "Robert Kim",
    property: "Vortex Retreat House",
    quote: "The spiritual retreat market in Sedona is booming. Camp Haven's positioning and management have made our property a top performer.",
    income: "$5,200/month",
    rating: 5
  }
]

const sedonaAreas = [
  "Sedona",
  "Village of Oak Creek",
  "Cornville",
  "Cottonwood",
  "Camp Verde",
  "Jerome",
  "Clarkdale",
  "Rimrock"
]

export default function SedonaPropertyManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Lease Your Sedona Property
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We lease Sedona properties for guaranteed monthly rent and operate them as premium Airbnb rentals. 
                Specializing in red rock properties, spiritual retreats, and wellness tourism.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">85%</div>
                  <div className="text-sm text-gray-600">Average Occupancy</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">$450</div>
                  <div className="text-sm text-gray-600">Average Daily Rate</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">$11,500</div>
                  <div className="text-sm text-gray-600">Monthly Revenue</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">22</div>
                  <div className="text-sm text-gray-600">Properties Managed</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/contact">Lease Your Property</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link href="/how-it-works">How It Works</Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Joshua-Tree-Airbnb-Photographer.jpg.jpg"
                    alt="Sedona Red Rock Property"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Moroccan-Sol-Airbnb-Joshua-Tree-Mikeal-Beland-10-3.webp"
                    alt="Desert Retreat"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/C8E386CA-E68F-E483-2C9C8C50BA8B4DEE.jpg"
                    alt="Red Rock Views"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/DJI_0600_16a842189fab06b69ec8ba68d296d776.jpg"
                    alt="Spiritual Retreat"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sedona */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Lease Your Sedona Property to Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in leasing and operating Sedona properties as premium Airbnb rentals, capitalizing on the growing wellness and spiritual tourism market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sedonaFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Market Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sedona Market Advantages
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Spiritual Tourism Boom</h3>
                    <p className="text-gray-600">Growing demand for wellness retreats, meditation centers, and healing experiences</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Premium Rates</h3>
                    <p className="text-gray-600">Red rock properties command the highest rates in Arizona&apos;s vacation rental market</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Year-Round Demand</h3>
                    <p className="text-gray-600">Consistent demand from wellness seekers, artists, and nature enthusiasts</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Unique Positioning</h3>
                    <p className="text-gray-600">Few properties offer the combination of red rock views and spiritual retreat amenities</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sedona Market Data</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Average Occupancy Rate</span>
                  <span className="font-bold text-amber-600">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Average Daily Rate</span>
                  <span className="font-bold text-amber-600">$450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Peak Season Rate</span>
                  <span className="font-bold text-amber-600">$750+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Wellness Tourism</span>
                  <span className="font-bold text-amber-600">60%+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Guest Satisfaction</span>
                  <span className="font-bold text-amber-600">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve in Sedona Region
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We lease properties throughout the greater Sedona area and Verde Valley region.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sedonaAreas.map((area, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <MapPin className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">{area}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sedona Property Owner Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real testimonials from property owners who trust us with their Sedona investments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sedonaTestimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.property}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Monthly Income:</span>
                  <span className="font-semibold text-green-600">{testimonial.income}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Lease Your Sedona Property?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get guaranteed monthly rent with zero management responsibilities. We handle everything from Airbnb operations to maintenance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-amber-600 hover:bg-gray-50">
              <Link href="/contact">Lease Your Property</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-amber-600">
              <Link href="/how-it-works">Learn How It Works</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
