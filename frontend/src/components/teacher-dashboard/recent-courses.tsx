'use client'

import { Users, BookOpen } from 'lucide-react'

interface CourseCard {
  id: string
  name: string
  level: string
  students: number
  lessons: number
  completionPercentage: number
  color: string
  icon: string
}

const courses: CourseCard[] = [
  {
    id: '1',
    name: 'Python Programming',
    level: 'Beginner to Advanced',
    students: 128,
    lessons: 12,
    completionPercentage: 75,
    color: 'bg-blue-100 text-blue-600',
    icon: '🐍',
  },
  {
    id: '2',
    name: 'Data Structures & Algorithms',
    level: 'Intermediate',
    students: 96,
    lessons: 18,
    completionPercentage: 60,
    color: 'bg-purple-100 text-purple-600',
    icon: '🔗',
  },
  {
    id: '3',
    name: 'Machine Learning Fundamentals',
    level: 'Intermediate',
    students: 78,
    lessons: 15,
    completionPercentage: 40,
    color: 'bg-green-100 text-green-600',
    icon: '🧠',
  },
  {
    id: '4',
    name: 'Database Systems',
    level: 'SQL & NoSQL',
    students: 50,
    lessons: 10,
    completionPercentage: 90,
    color: 'bg-orange-100 text-orange-600',
    icon: '📊',
  },
]

export function RecentCourses() {
  return (
    <div className="rounded-2xl bg-white border border-border shadow-sm p-8">
      <h3 className="text-lg font-semibold text-foreground mb-6">Recent Courses</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-xl border border-border bg-gradient-to-br from-muted/30 to-muted/10 p-6 hover:shadow-md transition-all cursor-pointer group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className={`text-2xl p-3 rounded-lg ${course.color}`}>
                {course.icon}
              </div>
            </div>

            {/* Content */}
            <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
              {course.name}
            </h4>
            <p className="text-xs text-muted-foreground mb-4">{course.level}</p>

            {/* Stats */}
            <div className="flex items-center gap-6 mb-4 py-3 border-y border-border/50">
              <div className="flex items-center gap-2">
                <Users className="size-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {course.students} Students
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="size-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {course.lessons} Lessons
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-muted-foreground">
                  Completion
                </span>
                <span className="text-xs font-semibold text-foreground">
                  {course.completionPercentage}%
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full"
                  style={{ width: `${course.completionPercentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
