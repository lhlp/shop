<template>
  <div>
    <div class="dish">
      <img
        width="100%"
        height="100%"
        fit="cover"
        :src="dish.image"
        style="border-radius: 8px"
      />
      <div class="price" style="text-align: left">
        <van-card
          :title="dish.name"
          :price="dish.price"
          :origin-price="dish.originPrice"
          style="min-height: 48; height: 60px"
        >
          <!-- <template #right>
            <span style="margin-right: 12px; color: #666666"
              >月销量:{{ dish.saleNum }}</span
            >
          </template> -->
        </van-card>
      </div>
    </div>

    <div class="store">
      <van-card
        title="永辉超市"
        desc="49分钟  4.9km"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg?"
        style="
          text-align: left;
          height: 71px;
          color: black;
          background-color: white;
          margin-top: 10px;
          border-radius: 8px;
          box-shadow: 0px 0px 7px 1px #aaaeb2;
        "
        @click="onClickStore()"
      />
    </div>
    <div class="dish">
      <p>商品描述</p>
      {{ dish.desc }}
    </div>
    <div class="bottomBar">
      <van-goods-action>
        <van-goods-action-icon
          icon="shop-o"
          text="店铺"
          @click="onClickStore"
        />
        <van-goods-action-button
          type="danger"
          text="加入购物车"
          @click="addToCart"
        />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
export default {
  name: "DishesDetail", //组件名称
  data() {
    return {
      dish: {
        id: 1,
        name: "冰糖麒麟西瓜 约4.5斤",
        desc: "新鲜时令",
        price: "24.80",
        originPrice: "29.80",
        image:
          "https://img1.baidu.com/it/u=1036227057,120946014&fm=253&fmt=auto&app=138&f=JPEG?",
        storeId: "",
      },
    };
  },
  methods: {
    onClickStore() {
      this.$router.push({ name: "storeDetail" });
    },
    addToCart() {
      this.$toast("加入购物车");
      this.$router.push({ name: "storeDetail" });
    },
  },
};
</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped>
.dish[data-v-6140ef16] {
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 7px 1px #aaaeb2;
}
.price {
  height: auto;
}
.van-card__content {
  min-height: 48px;
}
.van-card {
  margin: 10px;
  border-radius: 8px;
}
.van-card__thumb {
  width: 53px;
  height: 53px;
  border-radius: 8px;
}
.van-card__desc {
  padding-top: 18px;
}
</style>
