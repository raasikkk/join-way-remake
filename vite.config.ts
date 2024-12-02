import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy the /admin path to Django
      "/admin": {
        target: "http://localhost:8000", // Django server URL
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/admin/, "/admin"),
      },
      // Proxy the /static path to Django static files
      "/static": {
        target: "http://localhost:8000", // Django static files server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
