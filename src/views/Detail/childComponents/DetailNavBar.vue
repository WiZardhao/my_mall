<template>
  <div>
    <nav-bar>
      <template #left>
        <div class="back" @click="backHome">
          <div class="fa fa-angle-left fa-2x"></div>
        </div>
      </template>
      <template #center>
        <div class="title">
          <div
            v-for="(item, index) in titles"
            class="title-item"
            @click="titleClick(index)"
            :class="{ active: currentIndex === index }"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    backHome() {
      this.$router.back();
    },
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  text-align: center;
  font-size: 14px;
}
.title-item {
  flex: 1;
}
.title-item.active {
  color: var(--color-tint);
}
.fa-angle-left {
  color: rgb(217, 212, 212);
  margin-top: 5px;
  margin-left: 20px;
}
</style>
