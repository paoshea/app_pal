
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import ProjectDashboard from '../components/power/ProjectDashboard';
import TechStackBadge from '../components/power/TechStackBadge';
import { Plus, BarChart3, Code, BookOpen, Users, GitBranch, ArrowUpRight, Trophy } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuthStore();

  const mockProjects = [
    {
      id: '1',
      name: 'E-Commerce Platform',
      description: 'Modern shopping experience with React and Node.js',
      priority: 'High',
      techStack: ['react', 'node', 'postgres'],
      status: 'In Progress',
      completion: 75,
      teamMembers: ['John D.', 'Sarah M.'],
      updatedAt: new Date()
    },
    {
      id: '2',
      name: 'Mobile Banking App',
      description: 'Secure financial transactions app with React Native',
      priority: 'Medium',
      techStack: ['react-native', 'typescript', 'firebase'],
      status: 'Planning',
      completion: 20,
      teamMembers: ['Mike R.', 'Anna K.'],
      updatedAt: new Date()
    }
  ];

  const stats = [
    { label: 'Active Projects', value: '12' },
    { label: 'Team Members', value: '8' },
    { label: 'Tech Stacks', value: '6' },
    { label: 'Completed', value: '24' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name || 'Power User'}</h1>
          <p className="mt-1 text-sm text-gray-500">Here's what's happening across your projects</p>
        </div>
        <Link
          to="/app/projects/new"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Project
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm font-medium text-gray-600">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h2 className="text-lg font-medium">Recent Projects</h2>
            </div>
            <div className="p-6">
              {mockProjects.map((project) => (
                <Link 
                  key={project.id}
                  to={`/app/projects/${project.id}`}
                  className="block p-4 hover:bg-gray-50 rounded-lg mb-4 border"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">{project.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{project.description}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded ${
                      project.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.priority}
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        {project.techStack.map((tech) => (
                          <TechStackBadge key={tech} tech={tech} size="sm" />
                        ))}
                      </div>
                      <div className="flex -space-x-2">
                        {project.teamMembers.map((member, i) => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs"
                          >
                            {member.charAt(0)}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${project.completion}%` }}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-4">Tech Stack Analytics</h2>
            <div className="space-y-3">
              {['react', 'typescript', 'node'].map((tech) => (
                <div key={tech} className="flex items-center justify-between">
                  <TechStackBadge tech={tech} size="sm" />
                  <span className="text-sm text-gray-500">3 projects</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                'New project "E-Commerce" created',
                'Tech stack updated for "Mobile App"',
                'Team member added to "Analytics Dashboard"'
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
                  <div>
                    <p className="text-sm text-gray-600">{activity}</p>
                    <p className="text-xs text-gray-400">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
