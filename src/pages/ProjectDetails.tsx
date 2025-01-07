import React from 'react';
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
  }
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Projects</h1>
      <ProjectDashboard projects={mockProjects} />
    </div>
  );
}