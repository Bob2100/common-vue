<template>
  <BaseChart class="BaseBarChart" :title="title" :xAxis="xAxis" :yAxis="yAxis"
    :series="series" :tooltip="tooltip" :dataZoom="dataZoom" />
</template>

<script>
import BaseChart from './BaseChart.vue'

export default {
  name: 'BaseBarChart',
  components: {
    BaseChart
  },
  props: {
    title: String,
    tooltip: Object,
    xAxis: Object,
    yAxis: Array,
    series: Array,
    dataZoom: Array
  },
  watch: {
    xAxis() {
      this.wrapXaxis();
    },
    yAxis() {
      this.wrapYaxis();
    },
    series() {
      this.wrapSeries();
    },
  },
  created() {
    this.wrapXaxis();
    this.wrapYaxis();
    this.wrapSeries();
  },
  methods: {
    wrapXaxis() {
      if (!this.xAxis) {
        return;
      }
      this.xAxis.type = this.xAxis.type || "category";
      this.xAxis.axisLabel = this.xAxis.axisLabel || {
        interval: 0,
        rotate: 30,
      };
      this.xAxis.axisPointer = this.xAxis.axisPointer || {
        type: "shadow",
      };
    },
    wrapYaxis() {
      if (!this.yAxis) {
        return;
      }
      this.yAxis.forEach(item => {
        item.type = item.type || "value";
      });
    },
    wrapSeries() {
      if (!this.series) {
        return;
      }
      this.series.forEach((item) => {
        item.type = "bar";
        item.yAxisIndex = item.yAxisIndex || 0;
      });
    }
  }
}
</script>