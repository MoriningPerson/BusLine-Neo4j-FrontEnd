<template>
  <div class="item-container">
    <div class="table-element">
      <span>{{ index + 1 }}</span>
    </div>
    <div class="table-element">
      <span>最少换乘次数：</span>
      <span>{{ bestRoute253Info.changeCnt}}</span>

    </div>
    <div class="table-element">
      <span>路线：</span>
      <span>{{ bestRoute253Info.pNode}}</span>>
    </div>
  </div>
</template>

<script>
export default {
  name: "StationItem253",
  props: {
    index: {
      type: Number
    },
    bestRoute253Info: {
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