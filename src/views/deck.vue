<template>
  <TouBU />
  <img src="../img/nner.jpg" alt="">
  <Bottom />
</template>
<script>
import TouBU from "../components/TouBu.vue";
import Bottom from "../components/Bottom.vue";
// import {onMounted, ref} from 'vue'
import axios from "axios";

export default {
  components: {
    TouBU,
    Bottom,
  },
  name: "About",
  }
</script>
<style lang="less" scoped>
img {
  width: 80%;
  height: 100%;
  display: block;
  margin: 0 auto;
}
</style>
