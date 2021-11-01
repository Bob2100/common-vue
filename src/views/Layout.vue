<template>
  <div class="Layout">
    <DemoLineChart />
  </div>
</template>

<script>
import DemoLineChart from './chartDemo/DemoLineChart.vue'
export default {
  name: 'Layout',
  components: {
    DemoLineChart,
  }
}
</script>
<style scoped lang="less">
.Layout {
  padding: 5px;
}
</style>