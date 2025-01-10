
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Settings, LogOut, Users, BookOpen, Lightbulb, FolderGit2 } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export default function NavLinks() {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuthStore();

  const links = isAuthenticated ? [
    { path: 'dashboard', label: 'Dashboard', icon: Home },
    { path: 'projects', label: 'Projects', icon: FolderGit2 },
    { path: 'project-ideas', label: 'Ideas', icon: Lightbulb },
    { path: 'settings', label: 'Settings', icon: Settings },
    { onClick: logout, label: 'Sign Out', icon: LogOut }
  ] : [
    { path: '/', label: 'Home', icon: Home },
    { path: '/guest-dashboard', label: 'Guest Dashboard', icon: Users },
    { path: '/features', label: 'Features', icon: BookOpen }
  ];

  return (
    <nav className="space-y-1">
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = link.path ? location.pathname === link.path : false;

        if (link.onClick) {
          return (
            <button
              key={link.label}
              onClick={link.onClick}
              className="flex items-center w-full px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <Icon className="w-5 h-5 mr-3" />
              {link.label}
            </button>
          );
        }

        return (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-md ${
              isActive 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <Icon className="w-5 h-5 mr-3" />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
