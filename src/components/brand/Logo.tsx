import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { LogoIcon } from './LogoIcon';

interface LogoProps {
  variant?: 'default' | 'minimal' | 'full';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ 
  variant = 'default', 
  size = 'md',
  className = '' 
}: LogoProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const defaultVariant = isMobile ? 'minimal' : 'default';
  const currentVariant = variant === 'default' ? defaultVariant : variant;

  const sizes = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <LogoIcon className={sizes[size]} />
      {currentVariant !== 'minimal' && (
        <span className={`
          ml-2 font-medium tracking-tight
          ${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'}
        `}>
          {currentVariant === 'full' ? 'App_Pal Platform' : 'App_Pal'}
        </span>
      )}
    </div>
  );
}