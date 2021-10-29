<template>
  <div class="Layout">
    <BaseBarChart />
    <!-- <RadarChart /> -->
  </div>
</template>

<script>
import BaseBarChart from '../components/chart/BaseBarChart.vue'
// import RadarChart from '../components/chart/RadarChart.vue'
export default {
  name: 'Layout',
  components: {
    BaseBarChart,
    // RadarChart
  }
}
</script>

<style lang="less" scoped>
</style>