import Vue from 'vue'
import App from './App.vue'

import 'normalize.css/normalize.css'
import './assets/css/index.css'

// vant配置
// import { createApp } from 'vue';
// import Vant from 'vant';
// import 'vant/lib/index.css';

// const app = createApp();
// app.use(Vant);
// Vue.use(Vant);

import { Tabbar, TabbarItem, Button, Toast, Swipe, SwipeItem, Lazyload, Popup, Tab, Tabs } from 'vant'
import 'vant/lib/index.css'
const plugins = [Tabbar, TabbarItem, Button, Toast, Swipe, SwipeItem, Lazyload, Popup, Tab, Tabs ]
plugins.forEach(p => Vue.use(p))

// 配置axios
import service from "./utils/request";
Vue.prototype.$axios = service;

import router from './router'

// 引入移动端适配
import 'lib-flexible/flexible.js'
import './assets/css/style.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')


