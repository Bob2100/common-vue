<template>
  <div ref="chart" class="bo-chart"></div>
</template>

<script>
import { debounce } from "throttle-debounce";
import * as echarts from 'echarts'

export default {
  name: "bo-chart",
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
  computed: {
    series() {
      return this.$attrs.series
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
      if (!this.series || this.series.length === 0) {
        this.chart.clear();
        return;
      }
      if (!this.series[0].data || this.series[0].data.length === 0) {
        this.chart.clear();
        return;
      }
      if (this.series[0].data[0] && this.series[0].data[0].value && this.series[0].data[0].value.length === 0) {
        this.chart.clear();
        return;
      }
      this.chart.setOption(this.$attrs);
    },
  },
};
</script>

<style scoped>
.bo-chart {
  height: 450px;
  width: 100%;
  min-height: 50px;
  min-width: 50px;
}
</style>