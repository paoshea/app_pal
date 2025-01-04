import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import ProtectedRoute from './ProtectedRoute';
import ErrorBoundary from '../components/error/ErrorBoundary';

// Pages
import Landing from '../pages/Landing';
import Features from '../pages/Features';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';
import Settings from '../pages/Settings';
import NotFound from '../pages/NotFound';
import About from '../pages/About'; // Added
import Contact from '../pages/Contact'; // Added

export default function AppRoutes() {
  const { isAuthenticated } = useAuthStore();

  return (
    <ErrorBoundary>
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
        <Route path="/about" element={<About />} /> {/* Added */}
        <Route path="/contact" element={<Contact />} /> {/* Added */}

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}