<template>
  <div class="bo-radar-chart">
    <bo-chart :title="title" :series="series" :radar="radar" :tooltip="tooltip"
      :legend="legend" :color="color" />
    <div v-show="false">
      <ChartTip ref="chartTip" :params="tipParams" />
    </div>
  </div>
</template>

<script>
import ChartTip from "./config/ChartTip.vue";
import mixin from './config/mixin'
import { CHART_TYPES } from './config/index'
import utils from './utils'
export default {
  name: 'bo-radar-chart',
  components: {
    ChartTip,
  },
  mixins: [mixin],
  props: {
    title: Object,
    radar: Object,
    legend: Object,
    color: Array,
    axisNameWidth: {
      type: Number,
      default: 20
    }
  },
  watch: {
    radar() {
      this.wrapRadar();
    }
  },
  created() {
    this.wrapSeries();
    this.wrapTooltip();
    this.wrapRadar();
  },
  methods: {
    wrapTooltip() {
      if (!this.tooltip) {
        return;
      }
      if (!this.vConfig) {
        return;
      }
      if (!this.tooltip.formatter) {
        this.tooltip.formatter = params => {
          this.tipParams = params.value.map((item, index) => ({
            ...params,
            data: item,
            name: this.radar.indicator[index].name,
            vConfig: this.vConfig
          }))
          return this.$refs.chartTip.$el.innerHTML;
        }
      }
    },
    axisNameFormatter(val) {
      const lineLength = this.axisNameWidth;
      const arr = [];
      let sub = '';
      let temp = val;
      while (temp.length > lineLength) {
        sub = temp.substring(0, lineLength);
        temp = temp.substring(lineLength, temp.length)
        arr.push(sub);
      }
      arr.push(temp)
      return arr.join('\n')
    },
    axisLabelFormatter(val) {
      return `${utils.number.format(val, { ...this.vConfig, point: 0 })}${this.vConfig.unitLabel}`
    },
    wrapRadar() {
      if (!this.radar) return
      this.radar.axisName = this.radar.axisName || { formatter: this.axisNameFormatter }
      this.radar.axisName.formatter = this.radar.axisName.formatter || this.axisNameFormatter
      this.radar.axisLabel = this.radar.axisLabel || { formatter: this.axisLabelFormatter }
      this.radar.axisLabel.formatter = this.radar.axisLabel.formatter || this.axisLabelFormatter
    },
    wrapSeries() {
      if (!this.series) {
        return;
      }
      this.series.forEach((item) => {
        item.type = CHART_TYPES.radar;
      });
    }
  }
}
</script>