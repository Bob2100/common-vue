<template>
  <RadarChart class="ChartTarget chart-panel" :title="title" :tooltip="tooltip"
    :legend="legend" :radar="radar" :series="series" :color="color" />
</template>

<script>
import RadarChart from '../../../components/chart/BaseLineChart.vue'
import config from './config';
export default {
  name: 'ChartTarget',
  components: {
    RadarChart
  },
  mixins: [config],
  props: {
    shape: String,
    indicator: Array,
    data: Array
  },
  computed: {
    tooltip() {
      return {}
    },
    radar() {
      return {
        shape: this.shape,
        name: {
          textStyle: {
            color: '#878789'
          }
        },
        splitArea: {
          areaStyle: {
            color: ['#f8f8fa', '#f0eff2']
          }
        },
        indicator: this.indicator
      }
    },
    series() {
      return [{
        name: '客户值 vs 行业中值',
        areaStyle: { opacity: 0.2 },
        data: this.data
      }]
    }
  },
  watch: {
    data() {
      this.wrapperData();
    }
  },
  created() {
    this.wrapperData();
  },
  methods: {
    wrapperData() {
      this.data.forEach((item, index) => {
        item.name = this.legend.data[index];
      });
    }
  }
}
</script>