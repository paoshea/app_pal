import React from 'react';
import AppRoutes from './routes';
import { useAuthStore } from './store/authStore';
import { useToastStore } from './utils/errorReporting';
import Toast from './components/common/Toast';

function App() {
  return <AppRoutes />;
}

export { App };