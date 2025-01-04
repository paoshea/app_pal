import React from 'react';
import { Project } from '../../types';
import TechStackBadge from './TechStackBadge';
import { BarChart, Calendar, Users, GitBranch } from 'lucide-react';

interface ProjectDashboardProps {
  projects: Project[];
}

export default function ProjectDashboard({ projects }: ProjectDashboardProps) {
  const getProjectStats = () => {
    return {
      total: projects.length,
      highPriority: projects.filter(p => p.priority > 2).length,
      recentlyUpdated: projects.filter(p => {
        const lastUpdate = new Date(p.updatedAt);
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return lastUpdate > weekAgo;
      }).length,
    };
  };

  const stats = getProjectStats();

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <GitBranch className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Projects</p>
              <p className="text-2xl font-semibold">{stats.total}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <BarChart className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">High Priority</p>
              <p className="text-2xl font-semibold">{stats.highPriority}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Recently Updated</p>
              <p className="text-2xl font-semibold">{stats.recentlyUpdated}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Team Members</p>
              <p className="text-2xl font-semibold">5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project List */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Project Overview</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {projects.map((project) => (
            <div key={project.id} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium">{project.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack?.map((tech) => (
                      <TechStackBadge key={tech} tech={tech} size="sm" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">Priority</p>
                    <p className="text-sm text-gray-500">{project.priority}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">Last Update</p>
                    <p className="text-sm text-gray-500">
                      {new Date(project.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}