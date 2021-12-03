<template>
  <div class="nav-container">
    <nav class="center-nav">
      <div class="nav-div" @click="stationUnfold()">
        <p :class='{nav_title: !station_unfold,nav_title_click: station_unfold}'>站点查询</p>
        <div v-if="station_unfold" class="nav-next" @click="oneRouteStationQuery()">
          <p :class='{nav_p: !oneRouteAllStation_query_click,nav_p_click: oneRouteAllStation_query_click}'>公交站点</p>
        </div>
        <div v-if="station_unfold" class="nav-next" @click="oneStationAllRouteQuery()">
          <p :class='{nav_p: !oneStationAllRoute_query_click,nav_p_click: oneStationAllRoute_query_click}'>停靠线路</p>
        </div>
        <div v-if="station_unfold" class="nav-next" @click="alongStationQuery()">
          <p :class='{nav_p: !alongStation_query_click,nav_p_click: alongStation_query_click}'>沿途信息</p>
        </div>

        <div v-if="station_unfold" class="nav-next" @click="bestPlanQuery()">
          <p :class='{nav_p: !bestPlan_query_click,nav_p_click: bestPlan_query_click}'>最优路线</p>
        </div>
        <div v-if="station_unfold" class="nav-next" @click="ifDirectQuery()">
          <p :class='{nav_p: !ifDirect_query_click,nav_p_click: ifDirect_query_click}'>直达查询</p>
        </div>

      </div>

      <div class="nav-div" @click="analysisUnfold()">
        <p :class='{nav_title: !analysis_unfold,nav_title_click: analysis_unfold}'>分析查询</p>
