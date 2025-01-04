import { useState, useMemo } from 'react';
import { Project } from '../types';

export function useProjectSearch(projects: Project[]) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return projects;

    return projects.filter(project => 
      project.name.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term)
    );
  }, [projects, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredProjects,
  };
}