'use client'

import { MoreVertical, Users, BookOpen, Star, Edit, Copy, Archive, Trash2 } from 'lucide-react'
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

interface CourseTableProps {
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

export function CourseTable({ courses }: CourseTableProps) {
  if (courses.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-card p-12 text-center">
        <h3 className="text-lg font-semibold text-foreground">No courses found</h3>
        <p className="mt-2 text-muted-foreground">Try adjusting your filters or create a new course</p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="px-6 py-3 text-left font-semibold text-foreground">Course</th>
            <th className="px-6 py-3 text-left font-semibold text-foreground">Category</th>
            <th className="px-6 py-3 text-left font-semibold text-foreground">Students</th>
            <th className="px-6 py-3 text-left font-semibold text-foreground">Completion</th>
            <th className="px-6 py-3 text-left font-semibold text-foreground">Rating</th>
            <th className="px-6 py-3 text-left font-semibold text-foreground">Status</th>
            <th className="px-6 py-3 text-left font-semibold text-foreground">Updated</th>
            <th className="px-6 py-3 text-center font-semibold text-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, idx) => (
            <tr
              key={course.id}
              className={`border-b border-border transition-colors hover:bg-muted/50 ${
                idx % 2 === 0 ? '' : ''
              }`}
            >
              <td className="px-6 py-4">
                <div>
                  <p className="font-medium text-foreground">{course.title}</p>
                  <p className="text-xs text-muted-foreground">{course.subtitle}</p>
                </div>
              </td>
              <td className="px-6 py-4 text-muted-foreground">{course.category}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Users className="size-4" />
                  <span>{course.studentsEnrolled}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-24 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full bg-chart-3 rounded-full"
                      style={{ width: `${course.completionRate}%` }}
                    />
                  </div>
                  <span className="text-muted-foreground font-medium min-w-max">{course.completionRate}%</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-1">
                  <Star className="size-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-foreground">{course.averageRating}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex rounded-lg px-2.5 py-1 text-xs font-medium ${
                    statusColors[course.status as keyof typeof statusColors]
                  }`}
                >
                  {course.status}
                </span>
              </td>
              <td className="px-6 py-4 text-muted-foreground">{course.lastUpdated}</td>
              <td className="px-6 py-4 text-center">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
