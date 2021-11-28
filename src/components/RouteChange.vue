<template xmlns:el-col="http://www.w3.org/1999/html">
  <div>
    <div id="solve5-1" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">增加线路</p></div>
      <div class="set-line">
        <el-form ref="form" :model="form" label-position="right" label-width="100px">
          <el-row style="border-bottom: 1px solid #f0f0f0;padding: 10px;">
            <div>
              <span>line信息</span>
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

          <div>
            <span>route信息</span>
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

          <div>
            <span>站点信息</span>
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
                    @click="removeRow(index)"
                >删除
                </el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-button size="medium" type="primary" @click="addRow">新增属性</el-button>
              </el-col>
            </el-row>
          </el-form>

          <el-form-item>
            <el-button type="primary" @click="addLine">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>

      </div>
      <div style="height:100px; width:20%; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">
          <div class="result"><span>{{ this.addLineResult }}</span></div>
        </el-scrollbar>
      </div>
    </div>

    <div id="solve5-2" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">删除线路</p></div>
      <div class="set-line">
        <div class="set-line-p">
          <span>线路id（lineId）</span>
        </div>
        <div class="set-line-default">
          <input v-model="lineId" class="set-line-default-input" placeholder="请填写线路id" type="text">
        </div>
        <button class="search-button" type="button" v-on:click="deleteLine()"> 删除</button>
      </div>
      <div style="height:100px; width:80%; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <div class="result"><span>{{ this.deleteLineResult }}</span></div>


        </el-scrollbar>
      </div>
    </div>

    <div id="solve5-3" class="solve">
      <div class="solve-title">
        <p class="solve-title-p">替换某条线路的站点</p></div>
      <div class="set-line">
        <div class="set-line-p">
          <span>输入</span>
        </div>
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
      <div style="height:100px; width:80%; background-color: white">
        <el-scrollbar style="height:100%; width: 100%">

          <div class="result"><span>{{ this.changeLineResult }}</span></div>

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
      changeLineResult: null,
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
        console.log(res);
        console.log(res.data);
        this.addLineResult = res.data.msg;

      })

    },
    removeRow(index) {
      this.form.stationList.splice(index, 1);
    },
    deleteLine() {
      console.log(this.routeName)
      this.$axios.post('http://localhost:8081/LineEntry/deleteLine?lineId=' + this.lineId, {
        headers: {   //设置上传请求头
          'Content-Type': 'application/json',
        },
      }).then((res) => {
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
        console.log(res);
        console.log(res.data);
        this.changeLineResult = res.data.msg;

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

.set-line {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
}

.set-line-p {
  color: black;
  padding-top: 10px;
  margin-right: 30px;
}

input {
  outline: none;
  border: none;
}

.set-line-default-input {
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