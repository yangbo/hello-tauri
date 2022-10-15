// createWebHashHistory 是hash模式就是访问链接带有#
// createWebHistory  是history模式
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

// 引入文件，动态路由
import HomeVue from "../pages/Home.vue";
import TestRustVue from "../pages/TestRust.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeVue,
  },
  {
    path: "/test-rust",
    name: "测试 Rust",
    component: TestRustVue,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

