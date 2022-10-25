import vue from "@vitejs/plugin-vue";
// import { fileURLToPath, URL } from "node:url";
import { defineConfig, process } from "vite";

//https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       // "@": fileURLToPath(new URL("./src", import.meta.url)),
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
//   base: "/quiz-client/",
//   //base: new URL(import.meta.env.VITE_URL),
// });

export default defineConfig({
  plugins: [vue()],
  // base: "/quiz-client/",
  base: new URL(import.meta.env.VITE_URL),
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production",
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
