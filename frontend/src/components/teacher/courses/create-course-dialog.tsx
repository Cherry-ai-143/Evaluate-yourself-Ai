'use client'

import { useState } from 'react'
import { X, Upload, ChevronRight, ChevronLeft } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface CreateCourseDialogProps {
  isOpen: boolean
  onClose: () => void
}

type Step = 'details' | 'structure' | 'publishing'

interface CourseFormData {
  title: string
  subtitle: string
  category: string
  difficulty: string
  language: string
  duration: string
  description: string
  objectives: string[]
  prerequisites: string[]
  tags: string[]
}

export function CreateCourseDialog({ isOpen, onClose }: CreateCourseDialogProps) {
  const [step, setStep] = useState<Step>('details')
  const [formData, setFormData] = useState<CourseFormData>({
    title: '',
    subtitle: '',
    category: '',
    difficulty: '',
    language: 'English',
    duration: '',
    description: '',
    objectives: [''],
    prerequisites: [''],
    tags: [],
  })

  const handleNext = () => {
    if (step === 'details') setStep('structure')
    else if (step === 'structure') setStep('publishing')
  }

  const handlePrevious = () => {
    if (step === 'publishing') setStep('structure')
    else if (step === 'structure') setStep('details')
  }

  const handleClose = () => {
    setStep('details')
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Course</DialogTitle>
        </DialogHeader>

        {/* Step Indicator */}
        <div className="mb-8 flex gap-4">
          {(['details', 'structure', 'publishing'] as const).map((s, idx) => (
            <div key={s} className="flex items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg font-semibold text-sm transition-all ${
                  s === step
                    ? 'bg-accent text-accent-foreground'
                    : ['details', 'structure', 'publishing'].indexOf(s) <
                      ['details', 'structure', 'publishing'].indexOf(step)
                    ? 'bg-chart-3 text-white'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {idx + 1}
              </div>
              {idx < 2 && (
                <div
                  className={`mx-2 h-1 w-8 rounded-full transition-all ${
                    ['details', 'structure', 'publishing'].indexOf(s) <
                    ['details', 'structure', 'publishing'].indexOf(step)
                      ? 'bg-chart-3'
                      : 'bg-muted'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="space-y-6 mb-8">
          {step === 'details' && (
            <StepDetails formData={formData} setFormData={setFormData} />
          )}
          {step === 'structure' && (
            <StepStructure formData={formData} setFormData={setFormData} />
          )}
          {step === 'publishing' && (
            <StepPublishing formData={formData} setFormData={setFormData} />
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex justify-between gap-3 border-t border-border pt-6">
          <button
            onClick={handlePrevious}
            disabled={step === 'details'}
            className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors disabled:opacity-50"
          >
            <ChevronLeft className="size-4" />
            Previous
          </button>

          <div className="flex gap-3">
            <button
              onClick={handleClose}
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              Cancel
            </button>
            {step === 'publishing' ? (
              <button
                onClick={() => {
                  handleClose()
                }}
                className="flex items-center gap-2 rounded-lg bg-accent px-6 py-2 text-sm font-semibold text-accent-foreground hover:brightness-110 transition-all"
              >
                Create Course
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 rounded-lg bg-accent px-6 py-2 text-sm font-semibold text-accent-foreground hover:brightness-110 transition-all"
              >
                Next
                <ChevronRight className="size-4" />
              </button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function StepDetails({
  formData,
  setFormData,
}: {
  formData: CourseFormData
  setFormData: (data: CourseFormData) => void
}) {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Course Title *
          </label>
          <input
            type="text"
            placeholder="e.g., Python Programming Basics"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Subtitle
          </label>
          <input
            type="text"
            placeholder="e.g., From Beginner to Advanced"
            value={formData.subtitle}
            onChange={(e) =>
              setFormData({ ...formData, subtitle: e.target.value })
            }
            className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Category *
          </label>
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          >
            <option value="">Select category</option>
            <option value="Programming">Programming</option>
            <option value="Web Development">Web Development</option>
            <option value="AI/ML">AI/ML</option>
            <option value="Databases">Databases</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Difficulty Level *
          </label>
          <select
            value={formData.difficulty}
            onChange={(e) =>
              setFormData({ ...formData, difficulty: e.target.value })
            }
            className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          >
            <option value="">Select difficulty</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Language
          </label>
          <select
            value={formData.language}
            onChange={(e) =>
              setFormData({ ...formData, language: e.target.value })
            }
            className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Duration (hours)
          </label>
          <input
            type="number"
            placeholder="e.g., 40"
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
            className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Course Description
        </label>
        <textarea
          placeholder="Describe what students will learn in this course..."
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          rows={4}
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent resize-none"
        />
      </div>

      {/* Thumbnail Upload */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Course Thumbnail
        </label>
        <div className="rounded-lg border-2 border-dashed border-border hover:border-accent/50 transition-colors p-6 text-center cursor-pointer">
          <Upload className="mx-auto size-8 text-muted-foreground mb-2" />
          <p className="text-sm text-foreground font-medium">Click to upload or drag and drop</p>
          <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 10MB</p>
        </div>
      </div>
    </div>
  )
}

function StepStructure({
  formData,
  setFormData,
}: {
  formData: CourseFormData
  setFormData: (data: CourseFormData) => void
}) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          Learning Objectives
        </label>
        <div className="space-y-2">
          {formData.objectives.map((obj, idx) => (
            <div key={idx} className="flex gap-2">
              <input
                type="text"
                placeholder={`Objective ${idx + 1}`}
                value={obj}
                onChange={(e) => {
                  const newObjectives = [...formData.objectives]
                  newObjectives[idx] = e.target.value
                  setFormData({ ...formData, objectives: newObjectives })
                }}
                className="flex-1 rounded-lg border border-border bg-card px-4 py-2.5 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              />
              {formData.objectives.length > 1 && (
                <button
                  onClick={() => {
                    setFormData({
                      ...formData,
                      objectives: formData.objectives.filter((_, i) => i !== idx),
                    })
                  }}
                  className="text-muted-foreground hover:text-destructive transition-colors"
                >
                  <X className="size-5" />
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={() =>
            setFormData({
              ...formData,
              objectives: [...formData.objectives, ''],
            })
          }
          className="mt-2 text-sm text-accent hover:text-accent/80 font-medium"
        >
          + Add Objective
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          Prerequisites
        </label>
        <div className="space-y-2">
          {formData.prerequisites.map((prereq, idx) => (
            <div key={idx} className="flex gap-2">
              <input
                type="text"
                placeholder={`Prerequisite ${idx + 1}`}
                value={prereq}
                onChange={(e) => {
                  const newPrereqs = [...formData.prerequisites]
                  newPrereqs[idx] = e.target.value
                  setFormData({ ...formData, prerequisites: newPrereqs })
                }}
                className="flex-1 rounded-lg border border-border bg-card px-4 py-2.5 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              />
              {formData.prerequisites.length > 1 && (
                <button
                  onClick={() => {
                    setFormData({
                      ...formData,
                      prerequisites: formData.prerequisites.filter((_, i) => i !== idx),
                    })
                  }}
                  className="text-muted-foreground hover:text-destructive transition-colors"
                >
                  <X className="size-5" />
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={() =>
            setFormData({
              ...formData,
              prerequisites: [...formData.prerequisites, ''],
            })
          }
          className="mt-2 text-sm text-accent hover:text-accent/80 font-medium"
        >
          + Add Prerequisite
        </button>
      </div>
    </div>
  )
}

function StepPublishing({
  formData,
  setFormData,
}: {
  formData: CourseFormData
  setFormData: (data: CourseFormData) => void
}) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-4">
          Publishing Status
        </label>
        <div className="space-y-3">
          {[
            { value: 'public', label: 'Public', description: 'Anyone can find and enroll' },
            {
              value: 'private',
              label: 'Private',
              description: 'Only students you invite can enroll',
            },
            { value: 'draft', label: 'Draft', description: 'Save and publish later' },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-start gap-3 rounded-lg border border-border p-4 cursor-pointer hover:bg-muted/50 transition-colors"
            >
              <input
                type="radio"
                name="visibility"
                defaultChecked={option.value === 'draft'}
                className="mt-1 h-4 w-4 accent-accent"
              />
              <div>
                <p className="font-medium text-foreground">{option.label}</p>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Tags (optional)
        </label>
        <input
          type="text"
          placeholder="e.g., Python, Backend, Web Services (comma-separated)"
          value={formData.tags.join(', ')}
          onChange={(e) =>
            setFormData({
              ...formData,
              tags: e.target.value.split(',').map((t) => t.trim()),
            })
          }
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
        />
      </div>

      <div className="rounded-lg bg-muted/50 border border-border p-4">
        <h4 className="font-semibold text-foreground mb-2">Ready to Create?</h4>
        <p className="text-sm text-muted-foreground">
          Your course will be created in draft mode. You can add modules, lessons, and publish whenever you&apos;re ready.
        </p>
      </div>
    </div>
  )
}


