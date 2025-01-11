import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { LogOut } from 'lucide-react';
import { getNavigationConfig } from '../../utils/navigationConfig';

export default function NavLinks() {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuthStore();
  const navigationLinks = getNavigationConfig(isAuthenticated);

  return (
    <nav className="space-y-1">
      {navigationLinks.map((link) => {
        const Icon = link.icon;
        const isActive = location.pathname === link.path;

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
      {isAuthenticated && (
        <button
          onClick={logout}
          className="flex items-center w-full px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Sign Out
        </button>
      )}
    </nav>
  );
}