
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuthStore();
  
  // For development/testing, temporarily allow access
  return children;
  
  // Uncomment this when authentication is fully implemented
  // return isAuthenticated ? children : <Navigate to="/signin" />;
}
