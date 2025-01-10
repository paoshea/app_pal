
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Plus, Lightbulb } from 'lucide-react';

export default function Projects() {
  const { user } = useAuthStore();

  const mockProjects = [
    { id: '1', name: 'Project A', description: 'Description for Project A' },
    { id: '2', name: 'Project B', description: 'Description for Project B' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="mt-1 text-sm text-gray-500">Manage all your projects</p>
        </div>
        <div className="flex gap-4">
          <Link
            to="/app/project-ideas"
            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
          >
            <Lightbulb className="w-4 h-4 mr-2" />
            View Ideas
          </Link>
          <Link
            to="/app/dashboard"
            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
      
      <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
        {mockProjects.map(project => (
          <div key={project.id} className="p-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
              <p className="text-sm text-gray-500">{project.description}</p>
            </div>
            <Link
              to={`/app/projects/${project.id}`}
              className="inline-flex items-center px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-md"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
