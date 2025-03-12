import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    middlewareMode: false, // Remove 'html' mode
    historyApiFallback: true, // Enable fallback for SPA routing
  },
  build: {
    outDir: 'dist', // Ensure output directory is correct
  }
});
