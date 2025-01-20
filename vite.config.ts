import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/frontend-challenge/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
