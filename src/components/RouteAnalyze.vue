<template>
  <div>

    <div id="solve1" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">查询某线路基本信息</p></div>
      <div class="set-routeName">
        <el-row>
          <el-col span="12">
            <input v-model="lineName2" class="set-routeName-default-input" placeholder="请填写线路名称" type="text">
          </el-col>
          <el-col span="12">
            <button class="search-button" type="button" v-on:click="queryLineInfo()"><i class="iconfont">&#xe638;</i> 查询</button>
          </el-col>
        </el-row>
        <br>
      </div>
      <div style="height:300px; width:80%; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <el-card class="box-card">
            <div slot="header">
              <div class="text-wrapper"><i class="iconfont">&#xe6e5;</i>
                &nbsp;&nbsp;线路</div>
            </div>
            <el-descriptions  :data="lineInfo"  border>
              <el-descriptions-item label="LineId">{{lineInfo.lineId}}</el-descriptions-item>
              <el-descriptions-item label="名称">{{lineInfo.name}}</el-descriptions-item>
              <el-descriptions-item label="耗时">{{lineInfo.oneWayTime}}</el-descriptions-item>
              <el-descriptions-item label="类型">{{lineInfo.type}}</el-descriptions-item>
              <el-descriptions-item label="方向">{{lineInfo.directional}}</el-descriptions-item>
              <el-descriptions-item label="发车间隔">{{lineInfo.interval}}</el-descriptions-item>
              <el-descriptions-item label="长度">{{lineInfo.kilometer}}</el-descriptions-item>
              <el-descriptions-item label="线路">{{lineInfo.route}}</el-descriptions-item>
            </el-descriptions>

          </el-card>
        </el-scrollbar>
      </div>
    </div>
    <div id="solve4-1" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">统计停靠路线最多的站点（按照id统计）并排序，显示前15条。</p></div>
      <div class="set-routeName">
        <button class="search-button" type="button" v-on:click="getStationDESCOrderByStopRouteNum()"><i class="iconfont">&#xe638;</i>查询</button>
      </div>
      <br>
      <div style="height:300px; width:100% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
          <el-table :data="relatedStation15max" border style="width: 100%">
            <el-table-column align="center" label="站台id" prop="station.stationId" width="80"></el-table-column>
            <el-table-column align="center" label="站台名" prop="station.name" width="100"></el-table-column>
            <el-table-column align="center" label="线路条数" prop="num" width="80"></el-table-column>
            <el-table-column :formatter="routeNameData" align="center" label="线路名" prop="routeName"></el-table-column>
          </el-table>
        </el-scrollbar>
      </div>
    </div>
    <div id="solve4-2" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">查询地铁站点数，始发站点数，终点站点数，单行站点数</p></div>
      <div class="set-routeName">
        <button class="search-button" type="button" v-on:click="getStationTypeNum()"><i class="iconfont">&#xe638;</i> 查询</button>
      </div>
      <br>
      <div style="height:300px; width:80% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
          <el-table :data="stationNum" border style="width: 100%">
            <el-table-column align="center" label="类型" prop="type"></el-table-column>
            <el-table-column align="center" label="数量统计" prop="num"></el-table-column>
          </el-table>
        </el-scrollbar>
      </div>
    </div>

    <div id="solve4-2-2" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">查询某条线路单行站</p></div>
      <el-row>
        <el-col span="12">
            <input v-model="lineName" class="set-routeName-default-input" placeholder="请填写line名称" type="text">
        </el-col>
        <el-col span="12">
            <button class="search-button" type="button" v-on:click="getOneWayStation()"><i class="iconfont">&#xe638;</i> 查询</button>
        </el-col>
      </el-row>
      <br>
      <div style="height:300px; width:80% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
          <el-table :data="getOneWayStationResult" border style="width: 100%">
            <el-table-column align="center" label="站台名" prop="name"></el-table-column>
          </el-table>
        </el-scrollbar>
      </div>
    </div>

    <div id="solve4-3" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">得到line类型统计</p></div>
      <div class="set-routeName">
        <button class="search-button" type="button" v-on:click="getLineTypeNum()"><i class="iconfont">&#xe638;</i> 查询</button>
      </div>
      <br>
      <div style="height:300px; width:80% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
          <el-table :data="lineType" border style="width: 100%">
            <el-table-column align="center" label="类型" prop="type"></el-table-column>
            <el-table-column align="center" label="数量统计" prop="num"></el-table-column>
          </el-table>
        </el-scrollbar>
      </div>
    </div>

    <div id="solve4-4" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">得到两条路线重复的站点</p></div>
      <div class="set-routeName">
        <el-row>
          <el-col span="8">
              <input v-model="routeName3" class="set-routeName-default-input" placeholder="请填写线路名称" type="text">
          </el-col>
          <el-col span="8">
              <input v-model="routeName4" class="set-routeName-default-input" placeholder="请填写线路名称" type="text">
          </el-col>
          <el-col span="8">
            <button class="search-button" type="button" v-on:click="getRouteSameStation()"><i class="iconfont">&#xe638;</i> 查询</button>
          </el-col>
        </el-row>
        <br>

      </div>
      <div style="height:300px; width:80% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
          <el-table :data="stationInfo" border style="width: 100%">
            <el-table-column align="center" label="站台id" prop="stationId"></el-table-column>
            <el-table-column align="center" label="站台名称" prop="name"></el-table-column>
            <el-table-column align="center" label="站台英文" prop="english"></el-table-column>
          </el-table>
        </el-scrollbar>
      </div>
    </div>


    <div id="solve4-5" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">查询某线路⼀共有多少条可以换乘的线路</p></div>
      <div class="set-routeName">
        <el-row>
          <el-col span="12">
            <input v-model="routeName" class="set-routeName-default-input" placeholder="请填写线路名称" type="text">
          </el-col>
          <el-col span="12">
            <button class="search-button" type="button" v-on:click="queryRoutesRelated()"><i class="iconfont">&#xe638;</i> 查询</button>
          </el-col>
        </el-row>
        <br>
      </div>
      <div style="height:300px; width:80%; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <el-card class="box-card">
            <div slot="header">
              <div class="text-wrapper"><i class="iconfont">&#xe6ab;</i>
                &nbsp;&nbsp;站点</div>
            </div>
            <el-timeline  align="middle">
              <el-timeline-item v-for="(item,index) of relatedRoutes" :key="index" :timestamp=index placement="top"  :icon="placeIcon">
                <el-card class="text-wrapper">
                  <div slot="header" class="clearfix">
                    <span>{{item.stationName}}</span>
                  </div>
                  <div v-for="(item2,index2) of item.route" :key="index2" class="text item">
                    <span><i class="iconfont">&#xe600;</i>&nbsp;&nbsp;{{item2}}&nbsp;&nbsp;</span>
                  </div>
                </el-card >
              </el-timeline-item>
            </el-timeline>
          </el-card>
        </el-scrollbar>
      </div>
    </div>

    <div id="solve4-6" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">根据线路可换乘数量降序排序，显示前15条。</p></div>
      <div class="set-routeName">
        <button class="search-button" type="button" v-on:click="queryRoutesRelated15max()"><i class="iconfont">&#xe638;</i> 查询</button>
      </div>
      <br>
      <div style="height:300px; width:80% ; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">
          <el-table :data="relatedRoutes15max" border style="width: 100%">
            <el-table-column align="center" label="序号" type="index" prop="index" width="50"></el-table-column>
            <el-table-column align="center" label="线路名" prop="name"></el-table-column>
            <el-table-column align="center" label="可换乘数量" prop="count"></el-table-column>
          </el-table>
        </el-scrollbar>
      </div>
    </div>
    <div id="solve4-7" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">查询连接两个相邻站台之间线路最多的两个站台并且按照降序排列，显示前15个。</p></div>
      <div class="set-routeName">
        <button class="search-button" type="button" v-on:click="queryMaxRoutesBetween()"><i class="iconfont">&#xe638;</i> 查询</button>
      </div>
      <br>
      <div style="height:300px; width:80% ; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <el-table :data="stationsWithMaxRoutesBetween" border style="width: 100%">
            <el-table-column align="center" label="序号" type="index" prop="index" width="50"></el-table-column>
            <el-table-column align="center" label="出发站" prop="m1.name"></el-table-column>
            <el-table-column align="center" label="到达站" prop="n1.name"></el-table-column>
            <el-table-column align="center" label="直达线路数" prop="count"></el-table-column>
          </el-table>
        </el-scrollbar>
      </div>
    </div>

    <div id="solve4-8" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">根据站点数量对线路进⾏排序，显示前15条。</p></div>
      <div class="set-routeName">
        <button class="search-button" type="button" v-on:click="queryRoutesWithMaxStations()"><i class="iconfont">&#xe638;</i> 查询</button>
      </div>
      <br>
      <div style="height:300px; width:80% ; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <el-table :data="routesWithMaxStations" border style="width: 100%">
            <el-table-column align="center" label="序号" type="index" prop="index" width="50"></el-table-column>
            <el-table-column align="center" label="线路名称" prop="s.name"></el-table-column>
            <el-table-column align="center" label="站点数量" prop="count"></el-table-column>
          </el-table>
        </el-scrollbar>
      </div>
    </div>

    <div id="solve4-9" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">根据运⾏时间对线路进⾏排序，运⾏时间由班次数据计算⽽得，显示前15条。</p></div>
      <div class="set-routeName">
        <button class="search-button" type="button" v-on:click="queryRoutesWithMaxRunTime()"><i class="iconfont">&#xe638;</i> 查询</button>
      </div>
      <br>
      <div style="height:300px; width:80% ; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">
          <el-table :data="routesWithMaxRunTime" border style="width: 100%">
            <el-table-column align="center" label="序号" type="index" prop="index" width="50"></el-table-column>
            <el-table-column align="center" label="线路名称" prop="routeName"></el-table-column>
            <el-table-column align="center" label="运行时间(min)" prop="minutes"></el-table-column>
            <el-table-column align="center" label="起始站" prop="start"></el-table-column>
            <el-table-column align="center" label="终点站" prop="end"></el-table-column>
          </el-table>
        </el-scrollbar>
      </div>
    </div>

    <div id="solve4-10" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">计算某条线路的重复系数。</p></div>
      <div class="set-routeName">
        <el-row>
          <el-col span="12">
              <input v-model="routeName2" class="set-routeName-default-input" placeholder="请填写线路名称" type="text">
          </el-col>
          <el-col span="12">
            <button class="search-button" type="button" v-on:click="queryNonrepeating()"><i class="iconfont">&#xe638;</i> 查询</button>
          </el-col>
        </el-row>
        <br>
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
export default {
  name: "RouteAnalyze",
  components: {
  },
  data() {
    return {
      relatedStation15max: null,
      stationNum: null,
      lineType: null,
      stationInfo: null,
      relatedRoutes: null,
      relatedRoutes15max: null,
      stationsWithMaxRoutesBetween: null,
      routesWithMaxStations: null,
      routesWithMaxRunTime: null,
      routeName: "",
      routeName2: "",
      routeName3: "",
      routeName4: "",
      nonrepeatingResult: null,
      lineName: "",
      getOneWayStationResult: null,
      lineName2:"",
      lineInfo:{
        directional:'',
        interval: '',
        kilometer: null,
        lineId: null,
        name: null,
        oneWayTime: null,
        route: null,
        type:null,
      },
    }
  },

  methods: {
    getStationDESCOrderByStopRouteNum() {
      this.$axios.get('http://localhost:8081/RouteEntry/getStationDESCOrderByStopRouteNum', {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        if(res.data.code===200){
          this.$message({
            message: '查询成功',
            type: 'success'
          });
        }else if(res.data.code!==200){
          this.$message({
            message: '查询失败,请确认输入' + res.data.msg,
            type: 'warning'
          });
        }
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
        if(res.data.code===200){
          this.$message({
            message: '查询成功',
            type: 'success'
          });
        }else if(res.data.code!==200){
          this.$message({
            message: '查询失败,请确认输入' + res.data.msg,
            type: 'warning'
          });
        }
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
        if(res.data.code===200){
          this.$message({
            message: '查询成功',
            type: 'success'
          });
        }else if(res.data.code!==200){
          this.$message({
            message: '查询失败,请确认输入' + res.data.msg,
            type: 'warning'
          });
        }
        console.log(res.data.result);
        this.lineType = res.data.result;

      })
    },
    getRouteSameStation() {
      console.log(this.routeName)
      this.$axios.get('http://localhost:8081/RouteEntry/getRouteSameStation?routeAName=' + this.routeName3 + '&routeBName=' + this.routeName4, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        if(res.data.code===200){
          this.$message({
            message: '查询成功',
            type: 'success'
          });
        }else if(res.data.code!==200){
          this.$message({
            message: '查询失败,请确认输入' + res.data.msg,
            type: 'warning'
          });
        }
        console.log(res);
        console.log(res.data.result[0].num);
        this.stationInfo = res.data.result[1].stationList;

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

    },
    getOneWayStation() {
      console.log(this.lineName)
      this.$axios.get('http://localhost:8081/RouteEntry/getOneWayStation?lineName=' + this.lineName, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        if(res.data.code===200){
          this.$message({
            message: '查询成功',
            type: 'success'
          });
        }else if(res.data.code!==200){
          this.$message({
            message: '查询失败,请确认输入' + res.data.msg,
            type: 'warning'
          });
        }
        console.log(res);
        console.log(res.data);
        //可以在这里加一个函数，去把数据变成需要的样子
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
    queryLineInfo(){
      console.log(this.lineName)
      this.$axios.get('http://localhost:8081/LineEntry/getLineBasicInfoByName?name=' + this.lineName2, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res);
        console.log(res.data);
        if(res.data.code===200){
          this.$message({
            message: '查询成功',
            type: 'success'
          });
        }else if(res.data.code!==200){
          this.$message({
            message: '查询失败,请确认输入' + res.data.msg,
            type: 'warning'
          });
        }

        this.lineInfo.lineId=res.data.result.lineId;
        this.lineInfo.directional=res.data.result.directional;
        this.lineInfo.name=res.data.result.name;
        this.lineInfo.type=res.data.result.type;
        this.lineInfo.interval=res.data.result.interval;
        this.lineInfo.oneWayTime = res.data.result.oneWayTime;
        this.lineInfo.route=res.data.result.route;
        this.lineInfo.kilometer=res.data.result.kilometer;


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
.button-set{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: start;
  margin-inside: 25px;
  margin-right:10px;
  letter-spacing: 10px;
}
.text-wrapper {
  white-space: pre-wrap;
  font-family: 黑体;
  font-size: 16px;
  font-weight: bold;
  color: #11468C;
  alignment: center;
  text-align: start;
  display: flex;
  align-items: start;
}
.title-wrapper {
  white-space: pre-wrap;
  font-family: 黑体;
  font-size: 20px;
  font-weight: bold;
  color: #11468C;
  alignment: left;
  text-align: start;
}
.solve {
  margin-left: 300px;
  margin-right: 100px;
  padding: 40px;
  /*background-color: rgba(240, 240, 240, 0.6);*/
  background-color: #E1F3F2;
  /*background-color: #00CFCB;*/
  margin-bottom: 30px;
  border-radius: 12px;
  width: 800px;
  position: relative;
  opacity: 0.97;

}

.solve-title {
  text-align: left;
  color: #11468C;
  font-size: 17px;
}

.set-routeName {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: baseline;
}
input {
  outline: none;
  border: none;
}

.set-routeName-default-input {
  color: #11468C;
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
}

.search-button {
  color: white;
  /*background-color: #11468C;*/
  background-color: #00CFCB;
  border-color: #00A49D;
  border-radius: 5px;
  font-size: 16px;
  font-family: 黑体;
  letter-spacing: 8px;
  text-align: center;
  width: 120px;
  height: 35px;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  font-weight: bold;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
}

.result {
  margin: 20px;
  text-align: left;
}
.box-card {
  padding-top: 10px;
  margin-right: 30px;
  margin-left: 30px;
  margin-top:30px;
  alignment: center;
  background-color: #00CFCB;
}
</style>