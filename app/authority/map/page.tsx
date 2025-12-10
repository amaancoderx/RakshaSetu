'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Users, Shield, Filter, Layers, Maximize2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function MapOverviewPage() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [mapView, setMapView] = useState('default')

  const touristHotspots = [
    { name: 'Red Fort', count: 1250, status: 'normal', lat: 28.6562, lng: 77.2410 },
    { name: 'India Gate', count: 890, status: 'high', lat: 28.6129, lng: 77.2295 },
    { name: 'Lotus Temple', count: 670, status: 'normal', lat: 28.5535, lng: 77.2588 },
    { name: 'Qutub Minar', count: 420, status: 'alert', lat: 28.5244, lng: 77.1855 }
  ]

  const restrictedZones = [
    { name: 'Government Area', type: 'restricted', status: 'active' },
    { name: 'Construction Zone - CP', type: 'temporary', status: 'active' },
    { name: 'Military Base', type: 'restricted', status: 'active' }
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
            <h1 className="text-3xl font-bold text-primary mb-2">Map Overview</h1>
            <p className="text-secondary">Real-time tourist monitoring and zone management</p>
          </motion.div>

          {/* Filters Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl border-2 border-border p-4 mb-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
                  <Layers className="w-4 h-4" />
                  <span className="font-medium">Layers</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border-2 border-border rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4 text-secondary" />
                  <span className="font-medium text-primary">Filter</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-secondary">View:</span>
                <select
                  value={mapView}
                  onChange={(e) => setMapView(e.target.value)}
                  className="px-3 py-2 border-2 border-border rounded-lg text-sm font-medium text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="default">Default</option>
                  <option value="satellite">Satellite</option>
                  <option value="terrain">Terrain</option>
                </select>
                <button className="p-2 border-2 border-border rounded-lg hover:bg-gray-50 transition-colors">
                  <Maximize2 className="w-4 h-4 text-secondary" />
                </button>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-xl border-2 border-border shadow-sm overflow-hidden">
                <div className="relative w-full" style={{ height: '600px' }}>
                  {/* Mock Interactive Map */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-yellow-50">
                    {/* Grid pattern */}
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
                      `,
                      backgroundSize: '50px 50px'
                    }} />

                    {/* Roads */}
                    <div className="absolute top-1/4 left-0 right-0 h-2 bg-gray-300/50" />
                    <div className="absolute left-1/3 top-0 bottom-0 w-2 bg-gray-300/50" />
                    <div className="absolute bottom-1/3 left-0 right-0 h-2 bg-gray-300/50" />
                    <div className="absolute right-1/4 top-0 bottom-0 w-2 bg-gray-300/50" />

                    {/* Tourist Hotspots */}
                    {touristHotspots.map((spot, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                        className="absolute group cursor-pointer"
                        style={{
                          top: `${30 + (index * 15)}%`,
                          left: `${25 + (index * 20)}%`,
                        }}
                      >
                        <div className="relative">
                          <div className={`p-3 rounded-full shadow-lg ${
                            spot.status === 'alert' ? 'bg-red-600' :
                            spot.status === 'high' ? 'bg-orange-500' :
                            'bg-green-500'
                          }`}>
                            <MapPin className="w-5 h-5 text-white" fill="currentColor" />
                          </div>

                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <div className="bg-white rounded-lg shadow-xl border-2 border-border p-3 whitespace-nowrap">
                              <p className="font-bold text-primary text-sm">{spot.name}</p>
                              <p className="text-xs text-secondary mt-1">
                                <Users className="w-3 h-3 inline mr-1" />
                                {spot.count} tourists
                              </p>
                              <span className={`inline-block px-2 py-1 rounded text-xs font-semibold mt-1 ${
                                spot.status === 'alert' ? 'bg-red-100 text-red-600' :
                                spot.status === 'high' ? 'bg-orange-100 text-orange-600' :
                                'bg-green-100 text-green-600'
                              }`}>
                                {spot.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Map Note */}
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-3">
                      <p className="text-xs font-semibold text-primary mb-1">Interactive Map</p>
                      <p className="text-xs text-secondary">Google Maps Integration Would Go Here</p>
                    </div>
                  </div>

                  {/* Zoom Controls */}
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

            {/* Sidebar Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Tourist Hotspots */}
              <div className="bg-white rounded-xl border-2 border-border p-5 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-4">Tourist Hotspots</h3>
                <div className="space-y-3">
                  {touristHotspots.map((spot, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-border">
                      <div>
                        <p className="font-semibold text-primary text-sm">{spot.name}</p>
                        <p className="text-xs text-secondary mt-1">{spot.count} visitors</p>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${
                        spot.status === 'alert' ? 'bg-red-500' :
                        spot.status === 'high' ? 'bg-orange-500' :
                        'bg-green-500'
                      }`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Restricted Zones */}
              <div className="bg-white rounded-xl border-2 border-border p-5 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-4">Restricted Zones</h3>
                <div className="space-y-3">
                  {restrictedZones.map((zone, index) => (
                    <div key={index} className="p-3 bg-red-50 rounded-lg border border-red-200">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold text-primary text-sm">{zone.name}</p>
                        <Shield className="w-4 h-4 text-red-600" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-secondary">{zone.type}</span>
                        <span className="px-2 py-0.5 bg-red-600 text-white text-xs rounded font-semibold">
                          {zone.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Filters */}
              <div className="bg-white rounded-xl border-2 border-border p-5 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-4">Map Filters</h3>
                <div className="space-y-2">
                  {[
                    { label: 'All Locations', count: 4 },
                    { label: 'High Density', count: 1 },
                    { label: 'Active Alerts', count: 1 },
                    { label: 'Restricted Zones', count: 3 }
                  ].map((filter, index) => (
                    <label key={index} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="filter"
                        className="w-4 h-4 text-accent focus:ring-accent"
                        defaultChecked={index === 0}
                      />
                      <span className="flex-1 text-sm font-medium text-primary">{filter.label}</span>
                      <span className="text-xs text-secondary">{filter.count}</span>
                    </label>
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
