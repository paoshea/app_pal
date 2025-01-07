
import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../components/Layout';
import ErrorPage from '../pages/ErrorPage';
import ProtectedRoute from './ProtectedRoute';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Settings = lazy(() => import('../pages/Settings'));
const Projects = lazy(() => import('../pages/Projects'));
const ProjectIdeas = lazy(() => import('../pages/ProjectIdeas'));
const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));
const Landing = lazy(() => import('../pages/Landing'));
const Features = lazy(() => import('../pages/Features'));
const GuestDashboard = lazy(() => import('../pages/GuestDashboard'));
const SignIn = lazy(() => import('../pages/SignIn'));
const Register = lazy(() => import('../pages/Register'));
const About = lazy(() => import('../pages/About'));
const NotFound = lazy(() => import('../pages/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<LoadingSpinner />}><Landing /></Suspense>
      },
      {
        path: '/dashboard',
        element: <ProtectedRoute><Suspense fallback={<LoadingSpinner />}><Dashboard /></Suspense></ProtectedRoute>
      },
      {
        path: '/projects',
        element: <ProtectedRoute><Suspense fallback={<LoadingSpinner />}><Projects /></Suspense></ProtectedRoute>
      },
      {
        path: '/projects/:id',
        element: <ProtectedRoute><Suspense fallback={<LoadingSpinner />}><ProjectDetails /></Suspense></ProtectedRoute>
      },
      {
        path: '/settings',
        element: <ProtectedRoute><Suspense fallback={<LoadingSpinner />}><Settings /></Suspense></ProtectedRoute>
      },
      {
        path: '/projectideas',
        element: <ProtectedRoute><Suspense fallback={<LoadingSpinner />}><ProjectIdeas /></Suspense></ProtectedRoute>
      },
      {
        path: '/guest',
        element: <Suspense fallback={<LoadingSpinner />}><GuestDashboard /></Suspense>
      },
      {
        path: '/features',
        element: <Suspense fallback={<LoadingSpinner />}><Features /></Suspense>
      },
      {
        path: '/about',
        element: <Suspense fallback={<LoadingSpinner />}><About /></Suspense>
      },
      {
        path: '/signin',
        element: <Suspense fallback={<LoadingSpinner />}><SignIn /></Suspense>
      },
      {
        path: '/register',
        element: <Suspense fallback={<LoadingSpinner />}><Register /></Suspense>
      },
      {
        path: '*',
        element: <Suspense fallback={<LoadingSpinner />}><NotFound /></Suspense>
      }
    ]
  }
]);

export default router;
