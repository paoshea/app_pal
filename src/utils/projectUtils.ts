import { Project } from '../types';

export const getPriorityLabel = (priority: number): string => {
  switch (priority) {
    case 3: return 'High';
    case 2: return 'Medium';
    case 1: return 'Low';
    default: return 'Unknown';
  };
};

export const getPriorityColor = (priority: number): string => {
  switch (priority) {
    case 3: return 'text-red-600 bg-red-50';
    case 2: return 'text-yellow-600 bg-yellow-50';
    case 1: return 'text-green-600 bg-green-50';
    default: return 'text-gray-600 bg-gray-50';
  };
};

export const validateProject = (project: Partial<Project>): string[] => {
  const errors: string[] = [];
  
  if (!project.name?.trim()) {
    errors.push('Project name is required');
  }
  
  if (!project.description?.trim()) {
    errors.push('Project description is required');
  }
  
  if (typeof project.priority !== 'number' || project.priority < 1 || project.priority > 3) {
    errors.push('Priority must be between 1 and 3');
  }
  
  return errors;
};