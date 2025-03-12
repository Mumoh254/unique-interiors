import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import dotenv from 'dotenv';
import { visualizer } from 'rollup-plugin-visualizer'; // Corrected Import ✅

dotenv.config(); // Load environment variables

export default defineConfig({
  plugins: [
    react(),
    // Enable BOTH Brotli and Gzip compression
    compression({
      algorithm: 'brotliCompress',
      threshold: 1024,
      ext: '.br', // Brotli file extension
    }),
    compression({
      algorithm: 'gzip',
      threshold: 1024,
      ext: '.gz', // Gzip file extension
    }),
    visualizer({
      open: true, // Open the report in the browser after build
      filename: 'dist/bundle-visualizer.html', // Save file to dist
      gzipSize: true, // Display gzip sizes
      brotliSize: true, // Display Brotli sizes
    }),
  ],
  base: '/', // Base path for assets
  server: {
    port: 3000,
    https: false, // Change to true if using SSL
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
    chunkSizeWarningLimit: 1500, // Increase warning limit slightly
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs
        drop_debugger: true, // Remove debugger statements
      },
      mangle: true, // Minify variable names
    },
    rollupOptions: {
      output: {
        // Split large dependencies into separate chunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('framer-motion')) return 'framer-motion';
            if (id.includes('swiper')) return 'swiper';
            return 'vendor'; // Default vendor chunk
          }
        },
      },
    },
  },
  define: {
    // Expose only necessary env variables
    'process.env.API_URL': JSON.stringify(process.env.API_URL),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
});
