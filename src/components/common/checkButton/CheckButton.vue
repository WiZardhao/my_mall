<template>
  <div class="check-button" :class="{ active: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>

<style>
.check-button {
  width: 15px;
  height: 15px;
  border: 1px solid rgb(188, 186, 186);
  border-radius: 50%;
}
.check-button.active {
  background-color: var(--color-tint);
}
</style>
