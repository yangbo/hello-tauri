# hello-tauri
Learn to develop tauri application.

# Tauri + Vue 3 + TypeScript

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## 添加 vue3 路由

参考
[introduction-to-vue-router](https://vueschool.io/lessons/introduction-to-vue-router-4) 和 
[router doc](https://router.vuejs.org/zh/installation.html)
来做。

关键步骤有：

1. 添加 router/index.ts 模块，返回 Router 对象
2. 删除 package.lock 文件，用 yarn 重新更新依赖
3. 在 main.ts 中写入下列代码，让 app.use(router)
```js
import { createApp } from "vue";
import "./style.css";
import VueRouter from "vue-router";
import {router} from './router'
import AppVue from "./App.vue";

const app = createApp(AppVue);
app.use(router).mount("#app");
```
