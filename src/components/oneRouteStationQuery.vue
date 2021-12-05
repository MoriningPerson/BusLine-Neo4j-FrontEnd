<template>
  <div>
    <div id="solve2-1" class="solve">
      <div class="solve-title">
        <p class="title-wrapper"><i class="iconfont">&#xe623;</i>&nbsp;&nbsp;查询公交全部站点</p></div>
      <div class="set-routeName">
        <div class="title-wrapper">
          <br>
          <i class="iconfont">&#xe622;</i>
          &nbsp;
          <span>公交名称 </span>
        </div>
        <el-row>
          <el-col span="15">
              <el-autocomplete v-model="inputRouteName" :fetch-suggestions="querySearchRouteName"
                               :trigger-on-focus="false" class="set-routeName-default-input" placeholder="请填写公交名称"
                               @input="searchFullRouteName" @select="handleSelectRouteName"></el-autocomplete>

          </el-col>
          <el-col span="8">
            <button class="search-button" type="button" @click="getStationByRoutePartialName()"> <i class="iconfont">&#xe638;</i>
            </button>
          </el-col>
        </el-row>


      </div>
      <div style="height:800px; width:80%; background-color: white; border-radius: 10px;">
        <el-scrollbar style="height:100%; width: 100%">
          <!--        <ul class="result-ul">-->
          <!--          <li v-for="(item,index) in bestRouteInfo252" :key="index" class="result-li">-->
          <!--            <StationItem252 :index="index" :bestRoute252Info="item" class="route-item"></StationItem252>-->
          <!--          </li>-->
          <!--        </ul>-->
          <el-card class="box-card" style="border-radius: 8px">
            <div slot="header">

              <div class="text-wrapper"><i class="iconfont">&#xe6ab;</i>
                &nbsp;&nbsp;站点</div>
            </div>
            <el-timeline  align="middle">

              <el-timeline-item v-for="(item,index) of oneRouteAllStationInfo" :key="index" :timestamp="index+1" :icon="icon-jiaotong">
                <el-card >
                  <span></span>
                  <span> <div class="text-wrapper"><i class="iconfont">&#xe61f;</i>&nbsp;&nbsp;{{item.id}} {{item.name}}  --  {{item.english}}</div></span>
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
// import StationItem1 from "@/components/StationItem2-1";
import '@/css/placeIcon.css';
import '@/css/placeIcon.js';
import '@/css/frontIcon.css';
import '@/css/frontIcon.js';

export default {
  name: "oneRouteStationQuery",
  components: {
    // StationItem1,

  },

  data() {
    return {
      oneRouteAllStationInfo: [],
      inputRouteName:"",
      inputRouteNameArr:[],
    }
  },
  watch: {
    // 2.1
    "inputRouteName": {
      deep: true,
      handler: function () {
        this.inputRouteNameArr = []; //这是定义好的用于存放下拉提醒框中数据的数组

      }
    },
  },
  methods: {
    searchFullRouteName() {
      let _this = this
      this.$axios.get('http://localhost:8081/StationEntry/findFullRouteName?inputRouteName=' + _this.inputRouteName, {
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
            _this.inputRouteNameArr.push(obj);
          }
        }
      })
    },
    // 2.1
    querySearchRouteName(queryString, cb) {
      var inputRouteNameArr = this.inputRouteNameArr;
      cb(inputRouteNameArr);
    },
    // 2.1
    handleSelectRouteName(val) {
      this.inputRouteName = val.value;
    },
    // 2.1
    getStationByRoutePartialName() {
      this.$axios.get('http://localhost:8081/StationEntry/getOneBusAllStationInfo?busName=' + this.inputRouteName.toString(), {
        headers: { //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data.result);
        this.oneRouteAllStationInfo = res.data.result;
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
.text-wrapper {
  white-space: pre-wrap;
  font-family: 黑体;
  font-size: 16px;
  font-weight: bold;
  color: #a29988;
  alignment: center;
  text-align: start;
}
.title-wrapper {
  white-space: pre-wrap;
  font-family: 黑体;
  font-size: 20px;
  font-weight: bold;
  color: #a29988;
  alignment: left;
  text-align: start;
}
.solve {
  margin-left: 300px;
  margin-right: 100px;
  padding: 40px;
  /*background-color: rgba(240, 240, 240, 0.6);*/
  background-color: #ececea;
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
  background-color: #a29988;
  border-color: white;
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
}
.icon-jiaotong:before {
  content: "\e612";
}
</style>