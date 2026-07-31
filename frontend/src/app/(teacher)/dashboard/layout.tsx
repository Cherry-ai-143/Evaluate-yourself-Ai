'use client'

import { TeacherSidebar } from '@/components/teacher/teacher-sidebar'
import { TeacherTopNav } from '@/components/teacher/teacher-top-nav'

export default function TeacherDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      <TeacherSidebar />
      <div className="flex flex-1 flex-col overflow-hidden ml-64">
        <TeacherTopNav />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}


