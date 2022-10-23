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
  base: "/quiz-client/",
  //base: process.env.VITE_BASE_URL,
  //publicPath: "/quiz-client/",
});

// export default defineConfig(({ command }) => {
//   if (command === "build") {
//     return {
//       // dev specific config
//       base: "/quiz-client/",
//     };
//   } else {
//     // command === 'build'
//     return {
//       // build specific config
//       base: "/",
//     };
//   }
// });

// const { defineConfig } = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/quiz-client/'
//     : '/',
// });
