/** @type {import('tailwindcss').Config} */
import {
  defineConfig
} from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
    safelist: [
    'bg-gradient-to-r',
    'from-[#2487DB]',
    'to-[#014BBD]',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B1F3B',
        secondary: '#dfe0df',
      },
    },
  },
  plugins: [react(),
    tailwindcss(),
  ],
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
// })
