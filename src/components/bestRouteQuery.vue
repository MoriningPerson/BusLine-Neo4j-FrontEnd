<template>
  <div>
    <div id="solve2-5-1" class="solve">
      <div class="solve-title">
        <p class="title-wrapper"><i class="iconfont">&#xe623;</i>&nbsp;&nbsp;普通最短路</p></div>
      <div class="set-routeName">
        <div class="title-wrapper">
          <br>
          <i class="iconfont">&#xe622;</i>
          &nbsp;
          <span>站点编号 </span>
        </div>

        <div class="set-routeName-default">
          &nbsp;&nbsp;&nbsp;
          <input v-model="StationId_2511" class="set-routeName-default-input" placeholder="请填写站点1的id" type="text">
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="set-routeName-default">
          &nbsp;&nbsp;&nbsp;
          <input v-model="StationId_2512" class="set-routeName-default-input" placeholder="请填写站点2的id" type="text">
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button class="search-button" type="button" @click="bestPlanQuery251()"><i class="iconfont">&#xe638;</i></button>
      </div>

      <div style="height:300px; width:100% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
          <el-table :data="bestRouteInfo251">
            <el-table-column align= "center" label="路径长度" prop="pathLen" class="ans-wrapper"></el-table-column>
          </el-table>
          <br><br>

          <el-card class="box-card">
            <div slot="header">

              <div class="text-wrapper"><i class="iconfont">&#xe6ab;</i>
                &nbsp;&nbsp;路线</div>
            </div>
            <el-timeline  align="middle">
              <!--          <el-timeline-item v-for="(item,index) of bestRouteInfo252" :key="index" :icon='el-icon-more'>-->
              <el-timeline-item v-for="(item,index) of p1" :key="index" :color="item.color" :icon="placeIcon">
                <!--              <el-timeline-item v-for="(item,index) of p" :key="index" :color="item.color" :timestamp=item.id placement="bottom"  :icon="placeIcon">-->
                <el-card class="ans-wrapper">
                  <span>{{item.name}}</span>
                </el-card >
              </el-timeline-item>
            </el-timeline>
          </el-card>
        </el-scrollbar>

      </div>

    </div>
    <div id="solve2-5-2" class="solve">
      <div class="solve-title">
        <p class="title-wrapper"><i class="iconfont">&#xe623;</i>&nbsp;&nbsp;普通最短路</p></div>
      <div class="set-routeName">
        <div class="title-wrapper">
          <br>
          <i class="iconfont">&#xe622;</i>
          &nbsp;
          <span>站点名称 </span>
        </div>
        <div class="set-routeName-default">
          <el-autocomplete v-model="stationName252_1" :fetch-suggestions="querySearch252_1"
                           :trigger-on-focus="false" class="set-routeName-default-input" placeholder="请填写站点1的名称"
                           @input="searchFullStationName252_1" @select="handleSelect252_1"></el-autocomplete>
        </div>
        &nbsp;&nbsp;
        <div class="set-routeName-default">
          <el-autocomplete v-model="stationName252_2" :fetch-suggestions="querySearch252_2"
                           :trigger-on-focus="false" class="set-routeName-default-input" placeholder="请填写站点2的名称"
                           @input="searchFullStationName252_2" @select="handleSelect252_2"></el-autocomplete>
        </div>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button class="search-button" type="button" @click="bestPlanQuery252()"> <i class="iconfont">&#xe638;</i>
        </button>
      </div>

      <div style="height:300px; width:100% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
          <!--        <ul class="result-ul">-->
          <!--          <li v-for="(item,index) in bestRouteInfo252" :key="index" class="result-li">-->
          <!--            <StationItem252 :index="index" :bestRoute252Info="item" class="route-item"></StationItem252>-->
          <!--          </li>-->
          <!--        </ul>-->
          <el-table :data="bestRouteInfo252">
            <el-table-column align= "center" label="路径长度" prop="pathLen"></el-table-column>
          </el-table>
          <br><br>

          <el-card class="box-card">
            <div slot="header">

              <div class="text-wrapper"><i class="iconfont">&#xe6ab;</i>
                &nbsp;&nbsp;路线</div>
            </div>
            <el-timeline  align="middle">
              <!--          <el-timeline-item v-for="(item,index) of bestRouteInfo252" :key="index" :icon='el-icon-more'>-->
              <el-timeline-item v-for="(item,index) of p2" :key="index" :color="item.color" :icon="placeIcon">
