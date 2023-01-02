import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "font-awesome/css/font-awesome.min.css";

//挂载Toast插件
import toast from "components/common/toast";
Vue.use(toast);

Vue.config.productionTip = false;

Vue.prototype.$eventBus = new Vue();

new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");
