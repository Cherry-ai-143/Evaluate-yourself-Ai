'use client'

import { motion } from 'motion/react'
import {
  BookOpen,
  Sparkles,
  TrendingUp,
  Flame,
  Clock,
  ArrowUp,
} from 'lucide-react'

const stats = [
  {
    label: 'Courses Enrolled',
    value: '12',
    icon: BookOpen,
    change: '+2 this month',
    color: 'from-blue-500/10 to-blue-600/5',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    label: 'AI Quizzes Completed',
    value: '128',
    icon: Sparkles,
    change: '+18 this week',
    color: 'from-purple-500/10 to-purple-600/5',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    label: 'Average Score',
    value: '86%',
    icon: TrendingUp,
    change: '+6% improvement',
    color: 'from-orange-500/10 to-orange-600/5',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    label: 'Study Streak',
    value: '21',
    icon: Flame,
    change: 'days in a row',
    color: 'from-red-500/10 to-red-600/5',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    label: 'Time Spent Learning',
    value: '48h 36m',
    icon: Clock,
    change: '+6h this week',
    color: 'from-emerald-500/10 to-emerald-600/5',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
]

export function TopStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {stats.map((stat, index) => {
        const Icon = stat.icon

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative rounded-2xl border border-border bg-gradient-to-br from-white to-muted p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 overflow-hidden"
          >
            {/* Background glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

            <div className="relative z-10">
              {/* Icon */}
              <div className={`${stat.iconBg} w-fit rounded-lg p-2.5 mb-3`}>
                <Icon className={`size-5 ${stat.iconColor}`} />
              </div>

              {/* Content */}
              <p className="text-sm font-medium text-muted-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-3xl font-bold text-foreground font-serif">
                {stat.value}
              </p>

              {/* Change indicator */}
              <div className="flex items-center gap-1.5 mt-3 text-xs text-emerald-600">
                <ArrowUp className="size-3.5" />
                <span className="font-medium">{stat.change}</span>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}


