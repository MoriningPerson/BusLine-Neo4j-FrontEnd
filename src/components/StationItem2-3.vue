<template>
  <div class="item-container">

    <div class="table-element">
      <span><i class="iconfont">&#xe61f;</i>&nbsp;&nbsp; id: {{ info.eachId }}</span>
    </div>
    <div class="table-element">
      <span><i class="iconfont">&#xe74e;</i>&nbsp;&nbsp;{{ info.routesHasStationId }}</span>
    </div>
  </div>
</template>
import '@/css/placeIcon.css';
import '@/css/placeIcon.js';
import '@/css/frontIcon.css';
import '@/css/frontIcon.js';

<script>
export default {
  name: "StationItem3",
  props: {
    info: {
      type: Object
    },
    index: {
      type: Number
    },
  }
}

</script>

<style scoped>
.table-tip{
  font-family: Consolas;
  font-weight: bold;
  color: #d3d4cc;
}
.item-container {
  display: flex;
  background-color: #d3d4cc;
  margin-bottom: 5px;
  margin-top: 15px;
  margin-left: 5px;
  margin-right:5px;
  border-radius: 8px;
}

.table-element {
  padding: 10px;
  width: 300px;
  height: 30px;
  border: solid;
  font-family: 黑体;
  font-weight: bold;
  color: #6b5152;
  text-align: left;
}
</style>