<!--        <div v-if="analysis_unfold" class="nav-next" @click="stationAnalyze()">-->
<!--          <p :class='{nav_p: !station_analysis_click,nav_p_click: station_analysis_click}'>统计站点信息</p>-->
<!--        </div>-->
        <div v-if="analysis_unfold" class="nav-next" @click="routeAnalyze()">
          <p :class='{nav_p: !route_analysis_click,nav_p_click: route_analysis_click}'>统计线路信息</p>
        </div>
        <div v-if="analysis_unfold" class="nav-next" @click="routeChange()">
          <p :class='{nav_p: !route_change_click,nav_p_click: route_change_click}'>更改线路信息</p>
        </div>
      </div>

      <div class="nav-div" @click="runsUnfold()">
        <p :class='{nav_title: !runs_unfold,nav_title_click: runs_unfold}'>班次查询</p>
        <div v-if="runs_unfold" class="nav-next" @click="runsAnalyze()">
          <p :class='{nav_p: !route_runs_click,nav_p_click: route_runs_click}'>线路班次信息</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: "Navigation",
  data() {
    return {
      station_unfold: false,
      station_query_click: false,
      oneRouteAllStation_query_click: false, //2.1
      oneStationAllRoute_query_click: false, //2.3
      alongStation_query_click:false,
      bestPlan_query_click: false, //2.5
      ifDirect_query_click: false, //2.6
      // 分析查询
      analysis_unfold: false,
      station_analysis_click: false,
      route_analysis_click: false,
      // 前端实验
      try_unfold: false,
      tryV_click: false,
      dropDown_click: false,
      // 线路更改
      route_change_click: false,
      //班次查询
      runs_unfold:false,
      route_runs_click:false,


    }
  },
  methods: {
    // 2. 站点查询
    stationUnfold() {
      this.station_unfold = true;
      // 关闭 分析查询
      this.route_analysis_click = false;
      this.route_change_click = false;
      this.station_analysis_click = false;
      //关闭班次查询
      this.route_runs_click = false;
    },
    // 2.1
    oneRouteStationQuery() {
      this.oneRouteAllStation_query_click = true;
      // 关闭“分析查询”的两个子菜单
      this.route_analysis_click = false;
      this.route_change_click = false;
      this.station_analysis_click = false;
      //关闭班次查询
      this.route_runs_click = false;
      // 关闭 “站点查询”的其他子菜单
      this.oneStationAllRoute_query_click = false;
      this.alongStation_query_click = false;
      this.bestPlan_query_click = false;
      this.ifDirect_query_click = false;
      //
      this.$router.push({
        name: 'oneRouteStationQuery',
      })
    },
    // 2.3
    oneStationAllRouteQuery() {
      this.oneStationAllRoute_query_click = true;
      // 关闭“分析查询”的两个子菜单
      this.route_analysis_click = false;
      this.route_change_click = false;
      this.station_analysis_click = false;
      //关闭班次查询
      this.route_runs_click = false;
      // 关闭 “站点查询”的其他子菜单
      this.oneRouteAllStation_query_click = false;
      this.alongStation_query_click = false;
      this.bestPlan_query_click = false;
      this.ifDirect_query_click = false;

      this.$router.push({
        name: 'getOneStationAllRoutesQuery',
      })
    },
    //2.4
    alongStationQuery() {
      this.alongStation_query_click = true;
      // 关闭“分析查询”的两个子菜单
      this.route_analysis_click = false;
      this.route_change_click = false;
      this.station_analysis_click = false;
      //关闭班次查询
      this.route_runs_click = false;
      // 关闭 “站点查询”的其他子菜单
      this.oneRouteAllStation_query_click = false;
      this.oneStationAllRoute_query_click = false;
      this.bestPlan_query_click = false;
      this.ifDirect_query_click = false;

      this.$router.push({
        name: 'alongStationQuery',
      })
    },
    // 2.5
    bestPlanQuery() {
      this.bestPlan_query_click = true;
      // 关闭“分析查询”的两个子菜单
      this.route_analysis_click = false;
      this.route_change_click = false;
      this.station_analysis_click = false;
      // 关闭 “站点查询”的其他子菜单
      this.oneRouteAllStation_query_click = false;
      this.oneStationAllRoute_query_click = false;
      this.alongStation_query_click = false;
      this.ifDirect_query_click = false;

      this.$router.push({
        name: 'bestRouteQuery',
      })
    },
    // 2.6
    ifDirectQuery() {
      this.ifDirect_query_click = true;
      // 关闭“分析查询”的两个子菜单
      this.route_analysis_click = false;
      this.route_change_click = false;
      this.station_analysis_click = false;
      //关闭班次查询
      this.route_runs_click = false;
      // 关闭 “站点查询”的其他子菜单
      this.oneRouteAllStation_query_click = false;
      this.oneStationAllRoute_query_click = false;
      this.alongStation_query_click = false;
      this.bestPlan_query_click = false;

      this.$router.push({
        name: 'judgeIfDirectQuery',
      })
    },
    //
    analysisUnfold() {
      this.analysis_unfold = true;
    },
    runsUnfold(){
      this.runs_unfold = true;
    },
    stationAnalyze() {
      this.station_analysis_click = true;
      this.route_analysis_click = false;
      this.route_change_click = false;
      this.route_runs_click = false;

    },
    routeAnalyze() {
      this.route_analysis_click = true;
      this.station_analysis_click = false;
      this.route_change_click = false;
      this.route_runs_click = false;
      this.$router.push({
        name: 'RouteAnalyze',
      })

    },
    runsAnalyze() {
      this.route_runs_click = true;
      this.route_analysis_click = false;
      this.station_analysis_click = false;
      this.route_change_click = false;
      this.$router.push({
        name: 'RunsAnalyze',
      })

    },
    routeChange() {
      this.route_change_click = true;
      this.route_analysis_click = false;
      this.station_analysis_click = false;
      this.route_runs_click = false;
      this.$router.push({
        name: 'RouteChange',
      })
    },

  },
}
</script>

<style scoped>
.nav-container {
  position: fixed;
  background-color: #2c3e50;
  text-align: center;
  width: 220px;
}

.center-nav {
  background-color: #2c3e50;

}

.nav-div {
  cursor: pointer;
  background-color: #2c3e50;
  padding: 6px;
}

.nav_title {

  color: white;
  font-size: 20px;
  letter-spacing: 7px;
}

.nav_title_click {

  color: rgb(186, 201, 224);
  font-size: 20px;
  letter-spacing: 7px;
}

.nav_p {
  color: white;
  font-size: 15px;
  letter-spacing: 4px;
  margin-left: 20px;
}

.nav_p_click {
  color: rgb(186, 201, 224);
  font-size: 15px;
  letter-spacing: 4px;
  margin-left: 20px;
}
</style>