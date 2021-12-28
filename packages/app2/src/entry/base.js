import '@babel/polyfill';
import { setPublicPath } from 'systemjs-webpack-interop';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Element from 'element-ui';
import singleSpaVue from 'single-spa-vue';
import routes from '../router';

const baseFn = () => {
    // 默认控制台不输出vue官方打印日志
    Vue.config.productionTip = false;
    // 使用devtools调试
    Vue.config.devtools = true;
    // 生成vue-router实例
    const router = new VueRouter({
        mode: 'history',
        routes
    });
    
    Vue.use(VueRouter);
    Vue.use(Element);
    // appOptions抽离
    const appOptions = {
        render: h => <div id="children2">
            <router-view></router-view>
        </div>,
        router
    };

    let vueLifecycles = {}; // 微前端
    const env = process.env.NODE_ENV;
    if (env === 'development') {
        window.App = new Vue(appOptions).$mount('#app'); // 手动挂载
    } else {
        // 注册子应用
        setPublicPath('children2');
        // 注册single-spa-vue实例
        vueLifecycles = singleSpaVue({
            Vue,
            appOptions
        });
    }
    return vueLifecycles;
}

export default baseFn;