<template>
<TouBU/>
  <Zhou @click="vaoi">
    DINA❤️
    我给错请我吃
  </Zhou>
<Bottom/>

</template>
<script setup>
import { ref } from 'vue'
import Zhou from './zhou.vue'
import TouBU from '../components/TouBu.vue'
import Bottom from '../components/Bottom.vue'

function vaoi() {
  alert('hello')
  }
</script>
<style lang='less' scoped>
.box {
  width: 80%;
  margin: 0 auto;
}

</style>


