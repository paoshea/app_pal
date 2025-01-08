
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
    path: '/app',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )
      },
      {
        path: 'guest-dashboard',
        element: <GuestDashboard />
      },
      {
        path: 'projects',
        children: [
          {
            path: '',
            element: (
              <ProtectedRoute>
                <Projects />
              </ProtectedRoute>
            )
          },
          {
            path: ':id',
            element: (
              <ProtectedRoute>
                <ProjectDetails />
              </ProtectedRoute>
            )
          }
        ]
      },
      {
        path: 'settings',
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        )
      },
      {
        path: 'project-ideas',
        element: (
          <ProtectedRoute>
            <ProjectIdeas />
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;
