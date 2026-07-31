'use client'

import { useState } from 'react'
import { CourseHeader } from '@/components/teacher/courses/course-header'
import { CourseFilters } from '@/components/teacher/courses/course-filters'
import { CourseGrid } from '@/components/teacher/courses/course-grid'
import { CourseTable } from '@/components/teacher/courses/course-table'
import { CreateCourseDialog } from '@/components/teacher/courses/create-course-dialog'

const mockCourses = [
  {
    id: '1',
    title: 'Python Programming',
    subtitle: 'Beginner to Advanced',
    category: 'Programming',
    difficulty: 'Beginner',
    studentsEnrolled: 128,
    lessonsCount: 12,
    completionRate: 75,
    averageRating: 4.8,
    lastUpdated: '2 days ago',
    status: 'Published',
    thumbnail: 'python',
  },
  {
    id: '2',
    title: 'Data Structures & Algorithms',
    subtitle: 'Master DSA',
    category: 'Programming',
    difficulty: 'Intermediate',
    studentsEnrolled: 96,
    lessonsCount: 18,
    completionRate: 60,
    averageRating: 4.6,
    lastUpdated: '1 week ago',
    status: 'Published',
    thumbnail: 'dsa',
  },
  {
    id: '3',
    title: 'Web Development Basics',
    subtitle: 'HTML, CSS & JavaScript',
    category: 'Web Development',
    difficulty: 'Beginner',
    studentsEnrolled: 156,
    lessonsCount: 15,
    completionRate: 82,
    averageRating: 4.9,
    lastUpdated: 'Today',
    status: 'Published',
    thumbnail: 'web',
  },
  {
    id: '4',
    title: 'Machine Learning Basics',
    subtitle: 'Introduction to ML',
    category: 'AI/ML',
    difficulty: 'Advanced',
    studentsEnrolled: 45,
    lessonsCount: 20,
    completionRate: 45,
    averageRating: 4.7,
    lastUpdated: '3 days ago',
    status: 'Draft',
    thumbnail: 'ml',
  },
  {
    id: '5',
    title: 'React Advanced Patterns',
    subtitle: 'Professional React Development',
    category: 'Web Development',
    difficulty: 'Advanced',
    studentsEnrolled: 78,
    lessonsCount: 16,
    completionRate: 55,
    averageRating: 4.5,
    lastUpdated: '5 days ago',
    status: 'Published',
    thumbnail: 'react',
  },
  {
    id: '6',
    title: 'Database Design',
    subtitle: 'SQL & NoSQL',
    category: 'Databases',
    difficulty: 'Intermediate',
    studentsEnrolled: 67,
    lessonsCount: 14,
    completionRate: 68,
    averageRating: 4.4,
    lastUpdated: '1 week ago',
    status: 'Archived',
    thumbnail: 'database',
  },
]

export default function MyCoursesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('')
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

  const filteredCourses = mockCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = !selectedStatus || course.status === selectedStatus
    const matchesCategory = !selectedCategory || course.category === selectedCategory
    const matchesDifficulty = !selectedDifficulty || course.difficulty === selectedDifficulty

    return matchesSearch && matchesStatus && matchesCategory && matchesDifficulty
  })

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <CourseHeader
        onCreateClick={() => setIsCreateDialogOpen(true)}
        coursesCount={filteredCourses.length}
      />

      {/* Filters */}
      <CourseFilters
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedDifficulty={selectedDifficulty}
        onDifficultyChange={setSelectedDifficulty}
      />

      {/* Courses View */}
      {viewMode === 'grid' ? (
        <CourseGrid courses={filteredCourses} />
      ) : (
        <CourseTable courses={filteredCourses} />
      )}

      {/* Create Course Dialog */}
      <CreateCourseDialog
        isOpen={isCreateDialogOpen}
        onClose={() => setIsCreateDialogOpen(false)}
      />
    </div>
  )
}


