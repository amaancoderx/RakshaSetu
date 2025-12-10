'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, MapPin, Plus, Edit, Trash2, X } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

interface Zone {
  name: string
  type: string
  description: string
  location: string
  radius: string
  status: string
  created: string
  officer: string
}

export default function ZoneManagementPage() {
  const [zones, setZones] = useState<Zone[]>([
    {
      name: 'Red Fort Restricted Area',
      type: 'restricted',
      description: 'Archaeological monument - limited access',
      location: '28.6562, 77.2410',
      radius: '300m',
      status: 'active',
      created: '2024-01-15',
      officer: 'Officer Kumar'
    },
    {
      name: 'Construction Zone - CP',
      type: 'temporary',
      description: 'Metro construction ongoing',
      location: '28.6315, 77.2167',
      radius: '200m',
      status: 'active',
      created: '2024-01-20',
      officer: 'Officer Singh'
    },
    {
      name: 'Government Building Perimeter',
      type: 'restricted',
      description: 'High security government facility',
      location: '28.6139, 77.2090',
      radius: '300m',
      status: 'active',
      created: '2024-01-10',
      officer: 'Officer Sharma'
    }
  ])

  const [showModal, setShowModal] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    type: 'restricted',
    description: '',
    location: '',
    radius: '500m'
  })

  const handleCreateZone = () => {
    if (!formData.name || !formData.location || !formData.description) {
      alert('Please fill in all required fields')
      return
    }

    if (editingIndex !== null) {
      // Update existing zone
      const updatedZones = [...zones]
      updatedZones[editingIndex] = {
        ...updatedZones[editingIndex],
        name: formData.name,
        type: formData.type,
        description: formData.description,
        location: formData.location,
        radius: formData.radius
      }
      setZones(updatedZones)
      setEditingIndex(null)
    } else {
      // Create new zone
      const newZone: Zone = {
        name: formData.name,
        type: formData.type,
        description: formData.description,
        location: formData.location,
        radius: formData.radius,
        status: 'active',
        created: new Date().toISOString().split('T')[0],
        officer: 'Officer Singh'
      }
      setZones([...zones, newZone])
    }

    setShowModal(false)
    setFormData({
      name: '',
      type: 'restricted',
      description: '',
      location: '',
      radius: '500m'
    })
  }

  const handleCancel = () => {
    setShowModal(false)
    setEditingIndex(null)
    setFormData({
      name: '',
      type: 'restricted',
      description: '',
      location: '',
      radius: '500m'
    })
  }

  const handleEdit = (index: number) => {
    const zone = zones[index]
    setFormData({
      name: zone.name,
      type: zone.type,
      description: zone.description,
      location: zone.location,
      radius: zone.radius
    })
    setEditingIndex(index)
    setShowModal(true)
  }

  const handleDelete = (index: number) => {
    if (window.confirm('Are you sure you want to delete this zone?')) {
      const updatedZones = zones.filter((_, i) => i !== index)
      setZones(updatedZones)
    }
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
            className="mb-6 flex items-center justify-between"
          >
            <div>
              <h1 className="text-3xl font-bold text-primary mb-2">Zone Management</h1>
              <p className="text-secondary">Manage restricted and monitored areas</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowModal(!showModal)}
              className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-semibold shadow-md"
            >
              <Plus className="w-5 h-5" />
              Add New Zone
            </motion.button>
          </motion.div>

          {/* Add New Zone Form */}
          <AnimatePresence>
            {showModal && (
              <motion.div
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <div className="bg-white rounded-xl border-2 border-border shadow-sm">
                  {/* Form Header */}
                  <div className="flex items-center justify-between p-6 border-b-2 border-border">
                    <h2 className="text-xl font-bold text-primary">
                      {editingIndex !== null ? 'Edit Zone' : 'Add New Zone'}
                    </h2>
                    <button
                      onClick={handleCancel}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-all"
                    >
                      <X className="w-5 h-5 text-secondary" />
                    </button>
                  </div>

                  {/* Form Body */}
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Zone Name */}
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Zone Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter zone name"
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                        />
                      </div>

                      {/* Zone Type */}
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Zone Type *
                        </label>
                        <select
                          value={formData.type}
                          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary"
                        >
                          <option value="restricted">Restricted</option>
                          <option value="temporary">Temporary</option>
                        </select>
                      </div>

                      {/* Coordinates */}
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Coordinates *
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="28.6562, 77.2410"
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                        />
                      </div>

                      {/* Radius */}
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Radius *
                        </label>
                        <input
                          type="text"
                          value={formData.radius}
                          onChange={(e) => setFormData({ ...formData, radius: e.target.value })}
                          placeholder="500m"
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary"
                        />
                      </div>

                      {/* Description */}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Description *
                        </label>
                        <textarea
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          placeholder="Enter zone description"
                          rows={4}
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-primary resize-none"
                        />
                      </div>
                    </div>

                    {/* Form Actions */}
                    <div className="flex items-center gap-3 mt-6">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleCreateZone}
                        className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-bold"
                      >
                        {editingIndex !== null ? 'Update Zone' : 'Create Zone'}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleCancel}
                        className="px-6 py-3 bg-white border-2 border-border text-primary rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                      >
                        Cancel
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Existing Zones Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl border-2 border-border shadow-sm"
          >
            <div className="p-6 border-b-2 border-border">
              <h2 className="text-xl font-bold text-primary">Existing Zones</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-border">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-secondary uppercase tracking-wider">
                      Zone Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-secondary uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-secondary uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-secondary uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-secondary uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-secondary uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {zones.map((zone, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold text-primary">{zone.name}</p>
                          <p className="text-sm text-secondary mt-1">{zone.description}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          zone.type === 'restricted'
                            ? 'bg-red-100 text-red-600'
                            : 'bg-yellow-100 text-yellow-600'
                        }`}>
                          {zone.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-600">
                          {zone.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-primary">{zone.location}</p>
                            <p className="text-xs text-secondary mt-1">Radius: {zone.radius}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm text-primary">{zone.created}</p>
                          <p className="text-xs text-secondary mt-1">{zone.officer}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEdit(index)}
                            className="p-2 border-2 border-border rounded-lg hover:bg-accent hover:text-white hover:border-accent transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(index)}
                            className="p-2 border-2 border-border rounded-lg hover:bg-danger hover:text-white hover:border-danger transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
