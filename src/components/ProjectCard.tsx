import React from 'react';
import { type Project } from '../types';
import { FileText, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPriorityLabel, getPriorityColor } from '../utils/projectUtils';
import { getRelativeTime } from '../utils/dateUtils';
import Badge from './common/Badge';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const priorityColor = getPriorityColor(project.priority);
  const priorityLabel = getPriorityLabel(project.priority);
  const updatedTime = getRelativeTime(project.updatedAt);

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow touch-manipulation active:bg-gray-50">
      <div className="flex items-start justify-between">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-gray-900 truncate">{project.name}</h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{project.description}</p>
        </div>
        <div className="flex items-center ml-4">
          <Star className={`w-5 h-5 ${project.priority > 2 ? 'text-yellow-400' : 'text-gray-300'}`} />
        </div>
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

      <div className="mt-4 flex justify-end">
        <Link 
          to={`/guest-dashboard/${project.id}`}
          className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-md inline-flex items-center"
        >
          View Details
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;