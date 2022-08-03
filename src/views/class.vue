<template>
   <ul v-for="item in listdata" :key="item">
      <li>{{item}}</li>
   </ul>
   <button @click="disyas">额卡尔</button>
   <div>
  <el-switch
    v-model="value2"
    class="ml-2"
    active-color="#13ce66"
    inactive-color="#ff4949"
  />
   </div>
</template>
<script>
import axios from 'axios';
export default {
   data() {
      return {
         listdata :'',
         value2:true,
      }
   },
   setup() {
   },
   methods: {
      disyas() {
         this.list()
         this.vla2()
      },
      vla2() {
         if(this.value2 == true) {
            console.log(123);
         } else {
            console.log('213')
         }
      },
      list() {
         axios.get('http://127.0.0.1:4523/mock/856723/echres1').then(res => {
            this.listdata = res.data
            console.log(this.listdata);
         })
      }
   },
}
</script>
<style lang='less' scoped>
.box {
   body {
      background: #000;
   }
}
</style>