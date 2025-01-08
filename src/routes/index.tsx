
import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../components/Layout';
import ErrorPage from '../pages/ErrorPage';
import ProtectedRoute from './ProtectedRoute';
import LoadingSpinner from '../components/common/LoadingSpinner';
import Landing from '../pages/Landing';
import Features from '../pages/Features';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import About from '../pages/About';
import GuestDashboard from '../pages/GuestDashboard';
import NotFound from '../pages/NotFound';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Projects = lazy(() => import('../pages/Projects'));
const Settings = lazy(() => import('../pages/Settings'));
const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));
const ProjectIdeas = lazy(() => import('../pages/ProjectIdeas'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <ErrorPage />
  },
  {
    path: '/features',
    element: <Features />,
    errorElement: <ErrorPage />
  },
  {
    path: '/signin',
    element: <SignIn />,
    errorElement: <ErrorPage />
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <ErrorPage />
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: '/guest-dashboard',
    element: <GuestDashboard />,
    errorElement: <ErrorPage />
  },
  {
    path: '/app',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          </Suspense>
        )
      },
      {
        path: 'projects',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: 'projects/:id',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute>
              <ProjectDetails />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: 'settings',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: 'ideas',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute>
              <ProjectIdeas />
            </ProtectedRoute>
          </Suspense>
        ),
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;
