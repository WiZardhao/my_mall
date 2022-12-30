<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(title, index) in titles"
      @click="tabClick(index)"
      :class="{ active: index === currentIndex }"
    >
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      defaullt() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    tabClick(index) {
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 3px;
}
.tab-control-item.active span {
  border-bottom: 2px solid var(--color-tint);
  color: var(--color-high-text);
}
</style>
