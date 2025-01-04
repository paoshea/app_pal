import React from 'react';
import { 
  Database, 
  Globe, 
  Server, 
  Layout,
  Terminal,
  Cloud
} from 'lucide-react';

interface TechStackBadgeProps {
  tech: string;
  size?: 'sm' | 'md';
}

const techConfig: Record<string, { icon: React.ElementType; color: string }> = {
  react: { icon: Globe, color: 'text-blue-500' },
  node: { icon: Server, color: 'text-green-500' },
  postgres: { icon: Database, color: 'text-indigo-500' },
  vue: { icon: Layout, color: 'text-emerald-500' },
  python: { icon: Terminal, color: 'text-yellow-500' },
  aws: { icon: Cloud, color: 'text-orange-500' },
};

export default function TechStackBadge({ tech, size = 'md' }: TechStackBadgeProps) {
  const config = techConfig[tech.toLowerCase()] || { icon: Terminal, color: 'text-gray-500' };
  const Icon = config.icon;

  const sizeClasses = {
    sm: 'text-xs px-2 py-1 space-x-1',
    md: 'text-sm px-3 py-1.5 space-x-2',
  };

  return (
    <div className={`
      inline-flex items-center rounded-full 
      bg-gray-100 font-medium
      ${sizeClasses[size]}
    `}>
      <Icon className={`w-4 h-4 ${config.color}`} />
      <span className="capitalize">{tech}</span>
    </div>
  );
}