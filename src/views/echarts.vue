<template>
<TouBU/>
  <Zhou>
    DINA❤️
  </Zhou>
  <!-- <li v-for="item in list">{{item}}</li> -->
  <li v-for="item in listdata">{{item}}</li>
<Bottom/>

</template>
<script setup>
import { ref } from 'vue'
import Zhou from './zhou.vue'
import TouBU from '../components/TouBu.vue'
import Bottom from '../components/Bottom.vue'
import axios from 'axios';

// const list = ref([1,2,3,4,5,6,7,8])
const listdata = ref()
axios.get("http://127.0.0.1:4523/m1/856723-0-default/houshaohang/1").then(res => {
  const listdata = res.data
  console.log(listdata);
}).catch(function(error){
  console.log(error);
})

</script>
<style lang='less' scoped>
.box {
  width: 80%;
  margin: 0 auto;
}

</style>


