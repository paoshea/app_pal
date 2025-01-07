
import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Settings, FolderKanban, BrainCircuit } from 'lucide-react';

interface NavLinksProps {
  className?: string;
}

export default function NavLinks({ className = '' }: NavLinksProps) {
  return (
    <nav className={`space-y-1 ${className}`}>
      <Link to="/dashboard" className="flex items-center px-2 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md">
        <LayoutDashboard className="w-5 h-5 mr-3" />
        Dashboard
      </Link>
      <Link to="/projects" className="flex items-center px-2 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md">
        <FolderKanban className="w-5 h-5 mr-3" />
        Projects
      </Link>
      <Link to="/project-ideas" className="flex items-center px-2 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md">
        <BrainCircuit className="w-5 h-5 mr-3" />
        Project Ideas
      </Link>
      <Link to="/settings" className="flex items-center px-2 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md">
        <Settings className="w-5 h-5 mr-3" />
        Settings
      </Link>
    </nav>
  );
}
