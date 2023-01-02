<template>
  <div class="cart-bottom-bar">
    <div class="select-all">
      <div class="button" @click="selectAllProduct">
        <check-button :is-checked="isSelectAll"></check-button>
      </div>
      <span>全选</span>
    </div>
    <div class="total-price">
      <div>总计：¥{{ totalPrice }}</div>
    </div>
    <div class="calculate" @click="calcClick">
      <div>去结算({{ count }})</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import CheckButton from "components/common/checkButton/CheckButton";
export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((prevalue, item) => {
          return prevalue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    count() {
      return this.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) {
        return false;
      }
      return !this.cartList.find((item) => !item.checked);
    },
  },
  methods: {
    selectAllProduct() {
      if (this.isSelectAll) {
        for (let item of this.cartList) {
          item.checked = false;
        }
      } else {
        for (let item of this.cartList) {
          item.checked = true;
        }
      }
      console.log(this.cartList);
    },
    calcClick() {
      if (this.cartList.length === 0) {
        this.$toast.show("购物车商品为空！", 1500);
      }
    },
  },
};
</script>

<style scoped>
.cart-bottom-bar {
  height: 40px;
  background-color: rgb(241, 237, 237);
  display: flex;
  justify-content: space-around;
}
.select-all {
  flex: 2;
  display: flex;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
}
.select-all span {
  margin-left: 5px;
  line-height: 40px;
}
.total-price {
  flex: 3;
  line-height: 40px;
  text-align: left;
}
.calculate {
  text-align: center;
  flex: 3;
  line-height: 40px;
  background-color: var(--color-tint);
  color: #fff;
}
</style>
