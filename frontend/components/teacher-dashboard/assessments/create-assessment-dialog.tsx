'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface CreateAssessmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateAssessmentDialog({ open, onOpenChange }: CreateAssessmentDialogProps) {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState('');
  const [course, setCourse] = useState('');
  const [type, setType] = useState('quiz');

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleClose = () => {
    onOpenChange(false);
    setStep(1);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Assessment</DialogTitle>
        </DialogHeader>

        <div className="flex gap-2 mb-6">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                s <= step ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {s}
              </div>
              {s < 4 && <div className={`flex-1 h-1 ${s < step ? 'bg-orange-500' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Assessment Title</label>
              <Input
                placeholder="e.g., Python Fundamentals Quiz"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Course</label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option>Select a course...</option>
                <option>Python Programming</option>
                <option>Web Development</option>
                <option>Data Science</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Assessment Type</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="type"
                    value="quiz"
                    checked={type === 'quiz'}
                    onChange={(e) => setType(e.target.value)}
                  />
                  <span>Quiz</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="type"
                    value="exam"
                    checked={type === 'exam'}
                    onChange={(e) => setType(e.target.value)}
                  />
                  <span>Exam</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="type"
                    value="assignment"
                    checked={type === 'assignment'}
                    onChange={(e) => setType(e.target.value)}
                  />
                  <span>Assignment</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Duration (minutes)</label>
              <Input placeholder="60" type="number" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Total Questions</label>
              <Input placeholder="20" type="number" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Passing Score (%)</label>
              <Input placeholder="60" type="number" />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                placeholder="Add assessment description"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg h-24"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Instructions</label>
              <textarea
                placeholder="Add instructions for students"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg h-24"
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Visibility</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="visibility" defaultChecked />
                  <span>Public</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="visibility" />
                  <span>Private</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="visibility" />
                  <span>Draft</span>
                </label>
              </div>
            </div>
            <div>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                <span className="text-sm">Show correct answers after submission</span>
              </label>
            </div>
          </div>
        )}

        <DialogFooter className="flex gap-2 justify-between">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={step === 1}
            className="gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            {step < 4 ? (
              <Button onClick={handleNext} className="bg-orange-500 hover:bg-orange-600 gap-1">
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button onClick={handleClose} className="bg-orange-500 hover:bg-orange-600">
                Create Assessment
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
