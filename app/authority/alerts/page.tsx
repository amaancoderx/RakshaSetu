'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Search, Filter, MapPin, User, Clock } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function ActiveAlertsPage() {
  const [selectedAlert, setSelectedAlert] = useState<any>(null)

  const alerts = [
    {
      id: 'ALT001',
      type: 'Tourist Emergency - Medical Assistance Required',
      priority: 'high',
      status: 'active',
      tourist: 'Sarah Wilson (T005)',
      location: 'Red Fort Area - Main Entrance',
      timestamp: '2024-01-21 15:30:00',
      timeAgo: '5 minutes',
      description: 'Tourist reported feeling unwell and requires immediate medical attention.'
    },
    {
      id: 'ALT002',
      type: 'Missing Person Report',
      priority: 'high',
      status: 'investigating',
      tourist: 'Maria Garcia (T002)',
      location: 'Last seen: Connaught Place',
      timestamp: '2024-01-21 12:00:00',
      timeAgo: 'Ongoing',
      description: 'Tourist has not been in contact for 6 hours. Last known location: Connaught Place.'
    },
    {
      id: 'ALT003',
      type: 'Security Incident - Harassment Complaint',
      priority: 'medium',
      status: 'active',
      tourist: 'Emma Thompson (T008)',
      location: 'India Gate vicinity',
      timestamp: '2024-01-21 14:20:00',
      timeAgo: '15 minutes',
      description: 'Tourist reported harassment by local vendors. Requires immediate assistance.'
    },
    {
      id: 'ALT004',
      type: 'Document Issue',
      priority: 'low',
      status: 'resolved',
      tourist: 'Zhang Wei (T004)',
      location: 'Hotel ITC Maurya',
      timestamp: '2024-01-21 10:15:00',
      timeAgo: '2 hours',
      description: 'Tourist reported lost passport. Embassy has been notified.'
    },
    {
      id: 'ALT005',
      type: 'Zone Violation',
      priority: 'medium',
      status: 'active',
      tourist: 'Alex Petrov (T009)',
      location: 'Restricted Government Area',
      timestamp: '2024-01-21 13:45:00',
      timeAgo: '45 minutes',
      description: 'Tourist entered restricted zone inadvertently. Requires escort back to safe area.'
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
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-primary mb-2">Active Alerts</h1>
                <p className="text-secondary">Active: 2 | Investigating: 2 | Resolved: 1</p>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-danger text-white rounded-lg hover:bg-danger/90 transition-colors font-semibold shadow-md">
                <AlertTriangle className="w-5 h-5" />
                New Alert
              </button>
            </div>
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
                  placeholder="Search alerts..."
                  className="w-full pl-10 pr-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                />
              </div>
              <select className="px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary">
                <option>All Status</option>
                <option>Active</option>
                <option>Investigating</option>
                <option>Resolved</option>
              </select>
              <select className="px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary">
                <option>All Priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Alert List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-xl border-2 border-border shadow-sm">
                <div className="p-6 border-b-2 border-border">
                  <h2 className="text-xl font-bold text-primary">Alert List (5)</h2>
                </div>

                <div className="divide-y divide-border">
                  {alerts.map((alert, index) => (
                    <motion.div
                      key={alert.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      onClick={() => setSelectedAlert(alert)}
                      className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${
                        selectedAlert?.id === alert.id ? 'bg-accent/5 border-l-4 border-l-accent' : ''
                      }`}
                    >
                      <div className={`flex items-start gap-4 ${
                        alert.priority === 'high' ? 'border-l-4 border-l-red-600 pl-4' :
                        alert.priority === 'medium' ? 'border-l-4 border-l-yellow-600 pl-4' :
                        'border-l-4 border-l-blue-600 pl-4'
                      }`}>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                          alert.priority === 'high' ? 'bg-red-100' :
                          alert.priority === 'medium' ? 'bg-yellow-100' :
                          'bg-blue-100'
                        }`}>
                          <AlertTriangle className={`w-6 h-6 ${
                            alert.priority === 'high' ? 'text-red-600' :
                            alert.priority === 'medium' ? 'text-yellow-600' :
                            'text-blue-600'
                          }`} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-bold text-primary text-lg">{alert.type}</h3>
                              <p className="text-sm text-secondary mt-1">{alert.tourist}</p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                alert.priority === 'high' ? 'bg-red-100 text-red-600' :
                                alert.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                                'bg-blue-100 text-blue-600'
                              }`}>
                                {alert.priority}
                              </span>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                alert.status === 'active' ? 'bg-red-100 text-red-600' :
                                alert.status === 'investigating' ? 'bg-yellow-100 text-yellow-600' :
                                'bg-green-100 text-green-600'
                              }`}>
                                {alert.status}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-secondary mb-2">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{alert.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{alert.timeAgo}</span>
                            </div>
                          </div>

                          <p className="text-sm text-secondary">{alert.timestamp}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Alert Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-xl border-2 border-border p-6 shadow-sm sticky top-8">
                {selectedAlert ? (
                  <>
                    <h2 className="text-xl font-bold text-primary mb-4">Alert Details</h2>

                    <div className="space-y-4">
                      <div className="pb-4 border-b-2 border-border">
                        <div className={`w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center ${
                          selectedAlert.priority === 'high' ? 'bg-red-100' :
                          selectedAlert.priority === 'medium' ? 'bg-yellow-100' :
                          'bg-blue-100'
                        }`}>
                          <AlertTriangle className={`w-8 h-8 ${
                            selectedAlert.priority === 'high' ? 'text-red-600' :
                            selectedAlert.priority === 'medium' ? 'text-yellow-600' :
                            'text-blue-600'
                          }`} />
                        </div>
                        <h3 className="font-bold text-primary text-center">{selectedAlert.type}</h3>
                        <div className="flex justify-center gap-2 mt-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            selectedAlert.priority === 'high' ? 'bg-red-100 text-red-600' :
                            selectedAlert.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-blue-100 text-blue-600'
                          }`}>
                            {selectedAlert.priority}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            selectedAlert.status === 'active' ? 'bg-red-100 text-red-600' :
                            selectedAlert.status === 'investigating' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-green-100 text-green-600'
                          }`}>
                            {selectedAlert.status}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">Alert Information</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <p className="text-xs text-secondary">Alert ID</p>
                            <p className="font-semibold text-primary">{selectedAlert.id}</p>
                          </div>
                          <div>
                            <p className="text-xs text-secondary">Tourist</p>
                            <p className="font-semibold text-primary">{selectedAlert.tourist}</p>
                          </div>
                          <div>
                            <p className="text-xs text-secondary">Location</p>
                            <p className="font-semibold text-primary">{selectedAlert.location}</p>
                          </div>
                          <div>
                            <p className="text-xs text-secondary">Timestamp</p>
                            <p className="font-semibold text-primary">{selectedAlert.timestamp}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">Description</h4>
                        <p className="text-sm text-secondary bg-gray-50 p-3 rounded-lg">{selectedAlert.description}</p>
                      </div>

                      <div className="pt-4 border-t-2 border-border space-y-2">
                        <button className="w-full bg-accent text-white py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                          Respond to Alert
                        </button>
                        <button className="w-full bg-yellow-600 text-white py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                          Mark Investigating
                        </button>
                        <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                          Resolve Alert
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <AlertTriangle className="w-16 h-16 text-secondary mx-auto mb-4 opacity-50" />
                    <p className="text-secondary">Select an alert from the list to view detailed information.</p>
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
