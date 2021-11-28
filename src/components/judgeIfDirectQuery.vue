<template>

  <div id="solve2-6" class="solve">


    <div class="solve-title">
      <p class="solve-title-p">判断两站间是否可直达</p></div>
    <div class="set-routeName">
      <div class="set-routeName-p">
        <span>站点名称（stationName）</span>
      </div>
      <div class="set-routeName-default">
        <el-autocomplete v-model="stationName261" :fetch-suggestions="querySearch261"
                         :trigger-on-focus="false" class="set-routeName-default-input" placeholder="请填写站点1的名称"
                         @input="searchFullStationName261" @select="handleSelect261"></el-autocomplete>
      </div>
      <div class="set-routeName-default">
        <el-autocomplete v-model="stationName262" :fetch-suggestions="querySearch262"
                         :trigger-on-focus="false" class="set-routeName-default-input" placeholder="请填写站点2的名称"
                         @input="searchFullStationName262" @select="handleSelect262"></el-autocomplete>
      </div>
      <button class="search-button" type="button" @click="judgeIfDirect()"> 查询</button>
    </div>

    <div style="height:300px; width:80% ; background-color: white">

      <el-scrollbar style="height:100%; width: 100%">
        <ul class="result-ul">
          <li v-for="(item,index) in ifDirect" :key="index" class="result-li">
            <StationItem6 :directInfo="item" :index="index" class="route-item"></StationItem6>
          </li>
        </ul>
      </el-scrollbar>

    </div>
  </div>
</template>

<script>
import StationItem6 from "@/components/StationItem2-6";

export default {
  name: "judgeIfDirectQuery",
  components: {
    StationItem6
  },

  data() {
    return {
      ifDirect: null,

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
      this.staionName261 = val;
    },
    handleSelect262(val) {
      this.staionName262 = val;
    },
    // 2.6
    judgeIfDirect() {
      console.log(this.stationName)
      this.$axios.get('http://localhost:8081/StationEntry/ifDirectRouteExists?stationName1=' + this.stationName261 + '&stationName2=' + this.stationName262, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res);
        console.log(res.data.result);
        if (res.data.msg == "成功") {
          this.ifDirect = res.data.result;
        } else {
          this.ifDirect = [];
          this.ifDirect.push("不存在直达路线");
        }

      })
    }

  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
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