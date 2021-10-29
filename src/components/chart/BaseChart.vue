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
import config, { vConfig } from './config';
import * as echarts from 'echarts';
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
    title: {
      type: String,
      default: "标题",
    },
    tooltip: {
      type: Object,
      default() {
        return config.defaultTooltip;
      },
    },
    xAxis: {
      type: Object,
      default() {
        return config.defaultXaxis;
      }
    },
    yAxis: {
      type: Array,
      default() {
        return config.defaultYaxis;
      },
    },
    series: {
      type: Array,
      default() {
        return config.defaultSeries;
      },
    },
    legend: {
      type: Object,
      default() {
        return {
          data: this.series.map((serie) => serie.name),
        };
      },
    },
    dataZoom: Array
  },
  data() {
    return {
      tipParams: [
        {
          vConfig,
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
    },
    xAxis() {
      this.wrapXaxis();
    }
  },
  created() {
    this.wrapXaxis();
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
      params.forEach((param) => {
        param.vConfig = this.series[param.seriesIndex].vConfig;
      });
      console.log(params)
      this.tipParams = params;
      return this.$refs.chartTip.$el.innerHTML;
    },
    addEventListener() {
      window.addEventListener("resize", LISTENER_HOOKS.resize);
    },
    removeEventListener() {
      window.removeEventListener('resize', LISTENER_HOOKS.resize);
    },
    wrapXaxis() {
      this.xAxis.type = this.xAxis.type || "category";
      this.xAxis.axisLabel = this.xAxis.axisLabel || {
        interval: 0,
        rotate: 30,
      };
      this.xAxis.axisPointer = this.xAxis.axisPointer || {
        type: "shadow",
      };
    },
    initChart() {
      chart = echarts.init(this.$refs.chart);
      chart.on("click", (params) => this.$emit("click-event", params));
    },
    setOption() {
      this.series.forEach((serie) => {
        serie.type = serie.type || "line";
        serie.vConfig = serie.vConfig || vConfig;
      });
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