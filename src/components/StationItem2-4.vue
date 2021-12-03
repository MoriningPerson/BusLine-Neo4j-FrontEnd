<template>
  <div class="item-container">
    <div class="table-element">
      <div class="table-element-name">
        <span>name:</span>
        <span>{{ routeInfo.start }}</span></div>
      <div class="table-element-time">
        <span>time:</span>
        <span>{{ routeInfo.startime }}</span></div>
    </div>
    <div class="table-element-station">
      <span>终点站:</span>
    </div>
    <div class="table-element">
      <div class="table-element-name">
        <span>name:</span>
        <span>{{ routeInfo.end }}</span></div>
      <div class="table-element-time">
        <span>time:</span>
        <span>{{ routeInfo.endtime }}</span></div>
    </div>
    <div class="table-element-count-title">
      <span>时长(min):</span>
    </div>
    <div class="table-element-count">
      <span>{{ routeInfo.minutes }}</span>
    </div>

  </div>
</template>
import '@/css/placeIcon.css';
import '@/css/placeIcon.js';
import '@/css/frontIcon.css';
import '@/css/frontIcon.js';
<script>
export default {
  name: "StationItem4",
  props: {
    routeInfo: {
      type: Object
    },
    index: {
      type: Number
    },
  }
}
</script>

<style scoped>
.table-element-index {
  padding: 8px;
  width: 25px;
  height: 40px;
  border: solid;
}

.table-element-count {
  padding: 8px;
  width: 40px;
  height: 40px;
  border: solid;
}

.table-element-station {
  padding: 8px;
  width: 80px;
  height: 40px;
  border: solid;
}

.table-element-count-title {
  padding: 8px;
  width: 80px;
  height: 40px;
  border: solid;
}
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
</style