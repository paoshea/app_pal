
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Home, FolderGit2, Lightbulb, Settings } from 'lucide-react';

export default function BottomNav() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe lg:hidden">
      <div className="flex justify-around items-center h-16">
        <NavLink
          to="/app/dashboard"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center flex-1 h-full ${
              isActive ? 'text-blue-600' : 'text-gray-600'
            }`
          }
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </NavLink>
        
        <NavLink
          to="/app/projects"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center flex-1 h-full ${
              isActive ? 'text-blue-600' : 'text-gray-600'
            }`
          }
        >
          <FolderGit2 className="w-6 h-6" />
          <span className="text-xs mt-1">Projects</span>
        </NavLink>
        
        <NavLink
          to="/app/ideas"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center flex-1 h-full ${
              isActive ? 'text-blue-600' : 'text-gray-600'
            }`
          }
        >
          <Lightbulb className="w-6 h-6" />
          <span className="text-xs mt-1">Ideas</span>
        </NavLink>
        
        <NavLink
          to="/app/settings"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center flex-1 h-full ${
              isActive ? 'text-blue-600' : 'text-gray-600'
            }`
          }
        >
          <Settings className="w-6 h-6" />
          <span className="text-xs mt-1">Settings</span>
        </NavLink>
      </div>
    </nav>
  );
}
