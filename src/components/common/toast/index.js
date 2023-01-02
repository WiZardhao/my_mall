import Toast from "./Toast";

const obj = {};

obj.install = function (Vue) {
  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast);
  //2.根据组件构造器创建一个组件toast
  const toast = new toastConstructor();
  //3.把toast组件挂载到一个div中
  toast.$mount(document.createElement("div"));
  //4.在body中添加这个div，在加载main.js时会在body中自动挂载toast组件
  document.body.appendChild(toast.$el);
  //5.在Vue的原型对象中挂载toast,以后在当前Vue实例中可以通过Vue.$toast获取Toast组件
  Vue.prototype.$toast = toast;
};

export default obj;
