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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden">
      <div className="flex justify-around items-center h-16">
        <Link to="/app/dashboard" className="text-gray-600 hover:text-blue-600">
          <Home className="w-6 h-6" />
          <span className="text-xs">Dashboard</span>
        </Link>
        <Link to="/app/projects" className="text-gray-600 hover:text-blue-600">
          <Layout className="w-6 h-6" />
          <span className="text-xs">Projects</span>
        </Link>
        <Link to="/app/project-ideas" className="text-gray-600 hover:text-blue-600">
          <Trophy className="w-6 h-6" />
          <span className="text-xs">Ideas</span>
        </Link>
      </div>
    </div>
  );
}