<template>
  <div ref="chart" class="BaseChart"></div>
</template>

<script>
import { debounce } from "throttle-debounce";
import echarts from 'echarts'

export default {
  name: "BaseChart",
  props: {
    radar: Object,
    title: Object,
    tooltip: Object,
    xAxis: Object,
    yAxis: [Array, Object],
    series: Array,
    legend: Object,
    dataZoom: Array,
    grid: Object,
    color: Array
  },
  data() {
    return {
      chart: null,
      LISTENER_HOOKS: {
        resize: debounce(400, false, () => {
          this.chart && this.chart.resize();
        })
      }
    }
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
    this.chart.dispose();
    this.removeEventListener();
  },
  methods: {
    addEventListener() {
      window.addEventListener("resize", this.LISTENER_HOOKS.resize);
    },
    removeEventListener() {
      window.removeEventListener('resize', this.LISTENER_HOOKS.resize);
    },
    initChart() {
      this.chart = echarts.init(this.$refs.chart);
      this.chart.on("click", (params) => this.$emit("click-event", params));
    },
    setOption() {
      this.chart.setOption(this.getOption());
    },
    getOption() {
      const option = {};
      for (const key in this._props) {
        if (Object.hasOwnProperty.call(this._props, key) && !!this._props[key]) {
          option[key] = this._props[key];
        }
      }
      return option;
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