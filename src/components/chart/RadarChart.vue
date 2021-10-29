<template>
  <BaseChart class="RadarChart" :title="title" :series="series"
    :radar="radar" />
</template>

<script>
import BaseChart from './BaseChart.vue'
export default {
  name: 'RadarChart',
  components: {
    BaseChart
  },
  props: {
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

<style lang="less" scoped>
</style>