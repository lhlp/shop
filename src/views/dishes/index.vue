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
    <van-grid :gutter="20">
      <van-grid-item
        v-for="type in types"
        :key="type.id"
        :text="type.name"
        @click="selectDishesByTypeId(type.id)"
      >
      </van-grid-item>
    </van-grid>

    <!-- 菜品排序 -->
    <van-tabs v-model="activeName">
      <van-tab title="销量从高到低" name="a" @click="sortBySaleNum()">
      </van-tab>
      <van-tab title="价格从低到高" name="b" @click="sortByPrice()"></van-tab>
      <van-tab title="好评从高到低" name="c" @click="sortByComment()"></van-tab>
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
      style="
        text-align: left;
        margin: 10px;
        border-radius: 8px;
        box-shadow: 0px 0px 7px 1px #aaaeb2;
      "
      @click="jumpToDishesDetail()"
    >
      <template #bottom>
        <van-tag plain type="danger">50减5</van-tag>
        <van-tag plain type="danger">8.32折</van-tag>
      </template>
      <template #footer>
        <van-card
          title="永辉超市 49分钟  4.9km"
          style="text-align: left; height: 30px"
          @click="jumpToStoreDetail()"
        />
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

    sortBySaleNum() {
      //  this.getGoodsListBySaleNum()
    },
    sortByPrice() {
      //  this.getGoodsListByPrice()
    },
    sortByComment() {
      //  this.getGoodsListByPrice()
    },
    sortByDistance() {},
    selectDishesByTypeId(id) {},
  },
};
</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped>
.van-card__title {
  font-size: 14px;
  font-weight: 600;
}
.van-card__price {
  color: crimson;
}
.van-card__origin-price {
  margin-left: 5px;
  margin-right: 100px;
}
</style>
