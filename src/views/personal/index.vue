
<template>
    <div class="personal-center">
        <div>
            <!-- 头像 -->
            <van-image
                round
                width="5rem"
                height="5rem"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
            /><br>
            <span>{{named}}</span>
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
        <!-- 地址栏 -->
        <div class="address">
            <van-icon name="location-o" style="text-align: left;"/>
        </div>
        <!-- 分割线 -->
        <van-divider />
    <!-- 订单下的标签 -->
        <div class="order">
            <div class="title">订单</div>
            <van-grid clickable :column-num="4">
                <van-grid-item icon="cash-on-deliver" text="待付款" to="/" />
                <van-grid-item icon="logistics" text="待收货" url="/vant/mobile.html" />
                <van-grid-item icon="underway-o" text="待使用" to="/" />
                <van-grid-item icon="after-sale" text="退款/售后" to="/" />
            </van-grid>
        </div>
        <br><br><br><br><br><br><br><br><br><br><br>
        <van-button type="danger" @click="quit">退出登录</van-button>
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
    },
})

</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped>
.title{
    text-align: left;
    margin-left: 24px;
    font-weight: 600;
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
</style>
