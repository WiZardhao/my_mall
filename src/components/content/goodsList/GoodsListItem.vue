<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="imgSource" alt="" />
    <div class="info-container">
      <p class="title">{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="fa fa-star-o"></span>
      <span class="collection">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    imgSource() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
  methods: {
    itemClick() {
      this.$router.push({
        path: "/detail",
        query: {
          iid: this.goodsItem.iid,
        },
      });
    },
  },
};
</script>

<style>
.goods-list-item {
  width: 48%;
  position: relative;
}
.goods-list-item img {
  width: 100%;
  border-radius: 5px;
  margin: 0;
}
.info-container {
  height: 40px;
  text-align-last: center;
}
.info-container .title {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 4px 0;
}
.price {
  color: var(--color-tint);
  margin-right: 15px;
}
.collection {
  margin-left: 5px;
}
</style>
