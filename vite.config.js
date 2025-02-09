import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/portifolio/",
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: { exportType: "named", ref: true, svgo: false, titleProp: true },
      include: "**/*.svg",
    }),
  ],
});
