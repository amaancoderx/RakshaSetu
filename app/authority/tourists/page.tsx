'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, Phone, User, Mail, Calendar, Filter } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function TouristSearchPage() {
  const [selectedTourist, setSelectedTourist] = useState<any>(null)
  const [statusFilter, setStatusFilter] = useState('All Status')
  const [showFilterDropdown, setShowFilterDropdown] = useState(false)

  const allTourists = [
    {
      id: 'T001',
      name: 'John Smith',
      nationality: 'USA',
      passport: 'US123456789',
      status: 'active',
      location: 'Red Fort Area',
      phone: '+91-9876543210',
      checkin: '2024-01-15',
      hotel: 'Hotel Imperial',
      group: 'Group: 2',
      lastSeen: '2 hours ago',
      riskLevel: 'low'
    },
    {
      id: 'T002',
      name: 'Maria Garcia',
      nationality: 'Spain',
      passport: 'ES987654321',
      status: 'missing',
      location: 'India Gate',
      phone: '+91-8765432109',
      checkin: '2024-01-18',
      hotel: 'The Leela Palace',
      group: 'Group: 1',
      lastSeen: '6 hours ago',
      riskLevel: 'high'
    },
    {
      id: 'T003',
      name: 'David Johnson',
      nationality: 'UK',
      passport: 'GB456789123',
      status: 'active',
      location: 'Connaught Place',
      phone: '+91-7654321098',
      checkin: '2024-01-20',
      hotel: 'Taj Palace',
      group: 'Group: 4',
      lastSeen: '30 minutes ago',
      riskLevel: 'low'
    },
    {
      id: 'T004',
      name: 'Zhang Wei',
      nationality: 'China',
      passport: 'CN789123456',
      status: 'flagged',
      location: 'Lotus Temple',
      phone: '+91-6543210987',
      checkin: '2024-01-19',
      hotel: 'ITC Maurya',
      group: 'Group: 3',
      lastSeen: '1 hour ago',
      riskLevel: 'medium'
    }
  ]

  // Filter tourists based on selected status
  const tourists = statusFilter === 'All Status'
    ? allTourists
    : allTourists.filter(tourist => tourist.status === statusFilter.toLowerCase())

  const filterOptions = ['All Status', 'Active', 'Missing', 'Flagged']

  const handleFilterSelect = (filter: string) => {
    setStatusFilter(filter)
    setShowFilterDropdown(false)
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
            <h1 className="text-3xl font-bold text-primary mb-2">Tourist Search</h1>
            <p className="text-secondary">
              Total Tourists: {allTourists.length} | Active: {allTourists.filter(t => t.status === 'active').length}
            </p>
          </motion.div>

          {/* Search Bar */}
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
                  placeholder="Search by name, ID, location, or nationality..."
                  className="w-full pl-10 pr-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                />
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Filter className="w-5 h-5 text-secondary" />
                  <span className="font-medium text-primary">{statusFilter}</span>
                </button>

                {/* Filter Dropdown */}
                {showFilterDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white border-2 border-border rounded-lg shadow-lg z-50">
                    {filterOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleFilterSelect(option)}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                          statusFilter === option ? 'bg-accent/10 text-accent font-semibold' : 'text-primary'
                        } ${index === 0 ? 'rounded-t-lg' : ''} ${
                          index === filterOptions.length - 1 ? 'rounded-b-lg' : 'border-b border-border'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Tourist List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-xl border-2 border-border shadow-sm">
                <div className="p-6 border-b-2 border-border">
                  <h2 className="text-xl font-bold text-primary">Search Results ({tourists.length})</h2>
                </div>

                <div className="divide-y divide-border">
                  {tourists.map((tourist, index) => (
                    <motion.div
                      key={tourist.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      onClick={() => setSelectedTourist(tourist)}
                      className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${
                        selectedTourist?.id === tourist.id ? 'bg-accent/5 border-l-4 border-l-accent' : ''
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                          tourist.status === 'active' ? 'bg-green-100' :
                          tourist.status === 'missing' ? 'bg-red-100' :
                          'bg-yellow-100'
                        }`}>
                          <User className={`w-6 h-6 ${
                            tourist.status === 'active' ? 'text-green-600' :
                            tourist.status === 'missing' ? 'text-red-600' :
                            'text-yellow-600'
                          }`} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-bold text-primary text-lg">{tourist.name}</h3>
                              <p className="text-sm text-secondary">
                                {tourist.id} | {tourist.nationality} | Passport: {tourist.passport}
                              </p>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                tourist.status === 'active' ? 'bg-green-100 text-green-600' :
                                tourist.status === 'missing' ? 'bg-red-100 text-red-600' :
                                'bg-yellow-100 text-yellow-600'
                              }`}>
                                {tourist.status}
                              </span>
                              <span className={`w-3 h-3 rounded-full ${
                                tourist.riskLevel === 'low' ? 'bg-green-500' :
                                tourist.riskLevel === 'medium' ? 'bg-yellow-500' :
                                'bg-red-500'
                              }`} />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2 text-secondary">
                              <MapPin className="w-4 h-4" />
                              <span>{tourist.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-secondary">
                              <Phone className="w-4 h-4" />
                              <span>{tourist.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-secondary">
                              <Calendar className="w-4 h-4" />
                              <span>Check-in: {tourist.checkin}</span>
                            </div>
                            <div className="text-secondary">
                              Last seen: <span className="font-medium text-primary">{tourist.lastSeen}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tourist Details Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-xl border-2 border-border p-6 shadow-sm sticky top-8">
                {selectedTourist ? (
                  <>
                    <h2 className="text-xl font-bold text-primary mb-4">Tourist Details</h2>

                    <div className="space-y-4">
                      <div className="text-center pb-4 border-b-2 border-border">
                        <div className={`w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center ${
                          selectedTourist.status === 'active' ? 'bg-green-100' :
                          selectedTourist.status === 'missing' ? 'bg-red-100' :
                          'bg-yellow-100'
                        }`}>
                          <User className={`w-10 h-10 ${
                            selectedTourist.status === 'active' ? 'text-green-600' :
                            selectedTourist.status === 'missing' ? 'text-red-600' :
                            'text-yellow-600'
                          }`} />
                        </div>
                        <h3 className="font-bold text-primary text-lg">{selectedTourist.name}</h3>
                        <p className="text-sm text-secondary">{selectedTourist.nationality}</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${
                          selectedTourist.status === 'active' ? 'bg-green-100 text-green-600' :
                          selectedTourist.status === 'missing' ? 'bg-red-100 text-red-600' :
                          'bg-yellow-100 text-yellow-600'
                        }`}>
                          {selectedTourist.status}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">Contact Information</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-secondary">
                            <Phone className="w-4 h-4" />
                            <span>{selectedTourist.phone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-secondary">
                            <Mail className="w-4 h-4" />
                            <span>Emergency: +91-555-0123</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">Travel Information</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <p className="text-xs text-secondary">Tourist ID</p>
                            <p className="font-medium text-primary">{selectedTourist.id}</p>
                          </div>
                          <div>
                            <p className="text-xs text-secondary">Passport</p>
                            <p className="font-medium text-primary">{selectedTourist.passport}</p>
                          </div>
                          <div>
                            <p className="text-xs text-secondary">Check-in</p>
                            <p className="font-medium text-primary">{selectedTourist.checkin}</p>
                          </div>
                          <div>
                            <p className="text-xs text-secondary">Hotel</p>
                            <p className="font-medium text-primary">{selectedTourist.hotel}</p>
                          </div>
                          <div>
                            <p className="text-xs text-secondary">Group</p>
                            <p className="font-medium text-primary">{selectedTourist.group}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">Current Status</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-secondary">Location:</span>
                            <span className="font-medium text-primary">{selectedTourist.location}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-secondary">Last Seen:</span>
                            <span className="font-medium text-primary">{selectedTourist.lastSeen}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-secondary">Risk Level:</span>
                            <span className={`font-bold ${
                              selectedTourist.riskLevel === 'low' ? 'text-green-600' :
                              selectedTourist.riskLevel === 'medium' ? 'text-yellow-600' :
                              'text-red-600'
                            }`}>
                              {selectedTourist.riskLevel}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t-2 border-border space-y-2">
                        <button className="w-full bg-accent text-white py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                          Contact Tourist
                        </button>
                        <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                          Update Location
                        </button>
                        <button className="w-full bg-yellow-600 text-white py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                          Flag for Review
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <User className="w-16 h-16 text-secondary mx-auto mb-4 opacity-50" />
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
