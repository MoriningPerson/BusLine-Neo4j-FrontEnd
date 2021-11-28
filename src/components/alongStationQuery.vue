<template>
  <div>

    <div id="solve2-4-1" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">查询线路运行方向、沿途站点、运行时长</p></div>
      <div class="set-routeName">
        <div class="set-routeName-p">
          <span>沿途信息</span>
        </div>
        <div class="set-routeName-default">
          <input v-model="stationName241" class="set-routeName-default-input" placeholder="请填写站点1的名称" type="text">
        </div>
        <div class="set-routeName-default">
          <input v-model="stationName242" class="set-routeName-default-input" placeholder="请填写站点2的名称" type="text">
        </div>
        <div class="set-routeName-default">
          <input v-model="busPartialName" class="set-routeName-default-input" placeholder="请填写线路的部分名称" type="text">
        </div>
        <button class="search-button" type="button" @click="getBusDirection()"> 线路方向</button>
        <button class="search-button" type="button" @click="alongStationsBetween()"> 沿途站点</button>
        <button class="search-button" type="button" @click="timeCost()"> 运行时长</button>
      </div>
      <div style="height:300px; width:80%; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">
          <div class="result"><span>线路运行方向：{{ this.busWholeName }}</span></div>
        </el-scrollbar>
      </div>
      <div style="height:300px; width:80%; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <ul class="result-ul">
            <li v-for="(item,index) in alongStationsBetweenTwoStations" :key="index" class="result-li">
              <StationItem242 :index="index" :stationInfo="item" class="route-item"></StationItem242>
            </li>
          </ul>


        </el-scrollbar>
      </div>
      <div style="height:300px; width:80%; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <div class="result"><span>运行时长：{{ this.timeConsume }}</span></div>

        </el-scrollbar>
      </div>
    </div>

  </div>

</template>

<script>

import StationItem242 from "@/components/StationItem242";

export default {
  name: "alongStationQuery",
  components: {
    StationItem242,
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