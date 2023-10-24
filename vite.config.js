

import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/TopMagazine/",
  plugins: [],
  resolve: {
    /*something*/
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
      },
    },
  },
});