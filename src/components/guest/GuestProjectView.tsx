import React, { useState } from 'react';
import { useGuestProjects } from '../../hooks/useGuestProjects';
import { Project } from '../../types';
import { Save, Trash2 } from 'lucide-react';

interface Props {
  projectId: string;
}

export default function GuestProjectView({ projectId }: Props) {
  const { projects, updateProject, deleteProject } = useGuestProjects();
  const project = projects.find((p) => p.id === projectId);
  
  const [isEditing, setIsEditing] = useState(false);
  const [readme, setReadme] = useState(project?.readme || '');

  if (!project) return null;

  const handleSave = () => {
    updateProject(projectId, { readme });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      deleteProject(projectId);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{project.name}</h1>
        <div className="space-x-2">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="flex items-center px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
            >
              <Save className="w-4 h-4 mr-2" />
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md"
            >
              Edit
            </button>
          )}
          <button
            onClick={handleDelete}
            className="flex items-center px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {isEditing ? (
          <textarea
            value={readme}
            onChange={(e) => setReadme(e.target.value)}
            className="w-full h-96 font-mono text-sm p-4 border rounded-md focus:border-blue-500 focus:ring-blue-500"
          />
        ) : (
          <div className="prose max-w-none">
            {/* Here you would render the markdown content */}
            <pre className="whitespace-pre-wrap">{readme}</pre>
          </div>
        )}
      </div>
    </div>
  );
}