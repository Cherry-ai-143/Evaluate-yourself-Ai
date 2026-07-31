'use client'

import { motion } from 'motion/react'
import { ArrowRight, Clock, Zap } from 'lucide-react'
import Image from 'next/image'

const courses = [
  {
    id: 1,
    title: 'Python for Data Science',
    progress: 65,
    difficulty: 'Intermediate',
    timeRemaining: '12h 30m',
    thumbnail: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 2,
    title: 'Machine Learning Basics',
    progress: 48,
    difficulty: 'Beginner',
    timeRemaining: '18h 15m',
    thumbnail: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: 3,
    title: 'Web Development',
    progress: 80,
    difficulty: 'Advanced',
    timeRemaining: '5h 45m',
    thumbnail: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: 4,
    title: 'Data Structures & Algo',
    progress: 45,
    difficulty: 'Advanced',
    timeRemaining: '22h 20m',
    thumbnail: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
]

export function ContinueLearning() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="rounded-3xl border border-border bg-card p-7 shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-serif font-bold text-foreground">
            Continue Learning
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Pick up where you left off
          </p>
        </div>
        <a
          href="#"
          className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
        >
          View All Courses
          <ArrowRight className="size-4" />
        </a>
      </div>

      {/* Course Cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
            className="group rounded-2xl border border-border overflow-hidden bg-gradient-to-b from-card to-muted/50 hover:shadow-lg transition-all hover:-translate-y-1"
          >
            {/* Thumbnail */}
            <div
              className="h-32 w-full relative overflow-hidden"
              style={{ background: course.thumbnail }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
            </div>

            {/* Content */}
            <div className="p-4">
              <h4 className="font-semibold text-foreground text-sm line-clamp-2 mb-3">
                {course.title}
              </h4>

              {/* Progress Bar */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-muted-foreground">{course.progress}% Complete</span>
                  <span className="text-xs font-medium text-accent">{course.progress}%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent to-orange-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-medium px-2 py-1 rounded-md ${
                  course.difficulty === 'Beginner'
                    ? 'bg-emerald-100 text-emerald-700'
                    : course.difficulty === 'Intermediate'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                }`}>
                  {course.difficulty}
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="size-3.5" />
                  {course.timeRemaining}
                </div>
              </div>

              {/* Button */}
              <button className="w-full rounded-lg bg-accent/10 px-3 py-2 text-xs font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center gap-1.5">
                Continue
                <ArrowRight className="size-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
