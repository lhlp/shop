<template>
    <div class="home">
        <!-- 搜索框-->
        <div class="search">
            <i class="iconfont">&#xe6b0;</i>
            <div class="input">
                <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
            </div>
            <i class="iconfont">&#xe689;</i>
        </div>

        <!-- 导航宫格 -->
        <van-grid :gutter="10">
            <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
        </van-grid>

        <!-- 店铺排序 -->
        <van-tabs v-model="active">
            <van-tab title="标签 1"></van-tab>
            <van-tab title="标签 2"></van-tab>
            <van-tab title="标签 3"></van-tab>
            <van-tab title="标签 4"></van-tab>
        </van-tabs>
<!-- 首页店铺列表 -->
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="我是有底线的应用"
                @load="onLoad"

            >
            <van-card
                title="永辉超市"
                desc="49分钟  4.9km"
                thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
                style="text-align: left;"
                @click="jumpToStoreDetail()"
                >
                
                <template #tags>
                    <span style="color: crimson;margin: 0px;width: 80px;height: 20px; font-size: 13px;">5.0分</span>
                    <span style="margin: 0px;width: 80px;margin-left: 20px;margin-right: 80px;height: 20px;color:#646566;">月售4000+</span>
                    
                    <van-tag plain type="danger" style="margin-top: 6px;">29减5</van-tag>
                    <van-tag plain type="danger" style="margin-top: 6px;">59减8</van-tag>
                </template>

            </van-card>
            <!-- <van-card
                    v-for="goods in goodslist"
                    :key="goods.id"
                    :price="goods.price"
                    :desc="goods.desc"
                    :title="goods.title"
                    :thumb="goods.image"
                    :origin-price="goods.originPrice"
                    @click="jumpToDetail(goods.id)"
                    >
                    <template #tags>
                        <van-tag plain type="primary" color="#f00" v-if="goods.couponValue" style="margin-right: 6px;">{{goods.couponValue}}</van-tag>
                        <van-tag plain type="primary" color="#f00" v-show="goods.isFreePostage">包邮</van-tag>
                    </template>
                    <template #footer>
                        <span style="margin-right: 12px;color:#666666">月销量:{{goods.saleNum}}</span>
                        <van-icon name="cart-circle-o" 
                            color="#f00" 
                            size="18" 
                            @click.stop="handlerToAddCart(goods)"/>
                    </template>
            </van-card> -->
        </van-list>

    </div>

</template>
<script>
import axios from "axios"
/**导出该组件 */
export default{
    name:'Home', //组件名称
    data(){
        return{
            searchValue:'',
            loading:false,
            finished:true,
            visible:false,//回到顶部展示/隐藏
            active: 2,
        }
    },
    methods:{
    //加载我们的商品
        onLoad(){
                },
    //跳转店铺详情
        jumpToStoreDetail(){
            this.$router.push({name:'storeDetail'})
        },
    },

}
</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped>
.van-card__title{
    font-size: 14px;
    font-weight:600;
}

.iconfont{
    font-size: 24px;
    color: #666;
}
.search{
    display: flex; //flex布局
    height: 50px;
    align-items: center;
    padding: 0 12px;
}
.input{
    flex: 1;
}
</style>
