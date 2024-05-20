import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/my-web-cv.github.io/",
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
});
