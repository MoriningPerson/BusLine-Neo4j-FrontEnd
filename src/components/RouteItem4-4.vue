<template>
  <div class="item-container">
    <div class="table-element">
      <span>{{index+1}}</span>
    </div>
    <div class="table-element">
      <span>{{stationInfo.stationId}}</span>
    </div>
    <div class="table-element">
      <span>{{stationInfo.name}}</span>
    </div>
    <div class="table-element">
      <span>{{stationInfo.english}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RouteItem9",
  props: {
    stationInfo: {
      type: Object
    },
    index: {
      type: Number
    },
  }
}

</script>

<style scoped>
.item-container{
  display: flex;
}
.table-element{
  padding:10px;
  width: 300px;
  height: 30px;
  border:solid;
}
</style>