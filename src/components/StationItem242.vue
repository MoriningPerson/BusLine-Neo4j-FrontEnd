<template>
  <div class="item-container">
    <div class="table-element">
      <span>id:&nbsp;&nbsp;{{ stationInfo.stationId }}</span>
    </div>

    <div class="table-element">
      <span>{{ stationInfo.name }}</span>
    </div>

    <div class="table-element">
      <span>{{ stationInfo.english }}</span>
    </div>

  </div>

</template>


<script>
export default {
  name: "StationItem242",
  props: {
    stationInfo: {
      type: Array
    },
    index: {
      type: Number
    },
  },

}

</script>

import '@/css/placeIcon.css';
import '@/css/placeIcon.js';
import '@/css/frontIcon.css';
import '@/css/frontIcon.js';

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
</style>