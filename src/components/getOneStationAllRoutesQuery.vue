<template>
  <div>
    <div id="solve2-3" class="solve">
      <div class="solve-title">
        <p class="title-wrapper"><i class="iconfont">&#xe623;</i>&nbsp;&nbsp;站点停靠线路</p></div>
      <div class="set-routeName">
        <div class="title-wrapper">
          <br>
          <i class="iconfont">&#xe622;</i>
          &nbsp;
          <span>站点名称 </span>
          &nbsp;
        </div>

        <div class="set-routeName-default">
          <br>
          <input v-model="stationName" class="set-routeName-default-input" placeholder="请填写站点名称" type="text">

        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="search-button" type="button" @click="getOneStationAllRoute()"> <i class="iconfont">&#xe638;</i>
        </button>
      </div>
      <div style="height:300px; width:80%; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <ul class="result-ul">
            <li v-for="(item,index) in oneStationAllRoutes" :key="index" class="result-li">
              <StationItem3 :index="index" :info="item" class="route-item"></StationItem3>
            </li>
          </ul>
        </el-scrollbar>
      </div>
    </div>

  </div>
</template>

<script>
import StationItem3 from "@/components/StationItem2-3";
import '@/css/placeIcon.css';
import '@/css/placeIcon.js';
import '@/css/frontIcon.css';
import '@/css/frontIcon.js';

export default {
  name: "getOneStationAllRoutesQuery",
  components: {
    StationItem3
  },

  data() {
    return {
      oneStationAllRoutes: null,
      stationName: "",
    }
  },

  methods: {
    // 2.3
    getOneStationAllRoute() {
      console.log(this.stationName)
      // http://localhost:8081/StationEntry/routes_has_statione?name=
      this.$axios.get('http://localhost:8081/StationEntry/routes_has_station?name=' + this.stationName, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data.result);
        // this.oneStationAllRoutes = res.data.result.value.each(res.data.result.value,function(eachId,routesHasStationId){alert(eachId),alert(routesHasStationId)});
        this.oneStationAllRoutes = res.data.result;
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
  background-color: #d3d4cc;
}
</style>