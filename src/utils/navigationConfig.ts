
import { Home, Settings, LogOut, Users, BookOpen, Lightbulb, FolderGit2 } from 'lucide-react';

export const getNavigationConfig = (isAuthenticated: boolean) => {
  return isAuthenticated ? [
    { path: '/app/dashboard', label: 'Dashboard', icon: Home },
    { path: '/app/projects', label: 'Projects', icon: FolderGit2 },
    { path: '/app/project-ideas', label: 'Ideas', icon: Lightbulb },
    { path: '/app/settings', label: 'Settings', icon: Settings },
  ] : [
    { path: '/', label: 'Home', icon: Home },
    { path: '/guest-dashboard', label: 'Guest Dashboard', icon: Users },
    { path: '/features', label: 'Features', icon: BookOpen }
  ];
};
