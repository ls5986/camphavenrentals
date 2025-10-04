"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/supabase"
import { 
  Users, 
  Home, 
  Mail, 
  Phone, 
  MapPin, 
  Eye, 
  Edit, 
  CheckCircle, 
  XCircle,
  Clock,
  Filter,
  Search,
  Star,
  MessageSquare,
  Calendar,
  Target,
  TrendingUp,
  BarChart3,
  Plus
} from "lucide-react"
import { useRouter } from "next/navigation"

export const metadata = {
  title: "Admin Portal | Camp Haven Rentals",
  description: "Admin dashboard for managing owner inquiries and property questionnaires.",
}

interface OwnerInquiry {
  id: string
  created_at: string
  name: string
  email: string
  phone: string
  property_address: string
  status: 'pending' | 'contacted' | 'questionnaire_sent' | 'completed' | 'rejected'
  notes?: string
}

interface PropertyQuestionnaire {
  id: string
  created_at: string
  owner_inquiry_id: string
  property_address: string
  property_type: string
  square_footage: number
  expected_monthly_rent: number
  status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected'
  admin_notes?: string
  review_score?: number
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'inquiries' | 'questionnaires'>('inquiries')
  const [inquiries, setInquiries] = useState<OwnerInquiry[]>([])
  const [questionnaires, setQuestionnaires] = useState<PropertyQuestionnaire[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [selectedInquiry, setSelectedInquiry] = useState<OwnerInquiry | null>(null)
  const [selectedQuestionnaire, setSelectedQuestionnaire] = useState<PropertyQuestionnaire | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setIsLoading(true)
      
      // Fetch inquiries
      const { data: inquiriesData, error: inquiriesError } = await supabase
        .from('owner_inquiries')
        .select('*')
        .order('created_at', { ascending: false })

      if (inquiriesError) throw inquiriesError

      // Fetch questionnaires
      const { data: questionnairesData, error: questionnairesError } = await supabase
        .from('property_questionnaires')
        .select('*')
        .order('created_at', { ascending: false })

      if (questionnairesError) throw questionnairesError

      setInquiries(inquiriesData || [])
      setQuestionnaires(questionnairesData || [])
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateInquiryStatus = async (id: string, status: string, notes?: string) => {
    try {
      const { error } = await supabase
        .from('owner_inquiries')
        .update({ status, notes })
        .eq('id', id)

      if (error) throw error

      // If sending questionnaire, trigger email
      if (status === 'questionnaire_sent') {
        const inquiry = inquiries.find(i => i.id === id)
        if (inquiry) {
          try {
            await fetch('/api/send-questionnaire-email', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                inquiryId: id,
                ownerEmail: inquiry.email,
                ownerName: inquiry.name
              })
            })
          } catch (emailError) {
            console.error('Error sending questionnaire email:', emailError)
            // Don't fail the status update if email fails
          }
        }
      }

