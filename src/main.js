import "./assets/main.css";
import AOS from "aos";
import "aos/dist/aos.css";

// In main.js

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(AOS.init());
app.use(createPinia());
app.use(router);

app.mount("#app");
