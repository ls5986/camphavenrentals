"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { supabase, PropertyOpportunity } from "@/lib/supabase"
import { 
  Plus,
  Search,
  Filter,
  MapPin,
  DollarSign,
  TrendingUp,
  Calendar,
  Users,
  Star,
  AlertCircle,
  CheckCircle,
  Clock,
  Eye,
  Edit,
  Phone,
  Mail,
  Home,
  Zap,
  Mountain,
  Waves,
  TreePine,
  Car,
  Wifi,
  Snowflake,
  Sun,
  Droplets,
  Shield,
  Target,
  BarChart3,
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  Upload
} from "lucide-react"
import { useRouter } from "next/navigation"

export const metadata = {
  title: "Property CRM | Camp Haven Rentals",
  description: "Comprehensive CRM for managing property opportunities and leasing pipeline.",
}

const statusColors = {
  prospecting: 'bg-gray-100 text-gray-800',
  researching: 'bg-blue-100 text-blue-800',
  contacted: 'bg-yellow-100 text-yellow-800',
  interested: 'bg-green-100 text-green-800',
  questionnaire_sent: 'bg-purple-100 text-purple-800',
  under_review: 'bg-orange-100 text-orange-800',
  approved: 'bg-emerald-100 text-emerald-800',
  lease_sent: 'bg-indigo-100 text-indigo-800',
  lease_signed: 'bg-green-100 text-green-800',
  active: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
  lost: 'bg-red-100 text-red-800'
}

const priorityColors = {
  low: 'bg-gray-100 text-gray-800',
  medium: 'bg-blue-100 text-blue-800',
  high: 'bg-orange-100 text-orange-800',
  urgent: 'bg-red-100 text-red-800'
}

