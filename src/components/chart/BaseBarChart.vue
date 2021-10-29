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
    yAxis: [Array, Object],
    series: Array,
    dataZoom: Array
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