import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 512, // Compress files larger than 512 bytes (more aggressive)
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 512, // Brotli compression for better efficiency
    }),
  ],
  build: {
    minify: 'terser', // Further reduces file size
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs
        drop_debugger: true, // Remove debugger
        passes: 3, // More optimization passes
      },
      mangle: true, // Shorten variable names
    },
  },
  server: {
    historyApiFallback: true,
  },
});
