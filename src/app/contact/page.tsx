import { ContactForm } from "@/components/ContactForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/site.config"
import { Mail, Clock, MessageSquare, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Contact",
  description: "Get in touch with Camp Haven Rentals to discuss your property and learn how we can help you achieve your investment goals.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to turn your property into a profitable investment? Let&apos;s discuss how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-amber-600" />
                    <span>Get in Touch</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                      <a 
                        href={`mailto:${siteConfig.email}`}
                        className="text-amber-600 hover:text-amber-700 transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                      <p className="text-gray-600">We typically respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-amber-600" />
                    <span>What to Expect</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Initial Assessment</h4>
                        <p className="text-gray-600 text-sm">We&apos;ll review your property details and market potential</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Market Analysis</h4>
                        <p className="text-gray-600 text-sm">Detailed analysis of your property&apos;s rental potential</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Partnership Discussion</h4>
                        <p className="text-gray-600 text-sm">Explore how we can work together for mutual success</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-amber-600" />
                    <span>Quick Links</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a 
                      href="/owners" 
                      className="block text-amber-600 hover:text-amber-700 transition-colors"
                    >
                      How It Works
                    </a>
                    <a 
                      href="/guarantee" 
                      className="block text-amber-600 hover:text-amber-700 transition-colors"
                    >
                      Our Guarantee
                    </a>
                    <a 
                      href="/markets" 
                      className="block text-amber-600 hover:text-amber-700 transition-colors"
                    >
                      Target Markets
                    </a>
                    <a 
                      href="/faq" 
                      className="block text-amber-600 hover:text-amber-700 transition-colors"
                    >
                      Frequently Asked Questions
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Contact Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in turning challenging properties into profitable investments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Off-Grid Expertise
              </h3>
              <p className="text-gray-600">
                We understand the complexities of managing properties with wells, septic systems, and solar power.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Guaranteed Income
              </h3>
              <p className="text-gray-600">
                Fixed monthly rent regardless of occupancy, with all wear and tear covered by us.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Complete Protection
              </h3>
              <p className="text-gray-600">
                Comprehensive insurance, documentation, and liability transfer for peace of mind.
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
            Don&apos;t wait. Contact us today to discuss your property and learn how we can help you achieve your investment goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-amber-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Email Us Directly
            </a>
            <a
              href="/owners"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-amber-600 transition-colors"
            >
              Learn More First
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
