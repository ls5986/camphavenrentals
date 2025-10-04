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
  Compass,
  Bike
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Lease Your Moab Property | Guaranteed Rent | Camp Haven Rentals",
  description: "We lease Moab properties for guaranteed monthly rent and operate them as premium Airbnb rentals. Specializing in adventure tourism and national park access.",
  keywords: "lease Moab property, guaranteed rent Moab, Airbnb property leasing, adventure property leasing, Moab national park property leasing",
}

const moabStats = {
  averageOccupancy: 76,
  averageDailyRate: 380,
  averageMonthlyRevenue: 8600,
  propertiesManaged: 18
}

const moabFeatures = [
  {
    icon: Mountain,
    title: "Adventure Tourism Expertise",
    description: "Understanding of Moab's outdoor recreation market, national park access, and adventure sports demand"
  },
  {
    icon: Bike,
    title: "Outdoor Recreation Focus",
    description: "Specialized knowledge of mountain biking, hiking, rock climbing, and off-road vehicle tourism"
  },
  {
    icon: Compass,
    title: "National Park Access",
    description: "Expert positioning for properties near Arches and Canyonlands National Parks"
  },
  {
    icon: MapPin,
    title: "Local Market Knowledge",
    description: "Deep understanding of Moab's seasonal patterns, event tourism, and adventure group bookings"
  }
]

const moabTestimonials = [
  {
    name: "Maria Santos",
    property: "Adventure Base Camp",
    quote: "Perfect for adventure seekers. The property is always booked with outdoor enthusiasts visiting the national parks.",
    income: "$4,200/month",
    rating: 5
  },
  {
    name: "Thomas Foster",
    property: "Red Rock Adventure Lodge",
    quote: "Camp Haven's understanding of the Moab market and adventure tourism has made our property incredibly successful.",
    income: "$4,800/month",
    rating: 5
  }
]

const moabAreas = [
  "Moab",
  "Spanish Valley",
  "Castle Valley",
  "Thompson Springs",
  "Green River",
  "Cisco",
  "Crescent Junction",
  "Monticello"
]

export default function MoabPropertyManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Lease Your Moab Property
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We lease Moab properties for guaranteed monthly rent and operate them as premium Airbnb rentals. 
                Specializing in adventure tourism, national park access, and outdoor recreation.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">76%</div>
                  <div className="text-sm text-gray-600">Average Occupancy</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">$380</div>
                  <div className="text-sm text-gray-600">Average Daily Rate</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">$8,600</div>
                  <div className="text-sm text-gray-600">Monthly Revenue</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">18</div>
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
                    src="/C8E386CA-E68F-E483-2C9C8C50BA8B4DEE.jpg"
                    alt="Moab Adventure Property"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Joshua-Tree-Airbnb-Photographer.jpg.jpg"
                    alt="Red Rock Views"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Moroccan-Sol-Airbnb-Joshua-Tree-Mikeal-Beland-10-3.webp"
                    alt="Adventure Base"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/DJI_0600_16a842189fab06b69ec8ba68d296d776.jpg"
                    alt="National Park Access"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Moab */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Lease Your Moab Property to Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in leasing and operating Moab properties as premium Airbnb rentals, capitalizing on the booming adventure tourism market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {moabFeatures.map((feature, index) => {
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
                Moab Market Advantages
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Adventure Tourism Capital</h3>
                    <p className="text-gray-600">World-renowned destination for mountain biking, rock climbing, and off-road adventures</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">National Park Access</h3>
                    <p className="text-gray-600">Proximity to Arches and Canyonlands National Parks drives consistent demand</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Group Bookings</h3>
                    <p className="text-gray-600">Adventure groups, corporate retreats, and outdoor clubs book larger properties</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Seasonal Events</h3>
                    <p className="text-gray-600">Moab events like Easter Jeep Safari and mountain bike festivals create peak demand</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Moab Market Data</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Average Occupancy Rate</span>
                  <span className="font-bold text-amber-600">76%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Average Daily Rate</span>
                  <span className="font-bold text-amber-600">$380</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Peak Season Rate</span>
                  <span className="font-bold text-amber-600">$650+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Adventure Tourism</span>
                  <span className="font-bold text-amber-600">70%+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Guest Satisfaction</span>
                  <span className="font-bold text-amber-600">4.8/5</span>
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
              Areas We Serve in Moab Region
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We lease properties throughout the greater Moab area and surrounding adventure destinations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {moabAreas.map((area, index) => (
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
              Moab Property Owner Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real testimonials from property owners who trust us with their Moab investments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {moabTestimonials.map((testimonial, index) => (
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
            Ready to Lease Your Moab Property?
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
