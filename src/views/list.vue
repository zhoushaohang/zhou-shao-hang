<template>
  <TouBu />
  <div style="width: 80%; margin: 0 auto">
    <h1>{{ mas }}</h1>
    <button @click="lis = 'red'">dianji</button>
  </div>
  <Bottompro />
</template>
<script setup>
import TouBu from "../components/TouBu.vue";
import Bottompro from "../components/Bottom.vue";

import { ref } from "vue";
const mas = ref("hello");
const lis = ref("green");
</script>
<style lang="less" scoped>
h1 {
  color: v-bind(lis);
}
</style>
