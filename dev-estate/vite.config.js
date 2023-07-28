import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from 'postcss'; // Import postcss

import tailwindcss from 'tailwindcss'; // Import tailwindcss

export default defineConfig({
  plugins: [
    react(),
    postcss({
      plugins: [tailwindcss], // Add tailwindcss as a plugin
    }),
  ],
});