<template>
  <div class="item-container">
    <div class="table-element">
      <span>最少换乘次数： </span>
    </div>
    <div class="table-element">
      <span>{{ bestRoute254Info.changeCnt}}</span>
    </div>
    <div class="table-element">
      <span>路线： </span>
    </div>
    <div class="table-element">
      <span>{{ bestRoute254Info.pNode}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StationItem254",
  props: {
    index: {
      type: Number
    },
    bestRoute254Info: {
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