export default function CRMPage() {
  const [opportunities, setOpportunities] = useState<PropertyOpportunity[]>([])
  const [filteredOpportunities, setFilteredOpportunities] = useState<PropertyOpportunity[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [priorityFilter, setPriorityFilter] = useState<string>('all')
  const [selectedOpportunity, setSelectedOpportunity] = useState<PropertyOpportunity | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showAddForm, setShowAddForm] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetchOpportunities()
  }, [])

  useEffect(() => {
    filterOpportunities()
  }, [opportunities, searchTerm, statusFilter, priorityFilter])

  const fetchOpportunities = async () => {
    try {
      setIsLoading(true)
      const { data, error } = await supabase
        .from('property_opportunities')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setOpportunities(data || [])
    } catch (error) {
      console.error('Error fetching opportunities:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const filterOpportunities = () => {
    let filtered = opportunities

    if (searchTerm) {
      filtered = filtered.filter(opp => 
        opp.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.city?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.owner_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.owner_email?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(opp => opp.status === statusFilter)
    }

    if (priorityFilter !== 'all') {
      filtered = filtered.filter(opp => opp.priority === priorityFilter)
    }

    setFilteredOpportunities(filtered)
  }

  const getAssetIcons = (opportunity: PropertyOpportunity) => {
    const icons = []
    
    if (opportunity.has_hot_tub) icons.push({ icon: Waves, color: 'text-blue-500', tooltip: 'Hot Tub' })
    if (opportunity.has_pool) icons.push({ icon: Waves, color: 'text-cyan-500', tooltip: 'Pool' })
    if (opportunity.has_fireplace) icons.push({ icon: Sun, color: 'text-orange-500', tooltip: 'Fireplace' })
    if (opportunity.is_remote) icons.push({ icon: Mountain, color: 'text-green-500', tooltip: 'Remote' })
    if (opportunity.is_off_grid) icons.push({ icon: TreePine, color: 'text-green-600', tooltip: 'Off-Grid' })
    if (opportunity.has_solar) icons.push({ icon: Sun, color: 'text-yellow-500', tooltip: 'Solar' })
    if (opportunity.has_well_water) icons.push({ icon: Droplets, color: 'text-blue-400', tooltip: 'Well Water' })
    if (opportunity.has_septic) icons.push({ icon: Shield, color: 'text-gray-500', tooltip: 'Septic' })
    if (opportunity.has_garage) icons.push({ icon: Car, color: 'text-gray-600', tooltip: 'Garage' })
    if (opportunity.has_wifi) icons.push({ icon: Wifi, color: 'text-blue-600', tooltip: 'WiFi' })
    
    return icons
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'prospecting':
      case 'researching':
        return <Target className="h-4 w-4" />
      case 'contacted':
      case 'interested':
        return <Phone className="h-4 w-4" />
      case 'questionnaire_sent':
        return <FileText className="h-4 w-4" />
      case 'under_review':
        return <Eye className="h-4 w-4" />
      case 'approved':
      case 'lease_sent':
        return <CheckCircle className="h-4 w-4" />
      case 'lease_signed':
      case 'active':
        return <CheckCircle className="h-4 w-4" />
      case 'rejected':
      case 'lost':
        return <AlertCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const calculatePipelineValue = () => {
    return filteredOpportunities.reduce((total, opp) => {
      if (opp.estimated_annual_revenue && ['prospecting', 'researching', 'contacted', 'interested', 'questionnaire_sent', 'under_review', 'approved'].includes(opp.status)) {
        return total + opp.estimated_annual_revenue
      }
      return total
    }, 0)
  }

  const getPipelineStats = () => {
    const stats = {
      total: filteredOpportunities.length,
      active: filteredOpportunities.filter(opp => opp.status === 'active').length,
      pipeline: filteredOpportunities.filter(opp => ['prospecting', 'researching', 'contacted', 'interested', 'questionnaire_sent', 'under_review', 'approved'].includes(opp.status)).length,
      highPriority: filteredOpportunities.filter(opp => opp.priority === 'high' || opp.priority === 'urgent').length,
      totalValue: calculatePipelineValue()
    }
    return stats
  }

  const stats = getPipelineStats()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading CRM dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Property CRM</h1>
              <p className="text-gray-600">Manage property opportunities and leasing pipeline</p>
            </div>
            <div className="flex space-x-3">
              <Button onClick={() => setShowAddForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Opportunity
              </Button>
              <Button variant="outline" onClick={() => router.push('/admin/crm/import')}>
                <Upload className="h-4 w-4 mr-2" />
                Import CSV
              </Button>
              <Button variant="outline" onClick={() => router.push('/admin')}>
                Back to Admin
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <Target className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Opportunities</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pipeline Value</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ${stats.totalValue.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">In Pipeline</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.pipeline}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Properties</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.active}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <Star className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">High Priority</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.highPriority}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by address, owner, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="sm:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              >
                <option value="all">All Statuses</option>
                <option value="prospecting">Prospecting</option>
                <option value="researching">Researching</option>
                <option value="contacted">Contacted</option>
                <option value="interested">Interested</option>
                <option value="questionnaire_sent">Questionnaire Sent</option>
                <option value="under_review">Under Review</option>
                <option value="approved">Approved</option>
                <option value="lease_sent">Lease Sent</option>
                <option value="lease_signed">Lease Signed</option>
                <option value="active">Active</option>
                <option value="rejected">Rejected</option>
                <option value="lost">Lost</option>
              </select>
            </div>
            <div className="sm:w-48">
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              >
                <option value="all">All Priorities</option>
                <option value="urgent">Urgent</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredOpportunities.map((opportunity) => {
            const assetIcons = getAssetIcons(opportunity)
            return (
              <Card key={opportunity.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {opportunity.address}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {opportunity.city}, {opportunity.state}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[opportunity.status]}`}>
                          {getStatusIcon(opportunity.status)}
                          <span className="ml-1 capitalize">{opportunity.status.replace('_', ' ')}</span>
                        </span>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityColors[opportunity.priority]}`}>
                          {opportunity.priority}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedOpportunity(opportunity)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Property Details */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                    {opportunity.bedrooms && (
                      <div className="flex items-center space-x-1">
                        <Home className="h-3 w-3 text-gray-400" />
                        <span>{opportunity.bedrooms} bed{opportunity.bedrooms !== 1 ? 's' : ''}</span>
                      </div>
                    )}
                    {opportunity.bathrooms && (
                      <div className="flex items-center space-x-1">
                        <Droplets className="h-3 w-3 text-gray-400" />
                        <span>{opportunity.bathrooms} bath{opportunity.bathrooms !== 1 ? 's' : ''}</span>
                      </div>
                    )}
                    {opportunity.square_footage && (
                      <div className="flex items-center space-x-1">
                        <Home className="h-3 w-3 text-gray-400" />
                        <span>{opportunity.square_footage.toLocaleString()} sq ft</span>
                      </div>
                    )}
                    {opportunity.property_type && (
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3 text-gray-400" />
                        <span className="capitalize">{opportunity.property_type}</span>
                      </div>
                    )}
                  </div>

                  {/* Asset Icons */}
                  {assetIcons.length > 0 && (
                    <div className="flex items-center space-x-2 mb-4">
                      {assetIcons.slice(0, 6).map((asset, index) => {
                        const IconComponent = asset.icon
                        return (
                          <div key={index} className={`${asset.color} tooltip`} title={asset.tooltip}>
                            <IconComponent className="h-4 w-4" />
                          </div>
                        )
                      })}
                      {assetIcons.length > 6 && (
                        <span className="text-xs text-gray-500">+{assetIcons.length - 6} more</span>
                      )}
                    </div>
                  )}

                  {/* Financial Info */}
                  <div className="space-y-2 mb-4">
                    {opportunity.airdna_revenue_estimate && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">AirDNA Est. Revenue</span>
                        <span className="text-sm font-semibold text-green-600">
                          ${opportunity.airdna_revenue_estimate.toLocaleString()}/year
                        </span>
                      </div>
                    )}
                    {opportunity.estimated_monthly_rent && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Est. Monthly Rent</span>
                        <span className="text-sm font-semibold">
                          ${opportunity.estimated_monthly_rent.toLocaleString()}
                        </span>
                      </div>
                    )}
                    {opportunity.airdna_occupancy_estimate && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Est. Occupancy</span>
                        <span className="text-sm font-semibold">
                          {(opportunity.airdna_occupancy_estimate * 100).toFixed(0)}%
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Owner Info */}
                  {opportunity.owner_name && (
                    <div className="pt-3 border-t border-gray-200">
                      <div className="flex items-center justify-between text-sm">
                        <div>
                          <span className="text-gray-600">Owner:</span>
                          <span className="ml-1 font-medium">{opportunity.owner_name}</span>
                        </div>
                        {opportunity.owner_phone && (
                          <Button variant="outline" size="sm">
                            <Phone className="h-3 w-3 mr-1" />
                            Call
                          </Button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Next Action */}
                  {opportunity.next_action && (
                    <div className="pt-3 border-t border-gray-200 mt-3">
                      <div className="flex items-center justify-between text-sm">
                        <div>
                          <span className="text-gray-600">Next:</span>
                          <span className="ml-1">{opportunity.next_action}</span>
                        </div>
                        {opportunity.next_action_date && (
                          <span className="text-xs text-gray-500">
                            {new Date(opportunity.next_action_date).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredOpportunities.length === 0 && (
          <Card>
            <CardContent className="pt-12 pb-12">
              <div className="text-center">
                <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No opportunities found
                </h3>
                <p className="text-gray-600 mb-6">
                  {searchTerm || statusFilter !== 'all' || priorityFilter !== 'all'
                    ? 'Try adjusting your search or filter criteria.'
                    : 'Start by adding your first property opportunity to track potential leases.'
                  }
                </p>
                <Button onClick={() => setShowAddForm(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Opportunity
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Opportunity Detail Modal */}
      {selectedOpportunity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{selectedOpportunity.address}</CardTitle>
                <Button variant="outline" onClick={() => setSelectedOpportunity(null)}>
                  Close
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Property Details */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Property Details</h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>Address:</strong> {selectedOpportunity.address}</div>
                      <div><strong>Type:</strong> <span className="capitalize">{selectedOpportunity.property_type}</span></div>
                      <div><strong>Bedrooms:</strong> {selectedOpportunity.bedrooms}</div>
                      <div><strong>Bathrooms:</strong> {selectedOpportunity.bathrooms}</div>
                      <div><strong>Square Footage:</strong> {selectedOpportunity.square_footage?.toLocaleString()}</div>
                      <div><strong>Year Built:</strong> {selectedOpportunity.year_built}</div>
                    </div>
                  </div>

                  {/* AirDNA Data */}
                  {selectedOpportunity.airdna_revenue_estimate && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">AirDNA Analysis</h4>
                      <div className="space-y-2 text-sm">
                        <div><strong>Est. Annual Revenue:</strong> ${selectedOpportunity.airdna_revenue_estimate.toLocaleString()}</div>
                        <div><strong>Est. Occupancy:</strong> {(selectedOpportunity.airdna_occupancy_estimate * 100)?.toFixed(0)}%</div>
                        <div><strong>Est. ADR:</strong> ${selectedOpportunity.airdna_adr_estimate}</div>
                        <div><strong>Demand Score:</strong> {selectedOpportunity.airdna_demand_score}/100</div>
                        <div><strong>Competition Score:</strong> {selectedOpportunity.airdna_competition_score}/100</div>
                      </div>
                    </div>
                  )}

                  {/* Owner Information */}
                  {selectedOpportunity.owner_name && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Owner Information</h4>
                      <div className="space-y-2 text-sm">
                        <div><strong>Name:</strong> {selectedOpportunity.owner_name}</div>
                        <div><strong>Email:</strong> {selectedOpportunity.owner_email}</div>
                        <div><strong>Phone:</strong> {selectedOpportunity.owner_phone}</div>
                        <div><strong>Type:</strong> <span className="capitalize">{selectedOpportunity.owner_type}</span></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* CRM Status */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">CRM Status</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span><strong>Status:</strong></span>
                        <span className={`px-2 py-1 rounded-full text-xs ${statusColors[selectedOpportunity.status]}`}>
                          {selectedOpportunity.status.replace('_', ' ')}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span><strong>Priority:</strong></span>
                        <span className={`px-2 py-1 rounded-full text-xs ${priorityColors[selectedOpportunity.priority]}`}>
                          {selectedOpportunity.priority}
                        </span>
                      </div>
                      <div><strong>Source:</strong> {selectedOpportunity.source}</div>
                      <div><strong>Assigned To:</strong> {selectedOpportunity.assigned_to || 'Unassigned'}</div>
                      <div><strong>Internal Score:</strong> {selectedOpportunity.internal_score}/10</div>
                    </div>
                  </div>

                  {/* Property Assets */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Property Assets</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {selectedOpportunity.has_hot_tub && <div className="flex items-center space-x-1"><Waves className="h-3 w-3 text-blue-500" /><span>Hot Tub</span></div>}
                      {selectedOpportunity.has_pool && <div className="flex items-center space-x-1"><Waves className="h-3 w-3 text-cyan-500" /><span>Pool</span></div>}
                      {selectedOpportunity.has_fireplace && <div className="flex items-center space-x-1"><Sun className="h-3 w-3 text-orange-500" /><span>Fireplace</span></div>}
                      {selectedOpportunity.is_remote && <div className="flex items-center space-x-1"><Mountain className="h-3 w-3 text-green-500" /><span>Remote</span></div>}
                      {selectedOpportunity.is_off_grid && <div className="flex items-center space-x-1"><TreePine className="h-3 w-3 text-green-600" /><span>Off-Grid</span></div>}
                      {selectedOpportunity.has_solar && <div className="flex items-center space-x-1"><Sun className="h-3 w-3 text-yellow-500" /><span>Solar</span></div>}
                      {selectedOpportunity.has_well_water && <div className="flex items-center space-x-1"><Droplets className="h-3 w-3 text-blue-400" /><span>Well Water</span></div>}
                      {selectedOpportunity.has_septic && <div className="flex items-center space-x-1"><Shield className="h-3 w-3 text-gray-500" /><span>Septic</span></div>}
                      {selectedOpportunity.has_garage && <div className="flex items-center space-x-1"><Car className="h-3 w-3 text-gray-600" /><span>Garage</span></div>}
                      {selectedOpportunity.has_wifi && <div className="flex items-center space-x-1"><Wifi className="h-3 w-3 text-blue-600" /><span>WiFi</span></div>}
                    </div>
                  </div>

                  {/* Financial Analysis */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Financial Analysis</h4>
                    <div className="space-y-2 text-sm">
                      {selectedOpportunity.estimated_monthly_rent && (
                        <div><strong>Est. Monthly Rent:</strong> ${selectedOpportunity.estimated_monthly_rent.toLocaleString()}</div>
                      )}
                      {selectedOpportunity.estimated_annual_revenue && (
                        <div><strong>Est. Annual Revenue:</strong> ${selectedOpportunity.estimated_annual_revenue.toLocaleString()}</div>
                      )}
                      {selectedOpportunity.estimated_net_profit && (
                        <div><strong>Est. Net Profit:</strong> ${selectedOpportunity.estimated_net_profit.toLocaleString()}</div>
                      )}
                      {selectedOpportunity.roi_percentage && (
                        <div><strong>ROI:</strong> {selectedOpportunity.roi_percentage.toFixed(1)}%</div>
                      )}
                    </div>
                  </div>

                  {/* Next Actions */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Next Actions</h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>Next Action:</strong> {selectedOpportunity.next_action || 'None scheduled'}</div>
                      <div><strong>Due Date:</strong> {selectedOpportunity.next_action_date ? new Date(selectedOpportunity.next_action_date).toLocaleDateString() : 'Not set'}</div>
                      <div><strong>Last Contact:</strong> {selectedOpportunity.last_contact_date ? new Date(selectedOpportunity.last_contact_date).toLocaleDateString() : 'Never'}</div>
                      <div><strong>Contact Frequency:</strong> {selectedOpportunity.contact_frequency || 'Not set'}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes */}
              {selectedOpportunity.notes && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Notes</h4>
                  <p className="text-sm text-gray-600">{selectedOpportunity.notes}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-200">
                <Button>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Opportunity
                </Button>
                {selectedOpportunity.owner_phone && (
                  <Button variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Owner
                  </Button>
                )}
                {selectedOpportunity.owner_email && (
                  <Button variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Owner
                  </Button>
                )}
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Send Questionnaire
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
