<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  border-bottom: 8px solid #eee;
  padding: 5px 0;
}
.recommend-item {
  flex: 1;
  text-align: center;
}
span {
  display: block;
}
img {
  width: 22vw;
  margin-bottom: 4px;
}
</style>
