
import React from 'react';
import GuestProjectList from '../components/guest/GuestProjectList';

export default function GuestDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Guest Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your guest projects
          </p>
        </div>
      </div>
      <GuestProjectList />
    </div>
  );
}
