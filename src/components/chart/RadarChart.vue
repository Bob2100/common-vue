<template>
  <BaseChart class="RadarChart" :title="title" :series="series" :radar="radar"
    :tooltip="tooltip" />
</template>

<script>
import BaseChart from './BaseChart.vue'
export default {
  name: 'RadarChart',
  components: {
    BaseChart
  },
  props: {
    tooltip: Object,
    title: String,
    radar: Object,
    series: Array
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
        item.type = "radar";
      });
    }
  }
}
</script>