'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation, Shield, AlertTriangle } from 'lucide-react'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function SafetyMapPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Mock tourist location (can be dynamic later)
  const touristLocation = {
    city: 'Charminar, Hyderabad',
    lat: 17.3850,
    lng: 78.4867,
    safetyStatus: 'Safe'
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
            <h1 className="text-3xl font-bold text-primary mb-6">Safety Map</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Map Container */}
              <div className="lg:col-span-2">
                <div className="bg-white border-2 border-border rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-primary">Live Location Tracking</h2>
                    <div className="flex items-center gap-2 text-green-600">
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                      <span className="text-sm font-semibold">Active</span>
                    </div>
                  </div>

                  {/* India Map with Tourist Location */}
                  <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-50 to-green-50 rounded-xl overflow-hidden border-2 border-border">
                    {/* India Map SVG Outline */}
                    <svg
                      viewBox="0 0 800 900"
                      className="w-full h-full"
                      style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
                    >
                      {/* Simplified India Map Path */}
                      <path
                        d="M 400 100 L 450 120 L 500 150 L 520 180 L 530 220 L 540 260 L 545 300 L 550 350 L 555 400 L 560 450 L 565 500 L 560 550 L 550 600 L 540 650 L 520 700 L 500 740 L 470 770 L 440 790 L 410 800 L 380 810 L 350 800 L 320 785 L 290 765 L 270 740 L 250 710 L 230 670 L 220 630 L 215 590 L 210 550 L 205 510 L 200 470 L 190 430 L 180 390 L 170 350 L 160 310 L 165 270 L 175 230 L 190 190 L 210 160 L 240 135 L 280 115 L 320 105 L 360 100 L 400 100 Z"
                        fill="#E8F5E9"
                        stroke="#2563EB"
                        strokeWidth="3"
                        className="hover:fill-blue-50 transition-colors"
                      />

                      {/* Tourist Location Marker - Hyderabad (center-south) */}
                      <motion.g
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: 'spring' }}
                      >
                        {/* Pulsing circle animation */}
                        <motion.circle
                          cx="380"
                          cy="500"
                          r="20"
                          fill="#E63946"
                          opacity="0.3"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        {/* Location pin */}
                        <circle cx="380" cy="500" r="8" fill="#E63946" stroke="white" strokeWidth="2" />
                      </motion.g>

                      {/* Location label */}
                      <text x="400" y="500" fontSize="14" fill="#000" fontWeight="600">
                        📍 Your Location
                      </text>
                    </svg>

                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg border border-border">
                      <p className="text-xs font-semibold text-primary mb-2">Legend</p>
                      <div className="flex items-center gap-2 text-xs text-secondary">
                        <div className="w-3 h-3 bg-danger rounded-full" />
                        <span>Your Current Location</span>
                      </div>
                    </div>

                    {/* Zoom Controls */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <button className="w-10 h-10 bg-white rounded-lg shadow-lg border border-border flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <span className="text-xl font-bold text-primary">+</span>
                      </button>
                      <button className="w-10 h-10 bg-white rounded-lg shadow-lg border border-border flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <span className="text-xl font-bold text-primary">−</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Info Sidebar */}
              <div className="space-y-6">
                {/* Current Location Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white border-2 border-border rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Current Location</h3>
                      <p className="text-xs text-secondary">Real-time tracking</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-secondary">City</p>
                      <p className="font-semibold text-primary">{touristLocation.city}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary">Coordinates</p>
                      <p className="font-mono text-sm text-primary">
                        {touristLocation.lat}, {touristLocation.lng}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary">Safety Status</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span className="font-semibold text-green-600">{touristLocation.safetyStatus}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white border-2 border-border rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="font-bold text-primary mb-4">Quick Actions</h3>

                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-accent text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors"
                    >
                      <Navigation className="w-5 h-5" />
                      Get Directions
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white border-2 border-border text-primary py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                    >
                      <Shield className="w-5 h-5" />
                      View Safe Zones
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-danger/10 border-2 border-danger text-danger py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-danger/20 transition-colors"
                    >
                      <AlertTriangle className="w-5 h-5" />
                      Report Issue
                    </motion.button>
                  </div>
                </motion.div>

                {/* Nearby Facilities */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white border-2 border-border rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="font-bold text-primary mb-4">Nearby Facilities</h3>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm">🏥</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-primary">Hospital</p>
                          <p className="text-xs text-secondary">1.2 km away</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-sm">🚔</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-primary">Police Station</p>
                          <p className="text-xs text-secondary">0.8 km away</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-sm">🏨</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-primary">Safe Zone</p>
                          <p className="text-xs text-secondary">0.3 km away</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
