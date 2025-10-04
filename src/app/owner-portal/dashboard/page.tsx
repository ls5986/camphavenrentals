"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  DollarSign, 
  Calendar, 
  Home, 
  Users, 
  FileText, 
  Settings, 
  LogOut,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock
} from "lucide-react"
import { siteConfig } from "@/site.config"

// Mock data - will be replaced with Supabase data
const mockProperties = [
  {
    id: 1,
    name: "Joshua Tree Desert Retreat",
    address: "123 Desert View Dr, Joshua Tree, CA",
    monthlyRent: 3500,
    occupancy: 87,
    lastPayment: "2024-01-01",
    nextPayment: "2024-02-01",
    status: "active",
    image: "/Joshua-Tree-Airbnb-Photographer.jpg.jpg"
  },
  {
    id: 2,
    name: "Moroccan Sol Villa",
    address: "456 Moroccan Way, Joshua Tree, CA",
    monthlyRent: 4200,
    occupancy: 92,
    lastPayment: "2024-01-01",
    nextPayment: "2024-02-01",
    status: "active",
    image: "/Moroccan-Sol-Airbnb-Joshua-Tree-Mikeal-Beland-10-3.webp"
  }
]

const mockStats = {
  totalMonthlyIncome: 7700,
  averageOccupancy: 89.5,
  totalProperties: 2,
  pendingRequests: 3
}

const mockRecentActivity = [
  {
    id: 1,
    type: "payment",
    message: "January rent payment received",
    amount: 7700,
    date: "2024-01-01",
    status: "completed"
  },
  {
    id: 2,
    type: "maintenance",
    message: "HVAC maintenance scheduled",
    property: "Joshua Tree Desert Retreat",
    date: "2024-01-15",
    status: "scheduled"
  },
  {
    id: 3,
    type: "contract",
    message: "Lease renewal documents ready",
    property: "Moroccan Sol Villa",
    date: "2024-01-20",
    status: "pending"
  }
]

export default function OwnerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "scheduled":
        return <Calendar className="h-4 w-4 text-blue-600" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600"
      case "pending":
        return "text-yellow-600"
      case "scheduled":
        return "text-blue-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CH</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Owner Portal</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome back, Owner</span>
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
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Monthly Income</p>
                  <p className="text-2xl font-bold text-gray-900">${mockStats.totalMonthlyIncome.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg Occupancy</p>
                  <p className="text-2xl font-bold text-gray-900">{mockStats.averageOccupancy}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Home className="h-6 w-6 text-amber-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Properties</p>
                  <p className="text-2xl font-bold text-gray-900">{mockStats.totalProperties}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-gray-900">{mockStats.pendingRequests}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Properties */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Home className="h-5 w-5" />
                  <span>Your Properties</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockProperties.map((property) => (
                    <div key={property.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className="w-20 h-20 relative rounded-lg overflow-hidden">
                        <Image
                          src={property.image}
                          alt={property.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{property.name}</h3>
                        <p className="text-sm text-gray-600">{property.address}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-sm text-gray-600">
                            Rent: <span className="font-medium">${property.monthlyRent.toLocaleString()}</span>
                          </span>
                          <span className="text-sm text-gray-600">
                            Occupancy: <span className="font-medium">{property.occupancy}%</span>
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockRecentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      {getStatusIcon(activity.status)}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                        {activity.property && (
                          <p className="text-xs text-gray-600">{activity.property}</p>
                        )}
                        {activity.amount && (
                          <p className="text-xs text-green-600 font-medium">+${activity.amount.toLocaleString()}</p>
                        )}
                        <p className="text-xs text-gray-500">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/owner-portal/contracts">
                    <FileText className="h-4 w-4 mr-2" />
                    View All Contracts
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  View Statements
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Inspection
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
