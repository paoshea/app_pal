
import React from 'react';
import { Link } from 'react-router-dom';
import GuestProjectList from '../components/guest/GuestProjectList';
import { BarChart, Users, GitBranch, Calendar } from 'lucide-react';
import Logo from '../components/brand/Logo';

const mockStats = [
  { label: 'Demo Projects', value: '3', icon: BarChart },
  { label: 'Guest Features', value: '5', icon: GitBranch },
  { label: 'Active Users', value: '1.2k', icon: Users },
  { label: 'Updates', value: 'Daily', icon: Calendar },
];

export default function GuestDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <Logo variant="minimal" size="sm" />
            </Link>
            <Link to="/" className="text-blue-600 hover:text-blue-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex-grow">
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

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Your Projects</h2>
              <GuestProjectList />
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Product</h3>
              <div className="mt-4 space-y-4">
                <Link to="/features" className="text-sm text-gray-600 hover:text-gray-900 block">Features</Link>
                <Link to="/register" className="text-sm text-gray-600 hover:text-gray-900 block">Register</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <div className="mt-4 space-y-4">
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 block">About</Link>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 block">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
