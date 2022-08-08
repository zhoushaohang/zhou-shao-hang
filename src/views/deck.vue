<template>
  <TouBU />
  <div class="box">
    <div class="one">
      <ul v-for="item in testData.list" :key="item">
        <li>哈哈哈{{ item }}</li>
      </ul>
    </div>
    <button @click="getData()">test axios 请求数据</button>
  </div>
  <Bottom />
</template>
<script>
import TouBU from "../components/TouBu.vue";
import Bottom from "../components/Bottom.vue";
// import {onMounted, ref} from 'vue'
import axios from "axios";
import { reactive } from "@vue/reactivity";

export default {
  components: {
    TouBU,
    Bottom,
  },
  name: "About",
  setup() {
    //数据
    const testData = reactive({
      list: [],
    });

    //测试请求方法
    const getData = function () {
      axios.get("http://127.0.0.1:4523/mock/856723/echres1").then((res) => {
        testData.list = res.data
        console.log(testData);
      });
    };
    return {
      testData,
      getData,
    };
  },
};
</script>
<style lang="less" scoped>
.box {
  width: 80%;
  margin: 0 auto;
  .one {
    width: 500px;
    height: 300px;
    border: 1px solid #000;
  }
  ul li {
    padding: 10px;
    list-style: none;
  }
}
</style>
