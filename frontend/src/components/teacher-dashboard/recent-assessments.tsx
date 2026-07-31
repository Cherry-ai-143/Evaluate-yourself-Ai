'use client'

interface Assessment {
  id: string
  name: string
  course: string
  type: 'Quiz' | 'Test' | 'Assignment'
  submissions: number
  averageScore: number
  status: 'Completed' | 'Pending' | 'Graded'
}

const assessments: Assessment[] = [
  {
    id: '1',
    name: 'Data Structures Quiz',
    course: 'DSA Basics',
    type: 'Quiz',
    submissions: 86,
    averageScore: 82,
    status: 'Completed',
  },
  {
    id: '2',
    name: 'Machine Learning Test',
    course: 'ML Fundamentals',
    type: 'Test',
    submissions: 65,
    averageScore: 78,
    status: 'Completed',
  },
  {
    id: '3',
    name: 'Python Functions Assignment',
    course: 'Python Programming',
    type: 'Assignment',
    submissions: 120,
    averageScore: 88,
    status: 'Graded',
  },
  {
    id: '4',
    name: 'Database Systems Quiz',
    course: 'Database Systems',
    type: 'Quiz',
    submissions: 45,
    averageScore: 70,
    status: 'Completed',
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case 'Completed':
      return 'bg-green-100 text-green-700'
    case 'Pending':
      return 'bg-yellow-100 text-yellow-700'
    case 'Graded':
      return 'bg-blue-100 text-blue-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

export function RecentAssessments() {
  return (
    <div className="rounded-2xl bg-white border border-border shadow-sm p-8">
      <h3 className="text-lg font-semibold text-foreground mb-6">
        Recent Assessments
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide py-3 px-2">
                Assessment
              </th>
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide py-3 px-2">
                Course
              </th>
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide py-3 px-2">
                Type
              </th>
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide py-3 px-2">
                Submissions
              </th>
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide py-3 px-2">
                Avg. Score
              </th>
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide py-3 px-2">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {assessments.map((assessment) => (
              <tr key={assessment.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="py-4 px-2">
                  <p className="text-sm font-medium text-foreground">
                    {assessment.name}
                  </p>
                </td>
                <td className="py-4 px-2">
                  <p className="text-sm text-muted-foreground">
                    {assessment.course}
                  </p>
                </td>
                <td className="py-4 px-2">
                  <p className="text-sm text-muted-foreground">
                    {assessment.type}
                  </p>
                </td>
                <td className="py-4 px-2">
                  <p className="text-sm font-medium text-foreground">
                    {assessment.submissions}
                  </p>
                </td>
                <td className="py-4 px-2">
                  <p className="text-sm font-semibold text-foreground">
                    {assessment.averageScore}%
                  </p>
                </td>
                <td className="py-4 px-2">
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${getStatusBadge(assessment.status)}`}
                  >
                    {assessment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="mt-6 w-full px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors">
        View All Assessments
      </button>
    </div>
  )
}
