<template>
  <div class="category">
    <nav-bar class="category-nav">
      <template #center><span>商品分类</span></template>
    </nav-bar>
    <tab-control
      :titles="titleList"
      ref="categoryTabControl1"
      @tabClick="tabClick"
      v-show="isFixed"
      class="tabControl1"
    />
    <slide-bar
      :categoryList="goodsTag"
      :currentIndex="currentIndex"
      @tagClick="tagClick"
    />
    <scroll
      class="category-scroll"
      ref="scroll"
      :click="true"
      :pullUpLoad="true"
      @scroll="contentScroll"
    >
      <subcategory
        :subcategoryList="subcategoryList"
        @subImgLoad="imgLoadAll"
      />
      <tab-control
        :titles="titleList"
        ref="categoryTabControl2"
        @tabClick="tabClick"
      />
      <goods-list :goods="goods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBack" />
  </div>
</template>

<script>
import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category";
import { backTopMixin } from "@/common/mixin";

import SlideBar from "./childComponents/SlideBar";
import Subcategory from "./childComponents/Subcategory";

import NavBar from "components/common/navBar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodsList/GoodsList";
import BackTop from "components/content/backTop/BackTop";
export default {
  name: "Category",
  components: {
    NavBar,
    Scroll,
    SlideBar,
    Subcategory,
    TabControl,
    GoodsList,
    BackTop,
  },
  data() {
    return {
      goodsTag: [],
      subcategoryList: [],
      categoryDetail: {
        pop: [],
        new: [],
        sell: [],
      },
      currentIndex: 0,
      titleList: ["流行", "新款", "精选"],
      currentType: "pop",
      tabOffsetTop: 0,
      isFixed: false,
    };
  },
  mixins: [backTopMixin],
  created() {
    this.getCategory();
  },
  activated() {
    this.$nextTick(() => {
      this.$refs.scroll.refresh();
    });
  },
  computed: {
    maitKey() {
      return this.goodsTag[this.currentIndex].maitKey;
    },
    miniWallkey() {
      return this.goodsTag[this.currentIndex].miniWallkey;
    },
    goods() {
      return this.categoryDetail[this.currentType];
    },
  },
  methods: {
    //事件监听方法
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
      this.$refs.categoryTabControl1.currentIndex = index;
      this.$refs.categoryTabControl2.currentIndex = index;
    },
    tagClick(index) {
      if (this.currentIndex === index) return;
      this.currentIndex = index;
      this.getSubcategory(this.maitKey);
      this.getCategoryDetail(this.miniWallkey, "pop");
    },
    contentScroll(position) {
      this.isShowBack = position.y < -1000;
      if (position.y < -this.tabOffsetTop) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
    imgLoadAll() {
      this.$refs.scroll.refresh();
      this.tabOffsetTop = this.$refs.categoryTabControl2.$el.offsetTop;
    },
    //网络请求方法
    getCategory() {
      getCategory().then((res) => {
        this.goodsTag = res.data.data.category.list;
        console.log("category", res);
        this.$nextTick(() => {
          this.getSubcategory(this.maitKey);
          this.getCategoryDetail(this.miniWallkey, "pop");
          this.getCategoryDetail(this.miniWallkey, "new");
          this.getCategoryDetail(this.miniWallkey, "sell");
        });
      });
    },
    getSubcategory(maitKey) {
      getSubcategory(maitKey).then((res) => {
        this.subcategoryList = res.data.data.list;
      });
    },
    getCategoryDetail(miniWallkey, type) {
      getCategoryDetail(miniWallkey, type).then((res) => {
        this.categoryDetail[type] = res.data;
      });
    },
  },
};
</script>

<style scoped>
.category {
  position: relative;
  height: 100vh;
}
.tabControl1 {
  position: fixed;
  top: 44px;
  left: 25%;
  right: 0;
  background-color: #fff;
  z-index: 999;
}
.category-scroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 25%;
  right: 0;
}
.category-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
