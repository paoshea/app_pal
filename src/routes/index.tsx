
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import ProtectedRoute from './ProtectedRoute';
import ErrorBoundary from '../components/error/ErrorBoundary';
import { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Landing = lazy(() => import('../pages/Landing').then(module => ({ default: module.default })));
const Features = lazy(() => import('../pages/Features').then(module => ({ default: module.default })));
const Dashboard = lazy(() => import('../pages/Dashboard').then(module => ({ default: module.default })));
const GuestDashboard = lazy(() => import('../pages/GuestDashboard').then(module => ({ default: module.default })));
const Register = lazy(() => import('../pages/Register').then(module => ({ default: module.default })));
const SignIn = lazy(() => import('../pages/SignIn').then(module => ({ default: module.default })));
const Settings = lazy(() => import('../pages/Settings').then(module => ({ default: module.default })));
const NotFound = lazy(() => import('../pages/NotFound').then(module => ({ default: module.default })));
const About = lazy(() => import('../pages/About').then(module => ({ default: module.default })));
const Contact = lazy(() => import('../pages/Contact').then(module => ({ default: module.default })));

function AppRoutes() {
  const { isAuthenticated } = useAuthStore();

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/guest/dashboard" element={<GuestDashboard />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/power/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
export default AppRoutes;
