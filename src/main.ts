import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { StripePlugin } from "@vue-stripe/vue-stripe";
import VueCompositionAPI from "@vue/composition-api";
import { FingerprintService } from "@/FingerprintService";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const options = {
  pk: process.env.VUE_APP_STRIPE_PUBLIC,
};

// import outsideClick from "../src/assets/js/outsideClick";
Vue.directive("clickOutside", {
  bind: function (el, binding, vNode) {
    document.addEventListener("click", binding.value);
  },
  unbind: function (el, binding, vNode) {
    document.removeEventListener("click", binding.value);
  },
});
const fps = new FingerprintService();

Vue.use(StripePlugin, options, VueCompositionAPI);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// Vue.$ioc.register('FingerprintService', new FingerprintService());

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
