<template>
    <div class="bg">
        <div>
            <div >
                <router-link class="item om1" to="/zhou">zhou</router-link>
            </div>
            <div >
                <router-link class="item om2" to="/deong">vue</router-link>
            </div>
            <div >
                <router-link class="item om3" to="/deck">deck</router-link>
            </div>
            <div >
                <router-link class="item om4" to="/jianjie">jianjie</router-link>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'home',
    props: {},
    components: {},
    data() {
        return {}
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
}
</script>
<style lang='less' scoped>
.bg {
     background: url('https://www.liulongbin.top/img/bg.png');
     height: 100%;
     background-size: 100% 100%;
     display: flex;
     align-items: center;
    justify-content: center;
    .nieta {
        width: 100%;
        margin: 0 auto;
    }
    .item {
            display: block;
    width: 250px;
    height: 250px;
    text-align: center;
    font-family: 华文中宋;
    color: white;
    cursor: pointer;
    text-decoration: none;
    transition: all ease 0.3s;
    margin: 20px 0;
    text-shadow: 1px 1px 1px #444;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
}
    .item:hover {
        color: white;
        text-decoration: none;
        box-shadow: 2px 2px 10px rgb(0 0 0 / 30%);
        opacity: 0.9;
        transform: scale(1.1) rotateZ(3deg);
        transition: all ease 0.3s;
    }
    .om1 {
        background-color: #0091ea;
    }
    .om2 {
        background-color: #dd5044;
    }
    .om3 {
        background-color: #41b883;
    }
    .om4 {
        background-color: #fd803e;
    }

@media screen and (max-width: 1000px) {
    .nieta {
        flex-direction: column-reverse;
    }
    .bg .item {
        margin: 20px 0 0 0;
    }
}
</style>
