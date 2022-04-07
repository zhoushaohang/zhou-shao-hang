<template>
    <div class="bg">
        <div class="zhuce">
            <el-input class="inp w-50 m-2" :suffix-icon="Calendar" v-model="from.use" placeholder="请输入账号" size="large" style="margin-top: 80px;" />
            <el-input
                class="inp w-50 m-2"
                v-model="from.pas"
                type="password"
                placeholder="请输入密码"
                show-password
                size="large"
                :suffix-icon="Calendar"
            />
            <div class="but">
            <el-button type="primary" size="large" @click="dinjia">登录</el-button>
            <el-button type="info" size="large" @click="chongzhi">重置</el-button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'login',
    props: {},
    components: {},
    data() {
        return {
            from:{
                use:'',
                pas:''
            },
            // 规则
            rules: {
                use: [
                    {required:true, message:'账号不可为空',trigger:''}
                ],
                pas:[
                    {required:true, message:'密码不可为空',trigger:''}
                ]
            }
        }
    },
    computed: {},
    watch: {},
    methods: {
        dinjia() {
            if(this.from.use == "admin" && this.from.pas == "admin") {
                this.$message({
                    message:'登录成功',
                    type:'success'
                });
                this.$router.push({path:'/hoem'});
            }else {
                this.$message.error('验证失败');
            }
        },
        chongzhi () {
            this.from.use = "",
            this.from.pas = ""
        }
    },
    created() {},
    mounted() {},
}
</script>
<style lang='less' scoped>
.bg {
    width: 100%;
    height: 840px;
    background: url('../img/bg.jpeg');
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .zhuce {
    width: 450px;
    height: 304px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 0 10px #ddd;
        .inp {
            display: block;
            width: 90%;
            margin: 20px auto;
        }
        .but {
            width: 34%;
            margin: 0 auto;
        }
    }
}
</style>