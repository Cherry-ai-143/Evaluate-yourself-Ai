'use client';

import { useState } from 'react';
import { QuestionsHeader } from '@/components/teacher-dashboard/questions/questions-header';
import { QuestionsFilters } from '@/components/teacher-dashboard/questions/questions-filters';
import { QuestionsList } from '@/components/teacher-dashboard/questions/questions-list';
import { CreateQuestionDialog } from '@/components/teacher-dashboard/questions/create-question-dialog';

export default function QuestionsPage() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <QuestionsHeader onCreateClick={() => setDialogOpen(true)} />
      <QuestionsFilters
        search={search}
        onSearchChange={setSearch}
        type={type}
        onTypeChange={setType}
      />
      <QuestionsList search={search} type={type} />
      <CreateQuestionDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}
