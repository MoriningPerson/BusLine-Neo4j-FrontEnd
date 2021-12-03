<template>
  <div class="item-container">
    <div class="table-element">
      <span>路径长度：</span>
    </div>
    <div class="table-element">
      <span>{{ bestRoute252Info.pathLen}}</span>
    </div>
    <div class="table-element">
      <span>最短路：</span>
    </div>
    <div class="table-element">
      <span>{{ bestRoute252Info.p}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StationItem252",
  props: {
    index: {
      type: Number
    },
    bestRoute252Info: {
      type: Object
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
  height: 30px;
  border: solid;
}
</style>