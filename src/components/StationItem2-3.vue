<template>
  <div class="item-container">
    <!--    <div class="table-element">-->
    <!--      <span>hhh:</span>-->
    <!--    </div>-->
    <div class="table-element">
      <span>{{ info.eachId }}</span>
    </div>
    <div class="table-element">
      <span>{{ info.routesHasStationId }}</span>
    </div>
    <!--    <div class="table-element">-->
    <!--      <span>{{info.eachId}}</span>-->
    <!--    </div>-->
    <!--    <div class="table-element">-->
    <!--      <span>{{RouteInfo.name}}</span>-->
    <!--    </div>-->
    <!--    <div class="table-element">-->
    <!--      <span>{{RouteInfo.routeName}}</span>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "StationItem3",
  props: {
    info: {
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
  height: 30px;
  border: solid;
}
</style>