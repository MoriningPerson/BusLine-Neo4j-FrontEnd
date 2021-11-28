<template>
  <div class="item-container">
    <div class="table-element">
      <span>{{ index + 1 }}</span>
    </div>

    <div class="table-element">
      <span>{{ stationInfo.stationId }}</span>
    </div>

    <div class="table-element2">
      <span>{{ stationInfo.name }}</span>
    </div>

    <div class="table-element3">
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

<style scoped>
.item-container {
  display: flex;
}

.table-element {
  padding: 10px;
  width: 50px;
  height: 55px;
  border: solid;
}

.table-element2 {
  padding: 10px;
  width: 70px;
  height: 55px;
  border: solid;
}

.table-element3 {
  padding: 10px;
  width: 700px;
  height: 55px;
  border: solid;
}
</style>