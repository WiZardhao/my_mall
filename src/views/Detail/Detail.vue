<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="navBar">
    </detail-nav-bar>

    <scroll
      class="detail-scroll"
      :pullUpLoad="true"
      ref="scroll"
      :probeType="3"
      @scroll="scrollPosition"
    >
      <detail-swiper :topImages="topImages" @imgLoad="imgLoad"></detail-swiper>
      <detail-base-message :goods="goods"></detail-base-message>
      <detail-shop :shop="shop"></detail-shop>
      <detail-goods-image :imgs="imgs" @imgLoadAll="imgLoadAll" />
      <detail-infomation :informations="informations" ref="itemDetail" />
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <goods-list :goods="recommends" ref="recommend" class="goodsList" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBack" />
    <detail-bottom-bar @addCart="addCart" />
    <toast :message="message" :is-show="show" />
  </div>
</template>

<script>
import { getDetail, Goods, Shop, ItemInfo, getRecommend } from "network/detail";
import { backTopMixin } from "@/common/mixin";

import DetailNavBar from "./childComponents/DetailNavBar.vue";
import DetailSwiper from "./childComponents/DetailSwiper.vue";
import DetailBaseMessage from "./childComponents/DetailBaseMessage.vue";
import DetailShop from "./childComponents/DetailShop.vue";
import DetailGoodsImage from "./childComponents/DetailGoodsImage.vue";
import DetailInfomation from "./childComponents/DetailInfomation.vue";
import DetailCommentInfo from "./childComponents/DetailCommentInfo.vue";
import DetailBottomBar from "./childComponents/DetailBottomBar.vue";

import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop.vue";
import GoodsList from "components/content/goodsList/GoodsList.vue";
import Toast from "components/common/toast/Toast";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      imgs: {},
      informations: {},
      commentInfo: {},
      recommends: [],
      itemImgLoad: [],
      itemPosition: [0],
      timer: null,
      currentY: 0,
      message: "",
      show: false,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseMessage,
    DetailShop,
    DetailGoodsImage,
    DetailInfomation,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    BackTop,
    Toast,
  },
  mixins: [backTopMixin],
  created() {
    this.iid = this.$route.query.iid;
    this.netDetail();
    this.netRecommend();
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
    },
    imgLoadAll() {
      this.$refs.scroll.refresh();
      //计算参数、评论、推荐距离顶部高度
      const detailHeight = this.$refs.itemDetail.$el.offsetTop;
      const commentHeight = this.$refs.comment.$el.offsetTop;
      const recommendHeight = this.$refs.recommend.$el.offsetTop;

      this.itemPosition.push(detailHeight, commentHeight, recommendHeight);
    },
    scrollPosition(position) {
      this.isShowBack = position.y < -1000;

      this.currentY = -position.y;

      if (this.currentY >= 0 && this.currentY < this.itemPosition[1]) {
        this.$refs.navBar.currentIndex = 0;
      } else if (
        this.currentY >= this.itemPosition[1] &&
        this.currentY < this.itemPosition[2]
      ) {
        this.$refs.navBar.currentIndex = 1;
      } else if (
        this.currentY >= this.itemPosition[2] &&
        this.currentY < this.itemPosition[3]
      ) {
        this.$refs.navBar.currentIndex = 2;
      } else if (this.currentY >= this.itemPosition[3]) {
        this.$refs.navBar.currentIndex = 3;
      }
    },
    titleClick(index) {
      switch (index) {
        case 0:
          this.$refs.scroll.scrollTo(0, 0, 1000);
          break;
        case 1:
          this.$refs.scroll.scrollTo(0, -this.itemPosition[1], 1000);
          break;
        case 2:
          this.$refs.scroll.scrollTo(0, -this.itemPosition[2], 1000);
          break;
        case 3:
          this.$refs.scroll.scrollTo(0, -this.itemPosition[3], 1000);
      }
    },
    addCart() {
      const product = {};
      product.img = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.imgs.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      this.$store.dispatch("addCart", product).then((res) => {
        this.$toast.show(res, 1500);
      });
    },
    /* 网络请求方法 */
    netDetail() {
      getDetail(this.iid).then((res) => {
        const data = res.data.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.shop = new Shop(data.shopInfo);
        this.imgs = data.detailInfo;
        this.informations = new ItemInfo(
          data.itemParams.info,
          data.itemParams.rule
        );

        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },
    netRecommend() {
      getRecommend().then((res) => {
        this.recommends = res.data.data.list;
      });
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  background-color: white;
  z-index: 9;
  height: 100vh;
}
.detail-nav {
  position: relative;
  background-color: #fff;
  z-index: 9;
  height: 44px;
}
.detail-scroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.goodsList {
  padding-top: 20px;
}
</style>
