<template>
  <div class="BaseLineChart">
    <BaseChart class="BaseLineChart" :title="title" :xAxis="xAxis"
      :yAxis="yAxis" :series="series" :tooltip="tooltip" :dataZoom="dataZoom"
      :color="color" :legend="legend" />
    <div v-show="false">
      <ChartTip ref="chartTip" :params="tipParams" />
    </div>
  </div>
</template>

<script>
import BaseChart from './BaseChart.vue'
import ChartTip from "./config/ChartTip.vue";
import { vConfig, CHART_TYPES } from './config/index'
import utils from './utils';

export default {
  name: 'BaseLineChart',
  components: {
    BaseChart,
    ChartTip
  },
  props: {
    title: Object,
    tooltip: Object,
    xAxis: Object,
    yAxis: [Array, Object],
    series: Array,
    dataZoom: Array,
    color: Array,
    legend: Object
  },
  data() {
    return {
      tipParams: [{ vConfig }]
    };
  },
  computed: {
    vConfig() {
      return this.series.find(item => !!item.vConfig).vConfig;
    }
  },
  watch: {
    series() {
      this.wrapSeries();
    },
    tooltip() {
      this.wrapTooltip();
    },
    yAxis() {
      this.wrapYAxis();
    }
  },
  created() {
    this.wrapSeries();
    this.wrapTooltip();
    this.wrapYAxis();
  },
  methods: {
    format(val, config = {}) {
      return `${utils.number.format(val, { ...config, unit: this.vConfig.unit })}${this.vConfig.unitLabel}`;
    },
    wrapYAxisObject(yAxis) {
      if (!yAxis) {
        return;
      }
      if (!yAxis.axisLabel) {
        return;
      }
      if (yAxis.axisLabel.formatter) {
        return;
      }
      if (!this.vConfig) {
        return;
      }
      yAxis.axisLabel.formatter = val => {
        return this.format(val, { point: 0 });
      }
    },
    wrapYAxis() {
      if (Array.isArray(this.yAxis)) {
        this.yAxis.forEach(item => this.wrapYAxisObject(item));
      } else {
        this.wrapYAxisObject(this.yAxis);
      }
    },
    wrapTooltip() {
      if (!this.tooltip) {
        return;
      }
      if (!this.vConfig) {
        return;
      }
      if (!this.tooltip.formatter) {
        this.tooltip.formatter = params => {
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
        }
      }
      if (!this.tooltip.axisPointer) {
        return;
      }
      if (!this.tooltip.axisPointer.label) {
        return;
      }
      if (!this.tooltip.axisPointer.label.formatter) {
        this.tooltip.axisPointer.label.formatter = (param) => {
          if (param.axisDimension === "x") {
            return param.value;
          }
          return this.format(param.value);
        };
      }
    },
    wrapSeries() {
      if (!this.series) {
        return;
      }
      this.series.forEach((item) => {
        item.type = CHART_TYPES.line;
      });
    }
  }
}
</script>