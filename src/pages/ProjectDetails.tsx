
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ProjectDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <Link
            to="/app/projects"
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-4">Project Details</h1>
        </div>
      </div>
      
      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-medium">Project ID: {id}</h2>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-medium mb-2">Description</h3>
            <p className="text-gray-600">Project description will go here</p>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-medium mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {/* Tech stack badges will go here */}
            </div>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-medium mb-2">Progress</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
