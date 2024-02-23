import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/styles/_mixins.scss";
          @import "./src/assets/styles/_fonts.scss";
          @import "./src/assets/styles/_swiper.scss";
        `,
      },
    },
  },
});
