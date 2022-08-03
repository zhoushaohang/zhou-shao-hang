<template>
  <TouBu />
  <div>
    <div class="box">
      <div class="content">
        <video  preload muted autoplay loop
          src="https://cdn.uino.cn/thingjs/thingjs-city/thingjs_city_banner.mp4"
        ></video>
      </div>
      <div class="coaiso">
        <div class="box-dome">
          <p class="name">周少行,</p>
          <p class="name">做时间的朋友</p>
        </div>
        <div class="box-iems">
          <strong class="Introduction">我们是创业者，碰巧还是投资人</strong>
          <p class="jieshao">
            十多年的时间里，我们有幸携手诸多标志性的业界领袖，协力完成了这些行业的重塑。作为具有全球视野的长期价值投资者，我们专注于打造兼具高品质与可持续性的优秀企业。
          </p>
          <p><router-link to="/class">了解更多</router-link></p>
        </div>
      </div>
    </div>
  </div>
  <Bottom />
</template>
<script>
import TouBu from "../components/TouBu.vue";
import Bottom from "../components/Bottom.vue";
import { onMounted, onUpdated, onUnmounted } from "vue";
export default {
  //组件名称
  name: "",
  //组件参数 ,接收来自父组件的数据
  props: {},
  //局部注册的组件
  components: {
    TouBu,
    Bottom,
  },
  //组件状态值
  //计算属性
  computed: {},
  //侦听器
  watch: {},
  //组件方法
  methods: {},
  setup() {
    onMounted(() => {});
    onUpdated(() => {});
    onUnmounted(() => {});
  },
};
</script>
<style lang="less" scoped>
.box {
  width: 80%;
  margin: 0 auto;

  .content {
    height: 600px;
    margin-top: 20px;
    video {
      width: 100%;
      height: 100%;
    }


    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
      text-align: center;
    }
  }
  .coaiso {
    display: flex;
    margin: 100px;
  }
  .name {
    font-size: 50px;
    font-weight: 900;
    color: #3f538e;
    margin-bottom: 50px;
  }
  .box-dome {
    width: 40%;
  }
  .box-iems {
    width: 50%;
    a {
      border-bottom: 3px solid #3f538e;
      padding-bottom: 5px;
      font-weight: bold;
      font-style: italic;
      text-decoration: none;
      margin-top: 30px;
      font-size: 20px;
    }

    a:hover {
      color: #fe6150;
      text-decoration: none;
      transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
    }
  }
  .Introduction {
    display: block;
    font-size: 26px;
    color: #3f538e;
    font-weight: 700;
    margin-bottom: 50px;
  }
  .jieshao {
    line-height: 38px;
    font-size: 20px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 375px) and (max-width: 812px) {
    .coaiso {
      display: block;
      margin: 0;
    }
    .box-dome {
      width: 100%;
    }
    .box-iems {
      width: 100%;
    }
  }
}
</style>
