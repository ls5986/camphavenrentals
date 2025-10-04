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
  Snowflake,
  Flame,
  Wrench
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Big Bear Property Management | Guaranteed Rent | Camp Haven Rentals",
  description: "Specialized property management for Big Bear mountain cabins. Guaranteed monthly rent, winterization expertise, snow removal, and bear box management.",
  keywords: "Big Bear property management, guaranteed rent Big Bear, cabin management, mountain property management, Big Bear Lake property management",
}

const bigBearStats = {
  averageOccupancy: 82,
  averageDailyRate: 320,
  averageMonthlyRevenue: 7800,
  propertiesManaged: 28
}

const bigBearFeatures = [
  {
    icon: Snowflake,
    title: "Winterization Expertise",
    description: "Professional winterization, snow removal, and cold-weather maintenance"
  },
  {
    icon: Flame,
    title: "Propane & Heating Systems",
    description: "Expert management of propane systems, fireplaces, and mountain heating"
  },
  {
    icon: Wrench,
    title: "Mountain Maintenance",
    description: "Specialized knowledge of mountain-specific maintenance and seasonal challenges"
  },
  {
    icon: MapPin,
    title: "Local Market Knowledge",
    description: "Deep understanding of Big Bear market dynamics and seasonal demand patterns"
  }
]

const bigBearTestimonials = [
  {
    name: "David Rodriguez",
    property: "Big Bear Mountain Lodge",
    quote: "The team handles everything from snow removal to guest management. We couldn't be happier with the results and the guaranteed income.",
    income: "$4,200/month",
    rating: 5
  },
  {
    name: "Lisa Thompson",
    property: "Alpine Retreat Cabin",
    quote: "Our cabin generates consistent income year-round. Their winterization expertise gives us peace of mind during harsh weather.",
    income: "$3,800/month",
    rating: 5
  }
]

const bigBearAreas = [
  "Big Bear Lake",
  "Big Bear City",
  "Fawnskin",
  "Sugarloaf",
  "Moonridge",
  "Erwin Lake",
  "Lake Arrowhead",
  "Crestline"
]

export default function BigBearPropertyManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Big Bear Property Management
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Specialized property management for Big Bear mountain cabins. 
                Guaranteed monthly rent, winterization expertise, and year-round maintenance.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">82%</div>
                  <div className="text-sm text-gray-600">Average Occupancy</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">$320</div>
                  <div className="text-sm text-gray-600">Average Daily Rate</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">$7,800</div>
                  <div className="text-sm text-gray-600">Monthly Revenue</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">28</div>
                  <div className="text-sm text-gray-600">Properties Managed</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/contact">Get Free Property Analysis</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link href="/guarantee">View Our Guarantee</Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/C8E386CA-E68F-E483-2C9C8C50BA8B4DEE.jpg"
                    alt="Big Bear Cabin"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/3c267e60-7c19-40f0-92c6-960144107e6c.png"
                    alt="Mountain View"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Joshua-Tree-Airbnb-Photographer.jpg.jpg"
                    alt="Alpine Retreat"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Moroccan-Sol-Airbnb-Joshua-Tree-Mikeal-Beland-10-3.webp"
                    alt="Mountain Lodge"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Big Bear */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Big Bear Properties Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Big Bear offers unique advantages for property owners looking to maximize their mountain cabin investments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bigBearFeatures.map((feature, index) => {
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
                Big Bear Market Advantages
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Year-Round Tourism</h3>
                    <p className="text-gray-600">Summer recreation and winter sports create consistent demand</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Premium Rates</h3>
                    <p className="text-gray-600">Mountain cabins command higher rates than traditional rentals</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Limited Supply</h3>
                    <p className="text-gray-600">Fewer mountain properties available for short-term rental</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Guests</h3>
                    <p className="text-gray-600">Attracts families and groups willing to pay premium rates</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Big Bear Market Data</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Average Occupancy Rate</span>
                  <span className="font-bold text-amber-600">82%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Average Daily Rate</span>
                  <span className="font-bold text-amber-600">$320</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Peak Season Rate</span>
                  <span className="font-bold text-amber-600">$500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Winter Occupancy</span>
                  <span className="font-bold text-amber-600">85%+</span>
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
              Areas We Serve in Big Bear Region
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We manage properties throughout the Big Bear Lake area and surrounding mountain communities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bigBearAreas.map((area, index) => (
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
              Big Bear Property Owner Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real testimonials from property owners who trust us with their Big Bear investments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bigBearTestimonials.map((testimonial, index) => (
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
            Ready to Maximize Your Big Bear Property?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free property analysis and discover how much guaranteed income your Big Bear cabin could generate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-amber-600 hover:bg-gray-50">
              <Link href="/contact">Get Free Property Analysis</Link>
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
