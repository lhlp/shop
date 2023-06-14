<template>
    <div class="home">
        <!-- 搜索框-->
        <div class="search">
            <i class="iconfont">&#xe8c9;</i>
            <div class="input">
                <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
            </div>
            <i class="iconfont">&#xe623;</i>
        </div>

        <!-- 导航宫格 -->
        <van-grid :gutter="10">
            <van-grid-item  
            @click="screenDishes()"
            >
            <van-icon class="iconfont"  > &#xe606; </van-icon>
            <span style="font-size: 12px;font-weight: 600;">快餐</span>
            </van-grid-item>
            <van-grid-item >
            <van-icon class="iconfont" > &#xe8c0;</van-icon>
            <span style="font-size: 12px;font-weight: 600;">套饭</span>
            </van-grid-item>
            <van-grid-item  >
            <van-icon class="iconfont" > &#xe675; </van-icon>
            <span style="font-size: 12px;font-weight: 600;">饮料</span>

            </van-grid-item>
            <van-grid-item >
            <van-icon class="iconfont" > &#xfaa4; </van-icon>
            <span style="font-size: 12px;font-weight: 600;">炒菜</span>

            </van-grid-item>
            <van-grid-item >
            <van-icon class="iconfont" > &#xe60a; </van-icon>
            <span style="font-size: 12px;font-weight: 600;">儿童餐</span>

            </van-grid-item>
            <van-grid-item >
            <van-icon class="iconfont" > &#xe60c;</van-icon>
            <span style="font-size: 12px;font-weight: 600;">面条</span>

            </van-grid-item>
            <van-grid-item  text="果蔬">
            <van-icon class="iconfont" >&#xe63c; </van-icon>
            <span style="font-size: 12px;font-weight: 600;">快餐</span>

            </van-grid-item>
            <van-grid-item  text="肉蛋">
            <van-icon class="iconfont" > &#xe725; </van-icon>
            <span style="font-size: 12px;font-weight: 600;">快餐</span>

            </van-grid-item>
        </van-grid>
        

    
    <van-tabs v-model="active">
      <van-tab title="全部"></van-tab>
      <van-tab title="时间升序"></van-tab>
      <van-tab title="距离升序"></van-tab>
    </van-tabs>
    <!-- 首页店铺列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我是有底线的应用"
      @load="onLoad"
    >
      <!-- discInfo:拼接距离和时间 -->
      <van-card
        v-for="store in stores"
        :key="store.id"
        :title="store.name"
        desc="2.3km 45分钟"
        :thumb="store.url"
        style="text-align: left"
        @click="jumpToStoreDetail()"
      >
        <template #tags>
          <span
            style="
              color: crimson;
              margin: 0px;
              width: 80px;
              height: 20px;
              font-size: 13px;
            ">
            {{ store.score }}
            </span>
          <span
            style="
              margin: 0px;
              width: 80px;
              margin-left: 20px;
              margin-right: 80px;
              height: 20px;
              color: #646566;
            "
            >{{ store.sales }}</span
          >

          <van-tag plain type="danger" style="margin-top: 6px">{{
            store.disc
          }}</van-tag>
        </template>
      </van-card>
    </van-list>
  </div>
</template>
<script>

import axios from "axios"
/**导出该组件 */
export default {
  name: "Home", //组件名称
  data() {
    return {
      searchValue: "",
      loading: false,
      finished: true,
      visible: false, //回到顶部展示/隐藏
      active: 2,
      stores: [
        {
          id: 1,
          name: "鼠标麻辣烫",
          des: "五星级中华美食",
          score: 4.5,
          sales: 1000,
          disc: "4.5折",
          distance: "2.3km",
          time: 45,
          url: "https://img01.yzcdn.cn/vant/ipad.jpeg",
        },
      ],
      types: [
        { id: 0, name: "火锅" },
        { id: 1, name: "家常菜" },
        { id: 2, name: "炸鸡" },
        { id: 3, name: "甜品" },
        { id: 4, name: "饮品" },
        { id: 5, name: "烧烤" },
        { id: 6, name: "水果" },
        { id: 7, name: "快餐" },
      ],
    };
  },
  methods: {
    //加载我们的商品
    onLoad() {},
    //跳转店铺详情
    jumpToStoreDetail() {
      this.$router.push({ name: "storeDetail" });
    },
    // 筛选菜单
    screenDishes(id){
      this.$router.push({ name: "dishesDetail", params: { typeId: id }});
    }
}
}
</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped>
@font-face {
  font-family: 'iconfont';  /* Project id 4123028 */
  src: url('//at.alicdn.com/t/c/font_4123028_ad0v51m1pxg.woff2?t=1686758785425') format('woff2'),
       url('//at.alicdn.com/t/c/font_4123028_ad0v51m1pxg.woff?t=1686758785425') format('woff'),
       url('//at.alicdn.com/t/c/font_4123028_ad0v51m1pxg.ttf?t=1686758785425') format('truetype');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}

.van-card__title{
    font-size: 14px;
    font-weight:600;
}

.iconfont {
  font-size: 24px;
  color: #666;
}
.search {
  display: flex; //flex布局
  height: 50px;
  align-items: center;
  padding: 0 12px;
}
.input {
  flex: 1;
}
</style>
