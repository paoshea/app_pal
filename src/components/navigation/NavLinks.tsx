import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, FolderKanban, LogOut, Settings } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export default function NavLinks({ className = '' }: { className?: string }) {
  const linkClass = "flex items-center px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100";
  const activeClass = "bg-gray-100";
  const navigate = useNavigate();
  const { signOut } = useAuthStore();

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  return (
    <nav className={`space-y-1 ${className}`}>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}
      >
        <Home className="w-5 h-5 mr-3" />
        Dashboard
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}
      >
        <FolderKanban className="w-5 h-5 mr-3" />
        Projects
      </NavLink>

      <NavLink
        to="/projectideas"
        className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}
      >
        <Lightbulb className="w-5 h-5 mr-3" />
        Project Ideas
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}
      >
        <Settings className="w-5 h-5 mr-3" />
        Settings
      </NavLink>

      <button 
        onClick={handleSignOut}
        className={`${linkClass} w-full text-left text-red-600 hover:bg-red-50`}
      >
        <LogOut className="w-5 h-5 mr-3" />
        Sign Out
      </button>
    </nav>
  );
}