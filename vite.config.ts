import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Mou/',
  build: {
    chunkSizeWarningLimit: 1400,
  },
  plugins: [react()],
});
