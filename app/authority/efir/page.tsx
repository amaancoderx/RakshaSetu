'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, User, MapPin, Calendar, Upload, CheckCircle, AlertCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function FIRGenerationPage() {
  const [generatedFIR, setGeneratedFIR] = useState<any>(null)

  const recentFIRs = [
    {
      firNo: 'FIR/2024/001',
      tourist: 'Alex Petrov',
      incident: 'Theft',
      date: '2024-01-21',
      status: 'registered',
      officer: 'Officer Singh'
    },
    {
      firNo: 'FIR/2024/002',
      tourist: 'Sarah Chen',
      incident: 'Harassment',
      date: '2024-01-20',
      status: 'under investigation',
      officer: 'Officer Kumar'
    },
    {
      firNo: 'FIR/2024/003',
      tourist: 'John Roberts',
      incident: 'Fraud',
      date: '2024-01-19',
      status: 'resolved',
      officer: 'Officer Sharma'
    }
  ]

  const handleGenerateFIR = () => {
    setGeneratedFIR({
      firNo: 'FIR/2024/004',
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString(),
      status: 'registered'
    })
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
            <h1 className="text-3xl font-bold text-primary mb-2">FIR Generation</h1>
            <p className="text-secondary">Generate First Information Report for incidents</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* FIR Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-xl border-2 border-border shadow-sm">
                <div className="p-6 border-b-2 border-border">
                  <h2 className="text-xl font-bold text-primary">New FIR Details</h2>
                </div>

                <div className="p-6 space-y-6">
                  {/* Tourist Information */}
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Tourist Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Tourist ID *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., T009"
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Enter full name"
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Passport Number *
                        </label>
                        <input
                          type="text"
                          placeholder="Enter passport number"
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Contact Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 XXXXXXXXXX"
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Incident Details */}
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Incident Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Incident Type *
                        </label>
                        <select className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary">
                          <option>Select incident type</option>
                          <option>Theft</option>
                          <option>Harassment</option>
                          <option>Fraud</option>
                          <option>Assault</option>
                          <option>Lost Document</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Date of Incident *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                          <input
                            type="date"
                            className="w-full pl-10 pr-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Time of Incident *
                        </label>
                        <input
                          type="time"
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Severity Level *
                        </label>
                        <select className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary">
                          <option>Select severity</option>
                          <option>Critical</option>
                          <option>High</option>
                          <option>Medium</option>
                          <option>Low</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Location Details */}
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Location Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Incident Location *
                        </label>
                        <input
                          type="text"
                          placeholder="Enter address or landmark"
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Area/District
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Connaught Place"
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Police Station
                        </label>
                        <input
                          type="text"
                          placeholder="Nearest police station"
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Incident Description */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Detailed Description *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Provide a detailed description of the incident..."
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary resize-none"
                    />
                  </div>

                  {/* Witness Information */}
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4">Witness Information (Optional)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Witness Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter witness name"
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Witness Contact
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 XXXXXXXXXX"
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Supporting Documents */}
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                      <Upload className="w-5 h-5" />
                      Supporting Documents
                    </h3>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                      <Upload className="w-12 h-12 text-secondary mx-auto mb-3" />
                      <p className="text-primary font-semibold mb-1">Upload Documents</p>
                      <p className="text-sm text-secondary">
                        Photos, videos, or documents related to the incident
                      </p>
                      <p className="text-xs text-secondary mt-2">
                        Maximum file size: 10MB per file
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-white border-2 border-border text-primary py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Clear Form
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleGenerateFIR}
                      className="flex-1 bg-accent text-white py-3 rounded-lg font-bold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                    >
                      <FileText className="w-5 h-5" />
                      Generate FIR
                    </motion.button>
                  </div>

                  {/* Generated FIR Confirmation */}
                  {generatedFIR && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border-2 border-green-200 rounded-xl p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-green-900 mb-2">FIR Generated Successfully</h3>
                          <p className="text-sm text-green-700 mb-4">
                            The First Information Report has been registered in the system.
                          </p>
                          <div className="bg-white rounded-lg p-4 border-2 border-green-200 mb-4">
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div>
                                <p className="text-xs text-green-700">FIR Number</p>
                                <p className="font-bold text-green-900 font-mono">{generatedFIR.firNo}</p>
                              </div>
                              <div>
                                <p className="text-xs text-green-700">Registration Date</p>
                                <p className="font-semibold text-green-900">{generatedFIR.date}</p>
                              </div>
                              <div>
                                <p className="text-xs text-green-700">Time</p>
                                <p className="font-semibold text-green-900">{generatedFIR.time}</p>
                              </div>
                              <div>
                                <p className="text-xs text-green-700">Status</p>
                                <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded font-semibold">
                                  {generatedFIR.status}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold text-sm hover:bg-green-700 transition-colors">
                              Download FIR Copy
                            </button>
                            <button className="flex-1 bg-white border-2 border-green-300 text-green-700 py-2 rounded-lg font-semibold text-sm hover:bg-green-50 transition-colors">
                              Send to Tourist
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Recent FIRs Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-xl border-2 border-border p-6 shadow-sm sticky top-8">
                <h2 className="text-xl font-bold text-primary mb-4">Recent FIRs</h2>

                <div className="space-y-3">
                  {recentFIRs.map((fir, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="p-4 bg-gray-50 rounded-lg border-2 border-border hover:border-accent transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-bold text-primary text-sm font-mono">{fir.firNo}</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          fir.status === 'registered' ? 'bg-blue-100 text-blue-600' :
                          fir.status === 'under investigation' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-green-100 text-green-600'
                        }`}>
                          {fir.status}
                        </span>
                      </div>
                      <p className="text-sm text-primary font-semibold mb-1">{fir.tourist}</p>
                      <p className="text-xs text-secondary mb-2">{fir.incident}</p>
                      <div className="flex items-center justify-between text-xs text-secondary">
                        <span>{fir.date}</span>
                        <span>{fir.officer}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Statistics */}
                <div className="mt-6 pt-6 border-t-2 border-border">
                  <h3 className="text-sm font-bold text-primary mb-3">Statistics</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm text-blue-900 font-semibold">Total FIRs</span>
                      <span className="text-lg font-bold text-blue-600">127</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <span className="text-sm text-yellow-900 font-semibold">Under Investigation</span>
                      <span className="text-lg font-bold text-yellow-600">23</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm text-green-900 font-semibold">Resolved</span>
                      <span className="text-lg font-bold text-green-600">89</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}
