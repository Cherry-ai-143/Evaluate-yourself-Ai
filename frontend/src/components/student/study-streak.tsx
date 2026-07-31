'use client'

import { motion } from 'motion/react'
import { Flame, Target } from 'lucide-react'

const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const completedDays = [true, true, true, true, true, true, true]

export function StudyStreak() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="rounded-3xl border border-border bg-gradient-to-br from-card to-orange-50/20 p-6 shadow-sm overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className="absolute -right-8 -top-8 size-24 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h3 className="text-lg font-serif font-bold text-foreground flex items-center gap-2">
              <Flame className="size-5 text-orange-600" />
              21 Days Streak
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              You&apos;re on fire! Keep it up.
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-orange-600 font-serif">🏆</p>
          </div>
        </div>

        {/* Week Activity */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
            This Week
          </p>
          <div className="flex gap-2">
            {weekDays.map((day, index) => (
              <motion.div
                key={day + index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.35 + index * 0.05 }}
                className={`
                  flex-1 aspect-square rounded-lg font-bold text-sm flex items-center justify-center
                  ${completedDays[index]
                    ? 'bg-gradient-to-br from-accent to-orange-400 text-white shadow-md'
                    : 'bg-muted text-muted-foreground'
                  }
                `}
              >
                {day}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievement */}
        <div className="p-3 rounded-lg bg-secondary/50 border border-primary/10 mb-4">
          <div className="flex items-start gap-2">
            <Target className="size-4 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-foreground">
                Goal: 30 Days
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                9 days remaining
              </p>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-orange-400"
            initial={{ width: 0 }}
            animate={{ width: '70%' }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">70% towards 30-day goal</p>
      </div>
    </motion.div>
  )
}


