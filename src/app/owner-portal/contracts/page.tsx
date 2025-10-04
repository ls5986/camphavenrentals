import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  FileText, 
  Download, 
  Eye,
  CheckCircle,
  Wrench,
  AlertTriangle,
  Shield,
  Home,
  Calendar,
  DollarSign
} from "lucide-react"

export const metadata = {
  title: "Contract Management | Owner Portal | Camp Haven Rentals",
  description: "Access all lease agreements, service contracts, and legal documents.",
}

const contracts = [
  {
    id: "lease-agreement",
    title: "Property Lease Agreement",
    description: "Main lease agreement for guaranteed rent program",
    icon: FileText,
    href: "/owner-portal/contract",
    status: "Active",
    lastUpdated: "2024-01-15",
    category: "Primary Agreement"
  },
  {
    id: "maintenance-agreement",
    title: "Maintenance Service Agreement",
    description: "Property maintenance coordination services",
    icon: Wrench,
    href: "/owner-portal/contracts/maintenance-agreement",
    status: "Optional",
    lastUpdated: "2024-01-10",
    category: "Service Agreement"
  },
  {
    id: "baseline-inspection",
    title: "Baseline Inspection Agreement",
    description: "Property condition documentation protocol",
    icon: CheckCircle,
    href: "/owner-portal/contracts/baseline-inspection",
    status: "Required",
    lastUpdated: "2024-01-05",
    category: "Inspection"
  },
  {
    id: "emergency-response",
    title: "Emergency Response Agreement",
    description: "24/7 emergency response and incident management",
    icon: AlertTriangle,
    href: "/owner-portal/contracts/emergency-response",
    status: "Included",
    lastUpdated: "2024-01-12",
    category: "Emergency Services"
  },
  {
    id: "insurance-coordination",
    title: "Insurance Coordination Agreement",
    description: "Insurance coverage coordination and liability management",
    icon: Shield,
    href: "/owner-portal/contracts/insurance-coordination",
    status: "Required",
    lastUpdated: "2024-01-08",
    category: "Insurance"
  }
]

const contractCategories = [
  {
    name: "Primary Agreement",
    count: 1,
    color: "bg-blue-100 text-blue-800"
  },
  {
    name: "Service Agreement", 
    count: 1,
    color: "bg-green-100 text-green-800"
  },
  {
    name: "Inspection",
    count: 1,
    color: "bg-purple-100 text-purple-800"
  },
  {
    name: "Emergency Services",
    count: 1,
    color: "bg-red-100 text-red-800"
  },
  {
    name: "Insurance",
    count: 1,
    color: "bg-amber-100 text-amber-800"
  }
]

export default function ContractsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Contract Management</h1>
              <p className="text-gray-600 mt-2">Access and manage all lease agreements and service contracts</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export All</span>
              </Button>
              <Button className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>New Contract</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Contract Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Contract Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {contractCategories.map((category) => (
              <div key={category.name} className="text-center">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                  {category.name}
                </div>
                <p className="text-xs text-gray-500 mt-1">{category.count} contract{category.count !== 1 ? 's' : ''}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contracts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contracts.map((contract) => {
            const IconComponent = contract.icon
            return (
              <Card key={contract.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{contract.title}</CardTitle>
                        <p className="text-sm text-gray-600">{contract.category}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      contract.status === 'Active' ? 'bg-green-100 text-green-800' :
                      contract.status === 'Required' ? 'bg-red-100 text-red-800' :
                      contract.status === 'Included' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {contract.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{contract.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>Last updated: {contract.lastUpdated}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link href={contract.href}>
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Quick Actions */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <FileText className="h-6 w-6" />
                  <span>View All Contracts</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Download className="h-6 w-6" />
                  <span>Download Package</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Calendar className="h-6 w-6" />
                  <span>Contract Calendar</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contract Status Summary */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Contract Status Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">1</div>
                  <div className="text-sm text-gray-600">Active Contracts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">2</div>
                  <div className="text-sm text-gray-600">Required Contracts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1</div>
                  <div className="text-sm text-gray-600">Included Services</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">1</div>
                  <div className="text-sm text-gray-600">Optional Services</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

