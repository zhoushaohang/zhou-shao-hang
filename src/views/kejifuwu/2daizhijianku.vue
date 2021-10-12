<template>
  <div>
    <ul>
      <li></li>
    </ul>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  name: '2d',
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    list() {
      Axios.get('http://wthrcdn.etouch.cn/weather_mini?city').then(res => {
        console.log(res);
      })
    }
  },
  created() {
    this.list()
  },
  mounted() {},
};
</script>
<style lang='less' scoped>
div {
height: 1000px;
}
</style>