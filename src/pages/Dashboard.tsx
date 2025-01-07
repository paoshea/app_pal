import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, FolderKanban, Users, Calendar, Lightbulb } from 'lucide-react';
import ProjectDashboard from '../components/power/ProjectDashboard';

const mockProjects = [
  {
    id: '1',
    name: 'E-Commerce Platform',
    description: 'Modern shopping experience with React and Node.js',
    priority: 3,
    techStack: ['react', 'node', 'postgres'],
    updatedAt: new Date().toISOString(),
    status: 'In Progress',
    completion: 75
  },
  {
    id: '2',
    name: 'Mobile Banking App',
    description: 'Secure financial transactions app with React Native',
    priority: 4,
    techStack: ['react-native', 'typescript', 'firebase'],
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
    status: 'Planning',
    completion: 20
  },
  {
    id: '3',
    name: 'Analytics Dashboard',
    description: 'Real-time data visualization platform',
    priority: 2,
    techStack: ['vue', 'python', 'mongodb'],
    updatedAt: new Date(Date.now() - 172800000).toISOString(),
    status: 'Completed',
    completion: 100
  }
];

const recentActivity = [
  { id: 1, action: 'Updated tech stack', project: 'E-Commerce Platform', user: 'Sarah K.', time: '2 hours ago' },
  { id: 2, action: 'Completed sprint', project: 'Analytics Dashboard', user: 'Mike R.', time: '5 hours ago' },
  { id: 3, action: 'Added documentation', project: 'Mobile Banking App', user: 'Chris L.', time: '1 day ago' }
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your projects and activities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Link to="/project-ideas" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Lightbulb className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Project Ideas</p>
              <p className="text-2xl font-semibold">New</p>
            </div>
          </div>
        </Link>

        <Link to="/projects" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FolderKanban className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Projects</p>
              <p className="text-2xl font-semibold">12</p>
            </div>
          </div>
        </Link>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <BarChart className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active</p>
              <p className="text-2xl font-semibold">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Users className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Team</p>
              <p className="text-2xl font-semibold">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Updates</p>
              <p className="text-2xl font-semibold">15</p>
            </div>
          </div>
        </div>
      </div>

      <ProjectDashboard projects={mockProjects} /> {/*Retained ProjectDashboard with original data*/}
    </div>
  );
}