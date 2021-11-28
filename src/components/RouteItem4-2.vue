<template>
  <div class="item-container">
    <div class="table-element">
      <span>{{ index + 1 }}</span>
    </div>
    <div class="table-element">
      <span>{{ NumInfo }}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "RouteItem7",
  props: {
    NumInfo: {
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