<script setup lang="ts">
// disable 右键菜单
document.addEventListener('contextmenu', event => event.preventDefault());

</script>

<template>
  <div class="container">
    <div class="row">
      <ul>
        <router-link to="/" tag="li">首页</router-link>
        <router-link to="/test-rust" tag="li">Rust测试</router-link>
      </ul>
    </div>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
</style>
