<template>
  <div ref="chart" class="BaseChart"></div>
</template>

<script>
import { debounce } from "throttle-debounce";
import echarts from 'echarts'

let chart = null;
const LISTENER_HOOKS = {
  resize: debounce(400, false, () => {
    chart && chart.resize();
  })
};

export default {
  name: "BaseChart",
  props: {
    radar: Object,
    title: String,
    tooltip: Object,
    xAxis: Object,
    yAxis: [Array, Object],
    series: Array,
    legend: Object,
    dataZoom: Array
  },
  watch: {
    series: {
      handler() {
        this.setOption();
      },
      deep: true
    }
  },
  mounted() {
    this.initChart();
    this.setOption();
    this.addEventListener();
  },
  beforeDestroy() {
    chart.dispose();
    this.removeEventListener();
  },
  methods: {
    addEventListener() {
      window.addEventListener("resize", LISTENER_HOOKS.resize);
    },
    removeEventListener() {
      window.removeEventListener('resize', LISTENER_HOOKS.resize);
    },
    initChart() {
      chart = echarts.init(this.$refs.chart);
      chart.on("click", (params) => this.$emit("click-event", params));
    },
    setOption() {
      chart.setOption(this.getOption());
    },
    getOption() {
      return {
        title: {
          text: this.title
        },
        tooltip: this.tooltip,
        legend: this.legend,
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        series: this.series,
        dataZoom: this.dataZoom,
        radar: this.radar
      };
    },
  },
};
</script>

<style lang="less" scoped>
.BaseChart {
  height: 380px;
  width: 100%;
  min-height: 50px;
  min-width: 50px;
}
</style>