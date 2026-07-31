'use client'

import { TopStats } from '@/components/dashboard/top-stats'
import { LearningProgress } from '@/components/dashboard/learning-progress'
import { AIQuizGenerator } from '@/components/dashboard/ai-quiz-generator'
import { Calendar } from '@/components/dashboard/calendar'
import { ContinueLearning } from '@/components/dashboard/continue-learning'
import { PerformanceOverview } from '@/components/dashboard/performance-overview'
import { SubjectPerformance } from '@/components/dashboard/subject-performance'
import { StudyStreak } from '@/components/dashboard/study-streak'
import { UpcomingAssessments } from '@/components/dashboard/upcoming-assessments'
import { AIRecommendation } from '@/components/dashboard/ai-recommendation'

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
