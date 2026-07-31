'use client'

import { TopStats } from '@/components/student/top-stats'
import { LearningProgress } from '@/components/student/learning-progress'
import { AIQuizGenerator } from '@/components/student/ai-quiz-generator'
import { Calendar } from '@/components/student/calendar'
import { ContinueLearning } from '@/components/student/continue-learning'
import { PerformanceOverview } from '@/components/student/performance-overview'
import { SubjectPerformance } from '@/components/student/subject-performance'
import { StudyStreak } from '@/components/student/study-streak'
import { UpcomingAssessments } from '@/components/student/upcoming-assessments'
import { AIRecommendation } from '@/components/student/ai-recommendation'

export default function Dashboard() {
  return (
    <div className="p-6 lg:p-8">
      <TopStats />
      
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <LearningProgress />
          <PerformanceOverview />
          <SubjectPerformance />
        </div>
        
        <div className="space-y-8">
          <AIQuizGenerator />
          <Calendar />
          <StudyStreak />
          <UpcomingAssessments />
          <AIRecommendation />
        </div>
      </div>

      <div className="mt-8">
        <ContinueLearning />
      </div>
    </div>
  )
}


