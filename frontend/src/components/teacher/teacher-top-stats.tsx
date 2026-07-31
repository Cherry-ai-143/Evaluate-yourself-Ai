'use client'

import {
  BookOpen,
  Users,
  CheckSquare,
  ClipboardList,
  TrendingUp,
} from 'lucide-react'

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string | number
  change: string
  changeType: 'positive' | 'negative' | 'neutral'
}

function StatCard({ icon, label, value, change, changeType }: StatCardProps) {
  const changeColor = {
    positive: 'text-emerald-600',
    negative: 'text-red-600',
    neutral: 'text-slate-600',
  }

  return (
    <div className="rounded-2xl bg-white border border-border shadow-sm p-6 hover:shadow-md transition-all">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="text-3xl font-bold text-foreground mt-2">{value}</p>
          <p className={`text-xs font-medium ${changeColor[changeType]} mt-3`}>
            {change}
          </p>
        </div>
        <div className="rounded-xl bg-accent/10 p-3 text-accent">{icon}</div>
      </div>
    </div>
  )
}

export function TeacherTopStats() {
  const stats = [
    {
      icon: <BookOpen className="size-6" />,
      label: 'Courses Created',
      value: '8',
      change: '+2 this month',
      changeType: 'positive' as const,
    },
    {
      icon: <Users className="size-6" />,
      label: 'Students Enrolled',
      value: '352',
      change: '+48 this month',
      changeType: 'positive' as const,
    },
    {
      icon: <CheckSquare className="size-6" />,
      label: 'Quizzes Generated',
      value: '86',
      change: '+12 this week',
      changeType: 'positive' as const,
    },
    {
      icon: <ClipboardList className="size-6" />,
      label: 'Assessments Conducted',
      value: '24',
      change: '+5 this month',
      changeType: 'positive' as const,
    },
    {
      icon: <TrendingUp className="size-6" />,
      label: 'Average Score',
      value: '78%',
      change: '+8% improvement',
      changeType: 'positive' as const,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {stats.map((stat, idx) => (
        <StatCard key={idx} {...stat} />
      ))}
    </div>
  )
}


