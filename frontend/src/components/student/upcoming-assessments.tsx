'use client'

import { motion } from 'motion/react'
import { Clock, AlertCircle, ArrowRight } from 'lucide-react'

const assessments = [
  {
    id: 1,
    title: 'Data Structures Quiz',
    course: 'DSA Basics',
    dueDate: '22 May',
    time: '10:00 AM',
    priority: 'high',
    type: 'quiz',
  },
  {
    id: 2,
    title: 'Machine Learning Test',
    course: 'Supervised Learning',
    dueDate: '25 May',
    time: '02:00 PM',
    priority: 'medium',
    type: 'test',
  },
]

export function UpcomingAssessments() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 }}
      className="rounded-3xl border border-border bg-card p-6 shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-serif font-bold text-foreground">
            Upcoming Assessments
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            Stay on track
          </p>
        </div>
        <a
          href="#"
          className="text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
        >
          View All
        </a>
      </div>

      {/* List */}
      <div className="space-y-3">
        {assessments.map((assessment, index) => (
          <motion.div
            key={assessment.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
            className={`
              p-3 rounded-lg border transition-all hover:shadow-md cursor-pointer
              ${assessment.priority === 'high'
                ? 'border-red-200 bg-red-50/50'
                : 'border-border bg-muted/30'
              }
            `}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {assessment.title}
                  </p>
                  {assessment.priority === 'high' && (
                    <AlertCircle className="size-3.5 text-red-600 flex-shrink-0" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {assessment.course}
                </p>
              </div>
              <ArrowRight className="size-4 text-muted-foreground flex-shrink-0 mt-0.5" />
            </div>

            <div className="mt-2 flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="size-3" />
                {assessment.dueDate}, {assessment.time}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <button className="mt-4 w-full rounded-lg border border-border py-2 text-xs font-semibold text-foreground hover:bg-muted transition-colors">
        View All Assessments
      </button>
    </motion.div>
  )
}


