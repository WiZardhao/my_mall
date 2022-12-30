<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SwiperItem",
};
</script>

<style>
.slide {
  width: 100%;
  flex-shrink: 0;
}
</style>