<!--              <el-timeline-item v-for="(item,index) of p" :key="index" :color="item.color" :timestamp=item.id placement="bottom"  :icon="placeIcon">-->
                <el-card class="ans-wrapper">
                  <span>{{item.name}}</span>
                </el-card >
              </el-timeline-item>
            </el-timeline>
          </el-card>
        </el-scrollbar>


      </div>
    </div>

    <div id="solve2-5-3" class="solve">
      <div class="solve-title">
        <p class="title-wrapper"><i class="iconfont">&#xe623;</i>&nbsp;&nbsp;最少换乘</p></div>
      <div class="set-routeName">
        <div class="title-wrapper">
          <br>
          <i class="iconfont">&#xe622;</i>
          &nbsp;
          <span>站点编号 </span>
        </div>
        <div class="set-routeName-default">
          &nbsp;&nbsp;&nbsp;
          <input v-model="StationId_2531" class="set-routeName-default-input" placeholder="请填写站点1的id" type="text">
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="set-routeName-default">
          &nbsp;&nbsp;&nbsp;
          <input v-model="StationId_2532" class="set-routeName-default-input" placeholder="请填写站点2的id" type="text">
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button class="search-button" type="button" @click="bestPlanQuery253()"><i class="iconfont">&#xe638;</i></button>
      </div>

      <div style="height:300px; width:100% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
          <!--        <ul class="result-ul">-->
          <!--          <li v-for="(item,index) in bestRouteInfo252" :key="index" class="result-li">-->
          <!--            <StationItem252 :index="index" :bestRoute252Info="item" class="route-item"></StationItem252>-->
          <!--          </li>-->
          <!--        </ul>-->
          <el-table :data="bestRouteInfo253">
            <el-table-column align= "center" label="换乘次数" prop="changeCnt"></el-table-column>
          </el-table>
          <br><br>

          <el-card class="box-card">
            <div slot="header">

              <div class="text-wrapper"><i class="iconfont">&#xe6ab;</i>
                &nbsp;&nbsp;路线</div>
            </div>
            <el-timeline  align="middle">
              <!--          <el-timeline-item v-for="(item,index) of bestRouteInfo252" :key="index" :icon='el-icon-more'>-->
