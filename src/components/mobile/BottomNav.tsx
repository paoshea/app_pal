import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Layout, Settings, Lightbulb } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useAuthStore } from '../../store/authStore';

export default function BottomNav() {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { isAuthenticated } = useAuthStore();
  const location = useLocation();

  if (!isMobile || !isAuthenticated) return null;

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden">
      <div className="flex justify-around items-center h-16">
        <Link 
          to="/app/dashboard" 
          className={`flex flex-col items-center ${isActive('/app/dashboard') ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs">Dashboard</span>
        </Link>
        <Link 
          to="/app/projects" 
          className={`flex flex-col items-center ${isActive('/app/projects') ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <Layout className="w-6 h-6" />
          <span className="text-xs">Projects</span>
        </Link>
        <Link 
          to="/app/project-ideas" 
          className={`flex flex-col items-center ${isActive('/app/project-ideas') ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <Lightbulb className="w-6 h-6" />
          <span className="text-xs">Ideas</span>
        </Link>
        <Link 
          to="settings" 
          className={`flex flex-col items-center ${isActive('settings') ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <Settings className="w-6 h-6" />
          <span className="text-xs">Settings</span>
        </Link>
      </div>
    </div>
  );
}