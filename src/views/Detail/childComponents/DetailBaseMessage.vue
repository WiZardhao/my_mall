<template>
  <div class="base-message">
    <div class="goods-name">{{ goods.title }}</div>
    <div class="goods-price">
      <span class="new-price">{{ goods.nowPrice }}</span>
      <span class="old-price"
        ><del>{{ "¥" + goods.oldPrice }}</del></span
      >
      <span :style="disColor" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span v-for="item in goods.columns" class="other-item">{{ item }}</span>
    </div>
    <div class="info-services">
      <div v-for="item in goods.services" class="service-item">
        <img :src="item.icon" alt="" />
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseMessage",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    disColor() {
      return { backgroundColor: this.goods.disBgColor };
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.goods-name {
  padding: 10px 5px;
}
.goods-price {
  padding: 0 5px;
}
.new-price {
  color: rgb(237, 101, 147);
  font-size: 20px;
}
.old-price {
  color: #666;
  font-size: 10px;
  margin: 0 5px;
}
.discount {
  color: white;
  border-radius: 10px;
  font-size: 12px;
  padding: 2px;
}
.info-other {
  display: flex;
  justify-content: space-between;
  padding: 10px 5px 5px;
  font-size: 12px;
  color: #666;
  box-shadow: 0 2px 2px rgb(224, 217, 217);
}
.info-services {
  padding-top: 10px;
  font-size: 12px;
  box-shadow: 0 2px 2px rgb(224, 217, 217);
}
.service-item {
  padding: 0 5px 10px 5px;
  display: inline-block;
  width: 33%;
}
.service-item:nth-of-type(2) {
  text-align: center;
}
.service-item:nth-of-type(3) {
  text-align: right;
}
.service-item:nth-of-type(4) {
  text-align: left;
}
.info-services img {
  width: 15px;
  height: 15px;
  margin-bottom: -3px;
}
</style>
