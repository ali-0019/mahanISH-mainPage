import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  server: { strictPort: true, port: 5173 },
  preview: { strictPort: true, port: 4173 },
});
