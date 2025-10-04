"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Home, 
  DollarSign, 
  Calendar, 
  Users, 
  FileText, 
  Settings, 
  LogOut,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  MapPin,
  Bed,
  Bath,
  Square
} from "lucide-react"

// Mock data - will be replaced with Supabase data
const mockProperties = [
  {
    id: 1,
    name: "Joshua Tree Desert Retreat",
    address: "123 Desert View Dr, Joshua Tree, CA 92252",
    monthlyRent: 3500,
    occupancy: 87,
    lastPayment: "2024-01-01",
    nextPayment: "2024-02-01",
    status: "active",
    image: "/Joshua-Tree-Airbnb-Photographer.jpg.jpg",
    details: {
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      guests: 4
    },
    performance: {
      totalRevenue: 42000,
      avgNightlyRate: 175,
      totalBookings: 240,
      avgLengthOfStay: 2.5
    }
  },
  {
    id: 2,
    name: "Moroccan Sol Villa",
    address: "456 Moroccan Way, Joshua Tree, CA 92252",
    monthlyRent: 4200,
    occupancy: 92,
    lastPayment: "2024-01-01",
    nextPayment: "2024-02-01",
    status: "active",
    image: "/Moroccan-Sol-Airbnb-Joshua-Tree-Mikeal-Beland-10-3.webp",
    details: {
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      guests: 6
    },
    performance: {
      totalRevenue: 50400,
      avgNightlyRate: 210,
      totalBookings: 240,
      avgLengthOfStay: 2.8
    }
  }
]

const mockMaintenance = [
  {
    id: 1,
    propertyId: 1,
    title: "HVAC Filter Replacement",
    description: "Regular monthly filter change",
    status: "completed",
    date: "2024-01-15",
    cost: 45
  },
  {
    id: 2,
    propertyId: 2,
    title: "Pool Cleaning",
    description: "Weekly pool maintenance",
    status: "scheduled",
    date: "2024-01-25",
    cost: 120
  }
]

export default function PropertiesPage() {
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "maintenance":
        return "bg-yellow-100 text-yellow-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getMaintenanceStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "scheduled":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/owner-portal/dashboard" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CH</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Properties</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/owner-portal/dashboard">
                <Button variant="outline" size="sm">Back to Dashboard</Button>
              </Link>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Properties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mockProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
                    {property.status}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{property.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.address}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">
                      ${property.monthlyRent.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">monthly rent</div>
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent>
                {/* Property Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Bed className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">{property.details.bedrooms} beds</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">{property.details.bathrooms} baths</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Square className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">{property.details.sqft} sqft</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">Sleeps {property.details.guests}</span>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Performance</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">Occupancy Rate</div>
                      <div className="text-lg font-bold text-blue-600">{property.occupancy}%</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Avg Nightly Rate</div>
                      <div className="text-lg font-bold text-green-600">${property.performance.avgNightlyRate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Total Bookings</div>
                      <div className="text-lg font-bold text-gray-900">{property.performance.totalBookings}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Avg Stay Length</div>
                      <div className="text-lg font-bold text-gray-900">{property.performance.avgLengthOfStay} nights</div>
                    </div>
                  </div>
                </div>

                {/* Payment Info */}
                <div className="bg-green-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Payment Information</h4>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-600">Last Payment</div>
                      <div className="font-medium">{property.lastPayment}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Next Payment</div>
                      <div className="font-medium">{property.nextPayment}</div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1">
                    <FileText className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Maintenance Section */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Recent Maintenance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockMaintenance.map((item) => {
                  const property = mockProperties.find(p => p.id === item.propertyId)
                  return (
                    <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-medium text-gray-900">{item.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMaintenanceStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-sm text-gray-600">
                            Property: <span className="font-medium">{property?.name}</span>
                          </span>
                          <span className="text-sm text-gray-600">
                            Date: <span className="font-medium">{item.date}</span>
                          </span>
                          <span className="text-sm text-gray-600">
                            Cost: <span className="font-medium">${item.cost}</span>
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

