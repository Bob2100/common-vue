<template>
  <div class="BaseChart">
    <div ref="chart" class="chart"></div>
    <div v-show="false">
      <ChartTip ref="chartTip" :params="tipParams" />
    </div>
  </div>
</template>

<script>
import { debounce } from "throttle-debounce";
import { vConfig } from './config'
import echarts from 'echarts'
import ChartTip from "./ChartTip.vue";

let chart = null;
const LISTENER_HOOKS = {
  resize: debounce(400, false, () => {
    chart && chart.resize();
  })
};

export default {
  name: "BaseChart",
  components: {
    ChartTip,
  },
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
  data() {
    return {
      tipParams: [
        {
          vConfig
        },
      ]
    };
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
    tooltipFormatter(params) {
      if (Array.isArray(params)) {
        params.forEach((param) => {
          param.vConfig = this.series[param.seriesIndex].vConfig;
        });
        this.tipParams = params;
      } else {
        params.vConfig = this.series[params.seriesIndex].vConfig;
        this.tipParams = [params];
      }
      return this.$refs.chartTip.$el.innerHTML;
    },
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
        tooltip: {
          ...this.tooltip,
          formatter: this.tooltipFormatter
        },
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
        radar: this.radar || null
      };
    },
  },
};
</script>

<style lang="less" scoped>
.BaseChart {
  width: 100%;
  height: 380px;
}

.chart {
  height: 100%;
  width: 100%;
  min-height: 50px;
  min-width: 50px;
}
</style>