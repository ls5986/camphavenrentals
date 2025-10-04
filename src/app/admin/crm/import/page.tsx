"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"
import { 
  ArrowLeft,
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  Download,
  Copy,
  Trash2
} from "lucide-react"
import { useRouter } from "next/navigation"

export const metadata = {
  title: "Import Opportunities | Camp Haven Rentals CRM",
  description: "Bulk import property opportunities from CSV or AirDNA data.",
}

export default function ImportPage() {
  const [csvData, setCsvData] = useState<string>("")
  const [importResults, setImportResults] = useState<any[]>([])
  const [isImporting, setIsImporting] = useState(false)
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const router = useRouter()

  const sampleCSV = `address,city,state,zip_code,property_type,bedrooms,bathrooms,square_footage,year_built,owner_name,owner_email,owner_phone,priority,source,notes
"123 Joshua Tree Blvd",Joshua Tree,CA,92252,house,3,2,1200,2015,"John Smith","john@example.com","(555) 123-4567",high,"AirDNA Research","Hot tub, remote location"
"456 Big Bear Dr",Big Bear Lake,CA,92315,cabin,2,1,800,2010,"Jane Doe","jane@example.com","(555) 987-6543",medium,"MLS Listing","Fireplace, mountain views"`

  const handleCSVChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCsvData(e.target.value)
  }

  const parseCSV = (csvText: string) => {
    const lines = csvText.trim().split('\n')
    if (lines.length < 2) return []

    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''))
    const data = []

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''))
      if (values.length === headers.length) {
        const row: any = {}
        headers.forEach((header, index) => {
          row[header] = values[index] || ''
        })
        data.push(row)
      }
    }

    return data
  }

  const validateOpportunity = (row: any) => {
    const errors: string[] = []
    
    if (!row.address) errors.push('Address is required')
    if (!row.city) errors.push('City is required')
    if (!row.state) errors.push('State is required')
    if (row.bedrooms && isNaN(parseInt(row.bedrooms))) errors.push('Bedrooms must be a number')
    if (row.bathrooms && isNaN(parseFloat(row.bathrooms))) errors.push('Bathrooms must be a number')
    if (row.square_footage && isNaN(parseInt(row.square_footage))) errors.push('Square footage must be a number')
    if (row.year_built && isNaN(parseInt(row.year_built))) errors.push('Year built must be a number')
    if (row.owner_email && !/\S+@\S+\.\S+/.test(row.owner_email)) errors.push('Invalid email format')

    return {
      isValid: errors.length === 0,
      errors
    }
  }

  const handleImport = async () => {
    if (!csvData.trim()) {
      setImportStatus('error')
      return
    }

    setIsImporting(true)
    setImportStatus('idle')

    try {
      const parsedData = parseCSV(csvData)
      const results = []

      for (const row of parsedData) {
        const validation = validateOpportunity(row)
        
        if (!validation.isValid) {
          results.push({
            row,
            status: 'error',
            errors: validation.errors
          })
          continue
        }

        try {
          // Prepare opportunity data
          const opportunityData = {
            address: row.address,
            city: row.city,
            state: row.state,
            zip_code: row.zip_code || null,
            property_type: row.property_type || 'house',
            bedrooms: row.bedrooms ? parseInt(row.bedrooms) : null,
            bathrooms: row.bathrooms ? parseFloat(row.bathrooms) : null,
            square_footage: row.square_footage ? parseInt(row.square_footage) : null,
            year_built: row.year_built ? parseInt(row.year_built) : null,
            owner_name: row.owner_name || null,
            owner_email: row.owner_email || null,
            owner_phone: row.owner_phone || null,
            priority: row.priority || 'medium',
            source: row.source || 'CSV Import',
            notes: row.notes || null,
            status: 'prospecting',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }

          const { data, error } = await supabase
            .from('property_opportunities')
            .insert([opportunityData])
            .select()

          if (error) throw error

          results.push({
            row,
            status: 'success',
            data: data[0]
          })
        } catch (error) {
          results.push({
            row,
            status: 'error',
            errors: [error.message || 'Database error']
          })
        }
      }

      setImportResults(results)
      const successCount = results.filter(r => r.status === 'success').length
      setImportStatus(successCount > 0 ? 'success' : 'error')

    } catch (error) {
      console.error('Import error:', error)
      setImportStatus('error')
    } finally {
      setIsImporting(false)
    }
  }

  const downloadSampleCSV = () => {
    const blob = new Blob([sampleCSV], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'property_opportunities_sample.csv'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => router.back()}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Import Opportunities</h1>
                <p className="text-gray-600">Bulk import property opportunities from CSV</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Instructions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Import Instructions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">CSV Format Requirements</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• <strong>Required fields:</strong> address, city, state</li>
                  <li>• <strong>Optional fields:</strong> zip_code, property_type, bedrooms, bathrooms, square_footage, year_built, owner_name, owner_email, owner_phone, priority, source, notes</li>
                  <li>• <strong>Property types:</strong> house, condo, adu, duplex, townhouse, cabin, tiny_home</li>
                  <li>• <strong>Priorities:</strong> low, medium, high, urgent</li>
                  <li>• Use quotes around values that contain commas</li>
                </ul>
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" onClick={downloadSampleCSV}>
                  <Download className="h-4 w-4 mr-2" />
                  Download Sample CSV
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setCsvData(sampleCSV)}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Load Sample Data
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* CSV Input */}
          <Card>
            <CardHeader>
              <CardTitle>CSV Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Label htmlFor="csvData">Paste your CSV data below:</Label>
                <textarea
                  id="csvData"
                  value={csvData}
                  onChange={handleCSVChange}
                  rows={10}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 font-mono text-sm"
                  placeholder="Paste your CSV data here..."
                />
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600">
                    {csvData.trim() ? `${parseCSV(csvData).length} rows detected` : 'No data entered'}
                  </p>
                  <Button 
                    onClick={handleImport} 
                    disabled={!csvData.trim() || isImporting}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {isImporting ? 'Importing...' : 'Import Opportunities'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Import Results */}
          {importResults.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {importStatus === 'success' ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span>Import Results</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Successful:</span>
                      <span className="ml-2 text-green-600">
                        {importResults.filter(r => r.status === 'success').length}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Errors:</span>
                      <span className="ml-2 text-red-600">
                        {importResults.filter(r => r.status === 'error').length}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {importResults.map((result, index) => (
                      <div 
                        key={index}
                        className={`p-3 rounded-lg border ${
                          result.status === 'success' 
                            ? 'bg-green-50 border-green-200' 
                            : 'bg-red-50 border-red-200'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            {result.status === 'success' ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <AlertCircle className="h-4 w-4 text-red-600" />
                            )}
                            <span className="font-medium text-sm">
                              {result.row.address}
                            </span>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded ${
                            result.status === 'success' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {result.status}
                          </span>
                        </div>
                        
                        {result.errors && result.errors.length > 0 && (
                          <div className="text-xs text-red-600">
                            <strong>Errors:</strong> {result.errors.join(', ')}
                          </div>
                        )}
                        
                        {result.status === 'success' && (
                          <div className="text-xs text-green-600">
                            <strong>ID:</strong> {result.data.id}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button onClick={() => router.push('/admin/crm')}>
                      View CRM
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setCsvData('')
                        setImportResults([])
                        setImportStatus('idle')
                      }}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Clear Results
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
