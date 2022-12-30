<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
.tabbar {
  display: flex;
  justify-content: space-around;
  height: 49px;
  background-color: var(--color-background);
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  box-shadow: 0 -2px 3px rgb(211, 209, 209);
}
</style>
