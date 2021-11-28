<template>
  <div>
    <div id="solve2-3" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">查询某个站停靠的所有线路</p></div>
      <div class="set-routeName">
        <div class="set-routeName-p">
          <span>站点名称（stationName）</span>
        </div>
        <div class="set-routeName-default">
          <input v-model="stationName" class="set-routeName-default-input" placeholder="请填写站点名称" type="text">
        </div>
        <button class="search-button" type="button" @click="getOneStationAllRoute()"> 查询</button>
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