import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://makaiabootcamp.github.io/ruta-bacana-project-frontend-7'
})
