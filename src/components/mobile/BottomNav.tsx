import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Home, Settings, Lightbulb, FolderGit2 } from 'lucide-react';

export default function BottomNav() {
  const { isAuthenticated } = useAuthStore();

  const navigationLinks = [
    {
      path: '/app/dashboard',
      label: 'Dashboard',
      icon: Home,
    },
    {
      path: '/app/projects',
      label: 'Projects',
      icon: FolderGit2,
    },
    {
      path: '/app/project-ideas',
      label: 'Ideas',
      icon: Lightbulb,
    },
    {
      path: '/app/settings',
      label: 'Settings',
      icon: Settings,
    }
  ];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe-area md:hidden">
      <div className="flex justify-around items-center h-16">
        {navigationLinks.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex flex-col items-center px-3 py-2 ${
                  isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`
              }
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs mt-1">{link.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}