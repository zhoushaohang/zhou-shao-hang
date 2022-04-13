<template>
    <div>
        <div class="top">
            <div class="left">
                <router-link to="/">
                    <img
                        src="https://www.hillhouseinvestment.com/wp-content/uploads/2021/06/cropped-Screenshot-3.png"
                        alt=""
                    />
                </router-link>
            </div>
            <div class="right">
                <ul>
                    <li><router-link to="">关于我们</router-link></li>
                    <li><router-link to="">新闻报道</router-link></li>
                    <li><router-link to="">EN</router-link></li>
                </ul>
            </div>
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
            value: '',
        }
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
}
</script>
<style lang='less'  scoped>
.router-link-active {
    text-decoration: none;
    color: #000;
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