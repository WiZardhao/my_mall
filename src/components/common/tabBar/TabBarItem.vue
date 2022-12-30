<template>
  <div>
    <div class="item" @click="itemClick" :style="itemColor">
      <div class="icon"><slot name="icon"></slot></div>
      <slot name="tab-title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {};
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#ff5777",
    },
  },
  computed: {
    itemColor() {
      return this.path === this.$route.path ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.item {
  flex: 1;
  text-align: center;
  font-size: var(--font-size);
}
.icon {
  margin: 6px 0;
}
</style>
