<template>
<div class="bottom">
   <h4>COPYRIGHT © 2022 ZHOUSHAOHANG • TERMS OF USE</h4>
   <p>
      <a href="">W E C H A T</a>
      <a href="">W E I B O</a>
   </p>
</div>
</template>
<script>
export default {
   name: 'bottom',
   props: {},
   components: {},
   data() {
      return {}
   },
   computed: {},
   watch: {},
   methods: {},
   created() {},
   mounted() {},
}
</script>
<style lang='less' scoped>
.bottom {
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
}

</style>