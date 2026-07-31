'use client';

import { useState } from 'react';
import { AssignmentsHeader } from '@/components/teacher-dashboard/assignments/assignments-header';
import { AssignmentsFilters } from '@/components/teacher-dashboard/assignments/assignments-filters';
import { AssignmentsList } from '@/components/teacher-dashboard/assignments/assignments-list';
import { CreateAssignmentDialog } from '@/components/teacher-dashboard/assignments/create-assignment-dialog';

export default function ExamsPage() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Exams</h1>
        <p className="text-muted-foreground">Manage and track all your exams and formal assessments</p>
      </div>
      <AssignmentsFilters
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
      />
      <AssignmentsList search={search} status={status} />
      <CreateAssignmentDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}
