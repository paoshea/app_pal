
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import LoadingSpinner from '../components/common/LoadingSpinner';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiresAuth?: boolean;
}

export default function ProtectedRoute({ children, requiresAuth = true }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuthStore();
  const location = useLocation();
  
  if (isLoading) {
    return <LoadingSpinner />;
  }
  
  if (!isAuthenticated && requiresAuth) {
    return <Navigate to="/guest" state={{ from: location }} replace />;
  }
  
  if (isAuthenticated && !requiresAuth) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
}
