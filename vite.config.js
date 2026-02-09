import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/recetas2025/', // Base path para GitHub Pages (usar el nombre del repo en minúsculas)
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
