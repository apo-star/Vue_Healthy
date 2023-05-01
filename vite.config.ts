import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/_mixins.scss";
          @import "./src/styles/_fonts.scss";
          @import "./src/styles/_swiper.scss";
        `,
      },
    },
  },
});
