<template>
  <BaseChart
    class="BasePieChart"
    ref="baseChart"
    :title="title"
    :xAxis="null"
    :yAxis="[]"
    :series="series"
    :legend="legend"
    :tooltip="tooltip"
    @click-event="$emit('click-event', $event)"
  />
</template>

<script>
  import BaseChart from "./BaseChart.vue";

  export default {
    name: "BasePieChart",
    components: {
      BaseChart,
    },
    props: {
      title: String,
      legend: {
        type: Object,
        default() {
          return {};
        },
      },
      tooltip: {
        type: Object,
        default() {
          return {};
        },
      },
      series: {
        type: Array,
        default() {
          return [
            {
              name: '名称',
              data: [
                {
                  name: 'A',
                  value: 0.4,
                },
                {
                  name: 'B',
                  value: 0.6,
                }
              ]
            }
          ];
        },
      },
    },
    watch: {
      legend() {
        this.wrapLegend();
      },
      tooltip() {
        this.wrapTooltip();
      },
      series() {
        this.wrapSeries();
      },
    },
    created() {
      this.wrapLegend();
      this.wrapTooltip();
      this.wrapSeries();
    },
    methods: {
      wrapLegend() {
        this.legend.orient = this.legend.orient || "vertical";
        this.legend.left = this.legend.left || "right";
      },
      wrapTooltip() {
        this.tooltip.trigger = "item";
        this.tooltip.formatter =
          this.tooltip.formatter ||
          ((param) => {
            param.vConfig = {
              isPercent: true,
            };
            const baseChartEl = this.$refs["baseChart"];
            baseChartEl.tipParams = [param];
            return baseChartEl.$refs["chartTip"].$el.innerHTML;
          });
      },
      wrapSeries() {
        this.series.forEach((item) => {
          item.type = "pie";
          item.radius = item.radius || "95%";
          item.label = item.label || {
              show: true,
              color: 'auto'
            }
          item.emphasis = item.emphasis || {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
              label: {
                fontSize: tools.fontSize(40),
                show: true,
                color: 'auto'
              }
            };
        });
      },
    },
  };
</script>