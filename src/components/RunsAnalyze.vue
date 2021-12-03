<template>
  <div>

    <div id="solve3-1" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">获得某条线路某个方向的全部班次信息</p></div>
      <div class="set-routeName">
        <div class="set-routeName-p">
          <span>线路名称（routeName）</span>
        </div>
        <div class="set-routeName-default">
          <input v-model="routeName" class="set-routeName-default-input" placeholder="请填写线路名称" type="text">
        </div>
        <button class="search-button" type="button" v-on:click="queryRouteRuns()"> 查询</button>
      </div>
      <div style="height:300px; width:80% ; background-color: white">

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
      myTableHead:[]
    }
  },

  methods: {
    queryRouteRuns() {
      this.$axios.get('http://localhost:8081/RunsEntry/findRunsByName?routeName='+this.routeName, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
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