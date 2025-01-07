
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home as HomeIcon,
  Settings,
  BookOpen,
  Code2,
  Layout,
  LogOut
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export default function NavLinks() {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuthStore();
  
  const links = isAuthenticated ? [
    { path: '/dashboard', label: 'Dashboard', icon: HomeIcon },
    { path: '/projects', label: 'Projects', icon: Layout },
    { path: '/projectideas', label: 'Ideas', icon: Code2 },
    { path: '/settings', label: 'Settings', icon: Settings },
    { onClick: logout, label: 'Sign Out', icon: LogOut }
  ] : [
    { path: '/', label: 'Home', icon: HomeIcon },
    { path: '/features', label: 'Features', icon: Layout },
    { path: '/about', label: 'About', icon: BookOpen }
  ];

  return (
    <nav className="space-y-1">
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = link.path ? location.pathname === link.path : false;
        const LinkComponent = link.onClick ? 'button' : Link;
        
        return (
          <LinkComponent
            key={link.path || link.label}
            {...(link.path ? { to: link.path } : { onClick: link.onClick })}
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
              isActive 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <Icon className="w-5 h-5 mr-3" />
            {link.label}
          </LinkComponent>
        );
      })}
    </nav>
  );
}
