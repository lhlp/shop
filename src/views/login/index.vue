<template>
    <div>
        <van-nav-bar
            :title="$route.meta.title"
            right-text="注册账号"
            right-arrow
            @click-right="register"
            :fixed="true"
            :placeholder="true"
        />
        <br><br><br><br><br>
        <div class="el-icon-platform-eleme" style="font-size: 50px;"></div>
        <p>饿死了吗</p>
        <br><br>
        <van-form @submit="onSubmit">
            <van-field
                v-model="userId"
                name="账号"
                label="账号"
                placeholder="账号"
                :rules="[{ required: true, message: '请填写账号/手机号' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">登录</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
import { Form } from 'vant';
import { Field } from 'vant';

export default{
    name:'Login', //组件名称
    data(){
        return{
            userId: '12345678912',
            password: '88888888',
            // pattern: /^1\d{10}$/,
        }
    },
    methods:{
        // 登录方法
        onSubmit(values) {
             console.log('submit', values);
             this.$router.push({name:'home'})
        },
        // 注册方法
        register(){
            this.$router.push({name:'register'})
        }
    },
}
</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped>

</style>
