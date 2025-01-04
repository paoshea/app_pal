import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  label?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function IconButton({
  icon,
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  className = ''
}: IconButtonProps) {
  const variants = {
    primary: 'bg-[#0066FF] text-white hover:bg-[#0052CC]',
    secondary: 'bg-white text-[#0066FF] border border-[#0066FF] hover:bg-blue-50',
    ghost: 'text-gray-600 hover:bg-gray-100'
  };

  const sizes = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3'
  };

  return (
    <button
      onClick={onClick}
      className={`
        rounded-full transition-colors duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      aria-label={label}
    >
      {icon}
    </button>
  );
}