import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { getViewportHeight } from '../utils/mobileUtils';
import Header from './layout/Header';
import MobileNav from './layout/MobileNav';
import NavLinks from './navigation/NavLinks';
import BottomNav from './mobile/BottomNav';
import Logo from './brand/Logo';
import { useAuthStore } from '../store/authStore';
import WelcomeMessage from './dashboard/WelcomeMessage'; 
import StatsOverview from './dashboard/StatsOverview'; 
import RecentProjects from './dashboard/RecentProjects'; 
import TechStackAnalytics from './dashboard/TechStackAnalytics'; 
import RecentActivity from './dashboard/RecentActivity'; 
import { useMediaQuery } from '../hooks/useMediaQuery';


interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { logout, user } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');


  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated && !isPublicRoute(location.pathname)) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-gray-50" style={{ minHeight: getViewportHeight() }}>
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />

      <aside className={isLargeScreen ? "fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200" : "hidden"}>
        <div className="flex items-center h-16 px-4 border-b border-gray-200">
          <Link to="/" className="flex items-center">
            <Logo size="md" />
          </Link>
        </div>
        <NavLinks className="p-4" />
      </aside>

      <main className={`lg:pl-${isLargeScreen ? '64' : '0'} pb-16 lg:pb-0`}>
        <Header onMenuClick={() => setIsMobileNavOpen(true)} onSignOut={handleSignOut} />
        <div className="p-4 lg:p-6">
          {children}
          {location.pathname === '/app/dashboard' && isAuthenticated && (
            <>
              <WelcomeMessage userName={user?.name || ''} />
              <StatsOverview />
              <RecentProjects />
              <div className="lg:flex">
                <div className="lg:w-3/4">
                  <RecentActivity />
                </div>
                <div className="lg:w-1/4 lg:ml-4">
                  <TechStackAnalytics />
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default Layout;

// Helper function for route validation
const isPublicRoute = (path: string) => path === '/';