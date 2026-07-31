export function AssessmentAnalytics() {
  const assessments = [
    { name: 'Python Quiz 1', avgScore: 78, completion: 85, difficulty: 'Medium' },
    { name: 'Web Dev Midterm', avgScore: 82, completion: 92, difficulty: 'Hard' },
    { name: 'Data Science Project', avgScore: 85, completion: 78, difficulty: 'Hard' },
    { name: 'Database Assignment', avgScore: 72, completion: 68, difficulty: 'Medium' },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment Performance</h3>
      <div className="space-y-3">
        {assessments.map((assessment) => (
          <div key={assessment.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-gray-900">{assessment.name}</p>
              <p className="text-xs text-gray-500">{assessment.difficulty}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">{assessment.avgScore}%</p>
                <p className="text-xs text-gray-500">Avg Score</p>
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-orange-100">
                <span className="text-sm font-semibold text-orange-600">{assessment.completion}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


