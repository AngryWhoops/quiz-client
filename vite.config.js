import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

//https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // build: {
  //   base: "/quiz-client/",
  // },
  base: "/quiz-client/",
  // eslint-disable-next-line no-undef
  //base: mode === "build" ? "/quiz-client/" : "/",
  //base: "/quiz-client/",
});

// export default defineConfig(({ command }) => {
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
// });

// const { defineConfig } = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/quiz-client/'
//     : '/',
// });
