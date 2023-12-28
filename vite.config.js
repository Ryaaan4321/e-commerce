import reactRefresh from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
});
// to clone the github repository 
// git clone --single-branch -b branchname https link of the repository
