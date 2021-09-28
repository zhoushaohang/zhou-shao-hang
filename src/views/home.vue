<template>
  <div >
    <Head/>
    <Menu/>
    <div>
    <a-carousel autoplay>
    <div><h3><a href="https://www.novogene.com/index.php?controller=site&amp;action=news_view&amp;id=1897"><img src="	https://www.novogene.com/upload/2021/04/13/20210413111644661.jpg" alt=""></a></h3></div>
    <div><h3><a href="https://www.novogene.com/index.php?controller=site&amp;action=news_view&amp;id=1897"><img src="	https://www.novogene.com/upload/2021/09/01/20210901112607837.jpg" alt=""></a></h3></div>
    <div><h3><a href="https://www.novogene.com/index.php?controller=site&amp;action=news_view&amp;id=1897"><img src="	https://www.novogene.com/upload/2021/06/10/20210610095825126.jpg" alt=""></a></h3></div>
    <div><h3><a href="https://www.novogene.com/index.php?controller=site&amp;action=news_view&amp;id=1897"><img src="	https://www.novogene.com/upload/2021/04/25/20210425105815904.jpg" alt=""></a></h3></div>
    <div><h3><a href="https://www.novogene.com/index.php?controller=site&amp;action=news_view&amp;id=1897"><img src="	https://www.novogene.com/upload/2020/01/03/20200103112118453.jpg" alt=""></a></h3></div>
  </a-carousel>
    </div>
    <Bottom/>
  </div>
</template>
<script>
import Head from '../components/Head'
import Menu from '../components/Menu'
import Bottom from '../components/Bottom'
export default {
  
  name: 'home',
  props: {},
  components: {
    Head,
    Menu,
    Bottom
  },
  data() {
    return {
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style  scoped>
* {
  margin: 0;
  padding: 0;
}
img {
  width: 100%;
  height: 100%;
}
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 600px;
  line-height: 160px;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>