<template>
  <div class="DemoLineChart chart-wrapper">
    <ChartTrend title-text="图A" :x-data="xData" :y-data="yData.debtRatio" />
    <ChartTrend title-text="图B" :x-data="xData" :y-data="yData.flowRatio" />
    <ChartTrend title-text="图C" :x-data="xData" :y-data="yData.profitRatio" />
    <div class="chart-panel">
      <img :src="erniuIcon">
      <h4>欢迎扫码关注二牛的公众号 ：）</h4>
      <a href="https://github.com/Bob2100/common-vue" target="_blank">本站源码</a>
    </div>
  </div>
</template>

<script>
import ChartTrend from './common/ChartTrend.vue';
import erniuIcon from '../../assets/erniu.jpeg';

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
    erniuIcon() {
      return erniuIcon;
    },
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
        ]
      };
    }
  }
}
</script>