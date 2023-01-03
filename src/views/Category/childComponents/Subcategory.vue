<template>
  <div class="subcategory">
    <div class="subItem" v-for="(item, index) in subcategoryList" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad" />
      </a>
      <div class="title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subcategory",
  data() {
    return {
      imgLoadCount: 0,
    };
  },
  props: {
    subcategoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imgLoad() {
      this.imgLoadCount += 1;
      if (this.imgLoadCount === this.subcategoryList.length) {
        this.$emit("subImgLoad");
      }
    },
  },
};
</script>

<style scoped>
.subcategory {
  display: flex;
  flex-wrap: wrap;
  padding: 5px 10px;
}
.subItem {
  width: 50%;
  margin-top: 10px;
}
.subItem img {
  width: 100%;
}
.subItem .title {
  text-align: center;
  font-size: 12px;
  margin-top: 5px;
}
</style>
