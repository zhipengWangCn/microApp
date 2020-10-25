import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './qiankun.js'
import router from './router'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css'


import {start } from 'qiankun';

Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


start();