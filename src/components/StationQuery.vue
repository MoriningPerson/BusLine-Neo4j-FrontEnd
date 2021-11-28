<template>
  <div>
    //
    <div id="solve2-1" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">查询某公交的全部站点(上下行不定)</p></div>
      <div class="set-routeName">
        <div class="set-routeName-p">
          <span>全部站点信息</span>
        </div>
        <div class="set-routeName-default">
          <input v-model="stationName" class="set-routeName-default-input" placeholder="请填写公交的部分名称" type="text">//v-model?
        </div>
        <button class="search-button" type="button" v-on:click="getStationByRoutePartialName()"> 查询</button>
      </div>
      <div style="height:300px; width:80%; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <ul class="result-ul">
            <li v-for="(item,index) in oneRouteAllStationInfo" :key="index" class="result-li">
              <StationItem1 :index="index" :stationInfo="item" class="route-item"></StationItem1>
            </li>
          </ul>
        </el-scrollbar>
      </div>
    </div>
    //
    // 2.2
    <!--    <div class="solve" id="solve2-2">-->
    <!--      <div class="solve-title">-->
    <!--        <p class ="solve-title-p" >获取全部公交的所有站名</p></div>-->
    <!--      <div class="set-routeName">-->
    <!--        <button type = "button"  class = "search-button" v-on:click="getAllBusAllStationName()"> 查询 </button>-->
    <!--      </div>-->
    <!--      <div style="height:300px; width:80% ; background-color: white">-->

    <!--        <el-scrollbar style="height:100%; width: 100%">-->
    <!--          <ul class="result-ul">-->
    <!--            <li class="result-li" v-for="(item,index) in stationSet" :key="index">-->
    <!--              <StationItem2 class="route-item" :NumInfo="item" :index="index"></StationItem2> //?改变class-->
    <!--            </li>-->
    <!--          </ul>-->
    <!--        </el-scrollbar>-->
    <!--      </div>-->
    <!--    </div>-->
    //
    // 2.3
    <div id="solve2-3" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">查询某个站停靠的所有线路</p></div>
      <div class="set-routeName">
        <div class="set-routeName-p">
          <span>站点名称（stationName）</span>
        </div>
        <div class="set-routeName-default">
          <input v-model="stationName" class="set-routeName-default-input" placeholder="请填写公交名称" type="text">//v-model改成？
        </div>
        <button class="search-button" type="button" v-on:click="getOneStationAllRoute()"> 查询</button>
      </div>
      <div style="height:300px; width:80%; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <ul class="result-ul">
            <li v-for="(item,index) in oneStationAllRoutes" :key="index" class="result-li">
              <StationItem3 :index="index" :routeInfo="item" class="route-item"></StationItem3>
            </li>
          </ul>
        </el-scrollbar>
      </div>
    </div>
    //
    // 2.4
    <div id="solve2-4" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">根据两站＆线路部分名称获取线路的运行方向、沿途站点、运行时长</p></div>
      <div class="set-routeName">
        <button class="search-button" type="button" @click="multipleQueryBetweenTwoStations()"> 查询</button>
      </div>
      <div style="height:300px; width:80% ; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <ul class="result-ul">
            <li v-for="(item,index) in routesWithMaxRunTime" :key="index" class="result-li">
              <RouteItem5 :index="index" :routeInfo="item" class="route-item"></RouteItem5>
            </li>
          </ul>
        </el-scrollbar>
      </div>
    </div>
    //
    // 2.6
    <div id="solve2-6" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">判断两站间是否可直达</p></div>
      <div class="set-routeName"> // 改为stationName
        <div class="set-routeName-p">
          <span>站点名称（stationName）</span>
        </div>
        <div class="set-routeName-default">
          <input v-model="stationName261" class="set-routeName-default-input" placeholder="请填写站点1的名称" type="text">//改v-model
        </div>
        <div class="set-routeName-default">
          <input v-model="stationName262" class="set-routeName-default-input" placeholder="请填写站点2的名称" type="text">//改v-model
        </div>
        <button class="search-button" type="button" v-on:click="judgeIfDirect()"> 查询</button>
      </div>
      <div style="height:300px; width:80%; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">
          <StationItem6 :directInfo="directInfo" class="route-item"></StationItem6>
          // class改？
        </el-scrollbar>
      </div>
    </div>
    //

    <div id="solve4-2" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">查询地铁站点数，始发站点数，终点站点数，单行站点数</p></div>
      <div class="set-routeName">
        <button class="search-button" type="button" v-on:click="getStationTypeNum()"> 查询</button>
      </div>
      <div style="height:300px; width:80% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
          <ul class="result-ul">
            <li v-for="(item,index) in stationNum" :key="index" class="result-li">
              <RouteItem7 :NumInfo="item" :index="index" class="route-item"></RouteItem7>
            </li>
          </ul>
        </el-scrollbar>
      </div>
    </div>


    <div id="solve4-4" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">得到两条路线重复的站点</p></div>
      <div class="set-routeName">
        <div class="set-routeName-p">
          <span>线路名称（routeName）</span>
        </div>
        <div class="set-routeName-default">
          <input v-model="routeName3" class="set-routeName-default-input" placeholder="请填写线路名称" type="text">
        </div>
        <div class="set-routeName-default">
          <input v-model="routeName4" class="set-routeName-default-input" placeholder="请填写线路名称" type="text">
        </div>
        <button class="search-button" type="button" v-on:click="getRouteSameStation()"> 查询</button>
      </div>
      <div style="height:300px; width:80% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
          <ul class="result-ul">
            <li v-for="(item,index) in stationInfo" :key="index" class="result-li">
              <RouteItem9 :index="index" :stationInfo="item" class="route-item"></RouteItem9>
            </li>
          </ul>
        </el-scrollbar>
      </div>
    </div>


    <div id="solve4-5" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">查询某线路⼀共有多少条可以换乘的线路</p></div>
      <div class="set-routeName">
        <div class="set-routeName-p">
          <span>线路名称（routeName）</span>
        </div>
        <div class="set-routeName-default">
          <input v-model="routeName" class="set-routeName-default-input" placeholder="请填写线路名称" type="text">
        </div>
        <button class="search-button" type="button" v-on:click="queryRoutesRelated()"> 查询</button>
      </div>
      <div style="height:300px; width:80%; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <ul class="result-ul">
            <li v-for="(item,index) in relatedRoutes" :key="index" class="result-li">
              <RouteItem1 :index="index" :routeInfo="item" class="route-item"></RouteItem1>
            </li>
          </ul>
        </el-scrollbar>
      </div>
    </div>

    <div id="solve4-6" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">根据线路可换乘数量降序排序，显示前15条。</p></div>
      <div class="set-routeName">
        <button class="search-button" type="button" v-on:click="queryRoutesRelated15max()"> 查询</button>
      </div>
      <div style="height:300px; width:80% ; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <ul class="result-ul">
            <li v-for="(item,index) in relatedRoutes15max" :key="index" class="result-li">
              <RouteItem2 :index="index" :routeInfo="item" class="route-item"></RouteItem2>
            </li>
          </ul>
        </el-scrollbar>
      </div>
    </div>
    <div id="solve4-7" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">查询连接两个站台之间线路最多的两个站台并且按照降序排列，显示前15个。</p></div>
      <div class="set-routeName">
        <button class="search-button" type="button" v-on:click="queryMaxRoutesBetween()"> 查询</button>
      </div>
      <div style="height:300px; width:80% ; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <ul class="result-ul">
            <li v-for="(item,index) in stationsWithMaxRoutesBetween" :key="index" class="result-li">
              <RouteItem3 :index="index" :routeInfo="item" class="route-item"></RouteItem3>
            </li>
          </ul>
        </el-scrollbar>
      </div>
    </div>

    <div id="solve4-8" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">根据站点数量对线路进⾏排序，显示前15条。</p></div>
      <div class="set-routeName">
        <button class="search-button" type="button" v-on:click="queryRoutesWithMaxStations()"> 查询</button>
      </div>
      <div style="height:300px; width:80% ; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <ul class="result-ul">
            <li v-for="(item,index) in routesWithMaxStations" :key="index" class="result-li">
              <RouteItem4 :index="index" :routeInfo="item" class="route-item"></RouteItem4>
            </li>
          </ul>
        </el-scrollbar>
      </div>
    </div>

    <div id="solve4-9" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">根据运⾏时间对线路进⾏排序，运⾏时间由班次数据计算⽽得，显示前15条。</p></div>
      <div class="set-routeName">
        <button class="search-button" type="button" v-on:click="queryRoutesWithMaxRunTime()"> 查询</button>
      </div>
      <div style="height:300px; width:80% ; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <ul class="result-ul">
            <li v-for="(item,index) in routesWithMaxRunTime" :key="index" class="result-li">
              <RouteItem5 :index="index" :routeInfo="item" class="route-item"></RouteItem5>
            </li>
          </ul>
        </el-scrollbar>
      </div>
    </div>

    <div id="solve4-10" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">计算某条线路的重复系数。</p></div>
      <div class="set-routeName">
        <div class="set-routeName-p">
          <span>线路名称（routeName）</span>
        </div>
        <div class="set-routeName-default">
          <input v-model="routeName2" class="set-routeName-default-input" placeholder="请填写线路名称" type="text">
        </div>
        <button class="search-button" type="button" v-on:click="queryNonrepeating()"> 查询</button>
      </div>
      <div style="height:300px; width:80%; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">
          <div class="result"><span>{{ this.nonrepeatingResult }}</span></div>

        </el-scrollbar>
      </div>
    </div>

  </div>
