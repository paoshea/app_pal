import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getViewportHeight } from '../utils/mobileUtils';
import Header from './layout/Header';
import MobileNav from './layout/MobileNav';
import NavLinks from './navigation/NavLinks';
import BottomNav from './mobile/BottomNav';
import Logo from './brand/Logo';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50" style={{ minHeight: getViewportHeight() }}>
      <MobileNav 
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />

      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:block lg:bg-white lg:border-r lg:border-gray-200">
        <div className="flex items-center h-16 px-4 border-b border-gray-200">
          <Link to="/" className="flex items-center">
            <Logo size="md" />
          </Link>
        </div>
        <NavLinks className="p-4" />
      </aside>

      <main className="lg:pl-64 pb-16 lg:pb-0">
        <Header onMenuClick={() => setIsMobileNavOpen(true)} />
        <div className="p-4 lg:p-6">{children}</div>
      </main>

      <BottomNav />
    </div>
  );
}

export { Layout };