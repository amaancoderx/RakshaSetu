'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, Mail, ArrowRight, UserCircle, BadgeCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import Logo from '@/components/Logo'

export default function LoginPage() {
  const router = useRouter()
  const [role, setRole] = useState<'tourist' | 'authority'>('tourist')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // Mock authentication
      const users = [
        { email: 'amaan@tourist.com', password: 'tourist123', role: 'tourist' },
        { email: 'officer@authority.com', password: 'authority123', role: 'authority' }
      ]

      const user = users.find(u => u.email === email && u.password === password && u.role === role)

      if (user) {
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(user))
        toast.success(`Welcome! Logging in as ${role}`)

        // Redirect based on role
        setTimeout(() => {
          if (role === 'tourist') {
            router.push('/tourist/dashboard')
          } else {
            router.push('/authority/dashboard')
          }
        }, 1000)
      } else {
        toast.error('Invalid credentials. Please try again.')
        setIsLoading(false)
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <button
        onClick={() => router.push('/')}
        className="absolute top-6 left-6 text-primary hover:text-accent transition-colors text-base font-semibold flex items-center gap-2 px-4 py-2 border-2 border-border rounded-lg hover:border-accent"
      >
        ← Back to Home
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex flex-col items-center gap-4 mb-6"
          >
            <Logo className="w-28 h-28" />
            <div className="text-center">
              <h1 className="text-4xl font-bold text-primary mb-2">RakshaSetu</h1>
              <p className="text-sm text-secondary font-medium">India's Smart Tourism Safety Intelligence Network</p>
            </div>
          </motion.div>
        </div>

        <div className="bg-white border-2 border-border rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Login</h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setRole('tourist')}
              className={`p-4 rounded-xl flex flex-col items-center gap-2 transition-all border-2 ${
                role === 'tourist'
                  ? 'bg-accent/10 border-accent text-accent'
                  : 'bg-white border-border text-secondary hover:border-accent/50'
              }`}
            >
              <UserCircle className="w-8 h-8" />
              <span className="font-semibold">Tourist</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setRole('authority')}
              className={`p-4 rounded-xl flex flex-col items-center gap-2 transition-all border-2 ${
                role === 'authority'
                  ? 'bg-accent/10 border-accent text-accent'
                  : 'bg-white border-border text-secondary hover:border-accent/50'
              }`}
            >
              <BadgeCheck className="w-8 h-8" />
              <span className="font-semibold">Authority</span>
            </motion.button>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white border-2 border-border rounded-lg text-primary placeholder-secondary focus:outline-none focus:border-accent transition-all"
                  placeholder={role === 'tourist' ? 'amaan@tourist.com' : 'officer@authority.com'}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white border-2 border-border rounded-lg text-primary placeholder-secondary focus:outline-none focus:border-accent transition-all"
                  placeholder={role === 'tourist' ? 'tourist123' : 'authority123'}
                  required
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-danger text-white rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-danger/90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Logging in...
                </>
              ) : (
                <>
                  Login
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-border">
            <p className="text-xs text-secondary mb-2 font-semibold">Demo Credentials:</p>
            <div className="space-y-1 text-xs text-secondary">
              <p><span className="text-accent font-medium">Tourist:</span> amaan@tourist.com / tourist123</p>
              <p><span className="text-accent font-medium">Authority:</span> officer@authority.com / authority123</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
