<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    click: {
      type: Boolean,
      default() {
        return false;
      },
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  mounted() {
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) return;
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: this.click,
        pullUpLoad: this.pullUpLoad,
      });
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    },
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    getY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>

<style></style>
