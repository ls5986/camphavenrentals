"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  DollarSign, 
  Calendar, 
  Download, 
  FileText, 
  Settings, 
  LogOut,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle,
  CreditCard,
  Banknote
} from "lucide-react"

// Mock data - will be replaced with Supabase data
const mockPayments = [
  {
    id: 1,
    date: "2024-01-01",
    amount: 7700,
    status: "completed",
    type: "monthly_rent",
    description: "January 2024 Monthly Rent",
    properties: ["Joshua Tree Desert Retreat", "Moroccan Sol Villa"],
    method: "ACH Transfer",
    reference: "CHR-2024-001"
  },
  {
    id: 2,
    date: "2023-12-01",
    amount: 7700,
    status: "completed",
    type: "monthly_rent",
    description: "December 2023 Monthly Rent",
    properties: ["Joshua Tree Desert Retreat", "Moroccan Sol Villa"],
    method: "ACH Transfer",
    reference: "CHR-2023-012"
  },
  {
    id: 3,
    date: "2023-11-15",
    amount: 250,
    status: "completed",
    type: "profit_share",
    description: "October 2023 Profit Share Bonus",
    properties: ["Moroccan Sol Villa"],
    method: "ACH Transfer",
    reference: "CHR-2023-PS-010"
  }
]

const mockUpcomingPayments = [
  {
    id: 4,
    date: "2024-02-01",
    amount: 7700,
    status: "scheduled",
    type: "monthly_rent",
    description: "February 2024 Monthly Rent",
    properties: ["Joshua Tree Desert Retreat", "Moroccan Sol Villa"]
  },
  {
    id: 5,
    date: "2024-03-01",
    amount: 7700,
    status: "scheduled",
    type: "monthly_rent",
    description: "March 2024 Monthly Rent",
    properties: ["Joshua Tree Desert Retreat", "Moroccan Sol Villa"]
  }
]

const mockStats = {
  totalPaid: 23100,
  averageMonthly: 7700,
  profitShare: 250,
  nextPayment: "2024-02-01"
}

export default function PaymentsPage() {
  const [selectedYear, setSelectedYear] = useState(2024)

  const getStatusColor = (status: string) => {
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "scheduled":
        return <Clock className="h-4 w-4 text-blue-600" />
      case "pending":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-600" />
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "monthly_rent":
        return <Banknote className="h-4 w-4 text-green-600" />
      case "profit_share":
        return <TrendingUp className="h-4 w-4 text-blue-600" />
      default:
        return <DollarSign className="h-4 w-4 text-gray-600" />
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
                <span className="text-xl font-bold text-gray-900">Payments</span>
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
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Paid</p>
                  <p className="text-2xl font-bold text-gray-900">${mockStats.totalPaid.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg Monthly</p>
                  <p className="text-2xl font-bold text-gray-900">${mockStats.averageMonthly.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Profit Share</p>
                  <p className="text-2xl font-bold text-gray-900">${mockStats.profitShare}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Next Payment</p>
                  <p className="text-lg font-bold text-gray-900">{mockStats.nextPayment}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment History */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Payment History</span>
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <select 
                      value={selectedYear} 
                      onChange={(e) => setSelectedYear(Number(e.target.value))}
                      className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                    >
                      <option value={2024}>2024</option>
                      <option value={2023}>2023</option>
                      <option value={2022}>2022</option>
                    </select>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockPayments.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start space-x-3">
                        {getTypeIcon(payment.type)}
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium text-gray-900">{payment.description}</h4>
                            {getStatusIcon(payment.status)}
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                              {payment.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {payment.properties.join(", ")}
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                            <span>Date: {payment.date}</span>
                            <span>Method: {payment.method}</span>
                            <span>Ref: {payment.reference}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">
                          +${payment.amount.toLocaleString()}
                        </div>
                        <Button variant="outline" size="sm" className="mt-2">
                          <Download className="h-3 w-3 mr-1" />
                          Receipt
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Payments & Payment Method */}
          <div className="space-y-6">
            {/* Upcoming Payments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Upcoming Payments</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockUpcomingPayments.map((payment) => (
                    <div key={payment.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{payment.description}</p>
                          <p className="text-sm text-gray-600">{payment.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">${payment.amount.toLocaleString()}</p>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                            {payment.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Payment Method</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">ACH Transfer</p>
                        <p className="text-sm text-gray-600">Primary method</p>
                      </div>
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Update Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Download All Statements
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Tax Documents
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Payment Schedule
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

