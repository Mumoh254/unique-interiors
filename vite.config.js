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
      threshold: 0, // Compress all files 
      deleteOriginFile: false, 
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 0,
      deleteOriginFile: false, 
      options: {
        level: 11,
      },
    }),
    visualizer({ open: true }), 
  ],
  build: {
    outDir: 'dist',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 3, 
      },
      mangle: true,
    },
    chunkSizeWarningLimit: 500, 
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; 
          }
        },
      },
    },
  },
  server: {
    historyApiFallback: true, // Handle client  routing
  },
});