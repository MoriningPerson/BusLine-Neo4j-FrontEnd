<template>
  <div>
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
  },
  data() {
    return {
      relatedRoutes: null,
      relatedRoutes15max: null,
      stationsWithMaxRoutesBetween:null,
      routesWithMaxStations: null,
      routesWithMaxRunTime:null,
      routeName: "",
      routeName2: "",
      nonrepeatingResult:null
    }
  },

  methods: {
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