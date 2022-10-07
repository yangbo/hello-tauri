<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/tauri";

const dataMsg = ref("");
const name = ref("");

async function open_file() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  let data:any = await invoke("open_file", {
    fileToOpen: { name: '文件abc.geo', size: 100 }
  });
  dataMsg.value = `data: len=${data.data.length}, data[0]=${data.data[0]}\n
  meta:${data.meta}`
}
</script>

<template>
  <div class="card">
    <input id="greet-input" v-model="name" placeholder="打开文件..." />
    <button type="button" @click="open_file()">打开文件</button>
  </div>

  <p>{{ dataMsg }}</p>
</template>

