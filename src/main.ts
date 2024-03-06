import { createApp } from "vue";
import "./style.css";
import "./index.css";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import Wind from "./presets/index.js";

const app = createApp(App);

app.use(PrimeVue, { unstyled: true, pt: Wind });

app.mount("#app");
