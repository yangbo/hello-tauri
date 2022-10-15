<template>
  <b-container>
    <b-row><b-col><h1 class="">Welcome to Tauri!</h1></b-col></b-row>
    <b-row>
      <b-col>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo vite" alt="Vite logo" />
        </a>
      </b-col>
      <b-col>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" class="logo tauri" alt="Tauri logo" />
        </a>
      </b-col>
      <b-col>
        <a href="https://vuejs.org/" target="_blank">
          <img src="/src/assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>Click on the Tauri, Vite, and Vue logos to learn more.</p>
        <p>
          Recommended IDE setup:
          <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
          +
          <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
          +
          <a href="https://github.com/tauri-apps/tauri-vscode" target="_blank">Tauri</a>
          +
          <a href="https://github.com/rust-lang/rust-analyzer" target="_blank">rust-analyzer</a>
        </p>
        <p>
          <a href="https://webglsamples.org/">webgl 例子</a> +
          <a href="https://map.baidu.com">百度地图</a> +
          <a href="https://threejs.org/examples/">Threejs示例</a>
        </p>
      </b-col>
    </b-row>
  </b-container>

</template>

<!-- <script setup> 是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。 
  参考：https://cn.vuejs.org/api/sfc-script-setup.html
-->
<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-3';
</script>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: 0.75s;
}
</style>