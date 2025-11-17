'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  title?: string
  children: ReactNode
  className?: string
  icon?: ReactNode
  actions?: ReactNode
  variant?: 'default' | 'success' | 'warning' | 'danger'
}

export default function Card({
  title,
  children,
  className = '',
  icon,
  actions,
  variant = 'default'
}: CardProps) {
  const variantStyles = {
    default: 'bg-white border-gray-200',
    success: 'bg-green-50 border-green-200',
    warning: 'bg-yellow-50 border-yellow-200',
    danger: 'bg-red-50 border-red-200',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`
        rounded-xl shadow-md border p-6
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {(title || icon || actions) && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="p-2 bg-navy/10 rounded-lg">
                {icon}
              </div>
            )}
            {title && (
              <h3 className="text-lg font-semibold text-navy">{title}</h3>
            )}
          </div>
          {actions && (
            <div className="flex items-center gap-2">
              {actions}
            </div>
          )}
        </div>
      )}
      <div className="text-gray-700">
        {children}
      </div>
    </motion.div>
  )
}
