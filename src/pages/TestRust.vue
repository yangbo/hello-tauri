<template>
  <Greet></Greet>
  <OpenFile></OpenFile>
</template>

<script lang="ts">
import Greet from '../components/Greet.vue';
import OpenFile from '../components/OpenFile.vue';
export default {
    name: "Test",
    created() { },
    data() {
        return {};
    },
    props: {},
    methods: {},
    components: { Greet, OpenFile }
};
</script>

<style lang="scss" scoped>

</style>