import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import Vuex from 'vuex';
import ElementPlus  from 'element-plus';
import 'element-plus/dist/index.css';
import * as echarts from "echarts";
import Thehead from './components/Thehead.vue';
import Examples from './components/examples.vue';
import 'animate.css';
const app = createApp(App);
app.use(router)
app.use(Vuex)
app.use(ElementPlus)
app.use(Thehead)
app.use(Examples)
app.use(echarts)
app.mount('#app')
app.config.globalProperties.$http = axios;