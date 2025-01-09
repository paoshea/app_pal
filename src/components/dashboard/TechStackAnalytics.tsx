
import React from 'react';

export default function TechStackAnalytics() {
  const techStats = [
    { name: 'React', count: 8 },
    { name: 'Node.js', count: 6 },
    { name: 'TypeScript', count: 5 },
    { name: 'Python', count: 3 }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Tech Stack Usage</h2>
      <div className="space-y-4">
        {techStats.map((tech) => (
          <div key={tech.name} className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{tech.name}</span>
            <span className="text-sm font-medium text-gray-900">{tech.count} projects</span>
          </div>
        ))}
      </div>
    </div>
  );
}
