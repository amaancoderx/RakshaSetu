'use client'

import { motion } from 'framer-motion'
import { Brain, FileKey, AlertCircle, MapPin, Activity, LayoutDashboard } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Logo from '@/components/Logo'

export default function LandingPage() {
  const router = useRouter()

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Monitoring',
      description: 'Detects risky patterns and inactivity in real-time.'
    },
    {
      icon: MapPin,
      title: 'Geo-Fencing Intelligence',
      description: 'Creates safety zones and sends instant alerts on breach.'
    },
    {
      icon: FileKey,
      title: 'Blockchain Digital ID',
      description: 'W3C DID ensures decentralized and tamper-proof verification.'
    },
    {
      icon: AlertCircle,
      title: 'Instant Emergency Response',
      description: 'Panic button with live tracking and automated E-FIR generation.'
    },
    {
      icon: Activity,
      title: 'Authority Dashboard',
      description: 'Unified monitoring for tourism and police control centers.'
    }
  ]

  const steps = [
    {
      number: '1',
      title: 'Register & Verify',
      description: 'Tourist creates blockchain-backed ID.'
    },
    {
      number: '2',
      title: 'Monitor & Predict',
      description: 'AI + Geo-Fencing track safety behavior.'
    },
    {
      number: '3',
      title: 'Alert & Respond',
      description: 'Instant alerts to authorities, E-FIR auto-drafted.'
    }
  ]

  const stats = [
    { value: '500+', label: 'Safe journeys monitored' },
    { value: '120+', label: 'Alerts automatically handled' },
    { value: '99%', label: 'Faster response vs manual reporting' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="border-b border-border bg-white sticky top-0 z-50 shadow-sm"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Logo className="w-20 h-20" />
              <div>
                <h1 className="text-3xl font-bold text-primary">RakshaSetu</h1>
                <p className="text-sm text-secondary">v1.0.0</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/login')}
              className="px-6 py-2.5 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium"
            >
              Login
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 border border-accent/30 rounded-full bg-accent/5"
            >
              <span className="text-sm font-semibold text-accent">SDG 9 & 11 Initiative</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              RakshaSetu
            </h1>

            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              India's Smart Tourism Safety Intelligence Network
            </h2>

            <p className="text-xl text-secondary mb-8 leading-relaxed">
              Empowering safer journeys through AI-driven monitoring, Geo-Intelligent boundaries, and Blockchain-verified identities.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/login')}
                className="px-8 py-4 bg-danger text-white rounded-lg font-semibold text-lg hover:bg-danger/90 transition-all shadow-lg hover:shadow-xl"
              >
                Get Started
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-all"
              >
                Watch Demo
              </motion.button>
            </div>

            <p className="text-sm text-secondary italic">
              "Bridging safety and trust — for travelers, authorities, and smart cities."
            </p>
          </motion.div>

          {/* Hero Illustration - RakshaSetu Network */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-[600px] flex items-center justify-center">
              {/* Central Logo */}
              <motion.div
                className="relative z-20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="relative w-48 h-48 bg-white rounded-2xl shadow-2xl flex items-center justify-center border-4 border-accent/20">
                    <Logo className="w-40 h-40" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Feature Nodes - Positioned around center */}
              {/* Top Left - AI Monitoring */}
              <motion.div
                className="absolute top-16 left-20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-xs font-semibold text-primary mt-2 text-center">AI Monitor</p>
                </motion.div>
                {/* Connecting line */}
                <svg className="absolute top-10 left-10 w-64 h-64 pointer-events-none">
                  <motion.path
                    d="M 40 40 Q 150 100 260 250"
                    stroke="#2563EB"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </motion.div>

              {/* Top Right - Geo-Fencing */}
              <motion.div
                className="absolute top-16 right-20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-xs font-semibold text-primary mt-2 text-center">Geo-Fence</p>
                </motion.div>
                <svg className="absolute top-10 right-10 w-64 h-64 pointer-events-none">
                  <motion.path
                    d="M 224 40 Q 150 100 4 250"
                    stroke="#10B981"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.3 }}
                  />
                </svg>
              </motion.div>

              {/* Middle Left - Blockchain ID */}
              <motion.div
                className="absolute left-8 top-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <motion.div
                  animate={{ x: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <FileKey className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-xs font-semibold text-primary mt-2 text-center">Digital ID</p>
                </motion.div>
                <svg className="absolute top-0 left-10 w-80 h-20 pointer-events-none">
                  <motion.path
                    d="M 20 10 Q 160 10 320 10"
                    stroke="#A855F7"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.6 }}
                  />
                </svg>
              </motion.div>

              {/* Middle Right - Emergency Alert */}
              <motion.div
                className="absolute right-8 top-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-danger rounded-full flex items-center justify-center shadow-lg">
                    <AlertCircle className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-xs font-semibold text-primary mt-2 text-center">Emergency</p>
                </motion.div>
                <svg className="absolute top-0 right-10 w-80 h-20 pointer-events-none">
                  <motion.path
                    d="M 300 10 Q 150 10 0 10"
                    stroke="#E63946"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.9 }}
                  />
                </svg>
              </motion.div>

              {/* Bottom Left - Real-time Tracking */}
              <motion.div
                className="absolute bottom-16 left-24"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Activity className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-xs font-semibold text-primary mt-2 text-center">Tracking</p>
                </motion.div>
                <svg className="absolute bottom-10 left-10 w-64 h-64 pointer-events-none">
                  <motion.path
                    d="M 40 224 Q 150 150 260 14"
                    stroke="#F97316"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1.2 }}
                  />
                </svg>
              </motion.div>

              {/* Bottom Right - Authority Dashboard */}
              <motion.div
                className="absolute bottom-16 right-24"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <LayoutDashboard className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-xs font-semibold text-primary mt-2 text-center">Dashboard</p>
                </motion.div>
                <svg className="absolute bottom-10 right-10 w-64 h-64 pointer-events-none">
                  <motion.path
                    d="M 224 224 Q 150 150 4 14"
                    stroke="#06B6D4"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1.5 }}
                  />
                </svg>
              </motion.div>

              {/* Animated data particles */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full"
                animate={{
                  x: [0, 100, 200],
                  y: [0, -50, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/3 right-1/4 w-2 h-2 bg-danger rounded-full"
                animate={{
                  x: [0, -100, -200],
                  y: [0, 50, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-[400px] bg-white rounded-2xl border-2 border-primary/10 flex items-center justify-center">
                <motion.div
                  className="text-center p-8"
                  whileHover={{ scale: 1.1, rotateY: 15, rotateX: 15 }}
                  transition={{ duration: 0.5 }}
                  style={{ perspective: 1000 }}
                >
                  <Logo className="w-56 h-56 mx-auto" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">
                About RakshaSetu
              </h2>
              <p className="text-lg text-secondary mb-6 leading-relaxed">
                RakshaSetu is a unified digital safety infrastructure designed under the <span className="font-semibold text-primary">Geo-Intelligent Shield Protocol (GISP)</span>.
              </p>
              <p className="text-lg text-secondary mb-6 leading-relaxed">
                It integrates Artificial Intelligence, Blockchain (W3C DID), and Geo-Fencing to create real-time safety networks for tourists while empowering authorities with predictive insights and rapid response tools.
              </p>
              <p className="text-sm text-secondary italic mt-8 p-4 bg-accent/5 border-l-4 border-accent rounded">
                Aligned with <span className="font-semibold">SDG 9</span> – Industry, Innovation & Infrastructure, and <span className="font-semibold">SDG 11</span> – Sustainable Cities & Communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Key Features</h2>
            <p className="text-lg text-secondary">Pillars of Innovation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 bg-white border-2 border-border rounded-xl hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-secondary leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-border">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary mb-2">99.8%</div>
              <div className="text-secondary">Uptime</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary mb-2">&lt;2s</div>
              <div className="text-secondary">Response Time</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-secondary">Active Monitoring</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">How It Works</h2>
            <p className="text-lg text-secondary">Simple step explanation for clarity</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-xl border-2 border-border hover:border-accent transition-all">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 text-center">{step.title}</h3>
                  <p className="text-secondary text-center leading-relaxed">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              Building Smarter, Safer Tourism Ecosystems
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white border-2 border-border rounded-xl hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="text-5xl font-bold text-primary mb-4">{stat.value}</div>
                <div className="text-secondary text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-lg text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            RakshaSetu connects innovation, governance, and empathy — ensuring technology works hand-in-hand with people to build trust in every journey.
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              RakshaSetu — Because safety should travel with you.
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Experience the future of tourism safety with our intelligent platform
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/login')}
                className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                Explore Dashboards
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="text-center text-secondary text-sm">
            <p className="mb-2">© 2025 RakshaSetu. All Rights Reserved.</p>
            <p>Built for ELP College Project | SDG 9 & SDG 11</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
