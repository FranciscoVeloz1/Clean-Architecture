import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@pages": path.resolve(__dirname, "./src/Presentation/pages"),
      "@components": path.resolve(__dirname, "./src/Presentation/components"),
      "@models": path.resolve(__dirname, "./src/Models"),
      "@Data": path.resolve(__dirname, "./src/Data"),
      "@Services": path.resolve(__dirname, "./src/Services"),
    },
  },
})
