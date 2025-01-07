import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Layout, Settings } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export default function BottomNav() {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  
  if (!isMobile) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden">
      <div className="flex justify-around items-center h-[4.5rem]">
        <NavLink
          to="/"
          className={({ isActive }) => `
            flex flex-col items-center justify-center w-full h-full
            ${isActive ? 'text-blue-600' : 'text-gray-600'}
          `}
        >
          <Home className="w-5 h-5" />
          <span className="text-xs mt-1">Home</span>
        </NavLink>

        <NavLink
          to="/features"
          className={({ isActive }) => `
            flex flex-col items-center justify-center w-full h-full
            ${isActive ? 'text-blue-600' : 'text-gray-600'}
          `}
        >
          <Layout className="w-5 h-5" />
          <span className="text-xs mt-1">Features</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) => `
            flex flex-col items-center justify-center w-full h-full
            ${isActive ? 'text-blue-600' : 'text-gray-600'}
          `}
        >
          <Settings className="w-5 h-5" />
          <span className="text-xs mt-1">Settings</span>
        </NavLink>
      </div>
    </nav>
  );
}