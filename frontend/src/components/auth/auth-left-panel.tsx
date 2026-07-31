'use client'

import { motion } from 'motion/react'
import {
  Brain,
  Zap,
  TrendingUp,
} from 'lucide-react'
import { BrandLogo } from '@/components/landing/brand-logo'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Learning',
    description: 'Personalized quizzes adapted to your pace',
  },
  {
    icon: Zap,
    title: 'Instant Feedback',
    description: 'Real-time analysis and recommendations',
  },
  {
    icon: TrendingUp,
    title: 'Track Progress',
    description: 'See your improvement with detailed analytics',
  },
]

const stats = [
  { value: '10K+', label: 'Students' },
  { value: '500+', label: 'Teachers' },
  { value: '1M+', label: 'AI Questions' },
]

export function AuthLeftPanel() {
  return (
    <div className="relative hidden overflow-hidden bg-gradient-to-br from-primary via-blue-900 to-primary/90 p-8 lg:flex lg:flex-col lg:justify-between">
      {/* Ambient background graphics */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 size-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-accent/15 blur-3xl" />
      </div>

      {/* Top section with logo and badge */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BrandLogo imgClassName="h-14 w-auto invert" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20">
            <div className="size-2 rounded-full bg-accent" />
            <span className="text-sm font-medium text-white/90">
              Learn Smarter. Achieve Faster.
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 font-serif text-4xl font-bold text-white text-balance lg:text-5xl"
        >
          Unlock Your Learning Potential
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-white/80 text-pretty leading-relaxed"
        >
          Experience personalized AI-powered learning that adapts to your unique style and pace.
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 space-y-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-white/10 border border-white/20 text-accent">
                    <Icon className="size-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Bottom statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8"
      >
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="font-serif text-2xl font-bold text-white">{stat.value}</p>
            <p className="mt-1 text-sm text-white/70">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}


