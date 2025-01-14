import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/FM-Intro-Sign_Up-Card/",
  server: {
    host: true,
  },
});
