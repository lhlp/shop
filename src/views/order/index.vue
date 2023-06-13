<template >
    <div>
        <van-tabs v-model="active" animated>
            <van-tab title="标签 1"></van-tab>
            <van-tab title="标签 2"></van-tab>
            <van-tab title="标签 3"></van-tab>
            <van-tab title="标签 4"></van-tab>
        </van-tabs>

        <!-- 订单列表 -->
        <el-card  
        class="orderCard" 
        @click="jumpToOrderDetail()"
        >
            <div slot="header" class="orderCard_header" style="text-align: left; ">
                <span class="orderCard_title">{{name}} </span>                
                <span class="orderCard_title">></span>
                <span class="orderCard_type" type="text" >已完成</span>
            </div>
            <van-card
                title="永辉超市"
                thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
                style="text-align: left;"
                price="19.00"
                num="1"
                @click="jumpToOrderDetail()"
            />
             
             <div  class="order_footer" >
                <span style="font-size: 15px;  font-weight:530;">实付款￥39</span>
                <el-button class="order_button" style="float: right; padding: 3px 10px" >评价</el-button>
            </div>
        </el-card >           

    

    </div>
</template>
<script>
import { Card } from 'element-ui';


export default{
    name: "Order",
    data() {
        return {
            name:"永辉超市",

        };
    },
    methods: {
        jumpToOrderDetail(){
            this.$router.push({name:'orderDetail'})
        },
    },
    components: { Card }
}
</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped>

// 订单卡片
.orderCard{
    margin:5px;
    border-radius:10px;
}
.orderCard_header{
    text-align: center;
    height: 20px;
//    padding-top: 20px;

} 
.order_footer{
    text-align: left; 
    padding-bottom: 10px;
    padding-top: 10px;
    border-top: 1px solid #EBEEF5;
    margin-left: 20px;
}
.order_button{
    margin-right: 20px;
    height: 25px;
}
.orderCard_title{
    font-size: 16px;
    font-weight:600;
}
.orderCard_type{
    float: right;
    padding: 3px 10px;
    font-size:12px
}
/deep/ .el-card__body{
    padding-top:0px ;
    padding-left: 0px;
    padding-right: 0px;
}
// 图片
.van-card__thumb{
    height: 60px;
    width: 60px;
}
// 标题
.van-card{
    padding: 0;
    margin: 10px;
    background-color: white;
    border-radius:10px;

}
.van-card__title{
    padding-top: 6px;
    font-size: 14px;
    font-weight:600;
}
.van-card__content{
    min-height:60px;
}
.van-card__bottom {
  line-height: 45px;
  padding-right: 10px;
}
// 标签
.van-tag{
    font-size: 9px;
    height: 13px;
    margin-left: 3px;
}

.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }


  .box-card {
    width: 100%;
  }

</style>
