import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import CreateGuestProject from '../guest/CreateGuestProject';
import Logo from '../brand/Logo';
import IconButton from '../brand/IconButton';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 sticky top-0 z-20">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        <div className="flex items-center">
          <IconButton
            icon={<Menu className="w-7 h-7" />}
            variant="ghost"
            onClick={onMenuClick}
            className="lg:hidden mr-3 p-3 -m-3 touch-manipulation" // Modified for larger touch target and touch-manipulation class
          />
          <Link to="/" className="lg:hidden">
            <Logo variant="minimal" size="sm" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block">
            <CreateGuestProject />
          </div>
          <div className="w-8 h-8 rounded-full bg-brand-primary/10"></div>
        </div>
      </div>
    </header>
  );
}