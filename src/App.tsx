import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import AppRoutes from './routes';
import { useAuthStore } from './store/authStore';
import { useToastStore } from './utils/errorReporting';
import Toast from './components/common/Toast';

function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <Layout>
          <AppRoutes />
        </Layout>
      ) : (
        <AppRoutes />
      )}
    </BrowserRouter>
  );
}

export { App };