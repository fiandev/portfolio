import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

import config from "./tailwind.config.js";

export default defineConfig(() => {
  return {
    root: './',
    build: {
      outDir: 'build',
      sourcemap: true,
    },
    define: {
      'process.env': {
        NODE_ENV: "production"
      },
    },
    
    css: {
      sourcemap: true,
      postcss: {
        plugins: [
          tailwindcss(config),
          autoprefixer(),
        ],
      },
    },
    
    plugins: [
      react(),
      svgr({ svgrOptions: { icon: true } }),
    ],
  };
});