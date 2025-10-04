import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Blog - Camp Haven Rentals",
  description: "Expert insights on rental arbitrage, property leasing, and Airbnb management for off-grid and remote properties.",
}

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Renting Your Joshua Tree Property",
    slug: "complete-guide-renting-joshua-tree-property",
    excerpt: "Everything you need to know about leasing your Joshua Tree property for guaranteed income and Airbnb management.",
    image: "/Joshua-Tree-Airbnb-Photographer.jpg.jpg",
    category: "Joshua Tree",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    author: "Sarah Mitchell"
  },
  {
    id: 2,
    title: "Big Bear Cabin Management: What You Need to Know",
    slug: "big-bear-cabin-management-guide",
    excerpt: "Learn how to maximize your Big Bear cabin investment through professional leasing and Airbnb management.",
    image: "/C8E386CA-E68F-E483-2C9C8C50BA8B4DEE.jpg",
    category: "Big Bear",
    readTime: "6 min read",
    publishDate: "2024-01-10",
    author: "Michael Rodriguez"
  },
  {
    id: 3,
    title: "Off-Grid Property Management: Wells, Septic, and Solar",
    slug: "off-grid-property-management-guide",
    excerpt: "Expert guide to managing off-grid properties with wells, septic systems, and solar power for Airbnb rentals.",
    image: "/Moroccan-Sol-Airbnb-Joshua-Tree-Mikeal-Beland-10-3.webp",
    category: "Property Management",
    readTime: "10 min read",
    publishDate: "2024-01-05",
    author: "Lisa Chen"
  },
  {
    id: 4,
    title: "Guaranteed Rent vs. Traditional Property Management",
    slug: "guaranteed-rent-vs-traditional-management",
    excerpt: "Compare guaranteed rent models with traditional property management to find the best option for your investment.",
    image: "/3c267e60-7c19-40f0-92c6-960144107e6c.png",
    category: "Investment Strategy",
    readTime: "7 min read",
    publishDate: "2024-01-01",
    author: "David Thompson"
  },
  {
    id: 5,
    title: "Market Analysis: Joshua Tree vs. Big Bear Property Investment",
    slug: "joshua-tree-vs-big-bear-investment-analysis",
    excerpt: "Comprehensive market analysis comparing Joshua Tree and Big Bear for property investment and rental arbitrage opportunities.",
    image: "/DJI_0600_16a842189fab06b69ec8ba68d296d776.jpg",
    category: "Market Analysis",
    readTime: "12 min read",
    publishDate: "2023-12-28",
    author: "Sarah Mitchell"
  }
]

const categories = [
  "All",
  "Joshua Tree",
  "Big Bear", 
  "Property Management",
  "Investment Strategy",
  "Market Analysis"
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Camp Haven Rentals Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights on rental arbitrage, property leasing, and Airbnb management for off-grid and remote properties.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All" 
                    ? "bg-amber-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.publishDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest insights on rental arbitrage and property investment delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

