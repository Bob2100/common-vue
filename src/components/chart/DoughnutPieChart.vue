<template>
  <PieChart class="DoughnutPieChart" :legend="legend" :series="wrappedSeries" />
</template>

<script>
import PieChart from './PieChart.vue';
import utils from './utils';

export default {
  name: 'DoughnutPieChart',
  components: {
    PieChart
  },
  props: {
    legend: Object,
    series: Array,
    total: Object,
  },
  computed: {
    isShowTotal() {
      return !!this.total;
    },
    wrappedSeries() {
      this.series.forEach(item => item.radius = item.radius || ["40%", "60%"]);
      if (!this.isShowTotal) {
        return this.series;
      }
      const wrappedSeries = this.series.map(item => ({ ...item }))
      wrappedSeries.forEach(item => {
        item.data = item.data.map(obj => ({ ...obj }));
        item.data.push(this.getTotal(item.data));
      });
      return wrappedSeries;
    }
  },
  methods: {
    getTotal(data) {
      return {
        value: 0,
        label: {
          position: 'center',
          formatter: [
            `{value|${utils.number.format(
              data
                .map(({ value }) => value)
                .reduce((sum, cur) => sum + cur)
            )}}`,
            `{label|${this.total.label}}`
          ].join('\n'),
          rich: this.total.rich
        }
      }
    }
  }
}
</script>