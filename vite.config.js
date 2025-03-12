import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression({
      ext: '.gz', // Use Gzip (Brotli can cause issues)
      algorithm: 'gzip',
      threshold: 1024,
    }),
  ],
  server: {
    historyApiFallback: true,
  },
});
