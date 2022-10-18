<template>
  <TouBu />
  <div style="width: 80%; margin: 0 auto">
    <!-- 1 -->
    <div>
      <button @click="show">显示</button>
      <button @click="hide">隐藏</button>
      <div v-if="list">灯</div>
    </div>
    <!-- 2 -->
    <div>
      <button @click="biue">红色</button>
      <button @click="pink">粉色</button>
      <div :style="`color:${codedata}`">演的变换</div>
    </div>
    <!-- 3 -->
    <div>
      <button @click="one">1</button>
      <button @click="two">2</button>
      <button @click="three">3</button>
      <div>
        <img :src="`${three3}`">
      </div>
    </div>
    <!-- 4列表渲染 -->
    <div>
      <ul>
        <li v-for="item in listdata">{{item}}</li>
      </ul>
    </div>
    <!-- 数据绑定 -->
    <div>
      <input v-model="codeli" type="text">
      <h1>{{codeli}}</h1>
      <button @click="submit">提交</button>
    </div>
  </div>
  <Bottompro />
</template>
<script setup>
import TouBu from "../components/TouBu.vue";
import Bottompro from "../components/Bottom.vue";

import { ref  } from "vue";

// 功能1
const list = ref(false)

function show() {
list.value = true
}

function hide() {
  list.value= false
}

// 功能2

const codedata = ref('')

function biue() {
  codedata.value = 'red'
  console.log(123);
}

function pink() {
  codedata.value = 'pink'
  console.log(456);
}
// 功能3

const three3 = ref('')

function one() {
  three3.value = 'https://www.runoob.com/wp-content/uploads/2017/01/components.png'
}

function two() {
  three3.value = 'https://www.escook.cn/vuebase/pics/escook-translate_preview.gif'
}

function three() {
  three3.value = 'https://en.novogene.com/wp-content/uploads/sites/4/2022/09/Case-study-Epi-WGBS-Dnmt3b-20220826_1.png'
}

// 功能4
const listdata = ref([])

// 功能5
const codeli = ref()

function submit() {
  listdata.value = codeli.value;
  codeli.value = "";
}
</script>
<style lang="less" scoped>
.box {
  font-size: 20px;
}
</style>
