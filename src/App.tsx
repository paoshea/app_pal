
import React from 'react';
import AppRoutes from './routes';
import { useToastStore } from './utils/errorReporting';
import Toast from './components/common/Toast';

function App() {
  const { message, type, isVisible } = useToastStore();
  return (
    <>
      <AppRoutes />
      {isVisible && <Toast message={message} type={type} />}
    </>
  );
}

export { App };
