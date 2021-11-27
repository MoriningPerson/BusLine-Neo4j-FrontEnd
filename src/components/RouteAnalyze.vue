<template>
  <div><div class="solve" id="solve4-1">
    <div class="solve-title">
      <p class ="solve-title-p" >统计停靠路线最多的站点（按照id统计）并排序，显示前15条。</p></div>
    <div class="set-routeName">
      <button type = "button"  class = "search-button" v-on:click="getStationDESCOrderByStopRouteNum()"> 查询 </button>
    </div>
    <div style="height:300px; width:100% ; background-color: white">

      <el-scrollbar style="height:100%; width: 100%">
<!--        <ul class="result-ul">-->
<!--          <li class="result-li" v-for="(item,index) in relatedStation15max" :key="index">-->
<!--            <RouteItem6 class="route-item" :stationInfo="item" :index="index"></RouteItem6>-->
<!--          </li>-->
<!--        </ul>-->
        <el-table :data="relatedStation15max"  border style="width: 100%">
          <el-table-column  prop="station.stationId"  label="站台id"  width="80"  align="center"></el-table-column>
          <el-table-column  prop="station.name"  label="站台名"  width="100"  align="center"> </el-table-column>
          <el-table-column  prop="num"  label="线路条数"  width="80"  align="center"> </el-table-column>
          <el-table-column  prop="routeName"  :formatter="routeNameData"  label="线路名"  align="center"> </el-table-column>
        </el-table>
      </el-scrollbar>
    </div>
  </div>
    <div class="solve" id="solve4-2">
      <div class="solve-title">
        <p class ="solve-title-p" >查询地铁站点数，始发站点数，终点站点数，单行站点数</p></div>
      <div class="set-routeName">
        <button type = "button"  class = "search-button" v-on:click="getStationTypeNum()"> 查询 </button>
      </div>
      <div style="height:300px; width:80% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
<!--          <ul class="result-ul">-->
<!--            <li class="result-li" v-for="(item,index) in stationNum" :key="index">-->
<!--              <RouteItem7 class="route-item" :NumInfo="item" :index="index"></RouteItem7>-->
<!--            </li>-->
<!--          </ul>-->
          <el-table :data="stationNum" border  style="width: 100%">
            <el-table-column  prop="type"  label="类型"    align="center"></el-table-column>
            <el-table-column  prop="num"  label="数量统计"    align="center"> </el-table-column>
          </el-table>
        </el-scrollbar>
      </div>
    </div>

    <div class="solve" id="solve4-2-2">
      <div class="solve-title">
        <p class ="solve-title-p" >查询某条线路单行站</p></div>
      <div class="set-routeName-default">
        <input class="set-routeName-default-input" type="text" placeholder="请填写line名称" v-model="lineName">
      </div>
      <div class="set-routeName">
        <button type = "button"  class = "search-button" v-on:click="getOneWayStation()"> 查询 </button>
      </div>
      <div style="height:300px; width:80% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
          <el-table :data="getOneWayStationResult"  border style="width: 100%">
            <el-table-column  prop="name"  label="站台名"   align="center"> </el-table-column>
          </el-table>
        </el-scrollbar>
      </div>
    </div>

    <div class="solve" id="solve4-3">
      <div class="solve-title">
        <p class ="solve-title-p" >得到line类型统计</p></div>
      <div class="set-routeName">
        <button type = "button"  class = "search-button" v-on:click="getLineTypeNum()"> 查询 </button>
      </div>
      <div style="height:300px; width:80% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
<!--          <ul class="result-ul">-->
<!--            <li class="result-li" v-for="(item,index) in lineType" :key="index">-->
<!--              <RouteItem8 class="route-item" :NumInfo="item" :index="index"></RouteItem8>-->
<!--            </li>-->
<!--          </ul>-->
          <el-table :data="lineType" border  style="width: 100%">
            <el-table-column  prop="type"  label="类型"    align="center"></el-table-column>
            <el-table-column  prop="num"  label="数量统计"    align="center"> </el-table-column>
          </el-table>
        </el-scrollbar>
      </div>
    </div>

    <div class="solve" id="solve4-4">
      <div class="solve-title">
        <p class ="solve-title-p" >得到两条路线重复的站点</p></div>
      <div class="set-routeName">
        <div class="set-routeName-p">
          <span>线路名称（routeName）</span>
        </div>
        <div class="set-routeName-default">
          <input class="set-routeName-default-input" type="text" placeholder="请填写线路名称" v-model="routeName3">
        </div>
        <div class="set-routeName-default">
          <input class="set-routeName-default-input" type="text" placeholder="请填写线路名称" v-model="routeName4">
        </div>
        <button type = "button"  class = "search-button" v-on:click="getRouteSameStation()"> 查询 </button>
      </div>
      <div style="height:300px; width:80% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
