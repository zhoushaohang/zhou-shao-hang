<template>
  <div class="vaibe">
    <div class="top">
      <div class="left">
        <router-link to="/hoem">
          <img
            src="https://www.hillhouseinvestment.com/wp-content/uploads/2021/06/cropped-Screenshot-3.png"
            alt=""
          />
        </router-link>
      </div>
      <div class="right">
        <ul>
          <li><router-link to="/deck">关于我们</router-link></li>
          <li><router-link to="/echarts">新闻报道</router-link></li>
          <li><router-link to="/list">EN</router-link></li>
          <li @click="guiHi">
            <el-switch
    v-model="value1"
    class="mt-2"
    style="margin-left: 24px"
    inline-prompt
    :active-icon="CircleCheckFilled"
    :inactive-icon="CircleCloseFilled"
  />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { CircleCheckFilled, CircleCloseFilled } from '@element-plus/icons-vue'
import { ref } from "vue";
const value = ref("");
const value1 = ref(true);
function guiHi() {}
</script>
<style lang="less" scoped>
.vaibe {
  width: 80%;
  margin: 0 auto;
}
.router-link-active {
  text-decoration: none;
  color: #000;
}
a {
  text-decoration: none;
  color: #000;
}
ul li a {
transition: all 0.7s;
}
ul li a:hover {
border-bottom: 2px solid #50b748;
color: #50b748;
}

.top {
  height: 60px;
}
.left {
  display: inline-block;
  width: 200px;
  float: left;
  img {
    width: 100%;
    height: 100%;
  }
}
.right {
  float: right;
  display: inline-block;
  margin-right: 0px;
  ul {
    display: flex;
    li {
      list-style: none;
      margin-left: 20px;
      font-weight: 700;
      font-size: 18px;
      line-height: 60px;
    }
  }
}
</style>
