
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const config = defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    modulePreload: true,
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        format: 'esm',
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react'],
          state: ['zustand']
        }
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});

export default config;
