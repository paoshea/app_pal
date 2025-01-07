
import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Plus, BarChart3, Code, BookOpen } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { useAuthStore } from '../store/authStore';

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

const quickLinks = [
  { icon: BarChart3, label: 'Project Overview', path: '/projects' },
  { icon: Lightbulb, label: 'Project Ideas', path: '/projectideas' },
  { icon: Code, label: 'Tech Stack', path: '/projects/tech' },
  { icon: BookOpen, label: 'Documentation', path: '/projects/docs' }
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {quickLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <link.icon className="w-6 h-6 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">{link.label}</span>
          </Link>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium mb-4">Quick Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">2</div>
            <div className="text-sm text-gray-600">Active Projects</div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">75%</div>
            <div className="text-sm text-gray-600">Completion Rate</div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">3</div>
            <div className="text-sm text-gray-600">Tech Stacks</div>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">5</div>
            <div className="text-sm text-gray-600">Documentation Pages</div>
          </div>
        </div>
      </div>
    </div>
  );
}
