<template>
  <div class="item-container">
    <div class="table-element">
      <span>最短运行时间： </span>
    </div>
    <div class="table-element">
      <span>{{ bestRoute256Info.weight }}</span>
    </div>
    <div class="table-element">
      <span>路线： </span>
    </div>
    <div class="table-element">
      <span>{{ bestRoute256Info.pNode }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StationItem256",
  props: {
    index: {
      type: Number
    },
    bestRoute256Info: {
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