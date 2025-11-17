'use client'

import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Plane, Shield, Download, Share2, QrCode } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function ProfilePage() {

  const touristData = {
    name: 'John Doe',
    touristId: 'DID-IN-2024-001234',
    country: 'United States',
    currentLocation: 'New Delhi, India',
    issueDate: '2024-01-15',
    expiryDate: '2024-12-31',
    email: 'john.doe@email.com',
    phone: '+1 234 567 8900',
    emergencyContact: '+1 234 567 8901'
  }

  const travelDetails = {
    arrival: 'Mumbai, Maharashtra',
    departure: 'Delhi, NCR',
    arrivalDate: '2024-01-15',
    departureDate: '2024-12-31',
    duration: '351 days'
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar role="tourist" userName="Amaan Khan" />

      <div className="flex">
        <Sidebar role="tourist" />

        <main className="flex-1 p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-primary mb-6">Profile</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Profile Info Card */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white border-2 border-border rounded-2xl p-6 shadow-lg text-center"
                >
                  {/* Profile Picture */}
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-4xl font-bold text-gray-500">
                      JD
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-primary mb-1">{touristData.name}</h2>
                  <p className="text-sm text-secondary mb-4">{touristData.country}</p>

                  <div className="flex items-center justify-center gap-2 text-sm text-secondary mb-6">
                    <MapPin className="w-4 h-4" />
                    <span>{touristData.currentLocation}</span>
                  </div>

                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                    >
                      Edit Profile
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white border-2 border-border text-primary py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Settings
                    </motion.button>
                  </div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white border-2 border-border rounded-2xl p-6 shadow-lg mt-6"
                >
                  <h3 className="font-bold text-primary mb-4">Quick Stats</h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-secondary">Places Visited</span>
                      <span className="font-bold text-primary">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-secondary">Days in India</span>
                      <span className="font-bold text-primary">87</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-secondary">Safety Score</span>
                      <span className="font-bold text-green-600">98%</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Digital Tourist ID Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-accent to-blue-600 rounded-2xl p-6 shadow-lg text-white relative overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <Shield className="w-8 h-8" />
                        <div>
                          <h3 className="text-xl font-bold">Digital Tourist ID</h3>
                          <p className="text-xs text-blue-100">Blockchain Verified</p>
                        </div>
                      </div>
                      <div className="bg-danger px-3 py-1 rounded-full text-xs font-bold">
                        Expiring Soon
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <p className="text-xs text-blue-100 mb-1">Full Name</p>
                        <p className="font-bold text-lg">{touristData.name}</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-100 mb-1">Tourist ID</p>
                        <p className="font-mono text-sm">{touristData.touristId}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <p className="text-xs text-blue-100 mb-1">Issue Date</p>
                        <p className="font-semibold">{touristData.issueDate}</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-100 mb-1">Expiry Date</p>
                        <p className="font-semibold text-red-200">{touristData.expiryDate}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/20">
                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white text-accent px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-blue-50 transition-colors"
                        >
                          <Share2 className="w-4 h-4" />
                          Share
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-white/30 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </motion.button>
                      </div>

                      <div className="bg-white p-2 rounded-lg">
                        <QrCode className="w-16 h-16 text-accent" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white border-2 border-border rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Contact Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-secondary mb-1">Email Address</p>
                      <p className="font-semibold text-primary">{touristData.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary mb-1">Phone Number</p>
                      <p className="font-semibold text-primary">{touristData.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary mb-1">Emergency Contact</p>
                      <p className="font-semibold text-primary">{touristData.emergencyContact}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary mb-1">Country</p>
                      <p className="font-semibold text-primary">{touristData.country}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Travel Details */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white border-2 border-border rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                      <Plane className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Travel Details</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-secondary mb-1">Arrival Location</p>
                      <p className="font-semibold text-primary">{travelDetails.arrival}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary mb-1">Departure Location</p>
                      <p className="font-semibold text-primary">{travelDetails.departure}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary mb-1">Arrival Date</p>
                      <p className="font-semibold text-primary flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-secondary" />
                        {travelDetails.arrivalDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary mb-1">Departure Date</p>
                      <p className="font-semibold text-primary flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-secondary" />
                        {travelDetails.departureDate}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-secondary mb-1">Total Duration</p>
                      <p className="font-semibold text-accent text-lg">{travelDetails.duration}</p>
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
