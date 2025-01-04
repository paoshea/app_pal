import { useState } from 'react';
import { useGuestStore } from '../store/guestStore';
import { Project } from '../types';

export const useGuestProjects = () => {
  const [error, setError] = useState<string | null>(null);
  const { projects, addProject, updateProject, deleteProject, canAddMoreProjects } = useGuestStore();

  const handleAddProject = (projectData: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (!canAddMoreProjects()) {
      setError('You have reached the maximum limit of 10 projects. Please register to create more.');
      return false;
    }

    try {
      addProject(projectData);
      return true;
    } catch (err) {
      setError('Failed to create project. Please try again.');
      return false;
    }
  };

  const handleUpdateProject = (id: string, projectData: Partial<Project>) => {
    try {
      updateProject(id, projectData);
      return true;
    } catch (err) {
      setError('Failed to update project. Please try again.');
      return false;
    }
  };

  const handleDeleteProject = (id: string) => {
    try {
      deleteProject(id);
      return true;
    } catch (err) {
      setError('Failed to delete project. Please try again.');
      return false;
    }
  };

  return {
    projects,
    error,
    addProject: handleAddProject,
    updateProject: handleUpdateProject,
    deleteProject: handleDeleteProject,
    canAddMoreProjects: canAddMoreProjects(),
  };
};