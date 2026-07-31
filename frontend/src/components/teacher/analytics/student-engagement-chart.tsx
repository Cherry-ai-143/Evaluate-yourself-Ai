export function StudentEngagementChart() {
  const engagement = [
    { range: 'High (80-100%)', count: 89, color: 'bg-green-500' },
    { range: 'Medium (60-80%)', count: 156, color: 'bg-blue-500' },
    { range: 'Low (40-60%)', count: 67, color: 'bg-yellow-500' },
    { range: 'Very Low (<40%)', count: 30, color: 'bg-red-500' },
  ];

  const total = engagement.reduce((sum, e) => sum + e.count, 0);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Engagement Distribution</h3>
      <div className="space-y-4">
        {engagement.map((item) => (
          <div key={item.range}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{item.range}</span>
              <span className="text-sm font-semibold text-gray-900">
                {item.count} ({((item.count / total) * 100).toFixed(0)}%)
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${item.color} h-2 rounded-full`}
                style={{ width: `${(item.count / total) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


