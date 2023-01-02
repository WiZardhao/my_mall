export default {
  addCart(context, payload) {
    //返回Promise实例，在加入购物车后执行回调弹出弹窗toast
    return new Promise((resolve, reject) => {
      //判断购物车中是否有当前商品
      let oldProduct = context.state.cartList.find(
        (item) => item.iid === payload.iid
      );
      //有当前商品则商品数量+1,没有则将商品加入购物车
      if (oldProduct) {
        context.commit("addCount", oldProduct);
        resolve("当前商品数量+1");
      } else {
        payload.count = 1;
        payload.checked = true;
        context.commit("addToCart", payload);
        resolve("当前商品已加入购物车");
      }
    });
  },
};
