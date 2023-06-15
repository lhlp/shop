<template>
  <div >
      <div   
      class="imge"
      v-for="dish in dishes"
      :key="dish.id">
    <img
        width="100%"
        height="100%"
        fit="cover"
        :src="dish.image"
        style="border-radius: 8px"
      />
      </div>

      <!-- 价格数字 -->
    <div class="dish">
      <div class="price" style="text-align: left" 
            v-for="dish in dishes"
          :key="dish.id">
        <van-card
          :price="dish.price"
          :origin-price="dish.originPrice"
          style="min-height: 10; height: 40px"
        >
        
        </van-card>

        <!-- 信息 -->
        <div class="dishes_infor">
          <p class="dish_tittle">{{ dish.name }}</p>
          <p class="dish_sale">月售 {{ dish.sales }}</p>
        </div>

        <!-- 店铺卡片 -->
        <div  class="shop_card" v-for="shop in shops" :key="shop.id"  @click="jumpToStoreDetail(shop.id)"
        >
          <div style="float: left;margin-left:10px ;">
          <van-image :src="shop.url" style="width: 50px;height:50px;text-align: left;"/>
          </div>
          <div style="flex: left;">
          <span class="shop_title">{{shop.name}}</span><br>
          <span style="color: crimson;font-size:14px ;margin-right: 10px;">{{ shop.score }}分</span>
          <span style="font-size:12px ;margin-right: 10px;">{{ shop.desc }}</span>
        </div>
      </div>

      <el-card class="orderDetail_card" >
                <div slot="header" class="orderDetail_header">
                    <span class="orderDetail_title" style="font-size: 14px;">菜品信息</span>
                </div>
                <p>
                    <span style="font-size: 12px;margin-left: 10px; ">{{dish.desc}}</span>  
                </p>
                <p >
                    <span style="font-size: 12px;margin-left: 10px; ">店主联系方式</span>  
                    <van-contact-card type="edit" name="张三" tel="13000000000" :editable="false" 
                    style="margin-bottom: 30px;"
                    />
                </p>
            </el-card>
      </div>
    </div>

    <div class="store">
    </div>
    <div class="bottomBar">
      <van-goods-action>
        <van-goods-action-icon
          icon="shop-o"
          text="店铺"
        />
        <van-goods-action-button
          type="danger"
          text="进入店铺"
          @click="jumpToStoreDetail(shop.id)"  
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
      dishes: [{
        id: 1,
        name: "冰糖麒麟西瓜 约4.5斤",
        desc: "新鲜时令",
        price: "24.80",
        originPrice: "29.80",
        image:
          "https://img1.baidu.com/it/u=1036227057,120946014&fm=253&fmt=auto&app=138&f=JPEG?",
        storeId: "",
        sales:1000,
      }
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
    };
  },
  methods: {
    jumpToStoreDetail(id) {
      this.$router.push({ name: "storeDetail", params: { shopId: id } });
    },
    async created(){
      this.dishes =  await getDishesDetail(this.$route.params.id);
      this.dishes =  await getShopsDetail(this.$route.params.shopId);
      console.log(this.dishes);
 },
  },
};
</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped>


.van-card__content {
  min-height: 10px;
}
/deep/.van-card {
  height:40px;
  background-image: linear-gradient(to right, rgb(255, 128, 0) , yellow);
}
//价格数字
.van-card__price{
  color: white;
  font-size: 16px;
  font-weight: 600;
}
.van-card__price-integer{
  font-size: 22px;
}
.van-card__origin-price{
  color: white;

  font-size: 14px;
}

.van-card__thumb {
  width: 53px;
  height: 53px;
  border-radius: 8px;
}
.van-card__desc {
  padding-top: 18px;
}

// 菜品信息
.dishes_infor{
  border-radius:10px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);

}
.dish_tittle{
  padding-top:10px ;
  margin-top: 0;
  margin-left: 5px;
  margin-bottom: 0;
  font-weight: 600;
}

.dish_sale{
  margin-top: 5px;
  margin-left: 5px;
  padding-bottom: 8px;
  font-size: 11px;
  color: #656565;
}
// 店铺卡片
.shop_card{
  border: 1px solid #EBEEF5;
  margin: 5px;
  border-radius:10px;
  text-align: left;
  margin-top: 10px;
  padding: 5px;
  height: 50px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);

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
  margin-right: 10px;
  height: 30px;
}

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
</style>
