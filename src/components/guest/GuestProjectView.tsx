
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGuestProjects } from '../../hooks/useGuestProjects';
import { Save, Trash2, ArrowLeft } from 'lucide-react';

export default function GuestProjectView() {
  const { projectId } = useParams();
  const { projects, updateProject, deleteProject } = useGuestProjects();
  const project = projects.find((p) => p.id === projectId);
  
  const [isEditing, setIsEditing] = useState(false);
  const [readme, setReadme] = useState(project?.readme || '');

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Project Not Found</h2>
          <p className="mt-2 text-gray-600">The project you're looking for doesn't exist or has been deleted.</p>
          <Link to="/guest-dashboard" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    updateProject(projectId!, { readme });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      deleteProject(projectId!);
      window.location.href = '/guest-dashboard';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link to="/guest-dashboard" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Dashboard
      </Link>
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>
        <div className="space-x-2">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
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
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md"
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
            <pre className="whitespace-pre-wrap">{readme}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
