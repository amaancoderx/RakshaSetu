'use client'

import { motion } from 'framer-motion'
import { Bell, Cloud, Wind, AlertTriangle, Navigation, Phone, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function AlertsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'resolved'>('all')

  const alerts = [
    {
      id: 1,
      title: 'Heavy Rainfall Warning',
      location: 'New Delhi Metropolitan Area',
      description: 'Heavy rainfall expected for the next 6 hours. Avoid low-lying areas and plan indoor activities.',
      severity: 'HIGH',
      time: '30 minutes ago',
      scope: 'Citywide',
      issuedBy: 'India Meteorological Department',
      status: 'active',
      icon: Cloud,
      color: 'danger'
    },
    {
      id: 2,
      title: 'Air Quality Alert',
      location: 'Central Delhi',
      description: 'Air quality index has reached unhealthy levels. Limit outdoor activities and wear masks.',
      severity: 'MEDIUM',
      time: '1 hour ago',
      scope: 'Regional',
      issuedBy: 'Delhi Pollution Control Committee',
      status: 'active',
      icon: Wind,
      color: 'orange'
    },
    {
      id: 3,
      title: 'Road Closure Alert',
      location: 'Connaught Place',
      description: 'Road maintenance work in progress. Traffic diverted to alternate routes.',
      severity: 'MEDIUM',
      time: '2 hours ago',
      scope: 'Local',
      issuedBy: 'Delhi Traffic Police',
      status: 'active',
      icon: AlertTriangle,
      color: 'orange'
    },
    {
      id: 4,
      title: 'Tourist Safety Advisory',
      location: 'India Gate Area',
      description: 'Large crowd expected. Stay vigilant and keep belongings secure.',
      severity: 'LOW',
      time: '3 hours ago',
      scope: 'Local',
      issuedBy: 'Delhi Tourism Authority',
      status: 'resolved',
      icon: AlertTriangle,
      color: 'green'
    }
  ]

  const filteredAlerts = alerts.filter(alert => {
    if (activeTab === 'all') return true
    if (activeTab === 'active') return alert.status === 'active'
    if (activeTab === 'resolved') return alert.status === 'resolved'
    return true
  })

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'HIGH':
        return 'bg-danger text-white'
      case 'MEDIUM':
        return 'bg-orange-500 text-white'
      case 'LOW':
        return 'bg-green-500 text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar role="tourist" userName="Amaan Khan" />

      <div className="flex">
        <Sidebar role="tourist" isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-primary">Safety Alerts</h1>
                <p className="text-secondary mt-1">Stay informed about local conditions</p>
              </div>
              <div className="flex items-center gap-2 bg-danger/10 px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-danger rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-danger">2 Active</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b-2 border-border">
              <button
                onClick={() => setActiveTab('all')}
                className={`pb-3 px-4 font-semibold transition-colors relative ${
                  activeTab === 'all' ? 'text-accent' : 'text-secondary hover:text-primary'
                }`}
              >
                All ({alerts.length})
                {activeTab === 'all' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </button>

              <button
                onClick={() => setActiveTab('active')}
                className={`pb-3 px-4 font-semibold transition-colors relative ${
                  activeTab === 'active' ? 'text-accent' : 'text-secondary hover:text-primary'
                }`}
              >
                Active ({alerts.filter(a => a.status === 'active').length})
                {activeTab === 'active' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </button>

              <button
                onClick={() => setActiveTab('resolved')}
                className={`pb-3 px-4 font-semibold transition-colors relative ${
                  activeTab === 'resolved' ? 'text-accent' : 'text-secondary hover:text-primary'
                }`}
              >
                Resolved ({alerts.filter(a => a.status === 'resolved').length})
                {activeTab === 'resolved' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </button>
            </div>

            {/* Alerts List */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredAlerts.map((alert, index) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow ${
                    alert.status === 'active' ? 'border-danger/30' : 'border-border'
                  }`}
                >
                  {/* Alert Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 ${alert.color === 'danger' ? 'bg-danger/10' : alert.color === 'orange' ? 'bg-orange-500/10' : 'bg-green-500/10'} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <alert.icon className={`w-6 h-6 ${alert.color === 'danger' ? 'text-danger' : alert.color === 'orange' ? 'text-orange-500' : 'text-green-500'}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary text-lg">{alert.title}</h3>
                        <div className="flex items-center gap-2 text-xs text-secondary mt-1">
                          <span>{alert.location}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`${getSeverityColor(alert.severity)} px-3 py-1 rounded-full text-xs font-bold`}>
                      {alert.severity}
                    </span>
                  </div>

                  {/* Alert Description */}
                  <p className="text-secondary mb-4">{alert.description}</p>

                  {/* Alert Meta Info */}
                  <div className="flex items-center justify-between text-xs text-secondary border-t border-border pt-4">
                    <div className="space-y-1">
                      <p><span className="font-semibold">Time:</span> {alert.time}</p>
                      <p><span className="font-semibold">Scope:</span> {alert.scope}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs">Issued by:</p>
                      <p className="font-semibold text-primary">{alert.issuedBy}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {alert.status === 'active' && (
                    <div className="flex gap-3 mt-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-accent text-white py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors"
                      >
                        <Navigation className="w-4 h-4" />
                        Navigate
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white border-2 border-border text-primary py-2 px-4 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                      </motion.button>
                    </div>
                  )}

                  {alert.status === 'resolved' && (
                    <div className="flex items-center gap-2 mt-4 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-semibold">Resolved</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredAlerts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Bell className="w-16 h-16 text-secondary mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-bold text-primary mb-2">No alerts found</h3>
                <p className="text-secondary">You're all caught up! No {activeTab} alerts at this time.</p>
              </motion.div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
