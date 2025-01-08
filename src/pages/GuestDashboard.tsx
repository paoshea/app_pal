
import React from 'react';
import { Link } from 'react-router-dom';
import { useGuestProjects } from '../hooks/useGuestProjects';
import GuestProjectList from '../components/guest/GuestProjectList';
import { BarChart, Users, GitBranch, Calendar } from 'lucide-react';
import Logo from '../components/brand/Logo';
import CreateGuestProject from '../components/guest/CreateGuestProject';

const mockStats = [
  { label: 'Projects', value: '0', icon: BarChart },
  { label: 'Features', value: '5', icon: GitBranch },
  { label: 'Users', value: '1.2k', icon: Users },
  { label: 'Updates', value: 'Daily', icon: Calendar },
];

function GuestDashboard() {
  const { projects, canAddMoreProjects } = useGuestProjects();

  // Update stats with real project count
  mockStats[0].value = projects.length.toString();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <Logo variant="minimal" size="sm" />
            </Link>
            <Link
              to="/register"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Upgrade to Pro
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

          {canAddMoreProjects && (
            <div className="mb-8">
              <CreateGuestProject />
            </div>
          )}

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Your Projects</h2>
              <GuestProjectList />
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Want more features?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                Upgrade to Pro
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default GuestDashboard;
