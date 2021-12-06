<template>
<div style="background-image: url('~@/components/pic/bg.jpg')">
  <div id="solve2-6" class="solve">

    <div class="solve-title">
<!--      <p class="title-wrapper">判断直达</p>-->
        <newTitle>判断直达</newTitle>
    </div>
    <div class="set-routeName">
      <br>
      <div class="text-wrapper">
        站点名称
      </div>
      <el-row>
        <el-col span="9">
          <el-autocomplete v-model="stationName261" :fetch-suggestions="querySearch261"
                           :trigger-on-focus="false" class="set-routeName-default-input" placeholder="请填写站点1的名称"
                           @input="searchFullStationName261" @select="handleSelect261"></el-autocomplete>

        </el-col>
        <el-col span="9">
          <el-autocomplete v-model="stationName262" :fetch-suggestions="querySearch262"
                           :trigger-on-focus="false" class="set-routeName-default-input" placeholder="请填写站点2的名称"
                           @input="searchFullStationName262" @select="handleSelect262"></el-autocomplete>

        </el-col>
        <el-col span="6">
          <button class="search-button" type="button" @click="judgeIfDirect()"> <i class="iconfont">&#xe638;</i></button>
        </el-col>
      </el-row>
    </div>

    <div style="height:300px; width:80% ; background-color: #f0ebe5;border-radius: 10px">
      <el-card class="ans-wrapper" style="background-color: #a27e7e; border-radius: 8px;">
        <span><i class="iconfont">&#xe614;</i>&nbsp;&nbsp;{{ifDirect}}</span>
        <br><br>
        <span><i class="iconfont">&#xe6e5;</i>&nbsp;&nbsp;<div class="ans-wrapper"><br>直达线路为：</div><br>{{routeInfo}}&nbsp;&nbsp;</span>
      </el-card >

    </div>
  </div>
</div>
</template>

<script>
// import StationItem6 from "@/components/StationItem2-6";

export default {
  name: "judgeIfDirectQuery",
  components: {
    // StationItem6
  },

  data() {
    return {
      ifDirect: null,
      routeInfo: null,

      stationName261: "", // 用户正在输入的站名1
      stationName261Arr: [],
      stationName262: "",
      stationName262Arr: [],
    }
  },
  watch: {
    "stationName261": {
      deep: true,
      handler: function () {
        this.stationName261Arr = []; //这是定义好的用于存放下拉提醒框中数据的数组

      }
    },
    "stationName262": {
      deep: true,
      handler: function () {
        this.stationName262Arr = []; //这是定义好的用于存放下拉提醒框中数据的数组
      },
    },
  },

  methods: {
    searchFullStationName261() {
      let _this = this
      this.$axios.get('http://localhost:8081/StationEntry/findFullStationName?inputStationName=' + _this.stationName261, {
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
            _this.stationName261Arr.push(obj);
          }
        }
      })
    },
    searchFullStationName262() {
      let _this = this
      this.$axios.get('http://localhost:8081/StationEntry/findFullStationName?inputStationName=' + _this.stationName262, {
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
            _this.stationName262Arr.push(obj);
          }
        }
      })
    },
    querySearch261(queryString, cb) {
      var stationName261Arr = this.stationName261Arr;
      cb(stationName261Arr);
    },
    querySearch262(queryString, cb) {
      var stationName262Arr = this.stationName262Arr;
      cb(stationName262Arr);
    },
    handleSelect261(val) {
      this.stationName261 = val.value;
    },
    handleSelect262(val) {
      this.stationName262 = val.value;
    },
    // 2.6
    judgeIfDirect() {
      this.$axios.get('http://localhost:8081/StationEntry/ifDirectRouteExists?stationName1=' + this.stationName261 + '&stationName2=' + this.stationName262, {
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
        if (res.data.msg == "成功") {
          this.ifDirect="存在直达线路";
          this.routeInfo = res.data.result;
        } else {
          this.routeInfo = "无";
          this.ifDirect="不存在直达线路";
        }

      })
    }

  },
}
</script>

import '@/css/placeIcon.css';
import '@/css/placeIcon.js';
import '@/css/frontIcon.css';
import '@/css/frontIcon.js';

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
}
.text-wrapper {
  white-space: pre-wrap;
  font-family: 黑体;
  font-size: 16px;
  font-weight: bold;
  /*color: #a29988;*/
  /*color:#CCCC99;*/
  color: #a27e7e;
  alignment: center;
  text-align: start;
}
.ans-wrapper {
  white-space: pre-wrap;
  font-family: 黑体;
  font-size: 16px;
  font-weight: bold;
  /*color: #a29988;*/
  /*color:#CCCC33;*/
  /*color: #CCCC99;*/
  color: #fdf9ee;
  alignment: center;
  text-align: start;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  transition:all .5s;
}
.title-wrapper {
  white-space: pre-wrap;
  font-family: 黑体;
  font-size: 20px;
  font-weight: bold;
  color: #a27e7e;
  alignment: left;
  text-align: start;
}
.solve {
  margin-left: 300px;
  margin-right: 100px;
  padding: 40px;
  /*background-color: rgba(240, 240, 240, 0.6);*/
  /*background-color: #ececea;*/
  /*background-color: #993366;*/
  background-color: #dfd7d7;
  /*background-color: #333300;*/
  margin-bottom: 30px;
  border-radius: 12px;
  width: 800px;
  position: relative;
  opacity: 0.97;
}

.solve-title {
  text-align: left;
  color: black;
  font-size: 17px;
  display: flex;
  align-items: start;
  justify-content: start;
}

.set-routeName {
  margin-top: 5px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap:wrap;
  flex-direction: column;
  align-items: start;
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
  /*color: white;*/
  color: #6b5152;
  /*background-color: #a29988;*/
  background-color: #f0ebe5;
  border-radius: 5px;
  font-size: 16px;
  font-family: 黑体;
  letter-spacing: 8px;
  text-align: center;
  width: 35px;
  height: 25px;
  margin-top: 20px;
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
  background-color: #d3d4cc;
  /*background-color: #666633;*/
}
.el-card{
  min-width: 380px;
  margin-right:20px;
  transition:all .5s;
}
.el-card:hover{
  margin-top: -5px;
}

newTitle {
  white-space: pre-wrap;
  font-family: 黑体;
  font-size: 20px;
  font-weight: bold;
  color: #a27e7e;
  alignment: left;
  text-align: center;
  border: 8px solid white;
  background: transparent;
  text-transform: uppercase;
  padding: 15px 50px;
  outline: none;
  position: relative;
  overflow: hidden;
  z-index: 20;
  border-radius: 8px;
}
newTitle:after {
  content: '';
  display: block;
  position: absolute;
  background: #f779bf;
  width: 50px;
  height: 125px;
  opacity: 20%;
  transform: rotate(-45deg);
  top: -36px;
  left: -100px;
  overflow: hidden;
}

newTitle:hover:after {
  left: 120%;
  transition: all 1.5s cubic-bezier(0.3, 1, 0.2, 1);
  -webkit-transition: all 1.5s cubic-bezier(0.3, 1, 0.2, 1);
  opacity: 0;
}

</style>