<template>
  <BaseLineChart class="ChartTrend chart-panel" :title="title"
    :tooltip="tooltip" :legend="legend" :series="series" :x-axis="xAxis"
    :y-axis="yAxis" :color="color" />
</template>

<script>
import BaseLineChart from '../../../components/chart/BaseLineChart.vue'
import config from './config';

const vConfig = {
  unit: -2,
  unitLabel: '%'
}

export default {
  name: 'ChartTrend',
  components: {
    BaseLineChart
  },
  mixins: [config],
  props: {
    xData: Array,
    yData: Array
  },
  computed: {
    tooltip() {
      return {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
          label: {}
        }
      }
    },
    xAxis() {
      return {
        type: 'category',
        axisTick: {
          show: false
        },
        data: this.xData
      }
    },
    yAxis() {
      return {
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'dotted'
          }
        },
        axisLabel: {}
      }
    },
    series() {
      return [
        {
          name: this.legend.data[0],
          data: this.yData[0],
          smooth: true,
          vConfig
        },
        {
          name: this.legend.data[1],
          data: this.yData[1],
          smooth: true,
          vConfig
        }
      ]
    }
  }
}
</script>