<template>
   <div>
      <Head />
      <Menu />
   </div>
   
   <router-view></router-view>
   <Bottom />
</template>
<script>
import Head from '../components/Head'
import Menu from '../components/Menu'
import Bottom from '../components/Bottom'
export default {
   name: 'home',
   props: {},
   components: {
      Head,
      Menu,
      Bottom,
   },
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
<style  scoped>
* {
   margin: 0;
   padding: 0;
}

</style>
