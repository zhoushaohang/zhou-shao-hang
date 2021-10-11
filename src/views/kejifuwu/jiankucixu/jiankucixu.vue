<template>
  <div>
    <Head />
    <Menu />
    <div class="lious" >
    <ul>
      <li>123</li>
    </ul>
    </div>
    <Bottom />
  </div>
</template>
<script>
import Head from '../../../components/Head.vue'
import Menu from '../../../components/Menu'
import Bottom from '../../../components/Bottom'
import Axios from 'axios'
export default {
  name: '',
  props: {},
  components: {Head,Menu,Bottom,},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    dataSource () {
      Axios.get('http://www.liulongbin.top:3006/api/getbooks').then(res => {
        console.log(res);
      })
    }
  },
  created() {
    this.dataSource()
  },
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