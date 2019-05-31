// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import axios from "axios"
import echarts from 'echarts'
import Router from 'vue-router'
import '../static/css/base.css'
import router from './router/index'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import AjaxUrl from "../src/api/request"
// import http from '../src/util/http'
Vue.use(iView);
Vue.prototype.$axios = axios
Vue.prototype.$url = AjaxUrl
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render(h) {
    return h(App);
  }
})
