import React from 'react';
import { type Project } from '../types';
import { FileText, Star, ArrowRight } from 'lucide-react';
import { getPriorityLabel, getPriorityColor } from '../utils/projectUtils';
import { getRelativeTime } from '../utils/dateUtils';
import Badge from './common/Badge';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const priorityColor = getPriorityColor(project.priority);
  const priorityLabel = getPriorityLabel(project.priority);
  const updatedTime = project.updatedAt ? getRelativeTime(project.updatedAt) : '';

  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{project.description}</p>
        </div>
        <Badge variant={project.status === 'In Progress' ? 'blue' : 'gray'}>
          {project.status}
        </Badge>
      </div>

      <div className="space-y-4">
        <div className="flex gap-2">
          {project.techStack?.map((tech) => (
            <Badge key={tech} variant="gray" size="sm">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="w-full max-w-[200px]">
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${project.completion}%` }}
              />
            </div>
          </div>
          <a
            href={`/projects/${project.id}`}
            className="text-blue-600 hover:text-blue-700 inline-flex items-center"
          >
            View
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <Badge 
            variant={project.priority === 3 ? 'error' : project.priority === 2 ? 'warning' : 'success'}
            size="sm"
          >
            {priorityLabel}
          </Badge>
          <span className="text-sm text-gray-500">•</span>
          <div className="flex items-center text-sm text-gray-500">
            <FileText className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="truncate">Updated {updatedTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}