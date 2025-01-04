
import React from 'react';
import GuestProjectList from '../components/guest/GuestProjectList';
import { BarChart, Users, GitBranch, Calendar } from 'lucide-react';

const mockStats = [
  { label: 'Demo Projects', value: '3', icon: BarChart },
  { label: 'Guest Features', value: '5', icon: GitBranch },
  { label: 'Active Users', value: '1.2k', icon: Users },
  { label: 'Updates', value: 'Daily', icon: Calendar },
];

export default function GuestDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Guest Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome to your project management dashboard. Get started by creating your first project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {mockStats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-blue-50 rounded-lg">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 mb-8 text-white">
        <h2 className="text-xl font-semibold mb-2">Upgrade to Power User</h2>
        <p className="mb-4">Get access to advanced features, unlimited projects, and priority support.</p>
        <a href="/register" className="inline-block px-4 py-2 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors">
          Upgrade Now
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Your Projects</h2>
          <GuestProjectList />
        </div>
      </div>
    </div>
  );
}
