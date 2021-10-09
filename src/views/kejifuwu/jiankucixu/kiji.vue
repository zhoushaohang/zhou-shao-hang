<template>
  <div>
     <Head />
     <Menu />
     <ul>
       <li>12</li>
       <li>12</li>
       <li>12</li>
     </ul>
  </div>
</template>
<script>
import Head from '../../../components/Head.vue'
import Menu from '../../../components/Menu'
export default {
  name: 'DvCVD',
  props: {},
  components: {Head,Menu},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang='less' scoped>
ul {
  display: block;
  li {
    width: 100px;
  }
}
</style>