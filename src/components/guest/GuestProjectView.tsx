
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGuestProjects } from '../../hooks/useGuestProjects';
import { Save, Trash2, ArrowLeft, Calendar, Clock } from 'lucide-react';
import Badge from '../common/Badge';
import Logo from '../brand/Logo';
import TechStackBadge from '../power/TechStackBadge';

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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link to="/guest-dashboard" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>
                  <p className="text-gray-600 mt-1">{project.description}</p>
                  
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(project.createdAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      Last updated: {new Date(project.updatedAt).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-3">
                    <Badge color="blue" text={`Priority ${project.priority}`} />
                    <TechStackBadge tech="react" size="sm" />
                  </div>
                </div>
                
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

              <div className="bg-gray-50 rounded-lg p-6">
                {isEditing ? (
                  <textarea
                    value={readme}
                    onChange={(e) => setReadme(e.target.value)}
                    className="w-full h-96 font-mono text-sm p-4 border rounded-md focus:border-blue-500 focus:ring-blue-500"
                    placeholder="# Project Documentation
Add your project documentation here using Markdown..."
                  />
                ) : (
                  <div className="prose max-w-none">
                    <pre className="whitespace-pre-wrap">{readme}</pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Logo variant="minimal" size="sm" />
              <span className="text-sm text-gray-500">Guest Project View</span>
            </div>
            <Link
              to="/register"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Upgrade to Power User
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
