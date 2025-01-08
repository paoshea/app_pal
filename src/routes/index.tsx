
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import ErrorPage from '../pages/ErrorPage';
import ProtectedRoute from './ProtectedRoute';
import Landing from '../pages/Landing';
import Features from '../pages/Features';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import About from '../pages/About';
import GuestDashboard from '../pages/GuestDashboard';
import Contact from '../pages/Contact';
import GuestProjectView from '../components/guest/GuestProjectView';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
import Projects from '../pages/Projects';
import Settings from '../pages/Settings';
import ProjectDetails from '../pages/ProjectDetails';
import ProjectIdeas from '../pages/ProjectIdeas';

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
    path: '/contact',
    element: <Contact />,
    errorElement: <ErrorPage />
  },
  {
    path: '/guest-dashboard',
    element: <GuestDashboard />,
    errorElement: <ErrorPage />
  },
  {
    path: '/guest-dashboard/:projectId',
    element: <GuestProjectView />,
    errorElement: <ErrorPage />
  },
  {
    path: '/app',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'projects/:id',
        element: <ProjectDetails />
      },
      {
        path: 'settings',
        element: <Settings />
      },
      {
        path: 'ideas',
        element: <ProjectIdeas />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;
