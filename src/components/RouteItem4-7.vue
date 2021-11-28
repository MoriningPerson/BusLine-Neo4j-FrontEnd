<template>
  <div class="item-container">
    <div class="table-element-index">
      <span>{{ index + 1 }}</span>
    </div>
    <div class="table-element-station">
      <span>Station1:</span>
    </div>
    <div class="table-element">
      <div class="table-element-name">
        <span>name:</span>
        <span>{{ station1.name }}</span></div>
      <div class="table-element-id">
        <span>id:</span>
        <span>{{ station1.stationId }}</span></div>
    </div>
    <div class="table-element-station">
      <span>Station2:</span>
    </div>
    <div class="table-element">
      <div class="table-element-name">
        <span>name:</span>
        <span>{{ station2.name }}</span></div>
      <div class="table-element-id">
        <span>id:</span>
        <span>{{ station2.stationId }}</span></div>
    </div>
    <div class="table-element">
      <span>直达Route数目:</span>
    </div>
    <div class="table-element-count">
      <span>{{ routeInfo.count }}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "RouteItem4-7",
  data() {
    return {
      station1: this.routeInfo.n1,
      station2: this.routeInfo.m1,
      count: this.routeInfo.count,
    }
  },
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
  padding: 10px;
  width: 300px;
  height: 35px;
  border: solid;
}

.table-element-index {
  padding: 10px;
  width: 80px;
  height: 35px;
  border: solid;
}

.table-element-count {
  padding: 10px;
  width: 100px;
  height: 35px;
  border: solid;
}

.table-element-station {
  padding: 10px;
  width: 100px;
  height: 35px;
  border: solid;
}
</style>