import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification with esbuild (faster than terser, built into Vite)
    minify: 'esbuild',
    // Drop console logs in production
    esbuild: {
      drop: ['console', 'debugger'],
    },
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'animation-vendor': ['framer-motion'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'three', '@react-three/fiber', '@react-three/drei', 'framer-motion'],
  },
  // Server configuration for development
  server: {
    // Enable compression
    compress: true,
  },
})
