<template>
  <div class="bottom-bar">
    <div class="bar-item left">
      <div>
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon collect"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-item right">
      <div class="addCart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCart() {
      this.$emit("addCart");
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  height: 49px;
  display: flex;
  text-align: center;
}

.bar-item {
  flex: 1;
  display: flex;
}
.bar-item > div {
  flex: 1;
}
.left span {
  font-size: 13px;
}
.left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 0;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.left .service {
  background-position: 0 -54px;
}
.left .shop {
  background-position: 0 -98px;
}
.right {
  font-size: 15px;
  line-height: 49px;
  color: #fff;
}
.addCart {
  background-color: #ffe817;
  color: #333;
}
.buy {
  background-color: var(--color-tint);
}
</style>
