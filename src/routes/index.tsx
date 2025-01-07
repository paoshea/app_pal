import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Contact } from '../pages/Contact';
import { ErrorPage } from '../pages/ErrorPage';
import { Register } from '../pages/Register';
import Layout from '../components/Layout';
import { useAuthStore } from '../store/authStore';
import ProtectedRoute from './ProtectedRoute';
import { lazy, Suspense } from 'react';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import ErrorBoundary from '../components/error/ErrorBoundary';

const Landing = lazy(() => import('../pages/Landing').then(module => ({ default: module.default })));
const Features = lazy(() => import('../pages/Features').then(module => ({ default: module.default })));
const GuestDashboard = lazy(() => import('../pages/GuestDashboard').then(module => ({ default: module.default })));
const SignIn = lazy(() => import('../pages/SignIn').then(module => ({ default: module.default })));
const Settings = lazy(() => import('../pages/Settings').then(module => ({ default: module.default })));
const NotFound = lazy(() => import('../pages/NotFound').then(module => ({ default: module.default })));
const About = lazy(() => import('../pages/About').then(module => ({ default: module.default })));


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/features',
        element: <Features />
      },
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/guest/dashboard',
        element: <GuestDashboard />
      },
      {
        path: '/settings',
        element: <ProtectedRoute><Settings /></ProtectedRoute>
      },
      {
        path: '/power/dashboard',
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>
      },
      {
        path: "*",
        element: <NotFound />
      }

    ]
  }
]);

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default AppRoutes;