import { useState, useMemo } from 'react';
import { Project } from '../types';

type SortField = 'name' | 'priority' | 'updatedAt';
type SortDirection = 'asc' | 'desc';

export function useProjectSort(projects: Project[]) {
  const [sortField, setSortField] = useState<SortField>('priority');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const modifier = sortDirection === 'asc' ? 1 : -1;
      
      switch (sortField) {
        case 'name':
          return modifier * a.name.localeCompare(b.name);
        case 'priority':
          return modifier * (a.priority - b.priority);
        case 'updatedAt':
          return modifier * (new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime());
        default:
          return 0;
      }
    });
  }, [projects, sortField, sortDirection]);

  return {
    sortedProjects,
    sortField,
    sortDirection,
    setSortField,
    setSortDirection,
  };
}