import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import ProtectedRoute from './ProtectedRoute';
import ErrorBoundary from '../components/error/ErrorBoundary';
import { lazy, Suspense } from 'react';

// Pages
const Landing = lazy(() => import('../pages/Landing'));
const Features = lazy(() => import('../pages/Features'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Register = lazy(() => import('../pages/Register'));
const SignIn = lazy(() => import('../pages/SignIn'));
const Settings = lazy(() => import('../pages/Settings'));
const NotFound = lazy(() => import('../pages/NotFound'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));

export default function AppRoutes() {
  const { isAuthenticated } = useAuthStore();

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}> {/* Added Suspense for lazy loading */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <Landing />
          } />
          <Route path="/features" element={<Features />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/settings" element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}