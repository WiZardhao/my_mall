<template>
  <div class="goodsImg" v-if="Object.keys(imgs).length !== 0">
    <div class="description">
      <div class="start-tag"></div>
      <div class="desc">
        {{ imgs.desc }}
      </div>
      <div class="end-tag"></div>
    </div>
    <div class="imgList">
      <div class="info-key">{{ imgs.detailImage[0].key }}</div>
      <div class="img" v-for="(item, index) in imgs.detailImage[0].list">
        <img :src="item" alt="" @load="showImage" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsImage",
  props: {
    imgs: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    showImage() {
      this.counter += 1;
      if (this.counter === this.imgs.detailImage[0].list.length) {
        this.$emit("imgLoadAll");
      }
    },
  },
};
</script>

<style scoped>
.description {
  padding: 10px;
  font-size: 14px;
}
.start-tag {
  height: 4px;
  width: 100px;
  border-bottom: 2px solid rgb(214, 211, 211);
  border-left: 6px solid rgb(214, 211, 211);
  margin-bottom: 5px;
}
.end-tag {
  height: 4px;
  width: 100px;
  border-bottom: 2px solid rgb(214, 211, 211);
  border-right: 6px solid rgb(214, 211, 211);
  margin-top: 5px;
  float: right;
}
.info-key {
  margin-left: 10px;
  font-size: 14px;
  padding: 10px 0;
}
.img img {
  width: 100%;
}
.imgList {
  box-shadow: 0 2px 2px rgb(224, 217, 217);
  padding-bottom: 20px;
}
</style>
