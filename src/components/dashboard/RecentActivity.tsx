
import React from 'react';
import { FileText, Star } from 'lucide-react';

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: 'update',
      project: 'E-Commerce Platform',
      description: 'Updated project status to In Progress',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'create',
      project: 'Mobile Banking App',
      description: 'Created new project',
      time: '5 hours ago'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            {activity.type === 'update' ? (
              <FileText className="h-5 w-5 text-blue-500 mt-1" />
            ) : (
              <Star className="h-5 w-5 text-yellow-500 mt-1" />
            )}
            <div>
              <p className="text-sm font-medium text-gray-900">{activity.project}</p>
              <p className="text-sm text-gray-500">{activity.description}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
