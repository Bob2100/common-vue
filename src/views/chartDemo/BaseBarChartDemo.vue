<template>
  <BaseBarChart title="BaseBarChartDemo" :xAxis="xAxis" :yAxis="yAxis"
    :series="series" />
</template>

<script>
import BaseBarChart from '../../components/chart/BaseBarChart.vue'
export default {
  name: 'BaseBarChartDemo',
  components: {
    BaseBarChart
  },
  computed: {
    xAxis() {
      return {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    },
    yAxis() {
      return {
        type: 'value'
      }
    },
    series() {
      return [{
        data: [120, 200, 150, 80, 70, 110, 130],
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(220, 220, 220, 0.8)'
        }
      }];
    }
  }
}
</script>

<style lang="less" scoped>
</style>