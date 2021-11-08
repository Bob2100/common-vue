<template>
  <BaseChart class="PieChart" :title="title" :series="series" :tooltip="tooltip"
    :legend="legend" :color="color" />
</template>

<script>
import BaseChart from './BaseChart.vue'
export default {
  name: 'PieChart',
  components: {
    BaseChart
  },
  props: {
    tooltip: Object,
    title: Object,
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
        item.type = "pie";
      });
    }
  }
}
</script>