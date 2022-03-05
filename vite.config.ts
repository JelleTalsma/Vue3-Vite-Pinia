import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/global/_variables.scss";
          @import "./src/scss/global/_reset.scss";
          @import "./src/scss/global/_typography.scss";
          @import "./src/scss/global/_fonts.scss";
        `,
      },
    },
  },
});
