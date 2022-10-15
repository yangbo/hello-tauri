<template>
  <b-container>
    <b-row>
      <b-col>
        <Greet></Greet>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <OpenFile></OpenFile>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-3';
import Greet from '../components/Greet.vue';
import OpenFile from '../components/OpenFile.vue';

</script>

<style lang="scss" scoped>

</style>