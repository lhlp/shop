<template>
    <div>
        <div class="orderDetail_top">
            <span>订单{{type}}</span>
            <span>></span>
        </div>

        <div>
            <!-- 评分表 -->
            <el-card class="orderDetail_card" >
                <div slot="header" class="orderDetail_header">
                    <span class="orderDetail_title">请为本次订单评分</span>
                   
                </div>
                <div class="orderDetail_body">
                    <el-rate
                        v-model="score"
                        show-text>
                    </el-rate>
                    <el-input
                        style="margin-top: 10px;
                        margin-right: 20px;
                        width: 240px;"
                        type="textarea"
                        :rows="2"
                        placeholder="对我们的服务有不满或者好评吗"
                        v-model="textarea">
                    </el-input>
                </div>
            </el-card>

            <!-- 订单信息 -->
            <el-card  
                 v-for="order in orderList"
                 :key="order.id"
                class="orderDetail_card" 
            >
                    <div slot="header" class="orderDetail_header"  >
                        <span class="orderCard_title">{{order.name}} </span>                
                    </div>
                    <van-card
                        v-for="dish in dishes"
                        :key="dish.id"
                        :title="dish.name"
                        :thumb="dish.imag"
                        style="text-align: left;"
                        :price="dish.price"
                        :num="dish.num"
                    />
                    <div  class="orderDetail_footer" >
                        <span style="font-size: 12px; ">打包费</span>
                        <span style="font-size: 12px;float: right; margin-right: 20px;">￥{{ other }}</span>
                    </div>
                    <div  class="orderDetail_footer" >
                        <span style="font-size: 12px; ">配送费</span>
                        <span style="font-size: 12px;float: right; margin-right: 20px;">￥{{ other }}</span>
                    </div>
                    <div  class="orderDetail_footer" >
                        <span style="font-size: 12px; ">已优惠</span>
                        <span style="font-size: 12px;float: right; margin-right: 20px; color: crimson;">-￥{{ order.disc }}</span>
                    </div>
                    <div  class="orderDetail_footer" >
                        <span style="font-size: 15px; float: right; margin-right: 20px;">实付款￥{{order.price}}</span>
                        
                    </div>
            </el-card > 

            <!-- 配送信息 -->
            <el-card class="orderDetail_card" 
                 v-for="order in orderList"
                 :key="order.id"
            >
                <div slot="header" class="orderDetail_header">
                    <span class="orderDetail_title">配送信息</span>
                   
                </div>
                <div class="orderDetail_body">
                   <p>
                    <span style="font-size: 12px; ">配送时间</span>  
                    <span style="font-size: 12px;float: right; margin-right: 20px;">2023.06.15 12:05</span>
                </p>
                <p>
                    <span style="font-size: 12px; ">配送时长</span>  
                    <span style="font-size: 12px;float: right; margin-right: 20px;">{{ order.time }}</span>
                </p>
                <p>
                    <span style="font-size: 12px; ">配送地址</span>  
                    <span style="font-size: 11px;float: right; margin-right: 10px;">{{ order.address }}</span>
                </p>
                <p>
                    <span style="font-size: 12px; ">配送骑手</span>  
                    <span style="font-size: 12px;float: right; margin-right: 20px;">张三</span>
                </p>
                </div>
            </el-card>

        </div>
    </div>
</template>
<script>

export default{
    name:'OrderDetail', //组件名称
    data(){
        return{
            id:'',
            name:"永辉超市",
            score: null,
            type:"已完成",
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
        }
    },
    methods:{
        //加载订单
        async onLoad() {
                const {list}  = await getSearchOrder(this.$route.params.id);
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
            },
}
</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped>
//顶部标题
.orderDetail_top{
    font-size: 18px;
    text-align: left;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight:600;

}
//评分卡片
.orderDetail_card{
    margin:5px;
    border-radius:10px;
}
.orderDetail_header{
    text-align: left;
    height: 20px;
} 
.orderDetail_body{
    text-align: left;
    margin-left: 20px;
    margin-top:20px;
}
.orderDetail_footer{
    text-align: left; 
    padding-bottom: 10px;
    padding-top: 10px;
    border-top: 1px solid #EBEEF5;
    margin-left: 20px;
}
.orderDetail_button{
    margin-right: 20px;
    height: 25px;
}
.orderDetail_title{
    font-size: 14px;
    font-weight:600;
}
.orderDetail_type{
    float: right;
    padding: 3px 10px;
    font-size:12px
}
/deep/ .el-card{
    padding-right: 10px;
}
/deep/ .el-card__body{
    padding-top:0px ;
    padding-left: 0px;
    padding-right: 0px;
}
/deep/.el-card__header{
    padding:10px ;
}

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

</style>