<!--              <el-timeline-item v-for="(item,index) of p" :key="index" :color="item.color" :icon="placeIcon">-->
                              <el-timeline-item v-for="(item,index) of p3" :key="index" :color="item.color" :timestamp=item.route placement="bottom"  :icon="placeIcon">
                <el-card class="ans-wrapper">
                  <span>{{item.name}}</span>
                </el-card >
              </el-timeline-item>
            </el-timeline>
          </el-card>
        </el-scrollbar>

      </div>

    </div>

    <div id="solve2-5-4" class="solve">
      <div class="solve-title">
        <p class="title-wrapper"><i class="iconfont">&#xe623;</i>&nbsp;&nbsp;最少换乘</p></div>
      <div class="set-routeName">
        <div class="title-wrapper">
          <br>
          <i class="iconfont">&#xe622;</i>
          &nbsp;
          <span>站点名称 </span>
        </div>
        <div class="set-routeName-default">
          <el-autocomplete v-model="stationName254_1" :fetch-suggestions="querySearch254_1"
                           :trigger-on-focus="false" class="set-routeName-default-input" placeholder="请填写站点1的名称"
                           @input="searchFullStationName254_1" @select="handleSelect254_1"></el-autocomplete>
        </div>
        &nbsp;&nbsp;
        <div class="set-routeName-default">
          <el-autocomplete v-model="stationName254_2" :fetch-suggestions="querySearch254_2"
                           :trigger-on-focus="false" class="set-routeName-default-input" placeholder="请填写站点2的名称"
                           @input="searchFullStationName254_2" @select="handleSelect254_2"></el-autocomplete>
        </div>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button class="search-button" type="button" @click="bestPlanQuery254()"> <i class="iconfont">&#xe638;</i>
        </button>
      </div>

      <div style="height:300px; width:100% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
          <!--        <ul class="result-ul">-->
          <!--          <li v-for="(item,index) in bestRouteInfo252" :key="index" class="result-li">-->
          <!--            <StationItem252 :index="index" :bestRoute252Info="item" class="route-item"></StationItem252>-->
          <!--          </li>-->
          <!--        </ul>-->
          <el-table :data="bestRouteInfo254">
            <el-table-column align= "center" label="换乘次数" prop="changeCnt"></el-table-column>
          </el-table>
          <br><br>

          <el-card class="box-card">
            <div slot="header">

              <div class="text-wrapper"><i class="iconfont">&#xe6ab;</i>
                &nbsp;&nbsp;路线</div>
            </div>
            <el-timeline  align="middle">
              <el-timeline-item v-for="(item,index) of p4" :key="index" :color="item.color" :timestamp=item.route placement="bottom"  :icon="placeIcon">
                <el-card class="ans-wrapper">
                  <span>{{item.name}}</span>
                </el-card >
              </el-timeline-item>
            </el-timeline>
          </el-card>
        </el-scrollbar>

      </div>
    </div>

    <div id="solve2-5-5" class="solve">
      <div class="solve-title">
        <p class="title-wrapper"><i class="iconfont">&#xe623;</i>&nbsp;&nbsp;最短运行</p></div>
      <div class="set-routeName">
        <div class="title-wrapper">
          <br>
          <i class="iconfont">&#xe622;</i>
          &nbsp;
          <span>站点编号 </span>
        </div>

        <div class="set-routeName-default">
          &nbsp;&nbsp;&nbsp;
          <input v-model="StationId_2551" class="set-routeName-default-input" placeholder="请填写站点1的id" type="text">
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="set-routeName-default">
          &nbsp;&nbsp;&nbsp;
          <input v-model="StationId_2552" class="set-routeName-default-input" placeholder="请填写站点2的id" type="text">
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button class="search-button" type="button" @click="bestPlanQuery255()"><i class="iconfont">&#xe638;</i></button>
      </div>

      <div style="height:300px; width:100% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
          <!--        <ul class="result-ul">-->
          <!--          <li v-for="(item,index) in bestRouteInfo252" :key="index" class="result-li">-->
          <!--            <StationItem252 :index="index" :bestRoute252Info="item" class="route-item"></StationItem252>-->
          <!--          </li>-->
          <!--        </ul>-->
          <el-table :data="bestRouteInfo255">
            <el-table-column align= "center" label="运行时间" prop="weight"></el-table-column>
          </el-table>
          <br><br>

          <el-card class="box-card">
            <div slot="header">

              <div class="text-wrapper"><i class="iconfont">&#xe6ab;</i>
                &nbsp;&nbsp;路线</div>
            </div>
            <el-timeline  align="middle">
              <el-timeline-item v-for="(item,index) of p5" :key="index" :color="item.color" :timestamp=item.route placement="bottom"  :icon="placeIcon">
                <el-card class="ans-wrapper">
                  <span>{{item.name}}</span>
                </el-card >
              </el-timeline-item>
            </el-timeline>
          </el-card>
        </el-scrollbar>

      </div>

    </div>

    <div id="solve2-5-6" class="solve">
      <div class="solve-title">
        <p class="title-wrapper"><i class="iconfont">&#xe623;</i>&nbsp;&nbsp;最短运行</p></div>
      <div class="set-routeName">
        <div class="title-wrapper">
          <br>
          <i class="iconfont">&#xe622;</i>
          &nbsp;
          <span>站点名称 </span>
        </div>
        <div class="set-routeName-default">
          <el-autocomplete v-model="stationName256_1" :fetch-suggestions="querySearch256_1"
                           :trigger-on-focus="false" class="set-routeName-default-input" placeholder="请填写站点1的名称"
                           @input="searchFullStationName256_1" @select="handleSelect256_1"></el-autocomplete>
        </div>
        &nbsp;&nbsp;
        <div class="set-routeName-default">
          <el-autocomplete v-model="stationName256_2" :fetch-suggestions="querySearch256_2"
                           :trigger-on-focus="false" class="set-routeName-default-input" placeholder="请填写站点2的名称"
                           @input="searchFullStationName256_2" @select="handleSelect256_2"></el-autocomplete>
        </div>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button class="search-button" type="button" @click="bestPlanQuery256()"> <i class="iconfont">&#xe638;</i>
        </button>
      </div>

      <div style="height:300px; width:100% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
          <!--        <ul class="result-ul">-->
          <!--          <li v-for="(item,index) in bestRouteInfo252" :key="index" class="result-li">-->
          <!--            <StationItem252 :index="index" :bestRoute252Info="item" class="route-item"></StationItem252>-->
          <!--          </li>-->
          <!--        </ul>-->
          <el-table :data="bestRouteInfo256">
            <el-table-column align= "center" label="运行时间" prop="weight"></el-table-column>
          </el-table>
          <br><br>

          <el-card class="box-card">
            <div slot="header">

              <div class="text-wrapper"><i class="iconfont">&#xe6ab;</i>
                &nbsp;&nbsp;路线</div>
            </div>
            <el-timeline  align="middle">
              <el-timeline-item v-for="(item,index) of p6" :key="index" :color="item.color" :timestamp=item.route placement="bottom"  :icon="placeIcon">
                <el-card class="ans-wrapper">
                  <span>{{item.name}}</span>
                </el-card >
              </el-timeline-item>
            </el-timeline>
          </el-card>
        </el-scrollbar>

      </div>
    </div>
  </div>
