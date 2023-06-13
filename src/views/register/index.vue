<template>
    <div>
        <van-form validate-first @failed="onFailed" @submit="onSubmit">
            <!--昵称  -->
        <van-field
            v-model="username"
            name="昵称"
            placeholder="昵称"
            :rules="[{ required: true, message: '请输入昵称' }]"
        />
        <!-- 11位用户账号 -->
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
            v-model="userId"
            name="账号"
            placeholder="手机号"
            :rules="[{ pattern, message: '请输入11位手机号' }]"
        />
        <!-- 注册密码 -->
        <van-field
            v-model="password"
            name="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请输入密码' }]"
        />
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">注册</van-button>
        </div>
        </van-form>
    </div>
</template>
<script>
import { Toast } from 'vant';

export default{
    name:'Register', //组件名称
    data(){
        return{
            username:'',
            userId: '',
            password: '',
            pattern: /^1\d{10}$/,
        }
    },
    methods:{
        onSubmit(values){
            console.log('submit', values);
            this.$router.push({name:'login'})
            return values;
        },
        onFailed(errorInfo) {
        console.log('failed', errorInfo);
        },
    },
}
</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped>

</style>
