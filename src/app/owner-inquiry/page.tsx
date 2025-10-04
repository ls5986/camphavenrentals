"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"
import { CheckCircle, Home, Mail, Phone, MapPin } from "lucide-react"
import { useRouter } from "next/navigation"

export const metadata = {
  title: "List Your Property | Camp Haven Rentals",
  description: "Start the process of listing your property with Camp Haven Rentals for guaranteed monthly rent.",
}

export default function OwnerInquiryPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property_address: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const { data, error } = await supabase
        .from('owner_inquiries')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          property_address: formData.property_address,
          status: 'pending'
        }])
        .select()

      if (error) throw error

      setIsSubmitted(true)
      
      // Send confirmation email
      try {
        await fetch('/api/send-inquiry-confirmation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ownerEmail: formData.email,
            ownerName: formData.name,
            propertyAddress: formData.property_address
          })
        })
      } catch (emailError) {
        console.error('Error sending confirmation email:', emailError)
        // Don't fail the form submission if email fails
      }
      
    } catch (err) {
      console.error('Error submitting inquiry:', err)
      setError('Failed to submit inquiry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <Card className="w-full max-w-md">
          <CardContent className="pt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You!
              </h2>
              <p className="text-gray-600 mb-6">
                We&apos;ve received your inquiry and will contact you within 24 hours with next steps.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Check your email for a confirmation and link to our detailed property questionnaire.
              </p>
              <div className="space-y-3">
                <Button 
                  onClick={() => router.push('/')}
                  className="w-full"
                >
                  Return to Homepage
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="w-full"
                >
                  Submit Another Property
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            List Your Property with Camp Haven
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with guaranteed monthly rent. Just a few quick details to begin the process.
          </p>
        </div>
      </section>

      {/* Quick Benefits */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Guaranteed Rent</h3>
              <p className="text-gray-600">Fixed monthly payments regardless of occupancy</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Full Coverage</h3>
              <p className="text-gray-600">We handle all wear-and-tear and guest incidents</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Process</h3>
              <p className="text-gray-600">Quick form now, detailed questionnaire later</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Property Inquiry</CardTitle>
              <p className="text-gray-600">
                Tell us about your property and we&apos;ll send you a detailed questionnaire
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="property_address">Property Address *</Label>
                    <Input
                      id="property_address"
                      name="property_address"
                      type="text"
                      required
                      value={formData.property_address}
                      onChange={handleInputChange}
                      placeholder="123 Main St, Joshua Tree, CA 92252"
                      className="mt-1"
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• We&apos;ll contact you within 24 hours</li>
                    <li>• You&apos;ll receive a detailed property questionnaire</li>
                    <li>• Our team reviews your property details</li>
                    <li>• We schedule a property inspection</li>
                    <li>• Contract drafting and final agreement</li>
                  </ul>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Trusted by Property Owners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">50+</div>
              <div className="text-sm text-gray-600">Properties Managed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">$2M+</div>
              <div className="text-sm text-gray-600">Owner Payments</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">99%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">24hr</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
