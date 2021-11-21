<template>
  <div class="nav-container">
    <nav class="center-nav">
      <div class="nav-div" v-on:click="analysisUnfold()">
      <p :class='{nav_title: !analysis_unfold,nav_title_click: analysis_unfold}'>分析查询</p>
        <div class="nav-next" v-on:click="stationAnalyze()" v-if="analysis_unfold">
          <p :class='{nav_p: !station_analysis_click,nav_p_click: station_analysis_click}'>统计站点信息</p>
        </div>
        <div class="nav-next" v-on:click="routeAnalyze()" v-if="analysis_unfold">
          <p :class='{nav_p: !route_analysis_click,nav_p_click: route_analysis_click}'>统计线路信息</p>
        </div>
        <div class="nav-next" v-on:click="routeChange()" v-if="analysis_unfold">
          <p :class='{nav_p: !route_change_click,nav_p_click: route_change_click}'>更改线路信息</p>
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
      analysis_unfold: false,
      station_analysis_click: false,
      route_analysis_click: false,
      route_change_click:false
    }
  },
  methods: {
    analysisUnfold(){
      this.analysis_unfold = true;
    },
    stationAnalyze(){
      this.station_analysis_click = true;
      this.route_analysis_click = false;
      this.route_change_click = false;

    },
    routeAnalyze(){
      this.route_analysis_click = true;
      this.station_analysis_click = false;
      this.route_change_click = false;
      this.$router.push({
        name: 'RouteAnalyze',
      })

    },
    routeChange(){
      this.route_change_click = true;
      this.route_analysis_click = false;
      this.station_analysis_click = false;
      this.$router.push({
        name: 'RouteChange',
      })

    }

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
.center-nav{
  background-color: #2c3e50;

}
.nav-div{
  cursor: pointer;
  background-color: #2c3e50;
  padding: 6px;
}
.nav_title{

  color: white;
  font-size: 20px;
  letter-spacing: 7px;
}
.nav_title_click{

  color: rgb(186, 201, 224);
  font-size: 20px;
  letter-spacing: 7px;
}
.nav_p{
  color: white;
  font-size: 15px;
  letter-spacing: 4px;
  margin-left: 20px;
}
.nav_p_click{
  color: rgb(186, 201, 224);
  font-size: 15px;
  letter-spacing: 4px;
  margin-left: 20px;
}
</style>