</template>

<script>
// import StationItem251 from "@/components/StationItem2-5-1";
// import StationItem252 from "@/components/StationItem2-5-2";
// import StationItem253 from "@/components/StationItem2-5-3";
// import StationItem254 from "@/components/StationItem2-5-4";
// import StationItem255 from "@/components/StationItem2-5-5";
// import StationItem256 from "@/components/StationItem2-5-6";
import '@/css/placeIcon.css';
import '@/css/placeIcon.js';
import '@/css/frontIcon.css';
import '@/css/frontIcon.js';

export default {
  name: "bestRouteQuery",
  components: {
    // StationItem251,
    // StationItem252,
    // StationItem253,
    // StationItem254,
    // StationItem255,
    // StationItem256
  },

  data() {
    return {
      p:null,
      p1:null,
      p2:null,
      p3:null,
      p4:null,
      bestRouteInfo251: null,
      bestRouteInfo252: null,
      bestRouteInfo253: null,
      bestRouteInfo254: null,
      bestRouteInfo255: null,
      bestRouteInfo256: null,
      // 2.5.2
      stationName252_1: "", // 用户正在输入的站名1
      stationName252_1Arr: [],
      stationName252_2: "",
      stationName252_2Arr: [],
      // 2.5.4
      stationName254_1: "", // 用户正在输入的站名1
      stationName254_1Arr: [],
      stationName254_2: "",
      stationName254_2Arr: [],
      // 2.5.6
      stationName256_1: "", // 用户正在输入的站名1
      stationName256_1Arr: [],
      stationName256_2: "",
      stationName256_2Arr: [],
      // 2.5.1 2.5.3 2.5.5
      StationId_2511:"",
      StationId_2512:"",
      StationId_2531:"",
      StationId_2532:"",
      StationId_2551:"",
      StationId_2552:"",
    }
  },
  watch: {
    // 2.5.2
    "stationName252_1": {
      deep: true,
      handler: function () {
        this.stationName252_1Arr = []; //这是定义好的用于存放下拉提醒框中数据的数组

      }
    },
    "stationName252_2": {
      deep: true,
      handler: function () {
        this.stationName252_2Arr = []; //这是定义好的用于存放下拉提醒框中数据的数组
      },
    },
    // 2.5.4
    "stationName254_1": {
      deep: true,
      handler: function () {
        this.stationName254_1Arr = []; //这是定义好的用于存放下拉提醒框中数据的数组

      }
    },
    "stationName254_2": {
      deep: true,
      handler: function () {
        this.stationName254_2Arr = []; //这是定义好的用于存放下拉提醒框中数据的数组
      },
    },
    // 2.5.6
    "stationName256_1": {
      deep: true,
      handler: function () {
        this.stationName256_1Arr = []; //这是定义好的用于存放下拉提醒框中数据的数组

      }
    },
    "stationName256_2": {
      deep: true,
      handler: function () {
        this.stationName256_2Arr = []; //这是定义好的用于存放下拉提醒框中数据的数组
      },
    },
  },

  methods: {
    // 2.5.2
    searchFullStationName252_1() {
      let _this = this
      this.$axios.get('http://localhost:8081/StationEntry/findFullStationName?inputStationName=' + _this.stationName252_1, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then(function (res) {
        if (res.data.code == 200) {
          console.log(res.data.result);
          // el-autocomplete元素 要求 数组内是对象 且有 value 属性
          for (var j = 0; j < res.data.result.length; j++) {
            var obj = {value: ""};
            obj.value = res.data.result[j];
            _this.stationName252_1Arr.push(obj);
          }
        }
      })
    },
    searchFullStationName252_2() {
      let _this = this
      this.$axios.get('http://localhost:8081/StationEntry/findFullStationName?inputStationName=' + _this.stationName252_2, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then(function (res) {
        if (res.data.code == 200) {
          console.log(res.data.result);
          // el-autocomplete元素 要求 数组内是对象 且有 value 属性
          for (var j = 0; j < res.data.result.length; j++) {
            var obj = {value: ""};
            obj.value = res.data.result[j];
            _this.stationName252_2Arr.push(obj);
          }
        }
      })
    },
    // 2.5.4
    searchFullStationName254_1() {
      let _this = this
      this.$axios.get('http://localhost:8081/StationEntry/findFullStationName?inputStationName=' + _this.stationName254_1, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then(function (res) {
        if (res.data.code == 200) {
          console.log(res.data.result);
          // el-autocomplete元素 要求 数组内是对象 且有 value 属性
          for (var j = 0; j < res.data.result.length; j++) {
            var obj = {value: ""};
            obj.value = res.data.result[j];
            _this.stationName254_1Arr.push(obj);
          }
        }
      })
    },
    searchFullStationName254_2() {
      let _this = this
      this.$axios.get('http://localhost:8081/StationEntry/findFullStationName?inputStationName=' + _this.stationName254_2, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then(function (res) {
        if (res.data.code == 200) {
          console.log(res.data.result);
          // el-autocomplete元素 要求 数组内是对象 且有 value 属性
          for (var j = 0; j < res.data.result.length; j++) {
            var obj = {value: ""};
            obj.value = res.data.result[j];
            _this.stationName254_2Arr.push(obj);
          }
        }
      })
    },
    // 2.5.6
    searchFullStationName256_1() {
      let _this = this
      this.$axios.get('http://localhost:8081/StationEntry/findFullStationName?inputStationName=' + _this.stationName256_1, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then(function (res) {
        if (res.data.code == 200) {
          console.log(res.data.result);
          // el-autocomplete元素 要求 数组内是对象 且有 value 属性
          for (var j = 0; j < res.data.result.length; j++) {
            var obj = {value: ""};
            obj.value = res.data.result[j];
            _this.stationName256_1Arr.push(obj);
          }
        }
      })
    },
    searchFullStationName256_2() {
      let _this = this
      this.$axios.get('http://localhost:8081/StationEntry/findFullStationName?inputStationName=' + _this.stationName256_2, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then(function (res) {
        if (res.data.code == 200) {
          console.log(res.data.result);
          // el-autocomplete元素 要求 数组内是对象 且有 value 属性
          for (var j = 0; j < res.data.result.length; j++) {
            var obj = {value: ""};
            obj.value = res.data.result[j];
            _this.stationName256_2Arr.push(obj);
          }
        }
      })
    },
    // 2.5.2
    querySearch252_1(queryString, cb) {
      var stationName252_1Arr = this.stationName252_1Arr;
      cb(stationName252_1Arr);
    },
    querySearch252_2(queryString, cb) {
      var stationName252_2Arr = this.stationName252_2Arr;
      cb(stationName252_2Arr);
    },
    // 2.5.4
    querySearch254_1(queryString, cb) {
      var stationName254_1Arr = this.stationName254_1Arr;
      cb(stationName254_1Arr);
    },
    querySearch254_2(queryString, cb) {
      var stationName254_2Arr = this.stationName254_2Arr;
      cb(stationName254_2Arr);
    },
    // 2.5.6
    querySearch256_1(queryString, cb) {
      var stationName256_1Arr = this.stationName256_1Arr;
      cb(stationName256_1Arr);
    },
    querySearch256_2(queryString, cb) {
      var stationName256_2Arr = this.stationName256_2Arr;
      cb(stationName256_2Arr);
    },
    // 2.5.2
    handleSelect252_1(val) {
      this.stationName252_1 = val.value;
    },
    handleSelect252_2(val) {
      this.stationName252_2 = val.value;
    },
    // 2.5.4
    handleSelect254_1(val) {
      this.stationName254_1 = val.value;
    },
    handleSelect254_2(val) {
      this.stationName254_2 = val.value;
    },
    // 2.5.6
    handleSelect256_1(val) {
      this.stationName256_1 = val.value;
    },
    handleSelect256_2(val) {
      this.stationName256_2 = val.value;
    },

    // 2.5.1 普通最短路 (根据id)
    bestPlanQuery251() {
      console.log(this.StationId_2511)
      console.log(this.StationId_2512)
      this.$axios.get('http://localhost:8081/StationEntry/getNormalShortestPathsTopOneById?StationId1=' + this.StationId_2511 + '&StationId2=' + this.StationId_2512, {
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
        // console.log(res.data.result);
        console.log(res.data.result);
        this.bestRouteInfo251 = res.data.result;
        this.p1 = this.pNodeData1(res.data.result[0].p);
        console.log(this.p1);
      })
    },

    // 2.5.2 普通最短路 (根据name)
    bestPlanQuery252() {
      console.log(this.stationName252_1)
      console.log(this.stationName252_2)

      this.$axios.get('http://localhost:8081/StationEntry/getNormalShortestPathsTopOneByName?StationName1=' + this.stationName252_1 + '&StationName2=' + this.stationName252_2, {
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
        console.log(res.data.result);
        this.bestRouteInfo252 = res.data.result;
        this.p2 = this.pNodeData1(res.data.result[0].p);
        console.log(this.p2);
      })
    },

    // 2.5.3 最少换乘 (根据id)
    bestPlanQuery253() {
      console.log(this.StationId_2531)
      console.log(this.StationId_2532)
      this.$axios.get('http://localhost:8081/StationEntry/getMinChangeCntTopOneById?StationId1=' + this.StationId_2531 + '&StationId2=' + this.StationId_2532, {
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
        console.log(res.data.result);
        this.bestRouteInfo253 = res.data.result;
        this.p3 = this.pNodeData2(res.data.result[0].pNode,res.data.result[0].pRel);
      })
    },

    // 2.5.4 最少换乘 (根据name)
    bestPlanQuery254() {
      console.log(this.stationName254_1)
      console.log(this.stationName254_2)
      this.$axios.get('http://localhost:8081/StationEntry/getMinChangeCntTopOneByName?StationName1=' + this.stationName254_1 + '&StationName2=' + this.stationName254_2, {
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
        console.log(res.data.result);
        this.bestRouteInfo254 = res.data.result;
        this.p4 = this.pNodeData2(res.data.result[0].pNode,res.data.result[0].pRel);
      })
    },

    // 2.5.5 最短运行 (根据id)
    bestPlanQuery255() {
      console.log(this.StationId_2551)
      console.log(this.StationId_2552)
      this.$axios.get('http://localhost:8081/StationEntry/getMinCostTopOneById?StationId1=' + this.StationId_2551 + '&StationId2=' + this.StationId_2552, {
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
        console.log(res.data.result);
        this.bestRouteInfo255 = res.data.result;
        this.p5 = this.pNodeData2(res.data.result[0].pNode,res.data.result[0].pRel);
      })
    },

    // 2.5.6  最短运行 (根据name)
    bestPlanQuery256() {
      console.log(this.stationName256_1)
      console.log(this.stationName256_2)
      this.$axios.get('http://localhost:8081/StationEntry/getMinCostTopOneByName?StationName1=' + this.stationName256_1 + '&StationName2=' + this.stationName256_2, {
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
        console.log(res.data.result);
        this.bestRouteInfo256 = res.data.result;
        this.p6 = this.pNodeData2(res.data.result[0].pNode,res.data.result[0].pRel);
      })
    },
    // 一些用于前端处理的方法
    // 路径上的每个站点
    pNodeData1(pathInfo){
      var Arr = [];
      pathInfo.forEach((item,index)=>{
        var obj = {};
        obj.id = index;
        obj.name = item;
        obj.icon = 'iconfont';
        obj.color = '#b53908';
        Arr.push(obj)
      });
      console.log(Arr);
      return Arr;
    },
    // 路径上的每个站点+公交
    pNodeData2(pathInfo,relInfo){
      var Arr = [];
      var idx= 0;
      pathInfo.forEach((item1)=>{
        var obj = {};
        obj.name = item1;
        obj.icon = 'iconfont';
        obj.color = '#b53908';
        obj.route = relInfo[idx];
        idx++;
        Arr.push(obj)
      });
      console.log(Arr);
      return Arr;
    },
    // 路径上站点间的关系
    pRelData(pathInfo){
      let Arr = [];
      pathInfo.pRel.forEach((item)=>{
        Arr.push(item + ' ');
      });
      return Arr;
    },
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.placeIcon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.video-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.video-container .poster img {
  z-index: 0;
  position: absolute;
}

.video-container .filter {
  z-index: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
}

.fillWidth {
  width: 100%;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
}
.text-wrapper {
  white-space: pre-wrap;
  font-family: 黑体;
  font-size: 16px;
  font-weight: bold;
  color: #f8dac3;
  alignment: center;
  text-align: start;
  display: flex;
  align-items: start;
}
.ans-wrapper {
  white-space: pre-wrap;
  font-family: 黑体;
  font-size: 16px;
  font-weight: bold;
  color: #b53908;
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
  color: #f8dac3;
  alignment: left;
  text-align: start;
}
.solve {
  margin-left: 301px;
  margin-right: 100px;
  padding: 40px;
  /*background-color: rgba(240, 240, 240, 0.6);*/
  background-color:#b53908;/* #e86149;*/
  margin-bottom: 30px;
  border-radius: 12px;
  width: 535px;
  position:relative;
  opacity: 0.85;
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
  padding: 5px;
  margin-top: 5px;
  border-radius: 8px;
}

.search-button {
  color: #f8dac3;
  background-color: #b53908;
  border-color: #f8dac3;
  border-radius: 5px;
  font-size: 16px;
  font-family: 黑体;
  letter-spacing: 8px;
  text-align: center;
  width: 35px;
  height: 25px;
  margin-top: 30px;
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
  alignment: center;
  background-color:  #b53908;
}
</style>