import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/": {
        target: "http://localhost:8000",
        changeOrigin:true
        secure: false,
      },
    },
  },
  plugins: [react()],
});
