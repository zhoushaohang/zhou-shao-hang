<template>
  <div>
    <div class="box-head">
      <a-breadcrumb style="float: right; margin-right: 30px;">
       <a-input-search
            v-model:value="value"
            placeholder="请输入..."
            style="width: 200px"
            @search="onSearch"
        />
        <a-breadcrumb-item class="kehu"
          ><a href="https://css.novogene.com/index.jsp"
            >客户服务系统CSS</a
          ></a-breadcrumb-item
        >
        <a-breadcrumb-item class="english">
          <a href="http://en.novogene.com/" style="color: #fff;">English</a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://jp.novogene.com/"
                  >日本語</a
                >
              </a-menu-item>
              <a-menu-item> 科技服务： 400 658 1585 </a-menu-item>
            </a-menu>
          </template>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
  </div>
</template>
<script>
export default {
  name: 'head',
  props: {},
  components: {},
  data() {
    return {
      value:""}
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style  scoped>
.box-head {
  height: 50px;
  background-color: #6d9940;
}
.ant-breadcrumb a{
  color: #fff;
}
.kehu {
  margin-left: 10px;
  line-height: 50px;
}
.ant-breadcrumb > span:last-child {
  color: #fff;
}
</style>