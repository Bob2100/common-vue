<template>
  <div class="UtilsDemo">
    <bo-chart v-bind="option" />
  </div>
</template>

<script>
import utils from 'bo-charts/src/utils'
export default {
  computed: {
    option() {
      return {
        tooltip: {
          trigger: 'axis',
          valueFormatter: (val) =>
            utils.number.format(val, { unit: 4 }) + ' 万元',
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [15123, 23000, 22499, 21800, 13500, 14700, 26099],
            type: 'line',
          },
        ],
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
