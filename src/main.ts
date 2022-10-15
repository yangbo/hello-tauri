import BootstrapVue3 from 'bootstrap-vue-3';
import { createApp } from "vue";

import { router } from './router';

import AppVue from "./App.vue";

// import "./style.css";
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(AppVue);
app.use(router, BootstrapVue3).mount("#app");
