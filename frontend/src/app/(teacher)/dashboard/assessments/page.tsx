'use client';

import { useState } from 'react';
import { AssessmentsHeader } from '@/components/teacher/assessments/assessments-header';
import { AssessmentsFilters } from '@/components/teacher/assessments/assessments-filters';
import { AssessmentsList } from '@/components/teacher/assessments/assessments-list';
import { CreateAssessmentDialog } from '@/components/teacher/assessments/create-assessment-dialog';

export default function AssessmentsPage() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <AssessmentsHeader onCreateClick={() => setDialogOpen(true)} />
      <AssessmentsFilters
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
      />
      <AssessmentsList search={search} status={status} />
      <CreateAssessmentDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}


