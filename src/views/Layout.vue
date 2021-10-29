<template>
  <div class="Layout">
    <BaseChart />
    <RadarChart />
  </div>
</template>

<script>
import BaseChart from '../components/chart/BaseChart.vue'
import RadarChart from '../components/chart/RadarChart.vue'
export default {
  name: 'Layout',
  components: {
    BaseChart,
    RadarChart
  }
}
</script>

<style lang="less" scoped>
</style>