import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
   base: "/b14-assignments/",
  plugins: [react(), tailwindcss()],
})
