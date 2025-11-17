'use client'

import { User, Settings, LogOut, Bell } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Logo from './Logo'

interface NavbarProps {
  role: 'tourist' | 'authority'
  userName?: string
}

export default function Navbar({ role, userName = 'User' }: NavbarProps) {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/login')
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white border-b-2 border-border sticky top-0 z-50 shadow-sm"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Logo className="w-16 h-16" />
            <div>
              <h1 className="text-2xl font-bold text-primary">RakshaSetu</h1>
              <p className="text-xs text-secondary capitalize">{role} Dashboard</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 rounded-lg hover:bg-gray-100 transition-all"
            >
              <Bell className="w-5 h-5 text-secondary" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
            </motion.button>

            {/* Settings */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push(`/${role}/settings`)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-all"
            >
              <Settings className="w-5 h-5 text-secondary" />
            </motion.button>

            {/* User Menu */}
            <div className="flex items-center gap-3 px-4 py-2 border-2 border-border rounded-lg">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-primary">{userName}</p>
                <p className="text-xs text-secondary capitalize">{role}</p>
              </div>
            </div>

            {/* Logout Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all font-medium flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
