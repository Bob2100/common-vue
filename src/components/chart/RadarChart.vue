<template>
  <BaseChart class="RadarChart" :title="title" :series="series" :radar="radar"
    :tooltip="tooltip" :legend="legend" :color="color" />
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
    title: Object,
    radar: Object,
    series: Array,
    legend: Object,
    color: Array
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