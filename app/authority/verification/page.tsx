'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, CheckCircle, XCircle, AlertCircle, FileText, User } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function IDVerificationPage() {
  const [touristId, setTouristId] = useState('T001')
  const [verificationResult, setVerificationResult] = useState<any>(null)

  const verificationHistory = [
    {
      touristId: 'T001',
      name: 'John Smith',
      status: 'verified',
      officer: 'Current Officer',
      timestamp: '10/12/2025, 20:13:29',
      notes: 'All documents verified successfully'
    },
    {
      touristId: 'T001',
      name: 'Unknown',
      status: 'failed',
      officer: 'Current Officer',
      timestamp: '10/12/2025, 20:13:27',
      notes: 'Tourist ID not found in database'
    },
    {
      touristId: 'T001',
      name: 'John Smith',
      status: 'verified',
      officer: 'Officer Singh',
      timestamp: '2024-01-21 14:30:00',
      notes: 'All documents verified successfully'
    },
    {
      touristId: 'T007',
      name: 'Invalid User',
      status: 'failed',
      officer: 'Officer Kumar',
      timestamp: '2024-01-21 11:45:00',
      notes: 'Tourist ID not found in database'
    },
    {
      touristId: 'T003',
      name: 'David Johnson',
      status: 'verified',
      officer: 'Officer Sharma',
      timestamp: '2024-01-21 12:15:00',
      notes: 'Emergency contact verified'
    }
  ]

  const handleVerify = () => {
    if (touristId === 'T001') {
      setVerificationResult({
        success: true,
        personalInfo: {
          name: 'John Smith',
          nationality: 'USA',
          passport: 'US123456789',
          visa: 'V57390123',
          phone: '+91-9876543210',
          emergency: '+1-555-0123'
        },
        documents: [
          { type: 'Passport', status: 'verified' },
          { type: 'Visa', status: 'verified' },
          { type: 'Hotel Booking', status: 'verified' }
        ],
        travelInfo: {
          touristId: 'T003',
          passport: 'GB456789123',
          checkin: '2024-01-20',
          checkout: '2024-01-25',
          hotel: 'Taj Palace',
          group: 'Group Size: 4'
        },
        currentStatus: {
          location: 'Connaught Place',
          lastSeen: '30 minutes ago',
          riskLevel: 'low',
          background: 'cleared'
        },
        verificationTime: new Date().toLocaleString()
      })
    } else {
      setVerificationResult({
        success: false,
        error: 'Tourist ID not found in database'
      })
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar role="authority" userName="Officer Singh" />

      <div className="flex flex-1">
        <Sidebar role="authority" />

        <main className="flex-1 p-8 bg-gray-50 overflow-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <h1 className="text-3xl font-bold text-primary mb-2">ID Verification</h1>
            <p className="text-secondary">Verifications Today: 3</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Verification Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Search Card */}
              <div className="bg-white rounded-xl border-2 border-border p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Search className="w-5 h-5 text-accent" />
                  <h2 className="text-xl font-bold text-primary">Tourist ID Verification</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Enter Tourist ID
                    </label>
                    <input
                      type="text"
                      value={touristId}
                      onChange={(e) => setTouristId(e.target.value)}
                      placeholder="T001"
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary font-mono"
                    />
                  </div>

                  <button
                    onClick={handleVerify}
                    className="w-full bg-accent text-white py-3 rounded-lg font-bold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Verify
                  </button>
                </div>
              </div>

              {/* Verification Result */}
              {verificationResult && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl border-2 border-border shadow-sm"
                >
                  {verificationResult.success ? (
                    <div>
                      {/* Success Header */}
                      <div className="bg-green-50 border-b-2 border-green-200 p-6 rounded-t-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-green-900">Verification Successful</h2>
                            <p className="text-sm text-green-700">All documents verified successfully</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 space-y-6">
                        {/* Personal Information */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <User className="w-5 h-5 text-accent" />
                            <h3 className="font-bold text-primary text-lg">Personal Information</h3>
                          </div>
                          <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
                            <div>
                              <p className="text-xs text-secondary mb-1">Name</p>
                              <p className="font-semibold text-primary">{verificationResult.personalInfo.name}</p>
                            </div>
                            <div>
                              <p className="text-xs text-secondary mb-1">Nationality</p>
                              <p className="font-semibold text-primary">{verificationResult.personalInfo.nationality}</p>
                            </div>
                            <div>
                              <p className="text-xs text-secondary mb-1">Passport</p>
                              <p className="font-semibold text-primary font-mono">{verificationResult.personalInfo.passport}</p>
                            </div>
                            <div>
                              <p className="text-xs text-secondary mb-1">Visa</p>
                              <p className="font-semibold text-primary font-mono">{verificationResult.personalInfo.visa}</p>
                            </div>
                            <div>
                              <p className="text-xs text-secondary mb-1">Phone</p>
                              <p className="font-semibold text-primary">{verificationResult.personalInfo.phone}</p>
                            </div>
                            <div>
                              <p className="text-xs text-secondary mb-1">Emergency</p>
                              <p className="font-semibold text-primary">{verificationResult.personalInfo.emergency}</p>
                            </div>
                          </div>
                        </div>

                        {/* Verified Documents */}
                        <div>
                          <h3 className="font-bold text-primary mb-3">Verified Documents</h3>
                          <div className="space-y-2">
                            {verificationResult.documents.map((doc: any, index: number) => (
                              <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                <span className="text-sm font-semibold text-primary flex-1">{doc.type}</span>
                                <span className="px-2 py-1 bg-green-600 text-white text-xs rounded font-semibold">
                                  {doc.status}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Travel Information */}
                        <div>
                          <h3 className="font-bold text-primary mb-3">Travel Information</h3>
                          <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
                            <div>
                              <p className="text-xs text-secondary mb-1">Check-in</p>
                              <p className="font-semibold text-primary">{verificationResult.travelInfo.checkin}</p>
                            </div>
                            <div>
                              <p className="text-xs text-secondary mb-1">Check-out</p>
                              <p className="font-semibold text-primary">{verificationResult.travelInfo.checkout}</p>
                            </div>
                            <div>
                              <p className="text-xs text-secondary mb-1">Hotel</p>
                              <p className="font-semibold text-primary">{verificationResult.travelInfo.hotel}</p>
                            </div>
                            <div>
                              <p className="text-xs text-secondary mb-1">Group</p>
                              <p className="font-semibold text-primary">{verificationResult.travelInfo.group}</p>
                            </div>
                          </div>
                        </div>

                        {/* Current Status */}
                        <div>
                          <h3 className="font-bold text-primary mb-3">Current Status</h3>
                          <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
                            <div>
                              <p className="text-xs text-secondary mb-1">Location</p>
                              <p className="font-semibold text-primary">{verificationResult.currentStatus.location}</p>
                            </div>
                            <div>
                              <p className="text-xs text-secondary mb-1">Last Seen</p>
                              <p className="font-semibold text-primary">{verificationResult.currentStatus.lastSeen}</p>
                            </div>
                            <div>
                              <p className="text-xs text-secondary mb-1">Risk Level</p>
                              <p className="font-bold text-green-600">{verificationResult.currentStatus.riskLevel}</p>
                            </div>
                            <div>
                              <p className="text-xs text-secondary mb-1">Background</p>
                              <p className="font-bold text-green-600">{verificationResult.currentStatus.background}</p>
                            </div>
                          </div>
                        </div>

                        <div className="text-xs text-secondary pt-4 border-t border-border">
                          Verified by: Current Officer | {verificationResult.verificationTime}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6">
                      <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-2 border-red-200">
                        <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-red-900 mb-1">Verification Failed</p>
                          <p className="text-sm text-red-700">{verificationResult.error}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>

            {/* Verification History */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-xl border-2 border-border shadow-sm">
                <div className="p-6 border-b-2 border-border">
                  <h2 className="text-xl font-bold text-primary">Verification History</h2>
                </div>

                <div className="divide-y divide-border max-h-[600px] overflow-y-auto">
                  {verificationHistory.map((record, index) => (
                    <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          record.status === 'verified' ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          {record.status === 'verified' ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-primary text-sm">{record.touristId}</p>
                          <p className="text-xs text-secondary mb-1">{record.name}</p>
                          <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
                            record.status === 'verified' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                          }`}>
                            {record.status}
                          </span>
                          <p className="text-xs text-secondary mt-2">{record.officer}</p>
                          <p className="text-xs text-secondary">{record.timestamp}</p>
                          <p className="text-xs text-secondary mt-1 italic">{record.notes}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}
