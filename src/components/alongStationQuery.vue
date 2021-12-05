<template>
  <div>

    <div id="solve2-4-1" class="solve">
      <div class="solve-title">
        <p class="title-wrapper"><i class="iconfont">&#xe623;</i>&nbsp;&nbsp;沿途一览</p></div>
      <div class="set-routeName">
        <el-row>
          <el-col span="8">
            <div class="set-routeName-default">
              <input v-model="stationName241" class="set-routeName-default-input" placeholder="请填写站点1的名称" type="text">
            </div>
          </el-col>
          <el-col span="8">
            <div class="set-routeName-default">
              <input v-model="stationName242" class="set-routeName-default-input" placeholder="请填写站点2的名称" type="text">
            </div>
          </el-col>
          <el-col span="8">
            <div class="set-routeName-default">
              <input v-model="busPartialName" class="set-routeName-default-input" placeholder="请填写线路的部分名称" type="text">
            </div>
          </el-col>
        </el-row>

      </div>
      <div class="button-set">
        <button class="search-button" type="button" @click="getBusDirection()"> <i class="iconfont">&#xe602;</i>方向</button>
        <button class="search-button" type="button" @click="alongStationsBetween()"> <i class="iconfont">&#xe600;</i>沿途</button>
        <button class="search-button" type="button" @click="timeCost()"> <i class="iconfont">&#xe74f;</i>时长</button>
      </div>
      <div style="height:100px; width:80%; background-color: white;border-radius: 10px;">
        <el-scrollbar style="height:100%; width: 100%">
          <div class="result"><div class="text-wrapper"><i class="iconfont">&#xe602;</i>&nbsp;线路运行方向：<br><br>&nbsp;{{ this.busWholeName }}</div></div>
        </el-scrollbar>
      </div>
      <div style="height:600px; width:80%; background-color: white;border-radius: 10px;">
        <el-scrollbar style="height:100%; width: 100%">
          <el-card class="box-card">
            <div slot="header">

              <div class="text-wrapper"><i class="iconfont">&#xe6ab;</i>
                &nbsp;&nbsp;沿途信息</div>
            </div>
            <el-timeline  align="middle">
              <el-timeline-item v-for="(item,index) of alongStationsBetweenTwoStations" :key="index" :timestamp=item.stationId placement="top"  :icon="placeIcon">
                <el-card class="text-wrapper">
                  <span><i class="iconfont">&#xe61f;</i>&nbsp;&nbsp;{{item.name}}&nbsp;&nbsp;</span>
                  <span>{{item.english}}</span>
                </el-card >
              </el-timeline-item>
            </el-timeline>
          </el-card>
        </el-scrollbar>
      </div>
      <div style="height:100px; width:80%; background-color: white;border-radius: 10px;">
        <el-scrollbar style="height:100%; width: 100%">

          <div class="result"><div class="text-wrapper"><i class="iconfont">&#xe74f;</i>&nbsp;运行时长：<br><br>&nbsp;{{ this.timeConsume }}</div></div>

        </el-scrollbar>
      </div>
    </div>

  </div>

</template>

<script>

// import StationItem242 from "@/components/StationItem242";
import '@/css/placeIcon.css';
import '@/css/placeIcon.js';
import '@/css/frontIcon.css';
import '@/css/frontIcon.js';

export default {
  name: "alongStationQuery",
  components: {
    // StationItem242,
  },

  data() {
    return {
      busWholeName: null,
      alongStationsBetweenTwoStations: null,
      timeConsume: 0,
      stationName: "",
      stationName241: "",
      stationName242: "",
      busPartialName: "",
    }
  },

  methods: {
    // 2.4.1
    getBusDirection() {
      console.log(this.stationName241 + " " + this.stationName242 + " " + this.busPartialName)
      this.$axios.get('http://localhost:8081/StationEntry/getRouteDirection?stationName1=' + this.stationName241 + '&stationName2=' + this.stationName242 + '&busPartialName=' + this.busPartialName, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res);
        console.log(res.data.result);
        this.busWholeName = res.data.result;
      })

    },
    // 2.4.2
    alongStationsBetween() {
      console.log(this.busWholeName)
      this.$axios.get('http://localhost:8081/StationEntry/findCertainAlongStations?stationName1=' + this.stationName241 + '&stationName2=' + this.stationName242 + '&busWholeName=' + this.busWholeName, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res);
        console.log(res.data);
        this.alongStationsBetweenTwoStations = res.data.result;

      })

    },
    // 2.4.3
    timeCost() {
      console.log(this.busWholeName)
      this.$axios.get('http://localhost:8081/StationEntry/calTimeConsume?stationName1=' + this.stationName241 + '&stationName2=' + this.stationName242 + '&busWholeName=' + this.busWholeName, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(this.busWholeName);
        console.log(res);
        console.log(res.data);
        this.timeConsume = res.data.result;

      })
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
  color: #a29988;
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
  position:relative;
  opacity: 0.97;
}

.solve-title {
  text-align: left;
  color: black;
  font-size: 17px;
}

.set-routeName {
  margin-top: 30px;
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
  color: rgb(120, 120, 120);
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
  background-color: #a29988;
  border-color: white;
  border-radius: 5px;
  font-size: 16px;
  font-family: 黑体;
  letter-spacing: 8px;
  text-align: center;
  width: 120px;
  height: 35px;
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
  margin-top:30px;
  alignment: center;
  background-color: #d3d4cc;
}
</style>