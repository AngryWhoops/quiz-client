import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // eslint-disable-next-line no-undef
  base: import.meta.env.production.VITE_BASE_URL,
  //base: process.env.BASE + "/quiz-client/",
  //base:"/quiz-client/",
  //publicPath: "/quiz-client/",
});

// const { defineConfig } = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/quiz-client/'
//     : '/',
// });
