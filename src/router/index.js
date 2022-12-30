import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("views/Home/Home");
const Category = () => import("views/Category/Category");
const Cart = () => import("views/Cart/Cart");
const User = () => import("views/User/User");
const Detail = () => import("views/Detail/Detail");

Vue.use(VueRouter);

const routes = [
  { path: "", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/category", component: Category },
  { path: "/cart", component: Cart },
  { path: "/user", component: User },
  { path: "/detail", component: Detail },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
// 解决重复点击路由报错的BUG
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
