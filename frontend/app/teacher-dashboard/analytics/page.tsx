'use client';

import { AnalyticsHeader } from '@/components/teacher-dashboard/analytics/analytics-header';
import { AnalyticsStats } from '@/components/teacher-dashboard/analytics/analytics-stats';
import { CoursePerformanceChart } from '@/components/teacher-dashboard/analytics/course-performance-chart';
import { StudentEngagementChart } from '@/components/teacher-dashboard/analytics/student-engagement-chart';
import { AssessmentAnalytics } from '@/components/teacher-dashboard/analytics/assessment-analytics';
import { TimeSeriesChart } from '@/components/teacher-dashboard/analytics/time-series-chart';

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <AnalyticsHeader />
      <AnalyticsStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CoursePerformanceChart />
        <StudentEngagementChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TimeSeriesChart />
        <AssessmentAnalytics />
      </div>
    </div>
  );
}
