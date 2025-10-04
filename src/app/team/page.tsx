import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Mail, MapPin, Award, Users, Briefcase } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Our Team - Camp Haven Rentals",
  description: "Meet the experienced professionals behind Camp Haven Rentals, specializing in off-grid property management and rental arbitrage.",
}

const teamMembers = [
  {
    id: 1,
    name: "Sarah Mitchell",
    title: "Founder & CEO",
    image: "/3c267e60-7c19-40f0-92c6-960144107e6c.png",
    bio: "Sarah founded Camp Haven Rentals after 15 years in hospitality management and real estate investment. She specializes in off-grid property development and has successfully managed over 200 properties across the Southwest.",
    experience: "15+ years",
    specialties: ["Off-Grid Systems", "Property Development", "Strategic Planning"],
    education: "MBA, UCLA Anderson School of Management",
    certifications: ["Certified Property Manager (CPM)", "Real Estate Broker License"],
    linkedin: "https://linkedin.com/in/sarah-mitchell",
    email: "sarah@camphavenrentals.com"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Chief Operations Officer",
    image: "/3c267e60-7c19-40f0-92c6-960144107e6c.png",
    bio: "Michael oversees all day-to-day operations, from property maintenance to guest services. With a background in construction and hospitality, he ensures every property meets our high standards for guest experience.",
    experience: "12+ years",
    specialties: ["Operations Management", "Maintenance Systems", "Guest Experience"],
    education: "BS Civil Engineering, UC Berkeley",
    certifications: ["General Contractor License", "HVAC Certification"],
    linkedin: "https://linkedin.com/in/michael-rodriguez",
    email: "michael@camphavenrentals.com"
  },
  {
    id: 3,
    name: "Lisa Chen",
    title: "Head of Property Management",
    image: "/3c267e60-7c19-40f0-92c6-960144107e6c.png",
    bio: "Lisa leads our property management team, specializing in remote and off-grid properties. Her expertise in sustainable systems and local regulations ensures compliance and optimal performance.",
    experience: "10+ years",
    specialties: ["Remote Property Management", "Regulatory Compliance", "Sustainable Systems"],
    education: "MS Environmental Science, Stanford University",
    certifications: ["LEED Green Associate", "Property Management License"],
    linkedin: "https://linkedin.com/in/lisa-chen",
    email: "lisa@camphavenrentals.com"
  },
  {
    id: 4,
    name: "David Thompson",
    title: "Director of Business Development",
    image: "/3c267e60-7c19-40f0-92c6-960144107e6c.png",
    bio: "David focuses on expanding our portfolio and building relationships with property owners. His background in real estate investment and market analysis helps identify the best opportunities.",
    experience: "8+ years",
    specialties: ["Market Analysis", "Investment Strategy", "Owner Relations"],
    education: "MBA Finance, USC Marshall School",
    certifications: ["Chartered Financial Analyst (CFA)", "Real Estate Sales License"],
    linkedin: "https://linkedin.com/in/david-thompson",
    email: "david@camphavenrentals.com"
  },
  {
    id: 5,
    name: "Jennifer Walsh",
    title: "Guest Experience Manager",
    image: "/3c267e60-7c19-40f0-92c6-960144107e6c.png",
    bio: "Jennifer ensures every guest has an exceptional experience, from booking to checkout. Her background in luxury hospitality and customer service drives our high guest satisfaction ratings.",
    experience: "7+ years",
    specialties: ["Guest Services", "Customer Experience", "Quality Assurance"],
    education: "BA Hospitality Management, Cornell University",
    certifications: ["Certified Hospitality Supervisor", "Customer Service Excellence"],
    linkedin: "https://linkedin.com/in/jennifer-walsh",
    email: "jennifer@camphavenrentals.com"
  },
  {
    id: 6,
    name: "Robert Kim",
    title: "Technology & Systems Director",
    image: "/3c267e60-7c19-40f0-92c6-960144107e6c.png",
    bio: "Robert manages our technology infrastructure, from booking systems to property monitoring. His expertise in PropTech and automation helps us operate efficiently at scale.",
    experience: "9+ years",
    specialties: ["PropTech Integration", "System Automation", "Data Analytics"],
    education: "MS Computer Science, MIT",
    certifications: ["AWS Solutions Architect", "Certified Scrum Master"],
    linkedin: "https://linkedin.com/in/robert-kim",
    email: "robert@camphavenrentals.com"
  }
]

const companyStats = [
  {
    metric: "Properties Managed",
    value: "200+",
    description: "Across 10+ markets"
  },
  {
    metric: "Years Combined Experience",
    value: "75+",
    description: "In hospitality & real estate"
  },
  {
    metric: "Guest Satisfaction",
    value: "4.9/5",
    description: "Average rating across all properties"
  },
  {
    metric: "Owner Retention",
    value: "98%",
    description: "Of owners continue with us"
  }
]

const certifications = [
  {
    name: "Certified Property Manager (CPM)",
    issuer: "Institute of Real Estate Management",
    description: "Premier certification for property management professionals"
  },
  {
    name: "Real Estate Broker License",
    issuer: "California Department of Real Estate",
    description: "Licensed to conduct real estate transactions"
  },
  {
    name: "General Contractor License",
    issuer: "California Contractors State License Board",
    description: "Licensed for construction and renovation projects"
  },
  {
    name: "LEED Green Associate",
    issuer: "U.S. Green Building Council",
    description: "Certification in sustainable building practices"
  },
  {
    name: "Chartered Financial Analyst (CFA)",
    issuer: "CFA Institute",
    description: "Premier certification for investment professionals"
  },
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    description: "Certification in cloud architecture and technology"
  }
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who make Camp Haven Rentals the trusted choice for off-grid property management.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-amber-600 mb-2">{stat.value}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{stat.metric}</h3>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team brings together decades of experience in hospitality, real estate, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-amber-600 font-medium">{member.title}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Briefcase className="h-4 w-4" />
                    <span>{member.experience} experience</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, index) => (
                        <span key={index} className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                    <p className="text-sm text-gray-600">{member.education}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Certifications</h4>
                    <div className="space-y-1">
                      {member.certifications.map((cert, index) => (
                        <p key={index} className="text-xs text-gray-600">{cert}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={member.linkedin}
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 inline mr-1" />
                      LinkedIn
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex-1 bg-gray-600 text-white text-center py-2 px-3 rounded text-sm hover:bg-gray-700 transition-colors"
                    >
                      <Mail className="h-4 w-4 inline mr-1" />
                      Email
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Credentials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team maintains the highest professional standards with industry-leading certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <Award className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{cert.name}</h3>
                    <p className="text-sm text-amber-600 mb-2">{cert.issuer}</p>
                    <p className="text-xs text-gray-600">{cert.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trust</h3>
              <p className="text-gray-600">
                Building long-term relationships through transparency and reliability.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                Maintaining the highest standards in property management and guest experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Promoting eco-friendly practices and sustainable property management.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Leveraging technology and creative solutions to maximize property value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our experienced team can help maximize your property&apos;s potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-amber-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Contact Our Team
            </a>
            <a
              href="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-amber-600 transition-colors"
            >
              Learn About Our Process
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

