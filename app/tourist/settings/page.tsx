'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  User,
  Mail,
  Phone,
  MapPin,
  Shield,
  Bell,
  Lock,
  Globe,
  CreditCard,
  Save
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import toast from 'react-hot-toast'

export default function TouristSettings() {
  const [activeTab, setActiveTab] = useState('profile')
  const [formData, setFormData] = useState({
    name: 'Amaan Sheikh',
    email: 'amaan@tourist.com',
    phone: '+91 98765 43210',
    nationality: 'Indian',
    emergencyContact: '+91 98765 00000',
    emergencyName: 'Family Contact',
  })

  const [notifications, setNotifications] = useState({
    alerts: true,
    locationTracking: true,
    emergencyAlerts: true,
    systemUpdates: false,
  })

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Lock },
  ]

  const handleSave = () => {
    toast.success('Settings saved successfully!')
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNotificationToggle = (field: string) => {
    setNotifications(prev => ({ ...prev, [field]: !prev[field as keyof typeof prev] }))
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar role="tourist" userName="Amaan Sheikh" />

      <div className="flex flex-1">
        <Sidebar role="tourist" />

        <main className="flex-1 p-8 bg-gray-50 overflow-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-primary mb-2">Settings</h1>
            <p className="text-secondary text-lg">Manage your account and preferences</p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Tabs Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-4 rounded-xl border-2 border-border shadow-sm space-y-2">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-accent text-white shadow-md'
                        : 'text-secondary hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 rounded-xl border-2 border-border shadow-sm">
                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <User className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-primary">Profile Information</h2>
                    </div>

                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-primary mb-2">
                            Full Name
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              className="w-full pl-11 pr-4 py-3 bg-white border-2 border-border rounded-lg text-primary focus:outline-none focus:border-accent transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-primary mb-2">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="w-full pl-11 pr-4 py-3 bg-white border-2 border-border rounded-lg text-primary focus:outline-none focus:border-accent transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-primary mb-2">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              className="w-full pl-11 pr-4 py-3 bg-white border-2 border-border rounded-lg text-primary focus:outline-none focus:border-accent transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-primary mb-2">
                            Nationality
                          </label>
                          <div className="relative">
                            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                            <input
                              type="text"
                              value={formData.nationality}
                              onChange={(e) => handleInputChange('nationality', e.target.value)}
                              className="w-full pl-11 pr-4 py-3 bg-white border-2 border-border rounded-lg text-primary focus:outline-none focus:border-accent transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t-2 border-border">
                        <h3 className="text-lg font-semibold text-primary mb-4">Emergency Contact</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-primary mb-2">
                              Contact Name
                            </label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                              <input
                                type="text"
                                value={formData.emergencyName}
                                onChange={(e) => handleInputChange('emergencyName', e.target.value)}
                                className="w-full pl-11 pr-4 py-3 bg-white border-2 border-border rounded-lg text-primary focus:outline-none focus:border-accent transition-all"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-primary mb-2">
                              Contact Number
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                              <input
                                type="tel"
                                value={formData.emergencyContact}
                                onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                                className="w-full pl-11 pr-4 py-3 bg-white border-2 border-border rounded-lg text-primary focus:outline-none focus:border-accent transition-all"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleSave}
                        className="w-full py-4 bg-accent text-white rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-accent/90 transition-all shadow-lg mt-6"
                      >
                        <Save className="w-5 h-5" />
                        Save Changes
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* Security Tab */}
                {activeTab === 'security' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-primary">Security Settings</h2>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Current Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                          <input
                            type="password"
                            placeholder="Enter current password"
                            className="w-full pl-11 pr-4 py-3 bg-white border-2 border-border rounded-lg text-primary placeholder-secondary focus:outline-none focus:border-accent transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          New Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                          <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full pl-11 pr-4 py-3 bg-white border-2 border-border rounded-lg text-primary placeholder-secondary focus:outline-none focus:border-accent transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Confirm New Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                          <input
                            type="password"
                            placeholder="Confirm new password"
                            className="w-full pl-11 pr-4 py-3 bg-white border-2 border-border rounded-lg text-primary placeholder-secondary focus:outline-none focus:border-accent transition-all"
                          />
                        </div>
                      </div>

                      <div className="pt-6 border-t-2 border-border">
                        <h3 className="text-lg font-semibold text-primary mb-4">Digital ID (DID)</h3>
                        <div className="p-4 bg-gray-50 rounded-lg border-2 border-border">
                          <div className="flex items-center gap-3 mb-3">
                            <CreditCard className="w-5 h-5 text-accent" />
                            <p className="text-sm font-medium text-primary">Blockchain-backed Identity</p>
                          </div>
                          <p className="text-xs text-secondary font-mono mb-2">
                            did:raksha:eth:0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb
                          </p>
                          <p className="text-xs text-secondary">
                            Your decentralized ID is secured on blockchain and cannot be modified.
                          </p>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleSave}
                        className="w-full py-4 bg-accent text-white rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-accent/90 transition-all shadow-lg mt-6"
                      >
                        <Save className="w-5 h-5" />
                        Update Password
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* Notifications Tab */}
                {activeTab === 'notifications' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Bell className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-primary">Notification Preferences</h2>
                    </div>

                    <div className="space-y-4">
                      {Object.entries(notifications).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-2 border-border">
                          <div>
                            <p className="text-sm font-semibold text-primary capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </p>
                            <p className="text-xs text-secondary mt-1">
                              {key === 'alerts' && 'Receive notifications for safety alerts'}
                              {key === 'locationTracking' && 'Get updates on location changes'}
                              {key === 'emergencyAlerts' && 'Critical emergency notifications'}
                              {key === 'systemUpdates' && 'Platform updates and announcements'}
                            </p>
                          </div>
                          <button
                            onClick={() => handleNotificationToggle(key)}
                            className={`relative w-14 h-7 rounded-full transition-all ${
                              value ? 'bg-accent' : 'bg-gray-300'
                            }`}
                          >
                            <motion.div
                              animate={{ x: value ? 28 : 2 }}
                              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                              className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                            />
                          </button>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSave}
                      className="w-full py-4 bg-accent text-white rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-accent/90 transition-all shadow-lg mt-6"
                    >
                      <Save className="w-5 h-5" />
                      Save Preferences
                    </motion.button>
                  </motion.div>
                )}

                {/* Privacy Tab */}
                {activeTab === 'privacy' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Lock className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-primary">Privacy & Data</h2>
                    </div>

                    <div className="space-y-6">
                      <div className="p-6 bg-gray-50 rounded-lg border-2 border-border">
                        <div className="flex items-center gap-3 mb-3">
                          <MapPin className="w-5 h-5 text-accent" />
                          <h3 className="text-lg font-semibold text-primary">Location Data</h3>
                        </div>
                        <p className="text-sm text-secondary mb-4">
                          Your location is tracked only when you're logged in for safety purposes. Data is encrypted and stored securely.
                        </p>
                        <button className="px-4 py-2 bg-white border-2 border-border text-primary rounded-lg hover:border-accent transition-all font-medium">
                          View Location History
                        </button>
                      </div>

                      <div className="p-6 bg-gray-50 rounded-lg border-2 border-border">
                        <div className="flex items-center gap-3 mb-3">
                          <Shield className="w-5 h-5 text-accent" />
                          <h3 className="text-lg font-semibold text-primary">Data Sharing</h3>
                        </div>
                        <p className="text-sm text-secondary mb-4">
                          Your data is shared only with authorized authorities in case of emergency. No third-party sharing.
                        </p>
                        <button className="px-4 py-2 bg-white border-2 border-border text-primary rounded-lg hover:border-accent transition-all font-medium">
                          Download My Data
                        </button>
                      </div>

                      <div className="p-6 bg-danger/5 rounded-lg border-2 border-danger/20">
                        <div className="flex items-center gap-3 mb-3">
                          <Shield className="w-5 h-5 text-danger" />
                          <h3 className="text-lg font-semibold text-danger">Danger Zone</h3>
                        </div>
                        <p className="text-sm text-secondary mb-4">
                          Deleting your account will remove all your data permanently. This action cannot be undone.
                        </p>
                        <button className="px-4 py-2 bg-danger text-white rounded-lg hover:bg-danger/90 transition-all font-medium">
                          Delete Account
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