      await fetchData()
      setSelectedInquiry(null)
    } catch (error) {
      console.error('Error updating inquiry:', error)
    }
  }

  const updateQuestionnaireStatus = async (id: string, status: string, adminNotes?: string, reviewScore?: number) => {
    try {
      const { error } = await supabase
        .from('property_questionnaires')
        .update({ status, admin_notes: adminNotes, review_score: reviewScore })
        .eq('id', id)

      if (error) throw error

      await fetchData()
      setSelectedQuestionnaire(null)
    } catch (error) {
      console.error('Error updating questionnaire:', error)
    }
  }

  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.property_address.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || inquiry.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const filteredQuestionnaires = questionnaires.filter(questionnaire => {
    const matchesSearch = questionnaire.property_address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         questionnaire.property_type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || questionnaire.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
      case 'draft':
      case 'submitted':
        return 'bg-yellow-100 text-yellow-800'
      case 'contacted':
      case 'questionnaire_sent':
      case 'under_review':
        return 'bg-blue-100 text-blue-800'
      case 'completed':
      case 'approved':
        return 'bg-green-100 text-green-800'
      case 'rejected':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
      case 'draft':
      case 'submitted':
        return <Clock className="h-4 w-4" />
      case 'contacted':
      case 'questionnaire_sent':
      case 'under_review':
        return <MessageSquare className="h-4 w-4" />
      case 'completed':
      case 'approved':
        return <CheckCircle className="h-4 w-4" />
      case 'rejected':
        return <XCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
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
              <h1 className="text-3xl font-bold text-gray-900">Admin Portal</h1>
              <p className="text-gray-600">Manage owner inquiries and property questionnaires</p>
            </div>
            <div className="flex space-x-3">
              <Button onClick={() => router.push('/admin/crm')}>
                <Target className="h-4 w-4 mr-2" />
                Property CRM
              </Button>
              <Button variant="outline" onClick={fetchData}>
                Refresh Data
              </Button>
              <Button variant="outline" onClick={() => router.push('/')}>
                Back to Site
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
                <Users className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Inquiries</p>
                  <p className="text-2xl font-bold text-gray-900">{inquiries.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <Home className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Questionnaires</p>
                  <p className="text-2xl font-bold text-gray-900">{questionnaires.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pending Review</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {inquiries.filter(i => i.status === 'pending').length + 
                     questionnaires.filter(q => q.status === 'submitted').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Approved</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {inquiries.filter(i => i.status === 'completed').length + 
                     questionnaires.filter(q => q.status === 'approved').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => router.push('/admin/crm')}>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <Target className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">CRM Opportunities</p>
                  <p className="text-2xl font-bold text-gray-900">View CRM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6">
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === 'inquiries'
                ? 'bg-amber-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Owner Inquiries
          </button>
          <button
            onClick={() => setActiveTab('questionnaires')}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === 'questionnaires'
                ? 'bg-amber-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Property Questionnaires
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name, email, or property address..."
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
                <option value="pending">Pending</option>
                <option value="contacted">Contacted</option>
                <option value="questionnaire_sent">Questionnaire Sent</option>
                <option value="submitted">Submitted</option>
                <option value="under_review">Under Review</option>
                <option value="completed">Completed</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'inquiries' ? (
          <div className="space-y-4">
            {filteredInquiries.map((inquiry) => (
              <Card key={inquiry.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">{inquiry.name}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(inquiry.status)}`}>
                          {getStatusIcon(inquiry.status)}
                          <span className="ml-1 capitalize">{inquiry.status.replace('_', ' ')}</span>
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4" />
                          <span>{inquiry.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4" />
                          <span>{inquiry.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{inquiry.property_address}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-3 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span>Submitted {new Date(inquiry.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedInquiry(inquiry)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const newStatus = inquiry.status === 'pending' ? 'contacted' : 'questionnaire_sent'
                          updateInquiryStatus(inquiry.id, newStatus)
                        }}
                        disabled={inquiry.status === 'completed' || inquiry.status === 'rejected'}
                      >
                        <MessageSquare className="h-4 w-4 mr-1" />
                        {inquiry.status === 'pending' ? 'Contact' : 'Send Questionnaire'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredQuestionnaires.map((questionnaire) => (
              <Card key={questionnaire.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">{questionnaire.property_address}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(questionnaire.status)}`}>
                          {getStatusIcon(questionnaire.status)}
                          <span className="ml-1 capitalize">{questionnaire.status.replace('_', ' ')}</span>
                        </span>
                        {questionnaire.review_score && (
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm font-medium">{questionnaire.review_score}/10</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Home className="h-4 w-4" />
                          <span className="capitalize">{questionnaire.property_type}</span>
                        </div>
                        <div>
                          <span className="font-medium">{questionnaire.square_footage}</span> sq ft
                        </div>
                        <div>
                          <span className="font-medium">${questionnaire.expected_monthly_rent.toLocaleString()}</span>/month
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(questionnaire.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedQuestionnaire(questionnaire)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Review
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuestionnaireStatus(questionnaire.id, 'approved')}
                        disabled={questionnaire.status === 'approved' || questionnaire.status === 'rejected'}
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {((activeTab === 'inquiries' && filteredInquiries.length === 0) ||
          (activeTab === 'questionnaires' && filteredQuestionnaires.length === 0)) && (
          <Card>
            <CardContent className="pt-12 pb-12">
              <div className="text-center">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No {activeTab === 'inquiries' ? 'inquiries' : 'questionnaires'} found
                </h3>
                <p className="text-gray-600">
                  {searchTerm || statusFilter !== 'all' 
                    ? 'Try adjusting your search or filter criteria.'
                    : `No ${activeTab === 'inquiries' ? 'owner inquiries' : 'property questionnaires'} have been submitted yet.`
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Owner Inquiry Details</CardTitle>
                <Button variant="outline" onClick={() => setSelectedInquiry(null)}>
                  Close
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Contact Information</h4>
                  <div className="mt-2 space-y-2 text-sm">
                    <div><strong>Name:</strong> {selectedInquiry.name}</div>
                    <div><strong>Email:</strong> {selectedInquiry.email}</div>
                    <div><strong>Phone:</strong> {selectedInquiry.phone}</div>
                    <div><strong>Property:</strong> {selectedInquiry.property_address}</div>
                    <div><strong>Status:</strong> <span className="capitalize">{selectedInquiry.status}</span></div>
                    <div><strong>Submitted:</strong> {new Date(selectedInquiry.created_at).toLocaleString()}</div>
                  </div>
                </div>

                {selectedInquiry.notes && (
                  <div>
                    <h4 className="font-semibold text-gray-900">Notes</h4>
                    <p className="text-sm text-gray-600 mt-1">{selectedInquiry.notes}</p>
                  </div>
                )}

                <div className="flex space-x-3 pt-4">
                  <Button
                    onClick={() => {
                      const newStatus = selectedInquiry.status === 'pending' ? 'contacted' : 'questionnaire_sent'
                      updateInquiryStatus(selectedInquiry.id, newStatus)
                    }}
                    disabled={selectedInquiry.status === 'completed' || selectedInquiry.status === 'rejected'}
                  >
                    {selectedInquiry.status === 'pending' ? 'Mark as Contacted' : 'Send Questionnaire'}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => updateInquiryStatus(selectedInquiry.id, 'completed')}
                    disabled={selectedInquiry.status === 'completed' || selectedInquiry.status === 'rejected'}
                  >
                    Mark Complete
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => updateInquiryStatus(selectedInquiry.id, 'rejected')}
                    disabled={selectedInquiry.status === 'rejected'}
                  >
                    Reject
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Questionnaire Detail Modal */}
      {selectedQuestionnaire && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Property Questionnaire Review</CardTitle>
                <Button variant="outline" onClick={() => setSelectedQuestionnaire(null)}>
                  Close
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Property Details</h4>
                    <div className="mt-2 space-y-1 text-sm">
                      <div><strong>Address:</strong> {selectedQuestionnaire.property_address}</div>
                      <div><strong>Type:</strong> <span className="capitalize">{selectedQuestionnaire.property_type}</span></div>
                      <div><strong>Square Footage:</strong> {selectedQuestionnaire.square_footage}</div>
                      <div><strong>Expected Rent:</strong> ${selectedQuestionnaire.expected_monthly_rent.toLocaleString()}/month</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Review Information</h4>
                    <div className="mt-2 space-y-1 text-sm">
                      <div><strong>Status:</strong> <span className="capitalize">{selectedQuestionnaire.status}</span></div>
                      <div><strong>Submitted:</strong> {new Date(selectedQuestionnaire.created_at).toLocaleString()}</div>
                      {selectedQuestionnaire.review_score && (
                        <div><strong>Review Score:</strong> {selectedQuestionnaire.review_score}/10</div>
                      )}
                    </div>
                  </div>
                </div>

                {selectedQuestionnaire.admin_notes && (
                  <div>
                    <h4 className="font-semibold text-gray-900">Admin Notes</h4>
                    <p className="text-sm text-gray-600 mt-1">{selectedQuestionnaire.admin_notes}</p>
                  </div>
                )}

                <div className="flex space-x-3 pt-4">
                  <Button
                    onClick={() => updateQuestionnaireStatus(selectedQuestionnaire.id, 'approved')}
                    disabled={selectedQuestionnaire.status === 'approved' || selectedQuestionnaire.status === 'rejected'}
                  >
                    Approve Property
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => updateQuestionnaireStatus(selectedQuestionnaire.id, 'under_review')}
                    disabled={selectedQuestionnaire.status === 'approved' || selectedQuestionnaire.status === 'rejected'}
                  >
                    Mark Under Review
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => updateQuestionnaireStatus(selectedQuestionnaire.id, 'rejected')}
                    disabled={selectedQuestionnaire.status === 'rejected'}
                  >
                    Reject
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
