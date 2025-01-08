
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import ProjectDashboard from '../components/power/ProjectDashboard';
import TechStackBadge from '../components/power/TechStackBadge';
import { Plus, BarChart3, Code, BookOpen, Users, GitBranch, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { icon: BarChart3, label: 'Project Overview', path: '/app/projects' },
  { icon: Code, label: 'Tech Stack', path: '/app/projects/tech' },
  { icon: BookOpen, label: 'Documentation', path: '/app/projects/docs' },
  { icon: Users, label: 'Team', path: '/app/team' }
];

export default function Dashboard() {
  const { user } = useAuthStore();
  const mockProjects = [
    {
      id: '1',
      name: 'E-Commerce Platform',
      description: 'Modern shopping experience with React and Node.js',
      priority: 3,
      techStack: ['react', 'node', 'postgres'],
      status: 'In Progress',
      completion: 75,
      updatedAt: new Date()
    },
    {
      id: '2',
      name: 'Mobile Banking App',
      description: 'Secure financial transactions app with React Native',
      priority: 2,
      techStack: ['react-native', 'typescript', 'firebase'],
      status: 'Planning',
      completion: 20,
      updatedAt: new Date()
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your projects and team collaborations
          </p>
        </div>
        <Link
          to="/app/projects/new"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Project
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <link.icon className="w-6 h-6 text-blue-600" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400" />
            </div>
            <h3 className="font-medium text-gray-900">{link.label}</h3>
            <p className="text-sm text-gray-500 mt-1">Quick access to {link.label.toLowerCase()}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium">Recent Projects</h2>
              <Link to="/app/projects" className="text-blue-600 hover:text-blue-700 text-sm">
                View all
              </Link>
            </div>
            <ProjectDashboard projects={mockProjects} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-4">Tech Stack Overview</h2>
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
            <h2 className="text-lg font-medium mb-4">Team Activity</h2>
            <div className="space-y-4">
              {['John updated E-Commerce Platform', 'Sarah added documentation', 'Mike created new project'].map((activity, index) => (
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
