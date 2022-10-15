import { createApp } from "vue";
import "./style.css";
import VueRouter from "vue-router";
import {router} from './router'
import AppVue from "./App.vue";

const app = createApp(AppVue);
app.use(router).mount("#app");
