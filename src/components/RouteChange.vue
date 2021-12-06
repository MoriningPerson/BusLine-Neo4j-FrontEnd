<template xmlns:el-col="http://www.w3.org/1999/html">
  <div>
    <div id="solve5-1" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">增加线路</p></div>
      <div class="set-line">
        <el-form ref="form" :model="form" label-position="right" label-width="100px">
          <el-row style="border-bottom: 1px solid #f0f0f0;padding: 10px;">
            <div class="solve-title" >
              <span><i class="iconfont">&#xe74e;</i>line信息</span>
              <el-divider></el-divider>
            </div>
            <el-col :span="10">
              <el-form-item label="route">
                <el-input v-model="form.line.route"></el-input>
              </el-form-item>
              <el-form-item label="方向">
                <el-input v-model="form.line.directional"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="长度">
                <el-input v-model="form.line.kilometer"></el-input>
              </el-form-item>
              <el-form-item label="名称">
                <el-input v-model="form.line.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="number">
                <el-input v-model="form.line.lineId"></el-input>
              </el-form-item>
              <el-form-item label="发车间隔">
                <el-input v-model="form.line.interval"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="营业时间">
                <el-input v-model="form.line.runTime"></el-input>
              </el-form-item>
              <el-form-item label="单程耗时">
                <el-input v-model="form.line.oneWayTime"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="20">
              <el-form-item label="类型" prop="type">
                <el-select v-model="form.line.type" placeholder="请选择line类型">
                  <el-option label="干线" value="干线"></el-option>
                  <el-option label="高峰线" value="高峰线"></el-option>
                  <el-option label="城乡线" value="城乡线"></el-option>
                  <el-option label="驳接线" value="驳接线"></el-option>
                  <el-option label="支线" value="支线"></el-option>
                  <el-option label="社区线" value="社区线"></el-option>
                  <el-option label="夜班线" value="夜班线"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <div class="solve-title">
            <span><i class="iconfont">&#xe6ab;</i>route信息</span>
            <el-divider></el-divider>
          </div>

          <el-row>
            <el-col :span="10">
              <el-form-item label="名称">
                <el-input v-model="form.route.name"></el-input>
              </el-form-item>
              <el-form-item label="number">
                <el-input v-model="form.route.routeId"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="stationNum">
                <el-input v-model="form.route.stationNum"></el-input>
              </el-form-item>
              <el-form-item label="line">
                <el-input v-model="form.route.line"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <div class="solve-title">
            <span ><i class="iconfont">&#xe61f;</i>站点信息 </span>
            <el-divider></el-divider>
          </div>

          <el-form ref="form.stationList" :inline="true" :model="form.formData2" label-position="right"
                   label-width="100px">
            <el-row v-for="(item,index) in form.formData2.stationList"
                    :key="item.key"
                    style="border-bottom: 1px solid #f0f0f0;padding: 10px;"
            >
              <el-col :span="10">
                <el-form-item
                    :prop="'stationList.'+ index + '.name'"
                    :rules="[{ required: true, message: '参数名不能为空',trigger: 'change'},{max: 32, message: '不超过32个字符', trigger: 'change'}]"
                    label="站名"
                >
                  <el-input v-model="item.name" placeholder="请输入名字"/>
                </el-form-item>
                <el-form-item
                    :prop="'stationList.'+index + '.english'"
                    :rules="[{ required: true, message: '参数名不能为空',trigger: 'change'},{max: 32, message: '不超过32个字符', trigger: 'change'}]"
                    label="站英文名"
                >
                  <el-input v-model="item.english" placeholder="请输入英文名"/>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item
                    :prop="'stationList.'+index + '.stationId'"
                    :rules="[{ required: true, message: '参数名不能为空',trigger: 'change'},{max: 32, message: '不超过32个字符', trigger: 'change'}]"
                    label="站号"
                >
                  <el-input v-model="item.stationId" placeholder="请输入stationNum"/>
                </el-form-item>
                <el-button
                    v-if="form.formData2.stationList.length > 1"
                    size="medium"
                    type="danger"
                    @click="removeRow(item,index)"
                >删除
                </el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-button size="medium" type="primary" color="#11468C"  @click="addRow">新增属性</el-button>
              </el-col>
            </el-row>
          </el-form>

          <el-form-item>
            <el-button  type="primary"  color="#11468C" @click="addLine">立即创建</el-button>
            <el-button >取消</el-button>
          </el-form-item>
        </el-form>

      </div>
      <div style="height:100px; width:100%; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <div class="result"><span>{{ this.addLineResult }}</span></div>


        </el-scrollbar>
      </div>
    </div>

    <div id="solve5-2" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">删除线路</p></div>
      <div class="set-line">

        <el-row>
          <el-col span="12">
            <div class="set-line-default">
              <input v-model="lineId" class="set-line-default-input" placeholder="请填写线路id" type="text">
            </div>
          </el-col>
          <el-col span="12">
            <button class="search-button" type="button" v-on:click="deleteLine()"> 删除</button>
          </el-col>
        </el-row>

      </div>
      <div style="height:100px; width:100%; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <div class="result"><span>{{ this.deleteLineResult }}</span></div>


        </el-scrollbar>
      </div>
    </div>

    <div id="solve5-3" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">替换某条线路的站点</p></div>
      <div class="set-line">
        <div class="set-line-default">
          <input v-model="lineId2" class="set-line-default-input" placeholder="请填写线路id" type="text">
        </div>
        <div class="set-line-default">
          <input v-model="oldStationId" class="set-line-default-input" placeholder="请填写旧站点id" type="text">
        </div>
        <div class="set-line-default">
          <input v-model="newStationId" class="set-line-default-input" placeholder="请填写新站点id" type="text">
        </div>
        <button class="search-button" type="button" v-on:click="changeLine()"> 更改</button>
      </div>
      <div style="height:100px; width:100%; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">
          <div class="result"><span>{{ this.changeLineResultMsg }}</span></div>
          <el-table :data="changeLineResult" border style="width: 100%;height: 50px">
            <el-table-column label="线路"  prop="routeName"></el-table-column>
            <el-table-column :formatter="stationData" label="站点"  prop="station"></el-table-column>
          </el-table>
        </el-scrollbar>
      </div>
    </div>


  </div>
