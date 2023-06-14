<template>
    <div class="personal-center">


        <div class="personal_photo">
            <!-- 头像 -->
            <van-image
                round
                width="60px"
                height="60px"
                style="margin-top: 10px;margin-bottom: 10px;"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
            /><br>
            <span>{{named}}</span>
        </div>


        <el-card class="personal_card" >
            <div slot="header" class="personal_header">
                <span class="personal_title">订单</span>
            </div>
            <!-- 订单下的标签 -->
            <div class="order">
                <van-grid clickable :column-num="4">
                    <van-grid-item icon="cash-on-deliver" text="待付款" to="/" />
                    <van-grid-item icon="logistics" text="待收货" url="/vant/mobile.html" />
                    <van-grid-item icon="underway-o" text="待使用" to="/" />
                    <van-grid-item icon="after-sale" text="退款/售后" to="/" />
                </van-grid>
            </div>
         


        </el-card>
     
        <!-- 分割线 -->
        <!-- <van-divider /> -->

            <!-- 地址栏 -->
        <div 
        class="address"
        @click=" jumpToAddressList()"
        >
            <van-icon name="location-o" style="text-align: left;"/>
            <span>地址</span>
        </div>

        <div>
            <!-- 优惠券单元格 -->
            <van-coupon-cell
                :coupons="coupons"
                :chosen-coupon="chosenCoupon"
                @click="showList = true"
                />
            <!-- 优惠券列表 -->
                <van-popup
                v-model="showList"
                round
                position="bottom"
                style="height: 90%; padding-top: 4px;"
                >
            <van-coupon-list
                :coupons="coupons"
                :chosen-coupon="chosenCoupon"
                :disabled-coupons="disabledCoupons"
                @change="onChange"
                @exchange="onExchange"
            />
            </van-popup>
        </div>
        <!-- 退出登录 -->
        <div >
            <van-button class="login_button" type="danger" @click="quit">退出登录</van-button>
        </div>
    </div>
</template>
<script>

import { Button , Image as VanImage ,CouponCell, CouponList } from 'vant';
import { Grid, GridItem } from 'vant';



// 优惠券对象
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
}

export default (await import('vue')).defineComponent({
    name:'Personal', //组件名称
    data(){
        return{
            named:'饿死鬼',
            chosenCoupon: -1,
            showList: false,
            coupons: [coupon],
            disabledCoupons: [coupon],
            active: 0,

        }
    },
    methods:{
        onChange(index) {
            this.showList = false;
            this.chosenCoupon = index;
        },
        onExchange(code) {
            this.coupons.push(coupon);
        },
        quit(){

        },
        jumpToAddressList(){
            this.$router.push({name:'addressList'})
        },
    },
})

</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped>
// 卡片
.personal_card{
    margin:5px;
    margin-top: 20px;
    border-radius:10px;
}
.personal_header{
    text-align: left;
    height: 20px;
} 

/deep/ .el-card__body{
    padding: 0;
}
/deep/.el-card__header{
    padding:10px ;
}


.van-cell{
    margin-top: 20px;
    border: 1px solid #EBEEF5;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.van-cell__title, .van-cell__value {
    text-align: center;
}
/deep/ .van-field__body{
    display: none;
}
/deep/ .van-button--plain.van-button--danger{
    display: none;
}
/deep/ .van-coupon-list__bottom{
    display: none;
}
/deep/ .van-coupon__corner{
    display: none;
}

// 地址
.address{
    margin:5px;
    margin-top: 20px;
    border-radius:10px;
    height: 45;
    width:300;
    border: 1px solid #EBEEF5;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    padding: 10px;
}

// 登录
.login_button{
    margin-top: 30px;
    height: 40px;
    width: 150px;
    border-radius:10px;
}
</style>
