'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation, Shield, Users } from 'lucide-react'

interface Location {
  lat: number
  lng: number
  address: string
}

interface MapViewProps {
  location: Location
  markers?: Array<{
    lat: number
    lng: number
    label: string
    status?: string
  }>
  height?: string
  showSafetyScore?: boolean
  safetyScore?: number
}

export default function MapView({ location, markers = [], height = '400px', showSafetyScore = false, safetyScore = 78 }: MapViewProps) {
  const getSafetyColor = (score: number) => {
    if (score >= 70) return { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-500/20' }
    if (score >= 40) return { bg: 'bg-yellow-500', text: 'text-yellow-600', light: 'bg-yellow-500/20' }
    return { bg: 'bg-red-500', text: 'text-red-600', light: 'bg-red-500/20' }
  }

  const safetyColors = getSafetyColor(safetyScore)

  return (
    <div className="relative w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm" style={{ height }}>
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

        {/* Safety Zone Circle (if showing safety score) */}
        {showSafetyScore && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 0.8 }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full ${safetyColors.bg}`}
          />
        )}

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
            <div className={`absolute -inset-4 ${safetyColors.light} rounded-full blur-md`} />
            <MapPin className={`w-10 h-10 ${safetyColors.text} drop-shadow-lg relative z-10`} fill="currentColor" />
          </motion.div>
        </motion.div>

        {/* Additional Markers */}
        {markers.map((marker, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="absolute"
            style={{
              top: `${30 + (index * 15) % 40}%`,
              left: `${25 + (index * 20) % 50}%`,
            }}
          >
            <div className="relative group">
              {marker.status === 'police' ? (
                <div className="p-2 bg-blue-600 rounded-full shadow-lg">
                  <Shield className="w-4 h-4 text-white" />
                </div>
              ) : marker.status === 'tourist' ? (
                <div className="p-1.5 bg-green-500 rounded-full shadow-md">
                  <Users className="w-3 h-3 text-white" />
                </div>
              ) : (
                <MapPin
                  className={`w-6 h-6 ${
                    marker.status === 'safe' ? 'text-green-600' :
                    marker.status === 'unsafe' ? 'text-orange-600' :
                    marker.status === 'critical' ? 'text-red-600' :
                    'text-blue-600'
                  } drop-shadow-md`}
                  fill="currentColor"
                />
              )}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-primary text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50">
                {marker.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200"
      >
        <div className="flex items-start gap-3">
          <div className="p-2 bg-navy rounded-lg">
            <Navigation className="w-5 h-5 text-teal-400" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-navy mb-1">Current Location</h4>
            <p className="text-xs text-gray-600">{location.address}</p>
            <p className="text-xs text-gray-400 mt-1">
              {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Mock Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors">
          <span className="text-navy font-bold text-lg">+</span>
        </button>
        <button className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors">
          <span className="text-navy font-bold text-lg">−</span>
        </button>
      </div>
    </div>
  )
}
