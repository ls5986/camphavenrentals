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
  Zap,
  Droplets,
  Wrench
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Lease Your Joshua Tree Property | Guaranteed Rent | Camp Haven Rentals",
  description: "We lease Joshua Tree properties for guaranteed monthly rent and operate them as Airbnb rentals. Specializing in off-grid properties with wells, septic, and solar systems.",
  keywords: "lease Joshua Tree property, guaranteed rent Joshua Tree, Airbnb property leasing, off-grid property leasing, Yucca Valley property leasing, Morongo Basin property leasing",
}

const joshuaTreeStats = {
  averageOccupancy: 87,
  averageDailyRate: 285,
  averageMonthlyRevenue: 6200,
  propertiesManaged: 45
}

const joshuaTreeFeatures = [
  {
    icon: Zap,
    title: "Solar Power Expertise",
    description: "We understand solar systems, battery storage, and off-grid power management"
  },
  {
    icon: Droplets,
    title: "Well & Water Systems",
    description: "Specialized knowledge of well maintenance, water quality, and septic systems"
  },
  {
    icon: Wrench,
    title: "Desert Maintenance",
    description: "Expert handling of desert-specific maintenance challenges and seasonal issues"
  },
  {
    icon: MapPin,
    title: "Local Market Knowledge",
    description: "Deep understanding of Joshua Tree market dynamics and guest preferences"
  }
]

const joshuaTreeTestimonials = [
  {
    name: "Sarah Chen",
    property: "Joshua Tree Desert Retreat",
    quote: "Camp Haven Rentals transformed our off-grid property into a profitable investment. Their expertise with solar and well systems is unmatched.",
    income: "$3,500/month",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    property: "Moroccan Sol Villa",
    quote: "The guaranteed rent gives us peace of mind, and their local team handles everything from maintenance to guest management.",
    income: "$4,200/month",
    rating: 5
  }
]

const joshuaTreeAreas = [
  "Joshua Tree",
  "Yucca Valley", 
  "Morongo Basin",
  "Pioneertown",
  "Landers",
  "Wonder Valley",
  "Twentynine Palms",
  "Desert Hot Springs"
]

export default function JoshuaTreePropertyManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Lease Your Joshua Tree Property
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We lease Joshua Tree properties for guaranteed monthly rent and operate them as premium Airbnb rentals. 
                Specializing in off-grid properties with wells, septic, and solar systems.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">87%</div>
                  <div className="text-sm text-gray-600">Average Occupancy</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">$285</div>
                  <div className="text-sm text-gray-600">Average Daily Rate</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">$6,200</div>
                  <div className="text-sm text-gray-600">Monthly Revenue</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">45</div>
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
                    alt="Joshua Tree Property"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/DJI_0600_16a842189fab06b69ec8ba68d296d776.jpg"
                    alt="Desert View"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Moroccan-Sol-Airbnb-Joshua-Tree-Mikeal-Beland-10-3.webp"
                    alt="Moroccan Sol Property"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/C8E386CA-E68F-E483-2C9C8C50BA8B4DEE.jpg"
                    alt="Desert Retreat"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Joshua Tree */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Lease Your Joshua Tree Property to Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in leasing and operating Joshua Tree properties as premium Airbnb rentals, offering guaranteed income with zero management headaches.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {joshuaTreeFeatures.map((feature, index) => {
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
                Joshua Tree Market Advantages
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Low Neighbor Density</h3>
                    <p className="text-gray-600">Remote properties mean fewer complaints and less regulatory pressure</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Unique Guest Experience</h3>
                    <p className="text-gray-600">Desert retreats command premium rates and attract quality guests</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Year-Round Demand</h3>
                    <p className="text-gray-600">Consistent demand from tourists, artists, and spiritual seekers</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Limited Competition</h3>
                    <p className="text-gray-600">Few management companies understand off-grid systems</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Joshua Tree Market Data</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Average Occupancy Rate</span>
                  <span className="font-bold text-amber-600">87%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Average Daily Rate</span>
                  <span className="font-bold text-amber-600">$285</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Peak Season Rate</span>
                  <span className="font-bold text-amber-600">$450+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Year-Round Demand</span>
                  <span className="font-bold text-amber-600">85%+</span>
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
              Areas We Serve in Joshua Tree Region
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We manage properties throughout the greater Joshua Tree area and Morongo Basin.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {joshuaTreeAreas.map((area, index) => (
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
              Joshua Tree Property Owner Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real testimonials from property owners who trust us with their Joshua Tree investments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {joshuaTreeTestimonials.map((testimonial, index) => (
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
            Ready to Lease Your Joshua Tree Property?
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
