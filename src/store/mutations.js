export default {
  addCount(state, payload) {
    state.cartList.find((item) => {
      if (item.iid === payload.iid) {
        item.count += 1;
      }
    });
  },
  addToCart(state, payload) {
    state.cartList.push(payload);
  },
};
