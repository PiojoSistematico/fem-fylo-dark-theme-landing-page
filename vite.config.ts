import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/fem-fylo-dark-theme-landing-page/",
  plugins: [react()],
});
