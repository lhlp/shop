<template>
  <div>
    <!-- 分类宫格 -->
    <van-grid :gutter="20">
      <van-grid-item v-for="value in 4" :key="value" icon="photo-o" text="文字" />
    </van-grid>

    
    <!-- 店铺排序 -->
    <van-tabs v-model="active">
        <van-tab title="标签 1"></van-tab>
        <van-tab title="标签 2"></van-tab>
        <van-tab title="标签 3"></van-tab>
        <van-tab title="标签 4"></van-tab>
    </van-tabs>

    <!-- 菜品列表 -->
    <van-card
      desc="新鲜时令"
      title="冰糖麒麟西瓜 约4.5斤"
      price="24.80"
      origin-price="29.80"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      style="text-align: left;"
      @click="jumpToDishesDetail()"
    >
      <template #bottom>
        <van-tag plain type="danger">50减5</van-tag>
        <van-tag plain type="danger">8.32折</van-tag>
       
      </template>
      <template #footer>
        <van-card
                title="永辉超市"
                desc="49分钟  4.9km"
                thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
                style="text-align: left;"
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
      
    };
  },
  methods: {
    
    jumpToDishesDetail(){
            this.$router.push({name:'dishesDetail'})
        },

    jumpToStoreDetail(){
            this.$router.push({name:'storeDetail'})
        },
  },
};
</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped>
.van-card__title{
    font-size: 14px;
    font-weight:600;
}
.van-card__price{
  color: crimson;
}
.van-card__origin-price{
  margin-left: 5px;
  margin-right: 100px;
}
</style>
