import { createApp } from "vue";
// import IndexPage from '@/views/IndexPage.vue';
import App from "./App.vue";
import router from "./router";

import "@/assets/css/fonts.css";

createApp(App).use(router).mount("#app");
