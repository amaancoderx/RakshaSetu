'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Lock, Bell, Shield, Globe, Mail, Phone, MapPin, Save, Camera } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield }
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
            <h1 className="text-3xl font-bold text-primary mb-2">Settings</h1>
            <p className="text-secondary">Manage your account settings and preferences</p>
          </motion.div>

          {/* Settings Container */}
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Tabs Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-xl border-2 border-border shadow-sm p-4">
                <div className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium ${
                          activeTab === tab.id
                            ? 'bg-accent text-white'
                            : 'text-primary hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{tab.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Settings Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-xl border-2 border-border shadow-sm">
                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-6">Profile Information</h2>

                    {/* Profile Picture */}
                    <div className="mb-8">
                      <label className="block text-sm font-semibold text-primary mb-3">
                        Profile Picture
                      </label>
                      <div className="flex items-center gap-4">
                        <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                          <User className="w-12 h-12 text-white" />
                        </div>
                        <div>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-semibold mb-2"
                          >
                            <Camera className="w-4 h-4" />
                            Change Photo
                          </motion.button>
                          <p className="text-xs text-secondary">JPG, PNG or GIF. Max size 2MB</p>
                        </div>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="space-y-4 mb-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-primary mb-2">
                            <User className="w-4 h-4 inline mr-1" />
                            Full Name
                          </label>
                          <input
                            type="text"
                            defaultValue="Officer Singh"
                            className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-primary mb-2">
                            <Shield className="w-4 h-4 inline mr-1" />
                            Badge Number
                          </label>
                          <input
                            type="text"
                            defaultValue="OFF-2024-001"
                            className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-primary mb-2">
                            <Mail className="w-4 h-4 inline mr-1" />
                            Email Address
                          </label>
                          <input
                            type="email"
                            defaultValue="officer.singh@rakshasetu.gov.in"
                            className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-primary mb-2">
                            <Phone className="w-4 h-4 inline mr-1" />
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            defaultValue="+91 9876543210"
                            className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          Station Assignment
                        </label>
                        <input
                          type="text"
                          defaultValue="Connaught Place Police Station"
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Department
                        </label>
                        <select className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary">
                          <option>Tourist Safety Division</option>
                          <option>Investigation Department</option>
                          <option>Border Control</option>
                          <option>Cyber Crime Unit</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Rank
                        </label>
                        <select className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary">
                          <option>Inspector</option>
                          <option>Sub-Inspector</option>
                          <option>Assistant Sub-Inspector</option>
                          <option>Head Constable</option>
                          <option>Constable</option>
                        </select>
                      </div>
                    </div>

                    {/* Save Button */}
                    <div className="flex gap-3 pt-4 border-t-2 border-border">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-bold flex items-center gap-2"
                      >
                        <Save className="w-5 h-5" />
                        Save Changes
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 bg-white border-2 border-border text-primary rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                      >
                        Cancel
                      </motion.button>
                    </div>
                  </div>
                )}

                {/* Security Tab */}
                {activeTab === 'security' && (
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-6">Security Settings</h2>

                    <div className="space-y-6">
                      {/* Change Password */}
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-4">Change Password</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-semibold text-primary mb-2">
                              Current Password
                            </label>
                            <input
                              type="password"
                              placeholder="Enter current password"
                              className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-primary mb-2">
                              New Password
                            </label>
                            <input
                              type="password"
                              placeholder="Enter new password"
                              className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-primary mb-2">
                              Confirm New Password
                            </label>
                            <input
                              type="password"
                              placeholder="Confirm new password"
                              className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Two-Factor Authentication */}
                      <div className="pt-6 border-t-2 border-border">
                        <h3 className="text-lg font-bold text-primary mb-4">Two-Factor Authentication</h3>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-2 border-border">
                          <div>
                            <p className="font-semibold text-primary">Enable 2FA</p>
                            <p className="text-sm text-secondary">Add an extra layer of security to your account</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                          </label>
                        </div>
                      </div>

                      {/* Active Sessions */}
                      <div className="pt-6 border-t-2 border-border">
                        <h3 className="text-lg font-bold text-primary mb-4">Active Sessions</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border-2 border-green-200">
                            <div>
                              <p className="font-semibold text-primary">Current Session</p>
                              <p className="text-sm text-secondary">Windows • Chrome • Delhi, India</p>
                              <p className="text-xs text-secondary mt-1">Last active: Just now</p>
                            </div>
                            <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full font-semibold">
                              Active
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Save Button */}
                      <div className="flex gap-3 pt-4 border-t-2 border-border">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-bold flex items-center gap-2"
                        >
                          <Save className="w-5 h-5" />
                          Update Security Settings
                        </motion.button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Notifications Tab */}
                {activeTab === 'notifications' && (
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-6">Notification Preferences</h2>

                    <div className="space-y-4">
                      {[
                        {
                          title: 'Emergency Alerts',
                          description: 'Receive notifications for critical tourist emergencies',
                          defaultChecked: true
                        },
                        {
                          title: 'New FIR Assignments',
                          description: 'Get notified when new FIRs are assigned to you',
                          defaultChecked: true
                        },
                        {
                          title: 'Anomaly Detections',
                          description: 'Alerts for AI-detected suspicious activities',
                          defaultChecked: true
                        },
                        {
                          title: 'Zone Violations',
                          description: 'Notifications when tourists enter restricted zones',
                          defaultChecked: true
                        },
                        {
                          title: 'System Updates',
                          description: 'Updates about system maintenance and new features',
                          defaultChecked: false
                        },
                        {
                          title: 'Email Notifications',
                          description: 'Receive email summaries of daily activities',
                          defaultChecked: true
                        },
                        {
                          title: 'SMS Alerts',
                          description: 'Get SMS for high-priority incidents',
                          defaultChecked: true
                        }
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-2 border-border"
                        >
                          <div>
                            <p className="font-semibold text-primary">{item.title}</p>
                            <p className="text-sm text-secondary">{item.description}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked={item.defaultChecked} />
                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                          </label>
                        </div>
                      ))}
                    </div>

                    {/* Save Button */}
                    <div className="flex gap-3 pt-6 border-t-2 border-border mt-6">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-bold flex items-center gap-2"
                      >
                        <Save className="w-5 h-5" />
                        Save Preferences
                      </motion.button>
                    </div>
                  </div>
                )}

                {/* Privacy Tab */}
                {activeTab === 'privacy' && (
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-6">Privacy Settings</h2>

                    <div className="space-y-6">
                      {/* Data Sharing */}
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-4">Data Sharing</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-2 border-border">
                            <div>
                              <p className="font-semibold text-primary">Share Location</p>
                              <p className="text-sm text-secondary">Allow system to track your location during duty</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-2 border-border">
                            <div>
                              <p className="font-semibold text-primary">Activity Logs</p>
                              <p className="text-sm text-secondary">Keep detailed logs of all your activities</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Visibility */}
                      <div className="pt-6 border-t-2 border-border">
                        <h3 className="text-lg font-bold text-primary mb-4">Profile Visibility</h3>
                        <div className="space-y-3">
                          <div className="p-4 bg-gray-50 rounded-lg border-2 border-border">
                            <label className="block text-sm font-semibold text-primary mb-2">
                              Who can see your profile?
                            </label>
                            <select className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary bg-white">
                              <option>All Officers</option>
                              <option>Same Department Only</option>
                              <option>Supervisors Only</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Data Management */}
                      <div className="pt-6 border-t-2 border-border">
                        <h3 className="text-lg font-bold text-primary mb-4">Data Management</h3>
                        <div className="space-y-3">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-4 py-3 bg-white border-2 border-border text-primary rounded-lg hover:bg-gray-50 transition-colors font-semibold text-left"
                          >
                            Download My Data
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-4 py-3 bg-white border-2 border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors font-semibold text-left"
                          >
                            Delete Account
                          </motion.button>
                        </div>
                      </div>

                      {/* Save Button */}
                      <div className="flex gap-3 pt-4 border-t-2 border-border">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-bold flex items-center gap-2"
                        >
                          <Save className="w-5 h-5" />
                          Save Privacy Settings
                        </motion.button>
                      </div>
                    </div>
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
