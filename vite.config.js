import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 512, // Compress files larger than 512 bytes
      deleteOriginFile: false,
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 512, // Compress files larger than 512 bytes
      deleteOriginFile: false,
      options: {
        level: 11, // Maximum compression
      },
    }),
    visualizer({ open: true }), // Visualize the bundle size
  ],
  build: {
    outDir: 'dist',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
        passes: 3,
      },
      mangle: true,
    },
    chunkSizeWarningLimit: 500, // Set a warning limit for chunk sizes
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separate vendor code into its own chunk
          }
          // Further chunking logic can be added here
        },
      },
    },
  },
  server: {
    historyApiFallback: true, // Handle client-side routing
  },
});