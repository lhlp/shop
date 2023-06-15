<template >
    <div>
        <van-tabs v-model="active" animated  @change="changeTab">
            <van-tab title="全部" name=""></van-tab>
            <van-tab title="未评价" name="0"></van-tab>
            <van-tab title="已完成" name="1"></van-tab>
        </van-tabs>

        <!-- 订单列表 -->
        <el-card  
        v-for="order in orderList"
        :key="order.id"
        class="orderCard" 
        @click="jumpToOrderDetail(order.id)"
        >
            <div slot="header" class="orderCard_header" style="text-align: left; ">
                <span class="orderCard_title">{{order.name}} </span>                
                <span class="orderCard_title">></span>
                <span class="orderCard_type" type="text" >{{ order.type }}</span>
            </div>
            <van-card
                v-for="dish in dishes"
                :key="dish.id"
                :title="dish.name"
                :thumb="dish.imag"
                style="text-align: left;"
                :price="dish.price"
                :num="dish.num"
                @click="jumpToOrderDetail(order.id)"
            />
             
             <div  class="order_footer" >
                <span style="font-size: 15px;  font-weight:530;">实付款￥{{order.price}}</span>
                <el-button class="order_button" style="float: right; padding: 3px 10px" 
                @click="jumpToOrderDetail">评价</el-button>

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
            active:"",
            orderList: [
                {
                id: 1,
                addressId: "1111",
                address: "重庆市渝北区龙兴镇普福大道459号",
                disc: "4.5折",
                time: 45,
                score:5,
                type:1,
                userId: 1111,
                name:"永超市",
                price:"43.00"
                },
            ],
            dishes: [
                {
                id: 1,
                name: "冰糖麒麟西瓜 约4.5斤",
                desc: "新鲜时令",
                price: "24.80",
                originPrice: "29.80",
                imag: "https://img1.baidu.com/it/u=1036227057,120946014&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                sales: 200,
                shopId: "",
                num:2,
                },
            ],
        };
    },
    methods: {
        //加载我们的订单
        async onLoad() {
        const {list}  = await getSearchOrder(active);
                this.orderList = [
                    ...this.orderList, //拷贝数组
                    ...list
                ] ;
                this.loading = false ;
        },
        getOrderList(id){
            getSearchOrder(id).then((resp)=>{
                this.orderList = resp.list;
            });
        },
        //当菜单被切换调用此方法
        changeTab(name,title){
            this.getOrderList(this.active)
            },
        jumpToOrderDetail(id){
                this.$router.push({name:'orderDetail',params: {orderId: id }})
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
