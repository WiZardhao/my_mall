<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:icon>
        <div class="fa fa-home fa-lg"></div>
      </template>
      <template v-slot:tab-title>
        <div>首页</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/category">
      <template v-slot:icon>
        <div class="fa fa-th-large fa-lg"></div>
      </template>
      <template v-slot:tab-title>
        <div>分类</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/cart">
      <template v-slot:icon>
        <div class="fa fa-cart-plus fa-lg"></div>
      </template>
      <template v-slot:tab-title>
        <div>购物车</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/user">
      <template v-slot:icon>
        <div class="fa fa-user-circle fa-lg"></div>
      </template>
      <template v-slot:tab-title>
        <div>用户</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabBar/TabBar";
import TabBarItem from "components/common/tabBar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style></style>
