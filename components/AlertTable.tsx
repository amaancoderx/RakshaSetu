'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle, Clock, MapPin } from 'lucide-react'

interface Alert {
  id: number
  type: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  status: string
  timestamp: string
  location: {
    address: string
  }
  description: string
  touristName?: string
}

interface AlertTableProps {
  alerts: Alert[]
  onAlertClick?: (alert: Alert) => void
}

export default function AlertTable({ alerts, onAlertClick }: AlertTableProps) {
  const getSeverityColor = (severity: string) => {
    const colors = {
      low: 'bg-green-100 text-green-800 border-green-200',
      medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      high: 'bg-orange-100 text-orange-800 border-orange-200',
      critical: 'bg-red-100 text-red-800 border-red-200',
    }
    return colors[severity as keyof typeof colors] || colors.low
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'active':
        return <AlertTriangle className="w-4 h-4 text-red-600" />
      case 'monitoring':
        return <Clock className="w-4 h-4 text-yellow-600" />
      default:
        return <Clock className="w-4 h-4 text-gray-600" />
    }
  }

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: 'short'
    })
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Time
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Type
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Severity
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Location
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {alerts.map((alert, index) => (
            <motion.tr
              key={alert.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => onAlertClick?.(alert)}
              className="hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{formatTime(alert.timestamp)}</div>
              </td>
              <td className="px-4 py-4">
                <div className="text-sm font-medium text-gray-900 capitalize">
                  {alert.type.replace('_', ' ')}
                </div>
                {alert.touristName && (
                  <div className="text-xs text-gray-500">{alert.touristName}</div>
                )}
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className={`
                  inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                  ${getSeverityColor(alert.severity)}
                `}>
                  {alert.severity}
                </span>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-1 text-sm text-gray-900">
                  <MapPin className="w-3 h-3 text-gray-400" />
                  <span className="truncate max-w-[200px]">{alert.location.address}</span>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  {getStatusIcon(alert.status)}
                  <span className="text-sm text-gray-900 capitalize">{alert.status}</span>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>

      {alerts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <AlertTriangle className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No alerts to display</p>
        </div>
      )}
    </div>
  )
}
