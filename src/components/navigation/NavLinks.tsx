import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Layout, Settings } from 'lucide-react';

export default function NavLinks({ className = '' }: { className?: string }) {
  const linkClass = "flex items-center px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100";
  const activeClass = "bg-gray-100";

  return (
    <nav className={`space-y-1 ${className}`}>
      <NavLink
        to="/"
        className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}
      >
        <Home className="w-5 h-5 mr-3" />
        Dashboard
      </NavLink>

      <NavLink
        to="/features"
        className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}
      >
        <Layout className="w-5 h-5 mr-3" />
        Features
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}
      >
        <Settings className="w-5 h-5 mr-3" />
        Settings
      </NavLink>
    </nav>
  );
}