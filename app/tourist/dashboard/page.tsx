'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  MapPin,
  AlertCircle,
  Activity,
  TrendingUp,
  Clock,
  CheckCircle,
  CreditCard
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Card from '@/components/Card'
import MapView from '@/components/MapView'
import AlertTable from '@/components/AlertTable'
import toast from 'react-hot-toast'
import touristsData from '@/data/tourists.json'
import alertsData from '@/data/alerts.json'

export default function TouristDashboard() {
  const [tourist, setTourist] = useState<any>(null)
  const [alerts, setAlerts] = useState<any[]>([])

  useEffect(() => {
    const touristData = touristsData[0]
    setTourist(touristData)
    const touristAlerts = alertsData.filter(alert => alert.touristId === touristData.id)
    setAlerts(touristAlerts)
  }, [])

  const getRiskLevel = (score: number) => {
    if (score < 30) return { label: 'Low', color: 'text-green-600', bg: 'bg-green-500' }
    if (score < 60) return { label: 'Medium', color: 'text-yellow-600', bg: 'bg-yellow-500' }
    if (score < 80) return { label: 'High', color: 'text-orange-600', bg: 'bg-orange-500' }
    return { label: 'Critical', color: 'text-danger', bg: 'bg-danger' }
  }

  if (!tourist) {
    return <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
    </div>
  }

  const riskInfo = getRiskLevel(tourist.riskScore)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar role="tourist" userName={tourist.name} />

      <div className="flex flex-1">
        <Sidebar role="tourist" />

        <main className="flex-1 p-8 bg-gray-50 overflow-auto">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-primary mb-2">
              Welcome, {tourist.name}
            </h1>
            <p className="text-secondary text-lg">
              Your safety is our priority. Stay connected, stay safe.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl border-2 border-border hover:border-accent transition-all shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-secondary mb-1">Risk Score</p>
                  <p className={`text-3xl font-bold ${riskInfo.color}`}>
                    {tourist.riskScore}
                  </p>
                  <p className="text-xs text-secondary mt-1">{riskInfo.label} Risk</p>
                </div>
                <div className={`p-4 rounded-xl ${riskInfo.bg}/10`}>
                  <Activity className={`w-8 h-8 ${riskInfo.color}`} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl border-2 border-border hover:border-accent transition-all shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-secondary mb-1">Active Alerts</p>
                  <p className="text-3xl font-bold text-primary">
                    {alerts.filter(a => a.status === 'active').length}
                  </p>
                  <p className="text-xs text-secondary mt-1">Monitoring</p>
                </div>
                <div className="p-4 rounded-xl bg-orange-500/10">
                  <AlertCircle className="w-8 h-8 text-orange-600" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-xl border-2 border-border hover:border-accent transition-all shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-secondary mb-1">Location Status</p>
                  <p className="text-3xl font-bold text-primary capitalize">
                    {tourist.status}
                  </p>
                  <p className="text-xs text-secondary mt-1">Current Zone</p>
                </div>
                <div className="p-4 rounded-xl bg-accent/10">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-xl border-2 border-border hover:border-accent transition-all shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-secondary mb-1">Total Alerts</p>
                  <p className="text-3xl font-bold text-primary">
                    {alerts.length}
                  </p>
                  <p className="text-xs text-secondary mt-1">All time</p>
                </div>
                <div className="p-4 rounded-xl bg-blue-500/10">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Digital ID Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="bg-white p-6 rounded-xl border-2 border-border shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-primary">Digital ID Card</h3>
                </div>

                <div className="bg-primary rounded-lg p-6 text-white mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-white/70">RakshaSetu ID</p>
                      <p className="text-sm font-mono font-bold">{tourist.did}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs text-white/70">Name</p>
                      <p className="font-semibold">{tourist.name}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs text-white/70">Nationality</p>
                        <p className="font-semibold">{tourist.nationality}</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/70">Status</p>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="font-semibold">Active</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/20 pt-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/70">Valid Until</span>
                      <span className="font-semibold">{tourist.validity}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="w-32 h-32 bg-white border-2 border-border rounded-lg flex items-center justify-center">
                    <div className="text-center text-secondary text-xs">
                      QR Code<br/>Placeholder
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-6 rounded-xl border-2 border-border shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-primary">Live Location</h3>
                </div>
                <MapView location={tourist.currentLocation} height="400px" />
              </div>
            </motion.div>
          </div>

          {/* Risk Assessment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-8"
          >
            <div className="bg-white p-6 rounded-xl border-2 border-border shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Activity className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-primary">Risk Assessment</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-primary">Current Risk Level</span>
                    <span className={`text-sm font-bold ${riskInfo.color}`}>
                      {tourist.riskScore}/100 - {riskInfo.label}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tourist.riskScore}%` }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className={`h-full ${riskInfo.bg} rounded-full`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t-2 border-border">
                  <div>
                    <p className="text-xs text-secondary mb-2">Location Safety</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-medium text-primary">Moderate</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-secondary mb-2">Time of Day</p>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-medium text-primary">Afternoon</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-secondary mb-2">Crowd Density</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm font-medium text-primary">High</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Alert History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="bg-white p-6 rounded-xl border-2 border-border shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <AlertCircle className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-primary">Alert History</h3>
              </div>
              <AlertTable alerts={alerts} />
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
