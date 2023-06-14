<template>
  <div>
    <!-- 搜索按钮 -->
    <van-search
      v-model="searchValue"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearchDishes"
    >
      <template #action>
        <div @click="onSearchDishes">搜索</div>
      </template>
    </van-search>
    <!-- 分类宫格 -->
      <van-tabs>
        <van-tab v-for="type in types"  
        :key="type.id" 
        :title="type.name"   
        @click="selectDishesByTypeId(type.id)">
        </van-tab>
      </van-tabs>


    <!-- 菜品排序 -->

    <van-tabs v-model="activeName">
      <van-tab title="全部" name="a" @click="showAll()">
      </van-tab>
      <van-tab title="价格从低到高" name="b" @click="sortByPrice()" ></van-tab>
      <van-tab title="时间从高到低" name="c" @click="sortByTime()"></van-tab>
      <van-tab
        title="距离从高到低"
        name="d"
        @click="sortByDistance()"
      ></van-tab>
    </van-tabs>

    <!-- 菜品列表 -->

    <van-card
      v-for="dish in dishes"
      :key="dish.id"
      :desc="dish.desc"
      :title="dish.name"
      :price="dish.price"
      :origin-price="dish.originPrice"
      :thumb="dish.imag"
      @click="jumpToDishesDetail()"
      class="dishes_card"
    >
      <template #tags>
        <van-tag plain type="danger">50减5</van-tag>
        <van-tag plain type="danger">8.32折</van-tag>
      </template>

      <!-- 店铺信息展示 -->
      <template #footer >
        <div  class="shop_card" v-for="shop in shops" :key="shop.id">
        <div style="float: left;">
        <van-image :src="shop.url" style="width: 50px;height:50px;text-align: left;"/>
        </div>
        <div style="flex: left;">
        <span class="shop_title">{{shop.name}}</span><br>
        <span style="color: crimson;font-size:14px ;margin-right: 10px;">{{ shop.score }}分</span>
        <span>{{ shop.desc }}</span>
        <van-button @click="jumpToStoreDetail()">进入店铺</van-button>
      </div>
      </div>
      </template>
    </van-card>
  </div>
</template>
<script>
export default {
  name: "Dishes", //组件名称
  data() {
    return {
      searchValue: "",
      activeName: "a",
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
        },
      ],
      shops:[
        {
          id: 1,
          name: "永辉超市",
          desc: "49分钟  4.9km",
          score: "4.7",
          sales: "1000",
          disc:"4",
          distance: "4.9",
          time:49,
          url: "https://img1.baidu.com/it/u=1036227057,120946014&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        }
      ],
      types: [
        { id: 0, name: "火锅" },
        { id: 1, name: "家常菜" },
        { id: 2, name: "炸鸡" },
        { id: 3, name: "甜品" },
        { id: 4, name: "饮品" },
        { id: 5, name: "烧烤" },
        { id: 6, name: "水果" },
        { id: 7, name: "鲜花" },
      ],
    };
  },
  methods: {
    onSearchDishes() {
      console.log("搜索成功");
    },
    handlerClickDishType() {
      console.log("切换" + this.activeName + "成功");
      //发送请求，填充商品信息 通过类型ID查找商品数据 name
      // this.dishes = [];
    },
    jumpToDishesDetail(id) {
      this.$router.push({ name: "dishesDetail", params: { id: id } });
    },
    jumpToStoreDetail(id) {
      this.$router.push({ name: "storeDetail", params: { id: id } });
    },
    showAll(){

    },
    sortByTime() {
      //  this.getGoodsListBySaleNum()
    },
    sortByPrice() {
      //  this.getGoodsListByPrice()
    },

    sortByDistance() {},
    selectDishesByTypeId(id) {},
  },
};
</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped>
// 菜品卡片
.dishes_card{
  text-align: left;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.van-card__title {
  font-size: 14px;
  font-weight: 600;
}
.van-card__price {
  color: crimson;
}
.van-card__origin-price {
  margin-left: 5px;
}
// 店铺
.van-card__footer{
  border-top: 1px solid #EBEEF5;
  text-align: left;
}
.shop_card{
  border-top: 1px solid #EBEEF5;
  text-align: left;
  margin-top: 10px;
  padding-bottom: 5px;
}
.shop_title{
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
}
.van-button{
  float: right;
  font-size: 10px;
  padding-left: 5px;
  padding-right: 5px;
  height: 20px;
}
</style>
