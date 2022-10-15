<script setup lang="ts">
import { BNav, BNavItem, BContainer, BRow, BCol } from 'bootstrap-vue-3';

// disable 右键菜单
document.addEventListener('contextmenu', event => event.preventDefault());

</script>

<template>
  <b-container fluid class="p-3">
    <b-row>
      <b-col>
        <b-nav pills>
          <router-link to="/" v-slot="props" custom>
            <b-nav-item :active=props.isActive @click="props.navigate">首页</b-nav-item>
          </router-link>
          <router-link to="/test-rust" v-slot="props" custom>
            <b-nav-item :active=props.isActive @click="props.navigate">Rust测试</b-nav-item>
          </router-link>
          <router-link to="/webgl" v-slot="props" custom>
            <b-nav-item :active=props.isActive @click="props.navigate">WebGL学习实践</b-nav-item>
          </router-link>
        </b-nav>
      </b-col>
    </b-row>
    <b-row class="pt-3">
      <b-col>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </b-col>
    </b-row>

  </b-container>
</template>

<style scoped>
/* 不让选中文本 */
body,* {
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  user-select: none;
}
</style>
