import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Settings() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex items-center">
        <Link to="/dashboard" className="flex items-center text-gray-600 hover:text-gray-900 mr-4">
          <ArrowLeft className="w-5 h-5 mr-1" />
          Back to Dashboard
        </Link>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium">Profile Settings</h3>
            <div className="p-4 border rounded-lg mt-2">
              <h4 className="font-medium">Profile Information</h4>
              <p className="text-gray-500 text-sm mt-1">Update your account details and preferences</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Notification Settings</h3>
            <div className="p-4 border rounded-lg mt-2">
              <h4 className="font-medium">Notifications</h4>
              <p className="text-gray-500 text-sm mt-1">Configure how you receive updates</p>
            </div>
          </div>
          {/* Add more settings content here if needed */}
        </div>
      </div>
    </div>
  );
}