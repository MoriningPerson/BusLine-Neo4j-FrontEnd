<template>
  <div class="item-container">
    <div class="table-element-index">
      <span>{{ index + 1 }}</span>
    </div>
    <div class="table-element-station">
      <span>起始站:</span>
    </div>
    <div class="table-element">
      <div class="table-element-name">
        <span>name:</span>
        <span>{{ routeInfo.start }}</span></div>
      <div class="table-element-time">
        <span>time:</span>
        <span>{{ routeInfo.starttime }}</span></div>
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

<script>
export default {
  name: "RouteItem4-9",
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

.item-container {
  display: flex;
}

.table-element {
  padding: 8px;
  width: 300px;
  height: 40px;
  border: solid;
}

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
</style>