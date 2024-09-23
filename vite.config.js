import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { baseName } from "./router";

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${baseName}/`,
  plugins: [react()],
  esbuild: {
      jsxFactory: "React.createElement",
      jsxFragment: "React.Fragment",
    },
  assetsInclude: ['**/*.glb']
} )

