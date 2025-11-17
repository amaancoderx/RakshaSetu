'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  Users,
  AlertTriangle,
  Activity,
  MapPin,
  TrendingUp,
  CheckCircle,
  FileText,
  Database
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import MapView from '@/components/MapView'
import AlertTable from '@/components/AlertTable'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import touristsData from '@/data/tourists.json'
import alertsData from '@/data/alerts.json'
import systemLogsData from '@/data/systemLogs.json'
import toast from 'react-hot-toast'

export default function AuthorityDashboard() {
  const [tourists, setTourists] = useState<any[]>([])
  const [alerts, setAlerts] = useState<any[]>([])
  const [systemLogs, setSystemLogs] = useState<any[]>([])

  useEffect(() => {
    setTourists(touristsData)
    setAlerts(alertsData)
    setSystemLogs(systemLogsData)
  }, [])

  const stats = {
    totalTourists: tourists.length,
    activeTourists: tourists.filter(t => t.status === 'safe').length,
    activeAlerts: alerts.filter(a => a.status === 'active').length,
    criticalAlerts: alerts.filter(a => a.severity === 'critical').length,
  }

  const statusDistribution = [
    { name: 'Safe', value: tourists.filter(t => t.status === 'safe').length, color: '#10B981' },
    { name: 'Unsafe', value: tourists.filter(t => t.status === 'unsafe').length, color: '#F59E0B' },
    { name: 'Critical', value: tourists.filter(t => t.status === 'critical').length, color: '#EF4444' },
  ]

  const riskTrendData = [
    { time: '09:00', alerts: 2 },
    { time: '10:00', alerts: 3 },
    { time: '11:00', alerts: 5 },
    { time: '12:00', alerts: 7 },
    { time: '13:00', alerts: 4 },
    { time: '14:00', alerts: 6 },
    { time: '15:00', alerts: 8 },
  ]

  const alertTypeData = [
    { type: 'Panic', count: alerts.filter(a => a.type === 'panic').length },
    { type: 'Restricted', count: alerts.filter(a => a.type === 'restricted_area').length },
    { type: 'High Risk', count: alerts.filter(a => a.type === 'high_risk').length },
    { type: 'Safe Zone', count: alerts.filter(a => a.type === 'safe_zone').length },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar role="authority" userName="Inspector Verma" />

      <div className="flex flex-1">
        <Sidebar role="authority" />

        <main className="flex-1 p-8 bg-gray-50 overflow-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-primary mb-2">
              Command & Control Center
            </h1>
            <p className="text-secondary text-lg">
              Real-time monitoring and incident response
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
                  <p className="text-sm text-secondary mb-1">Total Tourists</p>
                  <p className="text-3xl font-bold text-primary">{stats.totalTourists}</p>
                  <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Active monitoring
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-accent/10">
                  <Users className="w-8 h-8 text-accent" />
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
                  <p className="text-3xl font-bold text-primary">{stats.activeAlerts}</p>
                  <p className="text-xs text-orange-600 mt-1">Requires attention</p>
                </div>
                <div className="p-4 rounded-xl bg-orange-500/10">
                  <AlertTriangle className="w-8 h-8 text-orange-600" />
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
                  <p className="text-sm text-secondary mb-1">Critical Cases</p>
                  <p className="text-3xl font-bold text-primary">{stats.criticalAlerts}</p>
                  <p className="text-xs text-danger mt-1">Immediate action</p>
                </div>
                <div className="p-4 rounded-xl bg-danger/10">
                  <Shield className="w-8 h-8 text-danger" />
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
                  <p className="text-sm text-secondary mb-1">Safe Tourists</p>
                  <p className="text-3xl font-bold text-primary">{stats.activeTourists}</p>
                  <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    All clear
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-green-500/10">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* System Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <div className="bg-white p-6 rounded-xl border-2 border-border shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-accent" />
                System Status
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-xs text-secondary">Network</p>
                    <p className="text-sm font-semibold text-primary">Online</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-xs text-secondary">AI Model</p>
                    <p className="text-sm font-semibold text-primary">Active</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-xs text-secondary">Blockchain</p>
                    <p className="text-sm font-semibold text-primary">Synced</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-xs text-secondary">Uptime</p>
                    <p className="text-sm font-semibold text-primary">99.8%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Live Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-6 rounded-xl border-2 border-border shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    Live Tourist Tracking
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-danger rounded-full animate-pulse"></div>
                    <span className="text-xs text-secondary">Live</span>
                  </div>
                </div>
                <MapView
                  location={tourists[0]?.currentLocation || { lat: 17.3850, lng: 78.4867, address: 'Hyderabad' }}
                  markers={tourists.map(t => ({
                    lat: t.currentLocation.lat,
                    lng: t.currentLocation.lng,
                    label: t.name,
                    status: t.status
                  }))}
                  height="400px"
                />
              </div>
            </motion.div>

            {/* Tourist Status Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="bg-white p-6 rounded-xl border-2 border-border shadow-sm h-full">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Status Distribution
                </h3>
                <div className="h-[300px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={statusDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {statusDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ background: '#FFFFFF', border: '2px solid #E5E7EB', borderRadius: '8px' }}
                        labelStyle={{ color: '#000000' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2 mt-4">
                  {statusDistribution.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm text-secondary">{item.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-primary">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white p-6 rounded-xl border-2 border-border shadow-sm"
            >
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Alert Trend (Today)
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={riskTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="time" stroke="#6B6B6B" />
                  <YAxis stroke="#6B6B6B" />
                  <Tooltip
                    contentStyle={{ background: '#FFFFFF', border: '2px solid #E5E7EB', borderRadius: '8px' }}
                    labelStyle={{ color: '#000000' }}
                  />
                  <Line type="monotone" dataKey="alerts" stroke="#2563EB" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white p-6 rounded-xl border-2 border-border shadow-sm"
            >
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                Alert Types
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={alertTypeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="type" stroke="#6B6B6B" />
                  <YAxis stroke="#6B6B6B" />
                  <Tooltip
                    contentStyle={{ background: '#FFFFFF', border: '2px solid #E5E7EB', borderRadius: '8px' }}
                    labelStyle={{ color: '#000000' }}
                  />
                  <Bar dataKey="count" fill="#2563EB" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Active Alerts Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mb-8"
          >
            <div className="bg-white p-6 rounded-xl border-2 border-border shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Active Alerts
                </h3>
                <button
                  onClick={() => toast.success('E-FIR generation feature')}
                  className="px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-lg transition-all flex items-center gap-2 font-medium"
                >
                  <FileText className="w-4 h-4" />
                  Generate E-FIR
                </button>
              </div>
              <AlertTable alerts={alerts.filter(a => a.status === 'active')} />
            </div>
          </motion.div>

          {/* System Logs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <div className="bg-white p-6 rounded-xl border-2 border-border shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-purple-600" />
                Blockchain & System Logs
              </h3>
              <div className="space-y-2 max-h-[400px] overflow-y-auto">
                {systemLogs.map((log, index) => (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-2 border-border"
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      log.status === 'success' ? 'bg-green-500' :
                      log.status === 'warning' ? 'bg-yellow-500' :
                      log.status === 'critical' ? 'bg-red-500' :
                      'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-secondary">
                          {new Date(log.timestamp).toLocaleTimeString()}
                        </span>
                        <span className="text-sm font-medium text-primary capitalize">
                          {log.event.replace('_', ' ')}
                        </span>
                        {log.verified && (
                          <CheckCircle className="w-4 h-4 text-accent" />
                        )}
                      </div>
                      <p className="text-xs text-secondary mt-1">{log.description}</p>
                      {log.txHash && (
                        <p className="text-xs text-purple-600 mt-1 font-mono">
                          {log.txHash.substring(0, 20)}...
                        </p>
                      )}
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      log.status === 'success' ? 'bg-green-500/20 text-green-700' :
                      log.status === 'warning' ? 'bg-yellow-500/20 text-yellow-700' :
                      log.status === 'critical' ? 'bg-red-500/20 text-red-700' :
                      'bg-blue-500/20 text-blue-700'
                    }`}>
                      {log.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
