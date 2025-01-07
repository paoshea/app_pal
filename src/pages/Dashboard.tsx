import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Plus } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const mockProjects = [
  {
    id: '1',
    name: 'E-Commerce Platform',
    description: 'Modern shopping experience with React and Node.js',
    priority: 3,
    techStack: ['react', 'node', 'postgres'],
    status: 'In Progress',
    completion: 75
  },
  {
    id: '2',
    name: 'Mobile Banking App',
    description: 'Secure financial transactions app with React Native',
    priority: 4,
    techStack: ['react-native', 'typescript', 'firebase'],
    status: 'Planning',
    completion: 20
  }
];

const recentActivity = [
  { id: 1, action: 'Updated tech stack', project: 'E-Commerce Platform', time: '2 hours ago' },
  { id: 2, action: 'Created new project', project: 'Mobile Banking App', time: '5 hours ago' }
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">Overview of your projects and activities</p>
        </div>
        <Link
          to="/projects/new"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Project
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {mockProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-500">{activity.project}</p>
              </div>
              <span className="text-sm text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}