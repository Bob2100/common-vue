<template>
  <div class="BaseChart">
    <div ref="chart" style="height:100%;width:100%"></div>
    <div v-show="false">
      <ChartTip ref="chartTip" :params="tipParams" />
    </div>
  </div>
</template>

<script>
import ChartTip from "./ChartTip.vue";
import utils from "../utils/utils";
import { mapGetters } from "vuex";

const V_CONFIG = {
  isPercent: false,
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
        return {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
            label: {
              formatter: (param) => {
                if (param.axisDimension === "y") {
                  if (param.axisIndex === 0) {
                    return `${utils.formatAmount(param.value, -2)}`;
                  } else {
                    return utils.formatAmount(param.value, 8);
                  }
                }
                return param.value;
              },
            },
          },
          formatter: (params) => {
            params.forEach((param) => {
              param.vConfig = this.series[param.seriesIndex].vConfig;
            });
            this.tipParams = params;
            return this.$refs.chartTip.$el.innerHTML;
          },
        };
      },
    },
    xData: {
      type: [],
      default() {
        return ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
      },
    },
    yAxis: {
      type: [],
      default() {
        return [
          {
            type: "value",
            name: "比率 / %",
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "#aaa",
              },
            },
            axisLabel: {
              formatter: (val) => {
                return `${utils.formatAmount(val, -2)}`;
              },
            },
          },
          {
            type: "value",
            name: "数量 / 亿",
            axisLabel: {
              formatter: (val) => {
                return utils.formatAmount(val, 8, 0);
              },
            },
          },
        ];
      },
    },
    series: {
      type: [],
      default() {
        return [
          {
            name: "A",
            type: "line",
            data: [0.12, 0.132, 0.101, 0.134, 0.9, 0.23, 0.21],
            vConfig: V_CONFIG,
          },
          {
            name: "B",
            type: "line",
            data: [0.22, 0.182, 0.191, 0.234, 0.29, 0.33, 0.31],
            vConfig: V_CONFIG,
          },
          {
            name: "C",
            type: "bar",
            yAxisIndex: 1,
            data: [22, 182, 191, 234, 29, 33, 31],
            vConfig: { isPercent: false },
          },
          {
            name: "D",
            type: "bar",
            yAxisIndex: 1,
            data: [10, 90, 130, 180, 19, 30, 30],
            vConfig: { isPercent: false },
          },
        ];
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
  },
  computed: {
    xAxis() {
      if (this.xData.length === 0) {
        return null;
      }
      return {
        type: "category",
        axisLabel: {
          interval: 0,
          rotate: 30,
        },
        axisPointer: {
          type: "shadow",
        },
        splitLine: {
          show: true,
        },
        data: this.xData,
      };
    },
    ...mapGetters(["isShowAside"]),
  },
  data() {
    return {
      chart: null,
      tipParams: [
        {
          vConfig: V_CONFIG,
        },
      ],
      timeOut: "",
    };
  },
  watch: {
    isShowAside() {
      setTimeout(() => {
        this.chart.dispose();
        this.initChart();
        this.setOption();
      }, 500);
    },
    series() {
      this.setOption();
    },
  },
  mounted() {
    this.initChart();
    this.setOption();
  },
  beforeDestroy() {
    this.chart.dispose();
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$refs.chart);
      this.chart.on("click", (params) => this.$emit("click-event", params));
    },
    setOption() {
      this.series.forEach((serie) => {
        serie.type = serie.type || "line";
        serie.vConfig = serie.vConfig || V_CONFIG;
      });
      this.chart.setOption(this.getOption());
    },
    getOption() {
      return {
        title: {
          text: this.title,
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
</style>