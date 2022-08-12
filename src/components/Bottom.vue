<template>
<div class="bottom">
   <h4>COPYRIGHT © 2022 ZHOUSHAOHANG • TERMS OF USE</h4>
   <p>
      <p @click="cte=true || false" class="imfzc">W E C H A T</p>
      <a href="">W E I B O</a>
   </p>
   <div class="img-01" v-show="cte"><img src="../img/01.jpg" alt=""></div>
</div>
</template>
<script setup>
import { ref } from 'vue'
const cte = ref(false)
</script>
<style lang='less' scoped>
.bottom {
   position: relative;
   height: 250px;
   background-color: #efefef;
   overflow: hidden;
   margin-top: 50px;
   h4 {
      text-align: center;
      font-size: 20px;
      color: #595959;
      margin-top: 100px;
      margin-bottom: 20px;
   }
   p {
      text-align:center;
      a {
         text-decoration: none;
         color: #000;
         font-weight: 700;
         font-size: 20px;
         padding: 0 20px;
      }
   }
   .img-01 {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 29%;
      right: 0;
      width: 200px;
      img {
         width: 100%;
         height: 100%;
      }
   }
   .imfzc{
         color: #000;
         font-weight: 700;
         font-size: 20px;
         display:inline-block;
   }
   .imfzc:hover {
      color: aqua;
      
   }

}

</style>