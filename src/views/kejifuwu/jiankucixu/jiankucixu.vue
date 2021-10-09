<template>
  <div>
    <Head />
    <Menu />
    <div class="lious" >
      爱吃
    </div>
    <Bottom />
  </div>
</template>
<script>
import Head from '../../../components/Head.vue'
import Menu from '../../../components/Menu'
import Bottom from '../../../components/Bottom'
export default {
  name: '',
  props: {},
  components: {Head,Menu,Bottom},
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
<style scoped>
.lious {
  width: 80%;
  margin: 30px auto;
  min-height: 1800px;
}
</style>