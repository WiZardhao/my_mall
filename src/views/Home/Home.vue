<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <span>购物街</span>
      </template>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="home-tab-control"
      ref="tabControl1"
      @tabClick="tabClick"
      v-show="isFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :click="true"
      :pullUpLoad="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banner="banner"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-fashion />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBack" />
  </div>
</template>

<script>
//方法或类
import { getMultiData, getGoodsData } from "network/home";
import { backTopMixin } from "@/common/mixin";
//公共组件
import NavBar from "components/common/navBar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodsList/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
//子组件
import HomeSwiper from "views/Home/childComponents/HomeSwiper";
import HomeRecommend from "views/Home/childComponents/HomeRecommend";
import HomeFashion from "./childComponents/HomeFashion.vue";

export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isFixed: false,
      tabOffsetTop: 0,
      saveY: 0,
    };
  },
  mixins: [backTopMixin],
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFashion,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getY();
  },
  created() {
    this.netMultiData();
    this.netGoodsData("pop");
    this.netGoodsData("new");
    this.netGoodsData("sell");
  },
  methods: {
    /* 事件监听相关代码 */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    contentScroll(position) {
      this.isShowBack = position.y < -1000;
      if (position.y < -this.tabOffsetTop) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
    loadMore() {
      this.netGoodsData(this.currentType);
      setTimeout(() => {
        this.$refs.scroll.refresh();
      }, 20);
    },
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    /* 
    网络请求相关代码
    */
    netMultiData() {
      getMultiData().then((res) => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    netGoodsData(type) {
      const page = this.goods[type].page + 1;
      getGoodsData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
.home {
  padding-top: 44px;
  position: relative;
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.home-tab-control {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 9;
  border-bottom: 1px solid #fff;
}
</style>
