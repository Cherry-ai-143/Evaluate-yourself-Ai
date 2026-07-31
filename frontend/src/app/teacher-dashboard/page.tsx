'use client'

import { TeacherTopStats } from '@/components/teacher-dashboard/teacher-top-stats'
import { StudentPerformanceOverview } from '@/components/teacher-dashboard/student-performance-overview'
import { CourseOverview } from '@/components/teacher-dashboard/course-overview'
import { UpcomingActivities } from '@/components/teacher-dashboard/upcoming-activities'
import { RecentCourses } from '@/components/teacher-dashboard/recent-courses'
import { AIAssistantWidget } from '@/components/teacher-dashboard/ai-assistant-widget'
import { RecentAssessments } from '@/components/teacher-dashboard/recent-assessments'
import { TopPerformingStudents } from '@/components/teacher-dashboard/top-performing-students'
import { TeachingInsights } from '@/components/teacher-dashboard/teaching-insights'

export default function TeacherDashboard() {
  return (
    <div className="p-6 lg:p-8">
      {/* Top Statistics */}
      <TeacherTopStats />

      <div className="mt-8 grid gap-8 lg:grid-cols-4">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Student Performance Overview */}
          <StudentPerformanceOverview />

          {/* Recent Courses */}
          <RecentCourses />

          {/* Recent Assessments */}
          <RecentAssessments />
        </div>

        {/* Sidebar Content */}
        <div className="space-y-8">
          {/* Course Overview */}
          <CourseOverview />

          {/* Upcoming Activities */}
          <UpcomingActivities />

          {/* AI Assistant */}
          <AIAssistantWidget />

          {/* Teaching Insights */}
          <TeachingInsights />
        </div>
      </div>

      {/* Top Performing Students */}
      <div className="mt-8">
        <TopPerformingStudents />
      </div>
    </div>
  )
}
