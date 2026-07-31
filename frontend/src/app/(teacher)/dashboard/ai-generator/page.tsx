'use client';

import { useState } from 'react';
import { AIGeneratorHeader } from '@/components/teacher-dashboard/ai-generator/ai-generator-header';
import { GeneratorForm } from '@/components/teacher-dashboard/ai-generator/generator-form';
import { GeneratedQuizzes } from '@/components/teacher-dashboard/ai-generator/generated-quizzes';

export default function AIGeneratorPage() {
  const [generated, setGenerated] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <AIGeneratorHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <GeneratorForm onGenerate={() => setGenerated(true)} />
        </div>
        {generated && (
          <div className="lg:col-span-2">
            <GeneratedQuizzes />
          </div>
        )}
      </div>
    </div>
  );
}
