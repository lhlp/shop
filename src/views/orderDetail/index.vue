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
                class="orderDetail_card" 
                @click="jumpToOrderDetail()"
            >
                    <div slot="header" class="orderDetail_header"  >
                        <span class="orderCard_title">{{name}} </span>                
                        <span class="orderCard_title">></span>
                    </div>
                    <van-card
                        title="永辉超市"
                        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
                        style="text-align: left;"
                        price="19.00"
                        num="1"
                        @click="jumpToOrderDetail()"
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
                        <span style="font-size: 12px;float: right; margin-right: 20px; color: crimson;">-￥{{ other }}</span>
                    </div>
                    <div  class="orderDetail_footer" >
                        <span style="font-size: 15px; float: right; margin-right: 20px;">实付款￥39</span>
                        
                    </div>
            </el-card > 

            <!-- 配送信息 -->
            <el-card class="orderDetail_card" >
                <div slot="header" class="orderDetail_header">
                    <span class="orderDetail_title">配送信息</span>
                   
                </div>
                <div class="orderDetail_body">
                   <p>
                    <span style="font-size: 12px; ">配送时间</span>  
                    <span style="font-size: 12px;float: right; margin-right: 20px;">{{ other }}</span>
                </p>
                <p>
                    <span style="font-size: 12px; ">配送时长</span>  
                    <span style="font-size: 12px;float: right; margin-right: 20px;">{{ other }}</span>
                </p>
                <p>
                    <span style="font-size: 12px; ">配送地址</span>  
                    <span style="font-size: 12px;float: right; margin-right: 20px;">{{ other }}</span>
                </p>
                <p>
                    <span style="font-size: 12px; ">配送骑手</span>  
                    <span style="font-size: 12px;float: right; margin-right: 20px;">{{ other }}</span>
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
            name:"永辉超市",
            score: null,
            type:"已完成",
            other:5
        }
    },
    methods:{

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
