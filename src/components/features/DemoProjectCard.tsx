import React from 'react';
import { Star, Lock } from 'lucide-react';
import TechStackBadge from '../power/TechStackBadge';

interface DemoProjectCardProps {
  type: 'guest' | 'power';
}

export default function DemoProjectCard({ type }: DemoProjectCardProps) {
  const isPower = type === 'power';
  const techStack = isPower ? ['react', 'node', 'postgres'] : ['react'];

  return (
    <div className={`
      relative p-6 rounded-lg border-2 
      ${isPower ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-gray-50'}
    `}>
      <div className="absolute -top-3 left-4 bg-white px-2 text-sm font-medium">
        {isPower ? 'Power User View' : 'Guest View'}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">Example Project</h3>
            <p className="text-sm text-gray-600">A sample project to showcase features</p>
          </div>
          <Star className={`w-5 h-5 ${isPower ? 'text-yellow-400' : 'text-gray-300'}`} />
        </div>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <TechStackBadge key={tech} tech={tech} size="sm" />
          ))}
          {!isPower && (
            <div className="inline-flex items-center space-x-1 text-sm text-gray-500">
              <Lock className="w-4 h-4" />
              <span>More with Power User</span>
            </div>
          )}
        </div>

        {isPower && (
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium">Priority Level</p>
              <p className="text-gray-600">High</p>
            </div>
            <div>
              <p className="font-medium">Team Size</p>
              <p className="text-gray-600">5 Members</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}