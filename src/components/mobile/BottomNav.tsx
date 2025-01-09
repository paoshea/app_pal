import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Layout, Settings, Trophy, Info } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useAuthStore } from '../../store/authStore'; // Assuming this hook exists

export default function BottomNav() {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { isAuthenticated } = useAuthStore();

  if (!isMobile) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden">
      <div className="flex justify-around">
        {isAuthenticated ? (
          <>
            <Link to="/app/dashboard" className="p-4">
              <Home className="w-6 h-6" />
            </Link>
            <Link to="/app/projects" className="p-4">
              <Layout className="w-6 h-6" />
            </Link>
            <Link to="/app/project-ideas" className="p-4">
              <Trophy className="w-6 h-6" />
            </Link>
          </>
        ) : (
          <>
            <Link to="/" className="p-4">
              <Home className="w-6 h-6" />
            </Link>
            <Link to="/features" className="p-4">
              <Layout className="w-6 h-6" />
            </Link>
            <Link to="/about" className="p-4">
              <Info className="w-6 h-6" />
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}