import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "/quiz-client/",
  // base: new URL(import.meta.env.VITE_URL),
});

// export default defineConfig({
//   plugins: vue({
//     // This is needed, or else Vite will try to find image paths (which it wont be able to find because this will be called on the web, not directly)
//     // For example <img src="/images/logo.png"> will not work without the code below
//     template: {
//       transformAssetUrls: {
//         includeAbsolute: false,
//       },
//     },
//   }),
//   // resolve: {
//   //   alias: {
//   //     // "@": fileURLToPath(new URL("./src", import.meta.url)),
//   //     "@": fileURLToPath(new URL("./src", import.meta.url)),
//   //   },
//   // },
//   // base: "/quiz-client/",
//   // base: new URL(import.meta.env.VITE_URL),
// });

// export default defineConfig({
//   base: "/quiz-client/",
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
// });

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
