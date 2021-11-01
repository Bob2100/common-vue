<template>
  <div>
    <BaseChart class="BaseBarChart" :title="title" :xAxis="xAxis" :yAxis="yAxis"
      :series="series" :tooltip="wrapperTooltip" :dataZoom="dataZoom" />
    <div v-show="false">
      <ChartTip ref="chartTip" :params="tipParams" />
    </div>
  </div>

</template>

<script>
import BaseChart from './BaseChart.vue'
import ChartTip from "./config/ChartTip.vue";
import { vConfig } from './config/index'

export default {
  name: 'BaseBarChart',
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
    dataZoom: Array
  },
  data() {
    return {
      tipParams: [{ vConfig }]
    };
  },
  computed: {
    wrapperTooltip() {
      return {
        ...this.tooltip,
        formatter: this.tooltipFormatter
      }
    }
  },
  watch: {
    series() {
      this.wrapSeries();
    },
  },
  created() {
    this.wrapSeries();
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
    wrapSeries() {
      if (!this.series) {
        return;
      }
      this.series.forEach((item) => {
        item.type = "bar";
      });
    }
  }
}
</script>