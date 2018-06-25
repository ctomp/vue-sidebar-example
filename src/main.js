import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Reset default browser styles
import "normalize.css";

import "@/assets/css/base.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
