import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Contact } from '../pages/Contact';
import { ErrorPage } from '../pages/ErrorPage';
import { Register } from '../pages/Register';
import { Layout } from '../components/Layout';
import { useAuthStore } from '../store/authStore';
import ProtectedRoute from './ProtectedRoute';
import { lazy, Suspense } from 'react';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import ErrorBoundary from '../components/error/ErrorBoundary';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Settings = lazy(() => import('../pages/Settings'));
const Projects = lazy(() => import('../pages/Projects'));
const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));

const Landing = lazy(() => import('../pages/Landing'));
const Features = lazy(() => import('../pages/Features'));
const GuestDashboard = lazy(() => import('../pages/GuestDashboard'));
const SignIn = lazy(() => import('../pages/SignIn'));
const NotFound = lazy(() => import('../pages/NotFound'));
const About = lazy(() => import('../pages/About'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <ErrorPage />
  },
  {
    path: '/features',
    element: <Features />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/guest/dashboard',
    element: <GuestDashboard />
  },
  {
    element: <ProtectedRoute><Layout /></ProtectedRoute>,
    children: [
      {
        path: '/dashboard',
        element: <Suspense fallback={<LoadingSpinner />}><Dashboard /></Suspense>
      },
      {
        path: '/settings',
        element: <Suspense fallback={<LoadingSpinner />}><Settings /></Suspense>
      },
      {
        path: '/projects',
        element: <Suspense fallback={<LoadingSpinner />}><Projects /></Suspense>
      },
      {
        path: '/projects/:id',
        element: <Suspense fallback={<LoadingSpinner />}><ProjectDetails /></Suspense>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
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