<!--          <ul class="result-ul">-->
<!--            <li class="result-li" v-for="(item,index) in stationInfo" :key="index">-->
<!--              <RouteItem9 class="route-item" :stationInfo="item" :index="index"></RouteItem9>-->
<!--            </li>-->
<!--          </ul>-->
          <el-table :data="stationInfo" border  style="width: 100%">
            <el-table-column  prop="stationId"  label="站台id"    align="center"></el-table-column>
            <el-table-column  prop="name"  label="站台名称"    align="center"> </el-table-column>
            <el-table-column  prop="english"  label="站台英文"    align="center"> </el-table-column>
          </el-table>
        </el-scrollbar>
      </div>
    </div>


  <div class="solve" id="solve4-5">
    <div class="solve-title">
    <p class ="solve-title-p" >查询某线路⼀共有多少条可以换乘的线路</p></div>
    <div class="set-routeName">
      <div class="set-routeName-p">
        <span>线路名称（routeName）</span>
      </div>
      <div class="set-routeName-default">
        <input class="set-routeName-default-input" type="text" placeholder="请填写线路名称" v-model="routeName">
      </div>
      <button type = "button"  class = "search-button" v-on:click="queryRoutesRelated()"> 查询 </button>
    </div>
    <div style="height:300px; width:80%; background-color: white">
      <el-scrollbar style="height:100%; width: 100%">

        <ul class="result-ul">
          <li class="result-li" v-for="(item,index) in relatedRoutes" :key="index">
            <RouteItem1 class="route-item" :routeInfo="item" :index="index"></RouteItem1>
          </li>
        </ul>
      </el-scrollbar>
    </div>
  </div>

  <div class="solve" id="solve4-6">
    <div class="solve-title">
      <p class ="solve-title-p" >根据线路可换乘数量降序排序，显示前15条。</p></div>
    <div class="set-routeName">
      <button type = "button"  class = "search-button" v-on:click="queryRoutesRelated15max()"> 查询 </button>
    </div>
    <div style="height:300px; width:80% ; background-color: white">
      <el-scrollbar style="height:100%; width: 100%">

        <ul class="result-ul">
          <li class="result-li" v-for="(item,index) in relatedRoutes15max" :key="index">
            <RouteItem2 class="route-item" :routeInfo="item" :index="index"></RouteItem2>
          </li>
        </ul>
      </el-scrollbar>
    </div>
  </div>
  <div class="solve" id="solve4-7">
      <div class="solve-title">
        <p class ="solve-title-p" >查询连接两个站台之间线路最多的两个站台并且按照降序排列，显示前15个。</p></div>
      <div class="set-routeName">
        <button type = "button"  class = "search-button" v-on:click="queryMaxRoutesBetween()"> 查询 </button>
      </div>
      <div style="height:300px; width:80% ; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <ul class="result-ul">
            <li class="result-li" v-for="(item,index) in stationsWithMaxRoutesBetween" :key="index">
              <RouteItem3 class="route-item" :routeInfo="item" :index="index"></RouteItem3>
            </li>
          </ul>
        </el-scrollbar>
      </div>
  </div>

  <div class="solve" id="solve4-8">
      <div class="solve-title">
        <p class ="solve-title-p" >根据站点数量对线路进⾏排序，显示前15条。</p></div>
      <div class="set-routeName">
        <button type = "button"  class = "search-button" v-on:click="queryRoutesWithMaxStations()"> 查询 </button>
      </div>
      <div style="height:300px; width:80% ; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <ul class="result-ul">
            <li class="result-li" v-for="(item,index) in routesWithMaxStations" :key="index">
              <RouteItem4 class="route-item" :routeInfo="item" :index="index"></RouteItem4>
            </li>
          </ul>
        </el-scrollbar>
      </div>
  </div>

  <div class="solve" id="solve4-9">
      <div class="solve-title">
        <p class ="solve-title-p" >根据运⾏时间对线路进⾏排序，运⾏时间由班次数据计算⽽得，显示前15条。</p></div>
      <div class="set-routeName">
        <button type = "button"  class = "search-button" v-on:click="queryRoutesWithMaxRunTime()"> 查询 </button>
      </div>
      <div style="height:300px; width:80% ; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <ul class="result-ul">
            <li class="result-li" v-for="(item,index) in routesWithMaxRunTime" :key="index">
              <RouteItem5 class="route-item" :routeInfo="item" :index="index"></RouteItem5>
            </li>
          </ul>
        </el-scrollbar>
      </div>
  </div>

    <div class="solve" id="solve4-10">
      <div class="solve-title">
        <p class ="solve-title-p" >计算某条线路的重复系数。</p></div>
      <div class="set-routeName">
        <div class="set-routeName-p">
          <span>线路名称（routeName）</span>
        </div>
        <div class="set-routeName-default">
          <input class="set-routeName-default-input" type="text" placeholder="请填写线路名称" v-model="routeName2">
        </div>
        <button type = "button"  class = "search-button" v-on:click="queryNonrepeating()"> 查询 </button>
      </div>
      <div style="height:300px; width:80%; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">
          <div class="result"><span>{{this.nonrepeatingResult}}</span></div>

        </el-scrollbar>
      </div>
    </div>

  </div>
</template>

