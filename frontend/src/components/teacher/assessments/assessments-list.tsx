import { BarChart3, Edit2, Trash2, MoreVertical, Eye } from 'lucide-react';

interface AssessmentsListProps {
  search: string;
  status: string;
}

const assessments = [
  {
    id: 1,
    name: 'Python Fundamentals Quiz',
    course: 'Python Programming',
    type: 'Quiz',
    questions: 15,
    students: 142,
    submissions: 135,
    avgScore: 78,
    status: 'active',
    date: '2024-01-20',
  },
  {
    id: 2,
    name: 'Web Development Midterm',
    course: 'Web Development',
    type: 'Exam',
    questions: 40,
    students: 89,
    submissions: 78,
    avgScore: 82,
    status: 'completed',
    date: '2024-01-15',
  },
  {
    id: 3,
    name: 'Data Analysis Project',
    course: 'Data Science',
    type: 'Assignment',
    questions: 1,
    students: 67,
    submissions: 54,
    avgScore: 85,
    status: 'pending',
    date: '2024-01-18',
  },
  {
    id: 4,
    name: 'Advanced Python Concepts',
    course: 'Python Programming',
    type: 'Quiz',
    questions: 20,
    students: 98,
    submissions: 0,
    avgScore: 0,
    status: 'draft',
    date: '2024-01-25',
  },
];

export function AssessmentsList({ search, status }: AssessmentsListProps) {
  const filtered = assessments.filter((a) => {
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === 'all' || a.status === status;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-100 text-blue-700';
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'draft':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Quiz':
        return '📝';
      case 'Exam':
        return '📋';
      case 'Assignment':
        return '✏️';
      default:
        return '📄';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Assessment</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Course</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Questions</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Submissions</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Avg Score</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
            <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((a) => (
            <tr key={a.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">{a.name}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{a.course}</td>
              <td className="px-6 py-4 text-sm">
                <div className="flex items-center gap-2">
                  <span>{getTypeIcon(a.type)}</span>
                  <span>{a.type}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{a.questions}</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {a.submissions}/{a.students}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {a.avgScore > 0 ? `${a.avgScore}%` : '-'}
              </td>
              <td className="px-6 py-4 text-sm">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(a.status)}`}>
                  {a.status.charAt(0).toUpperCase() + a.status.slice(1)}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="text-green-500 hover:text-green-700">
                    <BarChart3 className="w-4 h-4" />
                  </button>
                  <button className="text-orange-500 hover:text-orange-700">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


