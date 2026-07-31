'use client'

import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const weeklyData = [
  { day: 'Mon', progress: 45 },
  { day: 'Tue', progress: 62 },
  { day: 'Wed', progress: 58 },
  { day: 'Thu', progress: 71 },
  { day: 'Fri', progress: 68 },
  { day: 'Sat', progress: 75 },
  { day: 'Sun', progress: 72 },
]

const circleProgress = 72

export function LearningProgress() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="rounded-3xl border border-border bg-card p-7 shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-serif font-bold text-foreground">
            Learning Progress
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Track your weekly improvements
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">
          This Week
          <ChevronDown className="size-4" />
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Circular Progress */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative size-48">
            <svg viewBox="0 0 200 200" className="size-full -rotate-90">
              <circle
                cx="100"
                cy="100"
                r="95"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-muted"
              />
              <motion.circle
                cx="100"
                cy="100"
                r="95"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeDasharray={`${(circleProgress / 100) * 597} 597`}
                initial={{ strokeDasharray: '0 597' }}
                animate={{ strokeDasharray: `${(circleProgress / 100) * 597} 597` }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-serif text-5xl font-bold text-foreground">
                {circleProgress}%
              </span>
              <span className="text-sm text-muted-foreground mt-1">
                Overall Progress
              </span>
            </div>
          </div>
        </div>

        {/* Weekly Chart */}
        <div className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="day"
                stroke="#64748b"
                style={{ fontSize: '12px' }}
              />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                }}
                cursor={{ stroke: '#f97316', strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="progress"
                stroke="#f97316"
                strokeWidth={3}
                dot={{ fill: '#f97316', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-6 flex gap-4 border-t border-border pt-6">
        <button className="flex-1 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
          Generate from Topic
        </button>
        <button className="flex-1 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground hover:brightness-110 transition-all">
          View All Progress
        </button>
      </div>
    </motion.div>
  )
}
