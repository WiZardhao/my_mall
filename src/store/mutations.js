export default {
  addCount(state, payload) {
    state.cartList.find((item, index) => {
      if (item.iid === payload.iid) {
        item.count += 1;
      }
    });
  },
  addToCart(state, payload) {
    state.cartList.push(payload);
  },
};
