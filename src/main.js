// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/store'
import axios from 'axios'

import './assets/css/initial.scss';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import {get,post} from './request/http'
import {API_MODULE} from './request/api'

import './assets/font/iconfont.css'

Vue.prototype.GET = get;
Vue.prototype.POST = post;
Vue.prototype.API_MODULE = API_MODULE;

Vue.use(Vuex);
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
