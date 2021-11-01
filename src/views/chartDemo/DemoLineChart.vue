<template>
  <div class="DemoLineChart chart-wrapper">
    <ChartTrend title-text="资产负债率" :x-data="xData" :y-data="yData.debtRatio" />
    <ChartTrend title-text="流动比率" :x-data="xData" :y-data="yData.flowRatio" />
    <ChartTrend title-text="毛利率" :x-data="xData" :y-data="yData.profitRatio" />
    <ChartTrend title-text="ROE" :x-data="xData" :y-data="yData.roe" />
    <ChartTrend title-text="总资产周转率" :x-data="xData"
      :y-data="yData.turnOverRatio" />
  </div>
</template>

<script>
import ChartTrend from './common/ChartTrend.vue';

export default {
  name: 'DemoLineChart',
  components: {
    ChartTrend
  },
  data() {
    return {
      date: '2021-7-24',
    }
  },
  computed: {
    xData() {
      return ['2018', '2019', '2020'];
    },
    yData() {
      return {
        debtRatio: [
          [0.22, 0.42, 0.18],
          [0.90, 0.70, 0.55]
        ],
        flowRatio: [
          [0.22, 0.09, 0.41],
          [0.18, 0.19, 0.22]
        ],
        profitRatio: [
          [0.38, 0.08, 0.41],
          [0.42, 0.45, 0.47]
        ],
        roe: [
          [-0.03, -0.01, -0.02],
          [-0.43, -0.7, -0.83]
        ],
        turnOverRatio: [
          [0.41, 0.08, 0.21],
          [0.17, 0.19, 0.22]
        ]
      };
    }
  }
}
</script>