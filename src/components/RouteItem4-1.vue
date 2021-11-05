<template>
    <div class="item-container">
      <div class="table-element">
        <span>{{index+1}}</span>
      </div>

      <div class="table-element">
        <span>n:{{stationInfo.num}}</span>
      </div>

      <div class="table-element2">
        <span>{{stationInfo.station.name}}</span>
      </div>

      <div class="table-element3">
        <span>route:{{stationInfo.routeName}}</span>
      </div>

    </div>

  </template>


<script>
export default {
name: "RouteItem6",
  props: {
    stationInfo: {
      type: Object
    },
    index: {
      type: Number
    },
  },

}

</script>

<style scoped>
.item-container{
  display: flex;
}
.table-element{
  padding:10px;
  width: 50px;
  height: 55px;
  border:solid;
}
.table-element2{
  padding:10px;
  width: 70px;
  height: 55px;
  border:solid;
}
.table-element3{
  padding:10px;
  width: 700px;
  height: 55px;
  border:solid;
}
</style>