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
        title: {
          text: '营业收入折线图',
        },
        legend: {
          data: ['营业收入'],
        },
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          name: '年',
          type: 'category',
          data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        },
        yAxis: {
          type: 'value',
          name: '亿元',
        },
        series: [
          {
            name: '营业收入',
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
