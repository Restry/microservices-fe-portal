import "@babel/polyfill";
import { setPublicPath } from "systemjs-webpack-interop";
import Vue from "vue";
import VueRouter from "vue-router";
import Element from "element-ui";
import singleSpaVue from "single-spa-vue";
import routes from "../router";

const baseFn = () => {
  // 默认控制台不输出vue官方打印日志
  Vue.config.productionTip = false;
  // 使用devtools调试
  Vue.config.devtools = true;
  // 注册navbar
  setPublicPath("navbar");
  // 生成vue-router实例
  const router = new VueRouter({
    mode: "history",
    routes,
  });

  Vue.use(VueRouter);
  Vue.use(Element);
  // appOptions抽离
  const appOptions = {
    render: h => (
      <div id="navbar" class="micro-portal-navbar">
        <router-view></router-view>
      </div>
    ),
    router,
  };
  // 注册single-spa-vue实例
  const vueLifecycles = singleSpaVue({
    Vue,
    appOptions,
  });

  return vueLifecycles;
};

export default baseFn;
