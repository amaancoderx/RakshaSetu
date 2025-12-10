'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Search, TrendingUp, MapPin, User } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function FlagAnomaliesPage() {
  const [selectedAnomaly, setSelectedAnomaly] = useState<any>(null)

  const anomalies = [
    {
      id: 'AN001',
      type: 'Unusual Movement Pattern Detected',
      risk: 'high risk',
      status: 'pending',
      tourist: 'Alex Petrov (T009)',
      location: 'Multiple government buildings',
      timestamp: '2024-01-21 16:15:00',
      confidence: '85%',
      system: 'AI System',
      description: 'Tourist has visited multiple sensitive government locations within a short timeframe. Pattern suggests possible surveillance activity.'
    },
    {
      id: 'AN002',
      type: 'Document Verification Discrepancy',
      risk: 'high risk',
      status: 'escalated',
      tourist: 'John Roberts (T013)',
      location: 'Immigration checkpoint',
      timestamp: '2024-01-21 14:30:00',
      confidence: '92%',
      system: 'Border Control System',
      description: 'Passport photo does not match facial recognition scan. Requires immediate verification.'
    },
    {
      id: 'AN003',
      type: 'Unusual Behavioral Pattern',
      risk: 'medium risk',
      status: 'approved',
      tourist: 'Sarah Chen (T015)',
      location: 'Metro stations',
      timestamp: '2024-01-21 11:20:00',
      confidence: '67%',
      system: 'Surveillance System',
      description: 'Tourist observed taking photographs of metro security infrastructure. Behavior flagged for review.'
    },
    {
      id: 'AN004',
      type: 'Communication Pattern Anomaly',
      risk: 'low risk',
      status: 'dismissed',
      tourist: 'Zhang Wei (T004)',
      location: 'Hotel ITC Maurya',
      timestamp: '2024-01-21 09:45:00',
      confidence: '45%',
      system: 'Network Monitor',
      description: 'Unusual network activity detected. Investigation revealed legitimate business communications.'
    }
  ]

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
            <h1 className="text-3xl font-bold text-primary mb-2">Flag Anomalies</h1>
            <p className="text-secondary">Pending: 1 | Escalated: 1 | Total: 4</p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl border-2 border-border p-4 mb-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                <input
                  type="text"
                  placeholder="Search anomalies..."
                  className="w-full pl-10 pr-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                />
              </div>
              <select className="px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary">
                <option>All Status</option>
                <option>Pending</option>
                <option>Escalated</option>
                <option>Approved</option>
                <option>Dismissed</option>
              </select>
              <select className="px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary">
                <option>All Risk Levels</option>
                <option>High Risk</option>
                <option>Medium Risk</option>
                <option>Low Risk</option>
              </select>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Anomaly List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-xl border-2 border-border shadow-sm">
                <div className="p-6 border-b-2 border-border">
                  <h2 className="text-xl font-bold text-primary">Detected Anomalies (4)</h2>
                </div>

                <div className="divide-y divide-border">
                  {anomalies.map((anomaly, index) => (
                    <motion.div
                      key={anomaly.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      onClick={() => setSelectedAnomaly(anomaly)}
                      className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${
                        selectedAnomaly?.id === anomaly.id ? 'bg-accent/5 border-l-4 border-l-accent' : ''
                      }`}
                    >
                      <div className={`flex items-start gap-4 ${
                        anomaly.risk === 'high risk' ? 'border-l-4 border-l-red-600 pl-4' :
                        anomaly.risk === 'medium risk' ? 'border-l-4 border-l-yellow-600 pl-4' :
                        'border-l-4 border-l-blue-600 pl-4'
                      }`}>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                          anomaly.risk === 'high risk' ? 'bg-red-100' :
                          anomaly.risk === 'medium risk' ? 'bg-yellow-100' :
                          'bg-blue-100'
                        }`}>
                          <AlertTriangle className={`w-6 h-6 ${
                            anomaly.risk === 'high risk' ? 'text-red-600' :
                            anomaly.risk === 'medium risk' ? 'text-yellow-600' :
                            'text-blue-600'
                          }`} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-bold text-primary text-lg">{anomaly.type}</h3>
                              <p className="text-sm text-secondary mt-1">{anomaly.tourist}</p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                anomaly.risk === 'high risk' ? 'bg-red-100 text-red-600' :
                                anomaly.risk === 'medium risk' ? 'bg-yellow-100 text-yellow-600' :
                                'bg-blue-100 text-blue-600'
                              }`}>
                                {anomaly.risk}
                              </span>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                anomaly.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                                anomaly.status === 'escalated' ? 'bg-red-100 text-red-600' :
                                anomaly.status === 'approved' ? 'bg-blue-100 text-blue-600' :
                                'bg-gray-100 text-gray-600'
                              }`}>
                                {anomaly.status}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-secondary mb-2">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{anomaly.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4" />
                              <span>AI Confidence: {anomaly.confidence}</span>
                            </div>
                          </div>

                          <p className="text-sm text-secondary">{anomaly.timestamp}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Anomaly Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-xl border-2 border-border p-6 shadow-sm sticky top-8">
                {selectedAnomaly ? (
                  <>
                    <h2 className="text-xl font-bold text-primary mb-4">Anomaly Details</h2>

                    <div className="space-y-4">
                      <div className="pb-4 border-b-2 border-border">
                        <div className={`w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center ${
                          selectedAnomaly.risk === 'high risk' ? 'bg-red-100' :
                          selectedAnomaly.risk === 'medium risk' ? 'bg-yellow-100' :
                          'bg-blue-100'
                        }`}>
                          <AlertTriangle className={`w-8 h-8 ${
                            selectedAnomaly.risk === 'high risk' ? 'text-red-600' :
                            selectedAnomaly.risk === 'medium risk' ? 'text-yellow-600' :
                            'text-blue-600'
                          }`} />
                        </div>
                        <h3 className="font-bold text-primary text-center">{selectedAnomaly.type}</h3>
                        <div className="flex justify-center gap-2 mt-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            selectedAnomaly.risk === 'high risk' ? 'bg-red-100 text-red-600' :
                            selectedAnomaly.risk === 'medium risk' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-blue-100 text-blue-600'
                          }`}>
                            {selectedAnomaly.risk}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">Detection Information</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <p className="text-xs text-secondary">Anomaly ID</p>
                            <p className="font-semibold text-primary">{selectedAnomaly.id}</p>
                          </div>
                          <div>
                            <p className="text-xs text-secondary">Tourist</p>
                            <p className="font-semibold text-primary">{selectedAnomaly.tourist}</p>
                          </div>
                          <div>
                            <p className="text-xs text-secondary">Location</p>
                            <p className="font-semibold text-primary">{selectedAnomaly.location}</p>
                          </div>
                          <div>
                            <p className="text-xs text-secondary">Detected By</p>
                            <p className="font-semibold text-primary">{selectedAnomaly.system}</p>
                          </div>
                          <div>
                            <p className="text-xs text-secondary">AI Confidence</p>
                            <p className="font-semibold text-primary">{selectedAnomaly.confidence}</p>
                          </div>
                          <div>
                            <p className="text-xs text-secondary">Timestamp</p>
                            <p className="font-semibold text-primary">{selectedAnomaly.timestamp}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">Description</h4>
                        <p className="text-sm text-secondary bg-gray-50 p-3 rounded-lg">{selectedAnomaly.description}</p>
                      </div>

                      <div className="pt-4 border-t-2 border-border space-y-2">
                        <button className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                          Escalate
                        </button>
                        <button className="w-full bg-accent text-white py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                          Approve
                        </button>
                        <button className="w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <AlertTriangle className="w-16 h-16 text-secondary mx-auto mb-4 opacity-50" />
                    <p className="text-secondary">Select an anomaly from the list to view detailed information.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}
