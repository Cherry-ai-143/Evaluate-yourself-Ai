'use client'

import { motion } from 'motion/react'
import { Lock } from 'lucide-react'

const subjects = [
  { name: 'Mathematics', percentage: 88, color: 'from-blue-500 to-blue-600' },
  { name: 'Programming', percentage: 82, color: 'from-purple-500 to-purple-600' },
  { name: 'Data Science', percentage: 86, color: 'from-orange-500 to-orange-600' },
  { name: 'AI & ML', percentage: 79, color: 'from-red-500 to-red-600' },
  { name: 'Machine Learning', percentage: 76, color: 'from-cyan-500 to-cyan-600' },
  { name: 'Web Development', percentage: 91, color: 'from-emerald-500 to-emerald-600' },
]

export function SubjectPerformance() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="rounded-3xl border border-border bg-card p-7 shadow-sm"
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-serif font-bold text-foreground">
          Subject Performance
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Your scores across different subjects
        </p>
      </div>

      {/* Subjects List */}
      <div className="space-y-4">
        {subjects.map((subject, index) => (
          <motion.div
            key={subject.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
            className="group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-foreground">
                {subject.name}
              </span>
              <span className="text-sm font-bold text-primary">
                {subject.percentage}%
              </span>
            </div>

            <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${subject.color} shadow-md`}
                initial={{ width: 0 }}
                animate={{ width: `${subject.percentage}%` }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.05, ease: 'easeOut' }}
              />
            </div>

            {/* Indicator */}
            <div className="mt-1 flex items-center gap-2">
              {subject.percentage >= 85 ? (
                <span className="text-xs font-medium text-emerald-600">
                  ✓ Excellent
                </span>
              ) : subject.percentage >= 70 ? (
                <span className="text-xs font-medium text-blue-600">
                  ○ Good
                </span>
              ) : (
                <span className="text-xs font-medium text-orange-600">
                  ○ Needs Practice
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 p-4 rounded-lg bg-secondary/50 border border-primary/10">
        <p className="text-xs font-semibold text-foreground flex items-center gap-2">
          <Lock className="size-3.5" />
          Performance data is personalized
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Focus on subjects with lower scores for better improvement
        </p>
      </div>
    </motion.div>
  )
}


