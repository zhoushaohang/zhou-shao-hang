<template>
<div class="bottom">
   <h4>COPYRIGHT © 2022 ZHOUSHAOHANG • TERMS OF USE</h4>
   <p>
      <p @click="cte=true || false" class="imfzc">W E C H A T</p>
      <a href="">W E I B O</a>
      <a href="http://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">京ICP备2022024295号</a>
   </p>
</div>
</template>
<script setup>
import { ref } from 'vue'
const cte = ref(false)
</script>
<style lang='less' scoped>
.bottom {
   position: relative;
   background-color: #efefef;
   overflow: hidden;
   margin-top: 1.3333rem;
   h4 {
      text-align: center;
      font-size: 1rem;
      color: #595959;
   }
   p {
      text-align:center;
      a {
         text-decoration: none;
         color: #000;
         font-weight: 700;
         font-size: .5333rem;
         padding: 0 .5333rem;
      }
   }
   .img-01 {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 29%;
      right: 0;
      width: 5.3333rem;
      img {
         width: 100%;
         height: 100%;
      }
   }
   .imfzc{
         color: #000;
         font-weight: 700;
         font-size: .5333rem;
         display:inline-block;
   }
   .imfzc:hover {
      color: aqua;
   }

}

</style>