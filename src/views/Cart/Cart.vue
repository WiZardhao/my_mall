<template>
  <div>
    <nav-bar class="nav-bar">
      <template #center>
        <div>购物街({{ cartLength }})</div>
      </template>
    </nav-bar>
    <scroll class="cart-scroll" :click="true" ref="cartScroll">
      <cart-list />
    </scroll>
    <cart-bottom-bar class="bottom-bar" />
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navBar/NavBar";

import CartList from "./childComponents/CartList";
import CartBottomBar from "./childComponents/CartBottomBar";

import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar,
  },
  activated() {
    this.$refs.cartScroll.refresh();
  },
  computed: {
    ...mapGetters(["cartLength", "cartList"]),
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.cart-scroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
}
.bottom-bar {
  position: absolute;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