</template>

<script>
import StationItem1 from "@/components/StationItem2-1";
// import StationItem2 from "@/components/StationItem2-2";
import StationItem3 from "@/components/StationItem2-3";

export default {
  name: "StationQuery",
  components: {
    //
    StationItem1,
    //StationItem2,
    StationItem3
    //
  },

  data() {
    return {
      oneRouteAllStationInfo: null,
      stationNum: null,
      stationSet: null,
      stationInfo: null,
      oneStationAllRoutes: null,
      ifDirect: null,
      //
      relatedRoutes15max: null,
      stationsWithMaxRoutesBetween: null,
      routesWithMaxStations: null,
      routesWithMaxRunTime: null,
      //
      stationName: "",
      //
      routeName: "",
      routeName2: "",
      stationName261: "",
      stationName262: "",
      nonrepeatingResult: null
    }
  },

  methods: {
    // 2.1
    getStationByRoutePartialName() {
      this.$axios.get('http://localhost:8081/StationEntry/getOneBusAllStationInfo', {
        headers: { //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data.result);
        this.oneRouteAllStationInfo = res.data.result;
      })
    },
    //
    // 2.2
    getAllBusAllStationName() {
      this.$axios.get('http://localhost:8081/StationEntry/getAllBusAllStationName', {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data.result);
        this.stationSet = res.data.result;

      })
    },
    //
    // 2.3
    getOneStationAllRoute() {
      console.log(this.routeName)
      this.$axios.get('http://localhost:8081/StationEntry/routes_has_station?name=' + this.name, { // 这个name是站点的名称
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res);
        console.log(res.data);
        this.oneStationAllRoutes = res.data;

      })

    },
    //
    // 2.4 怎么写3个？
    multipleQueryBetweenTwoStation() {
      this.$axios.get('http://localhost:8081/StationEntry/15max_runtime', {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data);
        this.routesWithMaxRunTime = res.data;

      })
    },
    //
    // 2.6
    judgeIfDirect() {
      console.log(this.stationName)
      this.$axios.get('http://localhost:8081/stationEntry/ifDirectRouteExists?stationName1=' + this.stationName261 + '&stationName2=' + this.stationName262, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res);
        console.log(res.data.result);
        this.ifDirect = res.data.result;
      })
    },
    //
    getStationDESCOrderByStopRouteNum() {
      this.$axios.get('http://localhost:8081/RouteEntry/getStationDESCOrderByStopRouteNum', {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data.result);
        this.relatedStation15max = res.data.result;

      })
    },
    getStationTypeNum() {
      this.$axios.get('http://localhost:8081/RouteEntry/getStationTypeNum', {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data.result);
        this.stationNum = res.data.result;

      })
    },
    getLineTypeNum() {
      this.$axios.get('http://localhost:8081/RouteEntry/getLineTypeNum', {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data.result);
        this.lineType = res.data.result;

      })
    },

    queryRoutesRelated() {
      console.log(this.routeName)
      this.$axios.get('http://localhost:8081/RouteEntry/related_routes?routeName=' + this.routeName, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res);
        console.log(res.data);
        this.relatedRoutes = res.data;

      })

    },
    queryRoutesRelated15max() {
      this.$axios.get('http://localhost:8081/RouteEntry/15max_related_routes', {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data);
        this.relatedRoutes15max = res.data;

      })
    },
    queryMaxRoutesBetween() {
      this.$axios.get('http://localhost:8081/StationEntry/max_routes_between', {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data);
        this.stationsWithMaxRoutesBetween = res.data;

      })
    },
    queryRoutesWithMaxStations() {
      this.$axios.get('http://localhost:8081/RouteEntry/15max_stations', {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data);
        this.routesWithMaxStations = res.data;

      })

    },
    queryRoutesWithMaxRunTime() {
      this.$axios.get('http://localhost:8081/RouteEntry/15max_runtime', {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data);
        this.routesWithMaxRunTime = res.data;

      })
    },
    queryNonrepeating() {
      console.log(this.routeName)
      this.$axios.get('http://localhost:8081/RouteEntry/Nonrepeating?routeName=' + this.routeName2, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res);
        console.log(res.data);
        this.nonrepeatingResult = res.data;

      })

    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
}

.solve {
  margin-left: 300px;
  margin-right: 100px;
  padding: 40px;
  background-color: rgba(240, 240, 240, 0.6);
  margin-bottom: 30px;
}

.solve-title {
  text-align: left;
  color: black;
  font-size: 17px;
}

.set-routeName {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
}

.set-routeName-p {
  color: black;
  padding-top: 10px;
  margin-right: 30px;
}

input {
  outline: none;
  border: none;
}

.set-routeName-default-input {
  color: rgb(120, 120, 120);
  width: 100%;
  padding: 10px;
  margin-top: 5px;
}

.search-button {
  color: white;
  background-color: rgb(186, 201, 224);;
  border-color: white;
  border-radius: 0;
  letter-spacing: 8px;
  width: 70px;
  height: 34px;
  margin-top: 5px;
  cursor: pointer;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
}

.result {
  margin: 20px;
  text-align: left;
}
</style>