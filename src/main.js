import { createApp } from 'vue';
// @ts-ignore
import App from './App.vue';
import axios from 'axios';
import router from './router';
import BaiduMap from 'vue-baidu-map';
// import Vuex from 'vuex';
import ElementPlus  from 'element-plus';
import 'element-plus/dist/index.css';
// import * as echarts from "echarts";
import 'animate.css';
const app = createApp(App);
app.use(router)
// app.use(Vuex)
app.use(ElementPlus)
// app.use(echarts)
app.config.globalProperties.axios = axios
app.mount('#app')
app.use(BaiduMap, {

     ak: 'ZkhVD2ctswY8yxoBg2XYTQS3oaeHC8X7'
   })
