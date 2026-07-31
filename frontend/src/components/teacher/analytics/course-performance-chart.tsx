export function CoursePerformanceChart() {
  const courses = [
    { name: 'Python Programming', completion: 76, students: 128 },
    { name: 'Web Development', completion: 82, students: 94 },
    { name: 'Data Science', completion: 68, students: 78 },
    { name: 'Database Systems', completion: 71, students: 65 },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Performance</h3>
      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.name}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{course.name}</span>
              <span className="text-sm font-semibold text-gray-900">{course.completion}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-orange-500 h-2 rounded-full"
                style={{ width: `${course.completion}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">{course.students} students</p>
          </div>
        ))}
      </div>
    </div>
  );
}


