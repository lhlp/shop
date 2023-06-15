<template>
  <div>
    <!-- 展示店铺信息的标签 -->
    <div class="storeInfor">
      <div  class="shop_card" >
        <div style="float: left;">
          <van-image :src="store.url" class="shop_image" />
        </div>
        
        <div class="shop_info_box">
          <span class="shop_title">{{store.name}}</span>
          <br>
          <!-- 评分 -->
          <van-icon color="orange" name="star" />
          <van-tag round color="orange" type="primary">{{ store.score }}</van-tag>
          <!-- 是否商家自配 -->
          <van-tag color="grey" v-if="true" round type="primary"
            >商家自配
          </van-tag>
          <br>
          <span style="font-size: 11px;">{{store.desc}}</span>
        </div>
        <span class="van-tag van-tag--plain van-tag--danger" style="float: left; margin: 5px;">买{{store.disc}}减10</span>
        <span class="van-tag van-tag--plain van-tag--danger" style="float: left; margin: 5px;">买{{store.disc}}减10</span>

        <!-- 优惠券单元格 -->
        <van-coupon-cell
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          @click="showList = true"
        />
        <!-- 优惠券列表 -->
        <van-popup
          v-model="showList"
          round
          position="bottom"
          style="height: 90%; padding-top: 4px"
        >
          <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="onCouponChange"
            @exchange="onExchange"
          />
        </van-popup>
      </div>
    </div>
    <!-- 展示分类信息 -->
    <!--  :to="{ name: 'dishes.goods', params: { id: category.id } }" -->
    <div class="category">
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item
          v-for="category in categories"
          :key="category.id"
          :title="category.name"
        />
      </van-sidebar>

      <div class="goodsDtail">
        <!-- <router-view /> -->
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <!-- :desc="goods.desc"绑定不了 -->
          <van-card
            v-for="goods in goodslist"
            :key="goods.id"
            :desc="goods.desc"
            :title="goods.name"
            :thumb="goods.imag"
            style="text-align: left"
            @click="jumpToGoodsDetail()"
          >
            <template #tags>
              <span
                style="
                  color: crimson;
                  margin: 0px;
                  width: 80px;
                  height: 20px;
                  font-size: 13px;"
                >{{ goods.price }}</span
              >
              <span
                style="
                  margin: 0px;
                  width: 80px;
                  margin-left: 20px;
                  margin-right: 80px;
                  height: 20px;
                  color: #646566;
                "
                >{{ goods.sales }}</span
              >

              <van-tag plain type="danger" style="margin-top: 6px">{{
                goods.disc
              }}</van-tag>
              <!-- <van-tag plain type="danger" style="margin-top: 6px;">59减8</van-tag> -->
            </template>
          </van-card>
        </van-list>
      </div>
    </div>
    <!-- 底部购物车 -->
    <div class="cart">
      <!-- 底部提交订单栏 -->'
      <div class="submit">
        <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
          <van-goods-action-icon
            class="cart-icon"
            icon="cart-o"
            text="购物车"
            @click="onClickIcon"
          />
        </van-submit-bar>
      </div>
      <!-- 购物车面板 -->
      <van-action-sheet v-model="show" title="已选择菜品">
        <div class="selectedGoods">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <!-- 选中的菜品列表 -->
            <van-card
              v-for="goods in goodslist"
              :key="goods.id"
              :price="goods.price"
              :title="goods.name"
              :thumb="goods.imag"
            >
              <template #tags>
                <van-tag plain type="danger">标签</van-tag>
                <van-tag plain type="danger">标签</van-tag>
              </template>
              <template #footer>
                <!-- <van-button size="mini">按钮</van-button>
                <van-button size="mini">按钮</van-button> -->
                <van-stepper
                  v-model="value"
                  theme="round"
                  button-size="22"
                  disable-input
                />
              </template>
            </van-card>
          </van-list>
        </div>
      </van-action-sheet>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Sidebar, SidebarItem } from "vant";
import { List } from "vant";
import { Card } from "vant";
import { Collapse, CollapseItem } from "vant";
import { Tag } from "vant";
import { Icon } from "vant";
import { CouponCell, CouponList } from "vant";
import { SubmitBar } from "vant";

Vue.use(SubmitBar);
Vue.use(CouponCell);
Vue.use(CouponList);

Vue.use(Icon);
Vue.use(Tag);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Card);
Vue.use(List);
Vue.use(Sidebar);
Vue.use(SidebarItem);
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元",
};
export default {
  name: "StoreDetail", //组件名称
  data() {
    return {
      /**
       * 店铺信息展示
       */
      store: {
        id: "1",
        name: "麻辣烫",
        //评分
        score: "4.5分",
        //描述
        desc: "我们是麻辣烫的搬运工",
        //销售量
        sales: "5000",
        //优惠金额
        disc: 5,
        distance:'',
        //配送时间delivery time
        time:45,
        url:"https://img1.baidu.com/it/u=117364269,3388110530&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
      },
      detailInfo: "hhhhh",
      //   detailInfo:
      //     "" +
      //     store.deliveryTime +
      //     "   " +
      //     store.monthlySales +
      //     "   " +
      //     store.describe,

      activeNames: ["1"],
      /**
       *优惠券选择
       **/
      showList: false,
      chosenCoupon: 0,
      chosenCoupon: -1,
      coupons: [coupon],

      disabledCoupons: [coupon],
      /*
        分类信息切换
      */
      activeKey: 0,

      //接收服务器传过来的店铺对应分类数组
      categories: [
        {
          id: 1,
          name: "荤菜",
        },
        {
          id: 2,
          name: "素菜",
        },
      ],
      //接收服务器传过来的店铺分类下商品列表信息
      goodslist: [
        {
          id: "1",
          price: "19.9元",
          name: "麻辣毛蛋",
          desc: "门店销售第一名",
          sales: "月售1000+",
          disc: "29减5",
          imag: "https://img01.yzcdn.cn/vant/ipad.jpeg",
        },
        {
          id: "1",
          price: "19.9元",
          name: "麻辣毛蛋",
          desc: "门店销售第一名",
          sales: "月售1000+",
          disc: "29减5",
          imag: "https://img01.yzcdn.cn/vant/ipad.jpeg",
        },
      ],
      //默认加载过程中不触发load事件，加载完触发
      loading: false,
      //是否加载完毕isEnd
      finished: true,
      /*
      底部购物车数据处理
      */
      show: false,
      /*
       */
    };
  },
  methods: {
    getInCategoryGoodsDetail() {},
    //加载分类下的商品
    onLoad() {},
    onChange(index) {},
    //商品跳转详情
    jumpToGoodsDetail() {},
    //优惠券选择
    onCouponChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    //提交方法
    onSubmit() {},
    //点击购物车图标显示购物车详情
    onClickIcon() {
      this.show = !this.show;
    },
  },
};
</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped>

// 店铺信息
.shop_image{
  width: 60px;
  height:60px;
  text-align: left;
  margin: 10px;
  border-radius: 5px;
}
.shop_info_box{
  text-align: left;
  padding-top: 10px;
}
.shop_title{
  margin-top: 10px;
  font-weight: 600;
}

// 优惠券
.van-cell--clickable{
  border: 1px solid #EBEEF5;
}

// 商品样式
.van-card__title {
  font-size: 14px;
  font-weight: 600;
}
.category {
  display: flex;
}
.goodsDtail {
  flex: 1;
}


//购物车样式
.van-popup {
  height: 55%;
}
.submit {
  z-index: 2000;
}
// .submitBtn {
//   // flex: 1;
// }
</style>
