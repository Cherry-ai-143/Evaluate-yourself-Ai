export function TimeSeriesChart() {
  const data = [
    { week: 'Week 1', engagement: 65, submissions: 45 },
    { week: 'Week 2', engagement: 72, submissions: 52 },
    { week: 'Week 3', engagement: 78, submissions: 58 },
    { week: 'Week 4', engagement: 82, submissions: 64 },
  ];

  const maxValue = Math.max(...data.flatMap(d => [d.engagement, d.submissions]));

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Trend</h3>
      <div className="flex items-end justify-around h-40 gap-4">
        {data.map((item) => (
          <div key={item.week} className="flex-1 flex flex-col items-center gap-2">
            <div className="flex gap-1 h-32">
              <div
                className="flex-1 bg-blue-500 rounded-t transition-all hover:opacity-80"
                style={{ height: `${(item.engagement / maxValue) * 100}%` }}
              />
              <div
                className="flex-1 bg-orange-500 rounded-t transition-all hover:opacity-80"
                style={{ height: `${(item.submissions / maxValue) * 100}%` }}
              />
            </div>
            <span className="text-xs text-gray-600">{item.week}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded" />
          <span className="text-sm text-gray-600">Engagement</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-500 rounded" />
          <span className="text-sm text-gray-600">Submissions</span>
        </div>
      </div>
    </div>
  );
}


