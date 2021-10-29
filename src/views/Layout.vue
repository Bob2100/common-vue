<template>
  <div class="Layout">
    <BaseBarChartDemo />
    <RadarChartDemo />
  </div>
</template>

<script>
import BaseBarChartDemo from './chartDemo/BaseBarChartDemo.vue'
import RadarChartDemo from './chartDemo/RadarChartDemo.vue'
export default {
  name: 'Layout',
  components: {
    BaseBarChartDemo,
    RadarChartDemo
  }
}
</script>

<style lang="less" scoped>
</style>