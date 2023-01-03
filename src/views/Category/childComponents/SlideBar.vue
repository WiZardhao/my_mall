<template>
  <div class="slide">
    <scroll class="slide-scroll" :click="true">
      <div
        class="tagItem"
        v-for="(item, index) in categoryList"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="tagClick(index)"
      >
        <div>{{ item.title }}</div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "SlideBar",
  components: { Scroll },
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
    currentIndex: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  methods: {
    tagClick(index) {
      this.$emit("tagClick", index);
    },
  },
};
</script>

<style scoped>
.slide {
  width: 25%;
  height: 100%;
  background-color: rgb(215, 211, 211);
  font-size: 14px;
  color: var(--color-text);
}
.slide-scroll {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 75%;
  top: 44px;
  bottom: 49px;
}
.tagItem {
  padding: 10px;
  text-align: center;
}
.tagItem.active {
  background-color: #fff;
  color: var(--color-high-text);
  border-left: 3px solid var(--color-tint);
  font-weight: bold;
}
</style>
