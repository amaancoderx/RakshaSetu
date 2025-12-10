'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Shield,
  Users,
  AlertTriangle,
  CheckCircle,
  Clock,
  Building2,
  Navigation,
  Activity
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import touristsData from '@/data/tourists.json'

export default function LocationPage() {
  const [tourist, setTourist] = useState<any>(null)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const touristData = touristsData[0]
    setTourist(touristData)

    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [])

  if (!tourist) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
      </div>
    )
  }

  const safetyScore = 78
  const lastUpdated = 2 // minutes ago

  const riskFactors = [
    { label: 'High tourist density', risk: 'Low Risk', color: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200' },
    { label: 'Evening hours', risk: 'Medium Risk', color: 'text-yellow-600', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200' },
    { label: 'Well-lit area', risk: 'Low Risk', color: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200' }
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar role="tourist" userName={tourist.name} />

      <div className="flex flex-1">
        <Sidebar role="tourist" />

        <main className="flex-1 p-8 bg-gray-50 overflow-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-accent/10 rounded-xl">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-primary">My Location</h1>
                <p className="text-secondary text-lg">Real-time safety information</p>
              </div>
            </div>
          </motion.div>

          {/* Map View */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="bg-white rounded-xl border-2 border-border shadow-sm overflow-hidden">
              <div className="relative w-full" style={{ height: '500px' }}>
                {/* Mock Map Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-yellow-50">
                  {/* Grid pattern to simulate map */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                  }} />

                  {/* Decorative roads */}
                  <div className="absolute top-1/4 left-0 right-0 h-2 bg-gray-300/50" />
                  <div className="absolute left-1/3 top-0 bottom-0 w-2 bg-gray-300/50" />
                  <div className="absolute bottom-1/3 left-0 right-0 h-2 bg-gray-300/50" />
                  <div className="absolute right-1/4 top-0 bottom-0 w-2 bg-gray-300/50" />

                  {/* Safety Zone Circles */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500 rounded-full"
                  />
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-600 rounded-full"
                  />

                  {/* Main Location Marker */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      className="relative"
                    >
                      <div className="absolute -inset-4 bg-accent/30 rounded-full blur-md" />
                      <MapPin className="w-12 h-12 text-accent drop-shadow-lg relative z-10" fill="currentColor" />
                    </motion.div>
                  </motion.div>

                  {/* Nearby Police Stations */}
                  {[
                    { top: '30%', left: '40%', label: 'CP Police Station' },
                    { top: '65%', left: '55%', label: 'Kasturba Gandhi Station' }
                  ].map((marker, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      className="absolute group"
                      style={{ top: marker.top, left: marker.left }}
                    >
                      <div className="relative">
                        <div className="p-2 bg-blue-600 rounded-full shadow-lg">
                          <Shield className="w-5 h-5 text-white" />
                        </div>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-primary text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                          {marker.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Safe Tourists */}
                  {[
                    { top: '45%', left: '35%' },
                    { top: '55%', left: '48%' },
                    { top: '40%', left: '60%' }
                  ].map((marker, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                      className="absolute"
                      style={{ top: marker.top, left: marker.left }}
                    >
                      <div className="p-1.5 bg-green-500 rounded-full shadow-md">
                        <Users className="w-3 h-3 text-white" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Map Controls */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors">
                    <span className="text-primary font-bold text-lg">+</span>
                  </button>
                  <button className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors">
                    <span className="text-primary font-bold text-lg">−</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Safety Score Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-500 rounded-xl">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Safety Score</h3>
                    <p className="text-sm text-secondary">Current Area Assessment</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-green-600">{safetyScore}</span>
                    <span className="text-lg text-green-600 font-semibold">/100</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1 justify-end">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-600">Safe</span>
                  </div>
                </div>
              </div>

              <div className="w-full bg-green-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${safetyScore}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full bg-green-600 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Current Area Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white border-2 border-border rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <Navigation className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-primary">Current Area</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-secondary mb-1">Location</p>
                  <p className="font-semibold text-primary">{tourist.currentLocation.address}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-secondary mb-1">Latitude</p>
                    <p className="text-sm font-mono font-medium text-primary">{tourist.currentLocation.lat.toFixed(4)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-secondary mb-1">Longitude</p>
                    <p className="text-sm font-mono font-medium text-primary">{tourist.currentLocation.lng.toFixed(4)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-secondary pt-2 border-t border-border">
                  <Clock className="w-3 h-3" />
                  <span>Last updated: {lastUpdated} min ago</span>
                </div>
              </div>
            </motion.div>

            {/* Area Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white border-2 border-border rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-primary">Area Information</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-primary">Nearby Tourists</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-green-600">3</span>
                    <span className="text-xs text-green-600 font-semibold">Safe</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-primary">Police Stations</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                    <span className="text-xs text-blue-600 font-semibold">within 1km</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-primary">Emergency Services</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-bold text-purple-600">Available</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Risk Factors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white border-2 border-border rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-bold text-primary">Risk Factors</h3>
            </div>
            <div className="space-y-3">
              {riskFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className={`flex items-center justify-between p-4 rounded-lg border-2 ${factor.bgColor} ${factor.borderColor}`}
                >
                  <span className="font-medium text-primary">{factor.label}</span>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${factor.color === 'text-green-600' ? 'bg-green-500' : factor.color === 'text-yellow-600' ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                    <span className={`text-sm font-bold ${factor.color}`}>{factor.risk}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
