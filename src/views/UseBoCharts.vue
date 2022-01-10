<template>
  <div class="UseBoCharts">
    <bo-chart v-bind="lineOption" />
  </div>
</template>

<script>
export default {
  computed: {
    lineOption() {
      return {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
          },
        ],
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
