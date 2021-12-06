<template>
  <div>

    <div id="solve3-1" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">获得某条线路某个方向的全部班次信息</p></div>
        <el-row>
          <el-col span="12">
            <input v-model="routeName" class="set-routeName-default-input" placeholder="请填写线路名称" type="text">
          </el-col>
          <el-col span="12">
              <el-col>
                <button class="search-button" type="button" v-on:click="queryRouteRuns()"> 查询</button>
              </el-col>
          </el-col>
        </el-row>
      <br>



      <div style="height:300px; width:100% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
          <el-table :data="routeRunsResult" border style="width: 100%">
            <el-table-column label="班次" type="index" width="50"></el-table-column>
            <el-table-column
              v-for="(item,index) in myTableHead"
              :key="index"
              :label="myTableHead[index]"
              :prop="myTableHead[index]"
              align="center">
          </el-table-column>
          </el-table>
        </el-scrollbar>
      </div>
    </div>
    <div id="solve3-2" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">获得某个时刻某个站台某个时段内即将停靠的线路</p></div>
      <el-row :gutter="20">
        <el-col span="12">
          <input v-model="stationId" class="set-routeName-default-input" placeholder="请填站台id" type="text">
        </el-col>
        <el-col span="12">
          <el-time-select
              v-model="startTime"
              :picker-options="{
              start: '06:00',
              step: '00:01',
              end: '24:00'
            }"
              placeholder="停靠时间">
          </el-time-select>
        </el-col>
      </el-row>
      <el-row :gutter="20">

        <el-col span="12">
          <input v-model="timeLimit" class="set-routeName-default-input" placeholder="请填时间范围" type="text">
        </el-col>
        <el-col  span="12">
          <button class="search-button" type="button" v-on:click="queryRouteRuns2()"> 查询</button>
        </el-col>
      </el-row>
      <br>
      <div style="height:300px; width:100% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
          <el-table :data="routeRunsResult2" border style="width: 100%">
            <el-table-column label="序号" type="index" width="50"></el-table-column>
            <el-table-column
                key="index"
                label="线路名"
                prop="name"
                align="center">
            </el-table-column>
            <el-table-column
                key="index"
                label="多久即将到达（min）"
                prop="time"
                align="center">
            </el-table-column>
          </el-table>
        </el-scrollbar>
      </div>
    </div>
    <div id="solve3-3" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">获得某个时刻某个站台线路最近的3趟班次信息</p></div>
      <el-row>
        <el-col span="8">
          <input v-model="stationId2" class="set-routeName-default-input" placeholder="请填站台id" type="text">
        </el-col>
        <el-col span="8">
          <el-time-select
              v-model="startTime2"
              :picker-options="{
              start: '06:00',
              step: '00:01',
              end: '24:00'
            }"
              placeholder="停靠时间">
          </el-time-select>
        </el-col>
        <el-col span="8">
          <button class="search-button" type="button" v-on:click="queryRouteRuns3()"> 查询</button>
        </el-col>
      </el-row>
      <br>



      <div style="height:300px; width:100% ; background-color: white">

        <el-scrollbar style="height:100%; width: 100%">
          <el-table :data="routeRunsResult3" border style="width: 100%">
            <el-table-column label="序号" type="index" width="50"></el-table-column>
            <el-table-column
                key="index"
                label="线路名"
                prop="name"
                align="center"
                width="100">
            </el-table-column>
            <el-table-column
                key="index"
                :formatter="changeData"
                label="多久即将到达(min)"
                prop="time"
                align="left">
            </el-table-column>
          </el-table>
        </el-scrollbar>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "RunsAnalyze",
  components: {
  },
  data() {
    return {
      routeName:'',
      routeRunsResult:[],
      routeRunsResult2:[],
      routeRunsResult3:[],
      myTableHead:[],
      stationId:null,
      stationId2:null,
      startTime:null,
      startTime2:null,
      timeLimit:null,
    }
  },

  methods: {
    queryRouteRuns() {
      this.$axios.get('http://localhost:8081/RunsEntry/findRunsByName?routeName='+this.routeName, {
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
        console.log(res)
        console.log(res.data.result);
        // this.routeRunsResult = this.RunsData(res.data.result);
        this.routeRunsResult = this.getMyTable(res.data.result)
        this.myTableHead = this.getMyHead(res.data.result[0].info)
        console.log(this.routeRunsResult);
        console.log(this.myTableHead);

      })
    },
    getMyTable(item2){
      let Arr = []; //新建一个数组
      item2.forEach((item) => {
        let Arr2= {};
        item.info.forEach((item3)=>{
          //对当前的数组进行遍历处理
          this.$set(Arr2, item3.name, item3.time);
        })
        Arr.push(Arr2);
      });
      return Arr;
    },
    getMyHead(item){
      let Arr = [];
      item.forEach((item2)=>{
        Arr.push(item2.name);
      })
      return Arr;
    },
    queryRouteRuns2(){
      this.$axios.get('http://localhost:8081/RunsEntry/findRouteByTimeAndStation?stationId='
          +this.stationId+
          '&start='+this.startTime+'&t='+this.timeLimit, {
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
        console.log(res)
        console.log(res.data.result);
        this.routeRunsResult2 = res.data.result;

      })

    },
    queryRouteRuns3(){
      this.$axios.get('http://localhost:8081/RunsEntry/findRecentThreeRunsByTimeAndStation?stationId='
          +this.stationId2+
          '&start='+this.startTime2, {
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
        console.log(res)
        console.log(res.data.result);
        this.routeRunsResult3 = res.data.result;
      })

    },
    changeData(row) {
      let Arr = []; //新建一个数组
      row.time.forEach((item) => {
        //对当前的数组进行遍历处理
        Arr.push(item + ' min后即将到达， '); //给它们每一项加上分号和空格
      });
      return Arr; //将有分隔符的颜色数组返回
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
  color: #004370;
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
  color: #004370;
  alignment: left;
  text-align: start;
}
.solve {
  /*margin-left: 300px;*/
  /*margin-right: 100px;*/
  /*padding: 40px;*/
  /*background-color: rgba(240, 240, 240, 0.6);*/
  /*background-color: #FEF4F4;*/
  background-color: #FEDB8F;
  margin-bottom: 30px;
  border-radius: 12px;
  width: 535px;
  position:relative;
  opacity: 0.95;
  margin-left: 301px;
  margin-right: 100px;
  padding: 40px;

}

.solve-title {
  text-align: left;
  /*color: #CC9999;*/
  color: #004370;
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
  color: #004370;
  width: 50%;
  padding: 10px;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
}

.search-button {
  color: white;
  /*background-color: #FFCCCC;*/
  background-color: #FFB000;
  border-color: white;
  border-radius: 5px;
  font-size: 16px;
  font-family: 黑体;
  letter-spacing: 8px;
  text-align: center;

  width: 100px;
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
  background-color: #F26849;
}
</style>