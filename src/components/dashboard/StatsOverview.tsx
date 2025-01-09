
import React from 'react';
import { BarChart3, Code, Users, Trophy } from 'lucide-react';

export default function StatsOverview() {
  const stats = [
    { label: 'Active Projects', value: '12', icon: BarChart3 },
    { label: 'Tech Stacks', value: '6', icon: Code },
    { label: 'Team Members', value: '8', icon: Users },
    { label: 'Completed', value: '24', icon: Trophy }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <stat.icon className="h-6 w-6 text-blue-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">{stat.value}</h3>
          </div>
          <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
