import React from 'react';
import { useGuestProjects } from '../../hooks/useGuestProjects';
import { useProjectSort } from '../../hooks/useProjectSort';
import { useProjectSearch } from '../../hooks/useProjectSearch';
import ProjectCard from '../ProjectCard';
import SearchInput from '../common/SearchInput';
import { AlertCircle } from 'lucide-react';
import Badge from '../common/Badge';

export default function GuestProjectList() {
  const { projects, error, canAddMoreProjects } = useGuestProjects();
  const { sortedProjects, sortField, setSortField, sortDirection, setSortDirection } = useProjectSort(projects);
  const { searchTerm, setSearchTerm, filteredProjects } = useProjectSearch(sortedProjects);

  const displayedProjects = filteredProjects;

  return (
    <div className="space-y-4">
      {!canAddMoreProjects && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-md">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-yellow-400" />
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                You have reached the maximum limit of 10 projects.
                <a href="/register" className="font-medium underline ml-1">
                  Register now
                </a>{' '}
                to create more projects and unlock additional features!
              </p>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-md">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <div className="flex items-center justify-between">
        <SearchInput
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search projects..."
          className="w-64"
        />
        
        <div className="flex items-center space-x-2">
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value as any)}
            className="rounded-md border-gray-300 text-sm"
          >
            <option value="priority">Priority</option>
            <option value="name">Name</option>
            <option value="updatedAt">Last Updated</option>
          </select>
          <button
            onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
            className="p-2 hover:bg-gray-100 rounded-md"
          >
            {sortDirection === 'asc' ? '↑' : '↓'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
        <span>
          Showing {displayedProjects.length} of {projects.length} projects
        </span>
        <Badge variant="default" size="sm">
          {canAddMoreProjects ? 
            `${projects.length}/10 projects used` : 
            'Project limit reached'}
        </Badge>
      </div>
    </div>
  );
}