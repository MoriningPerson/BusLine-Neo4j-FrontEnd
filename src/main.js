import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueRouter from 'vue-router';
import Router from 'vue-router';
import RouteAnalyze from "@/components/RouteAnalyze";

Vue.use(ElementUI)
Vue.use(VueRouter);
Vue.config.productionTip = false
// axios需要使用prototype将axios挂载到原型上 ，$后面是自己另起的名称，以后就可以使用该名称
Vue.prototype.$axios = axios
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routers = [
  {
    path: '/route_analyze',
    name: 'RouteAnalyze',
    component: RouteAnalyze
  },]
const router = new VueRouter({
  routes: routers
})


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

