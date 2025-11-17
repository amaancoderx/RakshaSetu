'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Shield, X, MapPin, Phone, AlertCircle, Mic, PhoneCall } from 'lucide-react'
import { useState, useEffect } from 'react'

interface PanicModalProps {
  isOpen: boolean
  onClose: () => void
  location: string
}

export default function PanicModal({ isOpen, onClose, location }: PanicModalProps) {
  const [step, setStep] = useState(1)
  const [countdown, setCountdown] = useState(3)
  const [recording, setRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [hasRecording, setHasRecording] = useState(false)

  // Countdown timer for step 1
  useEffect(() => {
    if (isOpen && step === 1) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            setStep(2) // Go to voice recording step
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isOpen, step])

  // Recording timer
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (recording) {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [recording])

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1)
      setCountdown(3)
      setRecording(false)
      setRecordingTime(0)
      setHasRecording(false)
    }
  }, [isOpen])

  const startRecording = () => {
    setRecording(true)
    setRecordingTime(0)
  }

  const stopRecording = () => {
    setRecording(false)
    setHasRecording(true)
  }

  const sendAlert = () => {
    setStep(3) // Go to confirmation step
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-[100] backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto my-auto" onClick={(e) => e.stopPropagation()}>
              {/* Step 1: Panic Triggered Countdown */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-8 text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-24 h-24 mx-auto mb-6 bg-danger rounded-full flex items-center justify-center"
                  >
                    <Shield className="w-12 h-12 text-white" />
                  </motion.div>

                  <h2 className="text-3xl font-bold text-danger mb-3">PANIC ALERT TRIGGERED</h2>
                  <p className="text-secondary mb-6">
                    Notifying authorities in...
                  </p>

                  <motion.div
                    key={countdown}
                    initial={{ scale: 1.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-7xl font-bold text-danger mb-6"
                  >
                    {countdown}
                  </motion.div>

                  <div className="flex items-center gap-2 justify-center text-sm text-secondary">
                    <MapPin className="w-4 h-4" />
                    <span>{location}</span>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Voice Recording (Optional) */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-8"
                >
                  <h2 className="text-2xl font-bold text-primary mb-2 text-center">Record Voice Note (Optional)</h2>
                  <p className="text-sm text-secondary text-center mb-6">
                    Record a voice message to provide additional context for emergency responders
                  </p>

                  {/* Recording Interface */}
                  <div className="flex flex-col items-center mb-8">
                    <motion.div
                      animate={recording ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 1, repeat: recording ? Infinity : 0 }}
                      className={`w-32 h-32 rounded-full flex items-center justify-center mb-4 ${
                        recording ? 'bg-danger' : hasRecording ? 'bg-green-500' : 'bg-gray-200'
                      }`}
                    >
                      <Mic className="w-16 h-16 text-white" />
                    </motion.div>

                    {recording && (
                      <div className="text-center">
                        <p className="text-sm text-secondary mb-2">Recording...</p>
                        <p className="text-3xl font-bold text-danger font-mono">{formatTime(recordingTime)}</p>
                      </div>
                    )}

                    {hasRecording && !recording && (
                      <div className="text-center">
                        <p className="text-sm text-green-600 font-semibold mb-2">Recording Complete</p>
                        <p className="text-2xl font-bold text-primary font-mono">{formatTime(recordingTime)}</p>
                      </div>
                    )}

                    {!recording && !hasRecording && (
                      <p className="text-sm text-secondary">Press to start recording</p>
                    )}
                  </div>

                  {/* Recording Controls */}
                  {!hasRecording && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={recording ? stopRecording : startRecording}
                      className={`w-full py-4 rounded-xl font-bold text-white mb-4 transition-colors ${
                        recording
                          ? 'bg-danger hover:bg-danger/90'
                          : 'bg-accent hover:bg-accent/90'
                      }`}
                    >
                      {recording ? 'Stop Recording' : 'Start Recording'}
                    </motion.button>
                  )}

                  {hasRecording && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setHasRecording(false)
                        setRecordingTime(0)
                      }}
                      className="w-full py-3 rounded-xl font-semibold text-danger border-2 border-danger mb-4 hover:bg-danger/5 transition-colors"
                    >
                      Re-record
                    </motion.button>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={onClose}
                      className="flex-1 bg-white border-2 border-border text-primary py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={sendAlert}
                      className="flex-1 bg-danger text-white py-3 rounded-xl font-bold hover:bg-danger/90 transition-colors"
                    >
                      Send Alert Now
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Alert Sent Confirmation */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-8"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-green-600">Alert Sent Successfully</h2>
                    <button
                      onClick={onClose}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-all"
                    >
                      <X className="w-5 h-5 text-secondary" />
                    </button>
                  </div>

                  <p className="text-sm text-secondary mb-6 text-center">
                    Emergency alert has been sent successfully. Help is on the way.
                  </p>

                  {/* Case ID */}
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mb-6">
                    <p className="text-xs text-green-700 mb-1">Case ID</p>
                    <p className="text-xl font-bold text-green-900 font-mono">RS473511</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border-2 border-green-200">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <AlertCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-green-900 mb-1">Authorities Notified</p>
                        <p className="text-sm text-green-700">
                          Nearest police station and tourism office have been alerted
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-blue-900 mb-1">Location Shared</p>
                        <p className="text-sm text-blue-700">
                          Your real-time location is being tracked
                        </p>
                        <p className="text-xs text-blue-600 mt-1 font-mono">{location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-orange-900 mb-1">Emergency Contact Alerted</p>
                        <p className="text-sm text-orange-700">
                          SMS sent to your registered emergency contact
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Nearest Police Station */}
                  <div className="bg-white border-2 border-border rounded-xl p-4 mb-6">
                    <h3 className="font-bold text-primary mb-2">Nearest Police Station</h3>
                    <p className="font-semibold text-primary mb-1">Connaught Place Police Station</p>
                    <p className="text-sm text-secondary flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>0.8 km</span>
                      <span className="text-xs">•</span>
                      <span>ETA: 4 minutes</span>
                    </p>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-accent text-white py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors"
                      >
                        <PhoneCall className="w-4 h-4" />
                        Call Station
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white border-2 border-border text-primary py-2 px-4 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors"
                      >
                        Track Response
                      </motion.button>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg border-2 border-border mb-6">
                    <p className="text-sm text-secondary text-center">
                      Help is on the way. Stay calm and follow safety protocols.
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
                  >
                    Close
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
