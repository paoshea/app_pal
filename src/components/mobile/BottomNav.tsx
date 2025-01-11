import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useAuthStore } from '../../store/authStore';
import { getNavigationConfig } from '../../utils/navigationConfig';

export default function BottomNav() {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { isAuthenticated } = useAuthStore();
  const location = useLocation();

  if (!isMobile || !isAuthenticated) return null;

  const isActive = (path: string) => location.pathname.startsWith(path);
  const navigationLinks = getNavigationConfig(isAuthenticated);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden">
      <div className="flex justify-around items-center h-16">
        {navigationLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link 
              key={link.path}
              to={link.path}
              className={`flex flex-col items-center ${isActive(link.path) ? 'text-blue-600' : 'text-gray-600'}`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}