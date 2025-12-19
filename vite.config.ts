import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  // If you publish as a project site, set `base` to the repository name
  // e.g. '/earth-guardians-hub/' — adjust if you publish as a user site.
  base: "/earth-guardians-hub/",

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
