import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

const timeSettings = {
  Green: 15,
  Yellow: 3,
  Red: 10,
  Blink: 3,
};
export { timeSettings };

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
