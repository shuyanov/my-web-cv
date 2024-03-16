import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      assets: "/src/assets",
      components: "/src/components",
      atoms: "/src/components/atoms",
      cells: "/src/components/cells",
      molecules: "/src/components/molecules",
      constants: "/src/constants",
    },
  },
  base: "/my-web-cv",
});
