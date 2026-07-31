'use client';

import { ProgressHeader } from '@/components/teacher-dashboard/progress/progress-header';
import { ProgressFilters } from '@/components/teacher-dashboard/progress/progress-filters';
import { ProgressGrid } from '@/components/teacher-dashboard/progress/progress-grid';

export default function ProgressPage() {
  return (
    <div className="p-6 space-y-6">
      <ProgressHeader />
      <ProgressFilters />
      <ProgressGrid />
    </div>
  );
}
