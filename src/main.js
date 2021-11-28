import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueRouter from 'vue-router';
import Router from 'vue-router';
import RouteAnalyze from "@/components/RouteAnalyze";
import RouteChange from "@/components/RouteChange";

// 2. 站点查询的总界面
import StationQuery from "@/components/StationQuery";
//2.1
import oneRouteStationQuery from "@/components/oneRouteStationQuery";
// 2.3
import getOneStationAllRoutesQuery from "@/components/getOneStationAllRoutesQuery";
// 2.4
import alongStationQuery from "@/components/alongStationQuery";
// 2.6
import judgeIfDirectQuery from "@/components/judgeIfDirectQuery";

import tryV from "@/components/tryV";
import dropDown from "@/components/dropDown";

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
    },
    {
        path: '/route_change',
        name: 'RouteChange',
        component: RouteChange
    },
    //
    {
        path: '/tryV',
        name: 'tryV',
        component: tryV
    },
    {
        path: '/dropDown',
        name: 'dropDown',
        component: dropDown
    },
    // 2.站点查询的总页面
    {
        path: '/station_query',
        name: 'StationQuery',
        component: StationQuery
    },
    // 2.1 查询公交站点
    {
        path: '/station_query_2.1',
        name: 'oneRouteStationQuery',
        component: oneRouteStationQuery
    },
    // 2.3 查询 某个站 停靠的 所有的线路
    {
        path: '/station_query_2.3',
        name: 'getOneStationAllRoutesQuery',
        component: getOneStationAllRoutesQuery
    },
    // 2.4 查询两站线路 完整名称、沿途站点、运行时长
    {
        path: '/station_query_2.4',
        name: 'alongStationQuery',
        component: alongStationQuery
    },
    // 2.6 查询 两个站点间 是否可 直达
    {
        path: '/station_query_2.6',
        name: 'judgeIfDirectQuery',
        component: judgeIfDirectQuery
    },]
const router = new VueRouter({
    routes: routers
})

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')


