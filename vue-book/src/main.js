import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { ObserveVisibility } from "vue-observe-visibility";
Vue.directive("observe", ObserveVisibility);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
