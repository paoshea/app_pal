
import React from 'react';
import ProjectCard from '../ProjectCard';

export default function RecentProjects() {
  const projects = [
    {
      id: '1',
      name: 'E-Commerce Platform',
      description: 'Modern shopping experience',
      techStack: ['react', 'node', 'postgres'],
      status: 'In Progress',
      completion: 75,
      priority: 'High',
      updatedAt: new Date()
    },
    {
      id: '2',
      name: 'Mobile Banking App',
      description: 'Secure financial transactions',
      techStack: ['react-native', 'typescript'],
      status: 'Planning',
      completion: 20,
      priority: 'Medium',
      updatedAt: new Date()
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
