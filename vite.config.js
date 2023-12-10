import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// to clone the github repository 
// git clone --single-branch -b branchname https link of the repository