</template>

<script>


export default {
  name: "RouteChange",
  data() {
    return {
      deleteLineResult: null,
      lineId: null,
      newStationId: null,
      oldStationId: null,
      lineId2: null,
      changeLineResult: [],
      changeLineResultMsg:null,
      addLineResult: null,
      form: {
        line: {
          route: "金河客运站-花明公交站2",
          directional: "true",
          kilometer: 15,
          name: "2",
          lineId: 2,
          interval: 5,
          runTime: "6:00-23:59",
          type: "干线",
          oneWayTime: 52
        },
        route: {
          name: "2路上行",
          routeId: 2,
          stationNum: 2,
          line: 2
        },
        formData2: {
          stationList: [
            {
              name: "永通路2",
              english: "YongTongLu",
              stationId: 4132,
              // key: Date.now()
            }
          ]
        },
        consume: 15
      }
    }
  },

  methods: {
    addRow() {
      this.form.formData2.stationList.push({
        name: "永通路2",
        english: "YongTongLu",
        stationId: 4132,
       // key: Date.now() // 更改前没有
      });
    },
    addLine() {
      this.form.line.stationNum = this.form.formData2.stationList.length;

      let param = {
        "line": this.form.line,
        "route": this.form.route,
        "stationList": this.form.formData2.stationList,
        "consume": this.form.consume
      }
      this.$axios.post('http://localhost:8081/LineEntry/addNewRoute',
          param
      ).then((res) => {
        if(res.data.code===200){
          this.$message({
            message: '增加成功',
            type: 'success'
          });
        }else if(res.data.code!==200){
          this.$message({
            message: '增加失败,请确认输入' + res.data.msg,
            type: 'warning'
          });
        }
        console.log(res);
        console.log(res.data);
        this.addLineResult = res.data.msg;

      })

    },
    removeRow(item,index) {
      console.log(item)
      console.log(index)
      this.form.formData2.stationList.splice(index, 1);
    },
    deleteLine() {
      console.log(this.routeName)
      this.$axios.post('http://localhost:8081/LineEntry/deleteLine?lineId=' + this.lineId, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        if(res.data.code===200){
          this.$message({
            message: '删除成功',
            type: 'success'
          });
        }else if(res.data.code!==200){
          this.$message({
            message: '删除失败,请确认输入' + res.data.msg,
            type: 'warning'
          });
        }
        console.log(res);
        console.log(res.data);
        this.deleteLineResult = res.data.msg;

      })

    },
    changeLine() {
      console.log(this.routeName)
      this.$axios.post('http://localhost:8081/LineEntry/ChangeStation?lineId=' + this.lineId2 +
          '&oldStationId=' + this.oldStationId + '&newStationId=' + this.newStationId, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        if(res.data.code===200){
          this.$message({
            message: '更改成功',
            type: 'success'
          });
        }else if(res.data.code!==200){
          this.$message({
            message: '更改失败,请确认输入' + res.data.msg,
            type: 'warning'
          });
        }
        console.log(res);
        console.log(res.data);
        this.changeLineResult = res.data.result;
        this.changeLineResultMsg = res.data.msg;

      })

    },
    stationData(row){
      let Arr = []; //新建一个数组
      row.station.forEach((item,index) => {
        //对当前的数组进行遍历处理
        Arr.push("第"+index+'站:' + item.name+" \n"); //给它们每一项加上分号和空格
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

.solve {
  /*margin-left: 300px;*/
  /*margin-right: 100px;*/
  /*padding: 40px;*/
  /*background-color: rgba(240, 240, 240, 0.6);*/
  background-color: #E1F3F2;
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
  color: #11468C;
  font-size: 17px;
}

.set-line {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
}

.set-line-p {
  white-space: pre-wrap;
  font-family: 黑体;
  font-size: 16px;
  font-weight: bold;
  color: #11468C;
  alignment: center;
  text-align: start;
  display: flex;
  align-items: start;
}

input {
  outline: none;
  border: none;
}

.set-line-default-input {
  color: #11468C;
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
  /*background-color: #11468C;*/
  background-color: #00CFCB;
  border-color: #00A49D;
  border-radius: 5px;
  font-size: 16px;
  font-family: 黑体;
  letter-spacing: 8px;
  text-align: center;
  width: 120px;
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
</style>