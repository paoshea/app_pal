import React from 'react';

interface LogoIconProps {
  className?: string;
}

export function LogoIcon({ className = '' }: LogoIconProps) {
  return (
    <svg 
      viewBox="0 0 32 32" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"
        fill="#0066FF"
      />
      <path
        d="M23 16c0-3.866-3.134-7-7-7s-7 3.134-7 7 3.134 7 7 7 7-3.134 7-7z"
        fill="white"
      />
      <path
        d="M19 16c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3z"
        fill="#0066FF"
      />
    </svg>
  );
}