<script>
//import RouteItem6 from "@/components/RouteItem4-1";
//import RouteItem7 from "@/components/RouteItem4-2";
//import RouteItem8 from "@/components/RouteItem4-3";
//import RouteItem9 from "@/components/RouteItem4-4";
import RouteItem1 from "@/components/RouteItem4-5";
import RouteItem2 from "@/components/RouteItem4-6";
import RouteItem3 from "@/components/RouteItem4-7";
import RouteItem4 from "@/components/RouteItem4-8";
import RouteItem5 from "@/components/RouteItem4-9";
export default {
  name: "RouteAnalyze",
  components: {
    RouteItem1,
    RouteItem2,
    RouteItem3,
    RouteItem4,
    RouteItem5,
    //RouteItem6,
    //RouteItem7,
    //RouteItem8,
    //RouteItem9
  },
  data() {
    return {
      relatedStation15max:null,
      stationNum:null,
      lineType:null,
      stationInfo:null,
      relatedRoutes: null,
      relatedRoutes15max: null,
      stationsWithMaxRoutesBetween:null,
      routesWithMaxStations: null,
      routesWithMaxRunTime:null,
      routeName: "",
      routeName2: "",
      routeName3: "",
      routeName4: "",
      nonrepeatingResult:null,
      lineName:"",
      getOneWayStationResult:null
    }
  },

  methods: {
  getStationDESCOrderByStopRouteNum(){
    this.$axios.get('http://localhost:8081/RouteEntry/getStationDESCOrderByStopRouteNum',{
      headers: {   //设置上传请求头
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      console.log(res.data.result);
      this.relatedStation15max = res.data.result;

    })
  },
    getStationTypeNum(){
      this.$axios.get('http://localhost:8081/RouteEntry/getStationTypeNum',{
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data.result);
        this.stationNum = res.data.result;

      })
    },
     getLineTypeNum(){
      this.$axios.get('http://localhost:8081/RouteEntry/getLineTypeNum',{
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data.result);
        this.lineType = res.data.result;

      })
    },
    getRouteSameStation(){
      console.log(this.routeName)
      this.$axios.get('http://localhost:8081/RouteEntry/getRouteSameStation?routeAName=' + this.routeName3+'&routeBName='+this.routeName4,{
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res);
        console.log(res.data.result[0].num);
        this.stationInfo = res.data.result[1].stationList;

      })

    },
    queryRoutesRelated(){
      console.log(this.routeName)
      this.$axios.get('http://localhost:8081/RouteEntry/related_routes?routeName=' + this.routeName,{
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res);
        console.log(res.data);
        this.relatedRoutes = res.data;

      })

    },
    queryRoutesRelated15max(){
      this.$axios.get('http://localhost:8081/RouteEntry/15max_related_routes',{
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data);
        this.relatedRoutes15max = res.data;

      })
    },
    queryMaxRoutesBetween(){
      this.$axios.get('http://localhost:8081/StationEntry/max_routes_between',{
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data);
        this.stationsWithMaxRoutesBetween = res.data;

      })
    },
    queryRoutesWithMaxStations(){
      this.$axios.get('http://localhost:8081/RouteEntry/15max_stations',{
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data);
        this.routesWithMaxStations = res.data;

      })

    },
    queryRoutesWithMaxRunTime(){
      this.$axios.get('http://localhost:8081/RouteEntry/15max_runtime',{
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data);
        this.routesWithMaxRunTime = res.data;

      })
    },
    queryNonrepeating(){
      console.log(this.routeName)
      this.$axios.get('http://localhost:8081/RouteEntry/Nonrepeating?routeName=' + this.routeName2,{
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res);
        console.log(res.data);
        this.nonrepeatingResult = res.data;

      })

    },
    getOneWayStation(){
      console.log(this.lineName)
      this.$axios.get('http://localhost:8081/RouteEntry/getOneWayStation?lineName=' + this.lineName,{
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res);
        console.log(res.data);
        this.getOneWayStationResult = res.data.result;

      })
    },
    routeNameData(row) {
      let Arr = []; //新建一个数组
      row.routeName.forEach((item) => {
        //对当前的数组进行遍历处理
        Arr.push(item + ', '); //给它们每一项加上分号和空格
      });
      return Arr; //将有分隔符的颜色数组返回
    },
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
.solve{
  margin-left: 300px;
  margin-right: 100px;
  padding: 40px;
  background-color: rgba(240,240,240,0.6);
  margin-bottom: 30px;
}
.solve-title{
  text-align:left;
  color: black;
  font-size: 17px;
}
.set-routeName{
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
}
.set-routeName-p{
  color: black;
  padding-top: 10px;
  margin-right: 30px;
}
input {
  outline: none;
  border: none;
}
.set-routeName-default-input{
  color: rgb(120, 120, 120);
  width: 100%;
  padding: 10px;
  margin-top: 5px;
}
.search-button{
  color: white;
  background-color:rgb(186, 201, 224);;
  border-color: white;
  border-radius: 0;
  letter-spacing: 8px;
  width: 70px;
  height: 34px;
  margin-top: 5px;
  cursor: pointer;
}
.el-scrollbar__wrap{
  overflow-x: hidden;
}
.result{
  margin:20px;
  text-align: left;
}
</style>