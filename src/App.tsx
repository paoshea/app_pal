
import React from 'react';
import AppRoutes from './routes';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <>
      <AppRoutes />
      <Toaster position="top-right" richColors />
    </>
  );
}
