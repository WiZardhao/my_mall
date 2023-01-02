<template>
  <div class="cart-list-item">
    <div class="select">
      <check-button :is-checked="product.checked" @click.native="buttonClick" />
    </div>
    <div class="img">
      <img :src="product.img" alt="" />
    </div>
    <div class="descript">
      <div class="title">
        <p>{{ product.title }}</p>
      </div>
      <div class="desc">
        <p>{{ product.desc }}</p>
      </div>
      <div class="price-container">
        <div class="price">¥{{ product.price }}</div>
        <div class="count">x{{ count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/common/checkButton/CheckButton";
export default {
  name: "CartListItem",
  components: { CheckButton },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    count() {
      return this.product.count;
    },
  },
  methods: {
    buttonClick() {
      this.product.checked = !this.product.checked;
    },
  },
};
</script>

<style scoped>
.cart-list-item {
  display: flex;
  height: 120px;
  padding: 5px 5px 5px 0;
  box-shadow: 0 2px 2px rgb(224, 217, 217);
}
.select {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  padding-right: 10px;
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img img {
  width: 100%;
  border-radius: 5px;
}
.descript {
  flex: 10;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.title {
  margin-top: 15px;
  overflow: hidden;
}
.title p {
  width: 220px;
  overflow: hidden;
  font-size: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.desc {
  overflow: hidden;
  margin-top: 10px;
}
.desc p {
  width: 220px;
  overflow: hidden;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price-container {
  margin-top: 30px;
  display: flex;
}
.price-container div {
  flex: 1;
}
.price-container .count {
  padding-right: 30px;
  text-align: right;
}
</style>
