'use client'

import { useState } from 'react'
import { MoreVertical, Users, BookOpen, TrendingUp, Star, Edit, Copy, Archive, Trash2 } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface Course {
  id: string
  title: string
  subtitle: string
  category: string
  difficulty: string
  studentsEnrolled: number
  lessonsCount: number
  completionRate: number
  averageRating: number
  lastUpdated: string
  status: string
  thumbnail: string
}

interface CourseGridProps {
  courses: Course[]
}

const difficultyColors = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-blue-100 text-blue-700',
  Advanced: 'bg-purple-100 text-purple-700',
}

const statusColors = {
  Published: 'bg-green-100 text-green-700',
  Draft: 'bg-gray-100 text-gray-700',
  Archived: 'bg-red-100 text-red-700',
}

export function CourseGrid({ courses }: CourseGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  if (courses.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-card p-12 text-center">
        <BookOpen className="mx-auto size-12 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold text-foreground">No courses found</h3>
        <p className="mt-2 text-muted-foreground">Try adjusting your filters or create a new course</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <div
          key={course.id}
          onMouseEnter={() => setHoveredId(course.id)}
          onMouseLeave={() => setHoveredId(null)}
          className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-accent/30"
        >
          {/* Thumbnail */}
          <div className="mb-4 h-40 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden relative">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary/20">{course.thumbnail[0].toUpperCase()}</div>
              <p className="text-xs text-muted-foreground mt-2">{course.category}</p>
            </div>
            {hoveredId === course.id && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-2">
                <button className="rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground hover:brightness-110 transition-all">
                  Open Course
                </button>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground line-clamp-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground">{course.subtitle}</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="rounded-lg p-2 text-muted-foreground hover:bg-muted transition-colors">
                    <MoreVertical className="size-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="gap-2">
                    <Edit className="size-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2">
                    <Copy className="size-4" />
                    Duplicate
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2">
                    <Archive className="size-4" />
                    Archive
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive">
                    <Trash2 className="size-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span
                className={`rounded-lg px-2.5 py-1 text-xs font-medium ${
                  difficultyColors[course.difficulty as keyof typeof difficultyColors]
                }`}
              >
                {course.difficulty}
              </span>
              <span
                className={`rounded-lg px-2.5 py-1 text-xs font-medium ${
                  statusColors[course.status as keyof typeof statusColors]
                }`}
              >
                {course.status}
              </span>
            </div>

            {/* Stats */}
            <div className="space-y-2 border-t border-border pt-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Users className="size-4" />
                  <span>{course.studentsEnrolled} students</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <BookOpen className="size-4" />
                  <span>{course.lessonsCount} lessons</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="size-4 text-chart-3" />
                  <span className="text-foreground font-medium">{course.completionRate}%</span>
                  <span className="text-muted-foreground">completion</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="size-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-foreground font-medium">{course.averageRating}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">Last updated {course.lastUpdated}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
