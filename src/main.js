import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

Vue.directive("show-at", {
  bind(el, binding) {
    let windowSize = window.innerWidth;
    if (binding.arg == "pc") {
      windowSize < 768
        ? (el.style.display = "none")
        : (el.style.display = "block");
      window.addEventListener("resize", () => {
        windowSize = window.innerWidth;
        windowSize < 768
          ? (el.style.display = "none")
          : (el.style.display = "block");
      });
    }
    if (binding.arg == "mobile") {
      windowSize <= 768
        ? (el.style.display = "block")
        : (el.style.display = "none");
      window.addEventListener("resize", () => {
        windowSize = window.innerWidth;
        windowSize <= 768
          ? (el.style.display = "block")
          : (el.style.display = "none");
      });
    }
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
