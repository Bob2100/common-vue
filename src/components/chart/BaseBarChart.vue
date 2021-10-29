<template>
  <BaseChart
    class="BaseBarChart"
    :title="title"
    :xAxis="xAxis"
    :yAxis="yAxis"
    :series="series"
    :tooltip="tooltip"
    :dataZoom="dataZoom"
  />
</template>

<script>
  import BaseChart from './BaseChart.vue'
  import tools from '../../utils/tools';
  import echarts from 'echarts'

  export default{
    name: 'BaseBarChart',
    components: {
      BaseChart
    },
    props: {
      title: String,
      tooltip: {
        type: Object,
        default() {
            return {};
            },
        },
      xAxis: {
        type: Object,
        default() {
          return {
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        },
      },
      yAxis: {
        type: Array,
        default() {
          return [
            {
              name: "比率 / %",
            },
            {
              name: "数量 / 亿",
            },
          ];
        },
      },
      series: {
          type: Array,
          default(){
              return [
                  {
                      name: "A",
                      data: [22, 182, 191, 234, 29, 33, 31]
                  },
              ];
          }
      },
      dataZoom:{
          type: Array,
          default() {
              return [];
          },
      }
    },
    watch: {
      yAxis(){
        this.wrapYaxis();
      },
      series() {
        this.wrapSeries();
      },
    },
    created() {
        this.wrapYaxis();
      this.wrapSeries();
    },
    methods: {
      wrapYaxis(){
        this.yAxis.forEach(item => {
          item.type = item.type || "value";
        });
      },
      wrapSeries(){
        this.series.forEach((item) => {
          item.type = "bar";
          item.yAxisIndex = item.yAxisIndex || 0;
          item.vConfig = item.vConfig || {
              isPercent: false
            }
        });
      }
    }
  }
</script>
<style scoped lang="less">

</style>