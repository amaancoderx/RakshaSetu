'use client'

import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  AlertTriangle,
  User,
  Settings,
  MapPin,
  FileText,
  Users,
  Activity,
  Shield
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import PanicModal from './PanicModal'

interface SidebarProps {
  role: 'tourist' | 'authority'
}

interface MenuItem {
  icon: any
  label: string
  href: string
}

export default function Sidebar({ role }: SidebarProps) {
  const [showPanicModal, setShowPanicModal] = useState(false)
  const pathname = usePathname()

  const touristMenuItems: MenuItem[] = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/tourist/dashboard' },
    { icon: MapPin, label: 'My Location', href: '/tourist/location' },
    { icon: AlertTriangle, label: 'Alerts', href: '/tourist/alerts' },
    { icon: User, label: 'Profile', href: '/tourist/profile' },
    { icon: Settings, label: 'Settings', href: '/tourist/settings' },
  ]

  const authorityMenuItems: MenuItem[] = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/authority/dashboard' },
    { icon: MapPin, label: 'Map Overview', href: '/authority/map' },
    { icon: Activity, label: 'Zone Management', href: '/authority/zones' },
    { icon: Users, label: 'Tourist Search', href: '/authority/tourists' },
    { icon: FileText, label: 'ID Verification', href: '/authority/verification' },
    { icon: AlertTriangle, label: 'Active Alerts', href: '/authority/alerts' },
    { icon: Activity, label: 'Flag Anomalies', href: '/authority/anomalies' },
    { icon: FileText, label: 'FIR Generation', href: '/authority/efir' },
    { icon: Settings, label: 'Settings', href: '/authority/settings' },
  ]

  const menuItems = role === 'tourist' ? touristMenuItems : authorityMenuItems

  return (
    <aside className="w-64 bg-white border-r-2 border-border h-screen sticky top-0 flex flex-col">
      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href
          return (
            <Link key={index} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer
                  ${isActive
                    ? 'bg-accent text-white shadow-md'
                    : 'text-secondary hover:bg-gray-100'
                  }
                `}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium text-sm">{item.label}</span>
              </motion.div>
            </Link>
          )
        })}
      </nav>

      {/* Panic Button - Tourist Only */}
      {role === 'tourist' && (
        <>
          <div className="p-4 border-t-2 border-border">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPanicModal(true)}
              className="w-full py-4 bg-danger text-white rounded-lg font-bold text-sm flex flex-col items-center justify-center gap-2 hover:bg-danger/90 transition-all shadow-lg"
            >
              <Shield className="w-6 h-6" />
              <span>PANIC SHIELD</span>
            </motion.button>
            <p className="text-xs text-secondary text-center mt-2">Emergency Alert</p>
          </div>

          <PanicModal
            isOpen={showPanicModal}
            onClose={() => setShowPanicModal(false)}
            location="Charminar, Hyderabad"
          />
        </>
      )}

      {/* Footer */}
      <div className="p-4 border-t-2 border-border">
        <div className="p-3 rounded-lg bg-gray-50">
          <p className="text-xs font-semibold text-primary mb-1">
            {role === 'tourist' ? 'Tourist Panel' : 'Authority Panel'}
          </p>
          <p className="text-xs text-secondary">RakshaSetu v1.0.0</p>
        </div>
      </div>
    </aside>
  )
}
