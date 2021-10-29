<template>
  <div>
    <div class="title">{{title}}</div>
    <template v-for="param in params">
      <div :key="getLabel(param)" style="margin: 10px 0 0">
        <span class="icon" :style="{'background-color':param.color}"></span>
        <span class="label">{{getLabel(param)}}</span>
        <span class="value">{{getValue(param)}}</span>
      </div>
    </template>
  </div>
</template>

<script>
import utils from "../utils/utils";
export default {
  name: "ChartTip",
  props: {
    params: [],
  },
  computed: {
    isPie() {
      return this.params[0].componentSubType === "pie";
    },
    title() {
      if (this.isPie) {
        return this.params[0].seriesName;
      }
      return this.params[0].axisValueLabel;
    },
  },
  methods: {
    getLabel(param) {
      if (this.isPie) {
        return param.name;
      }
      return param.seriesName;
    },
    getValue(param) {
      if (this.isPie) {
        return `${param.percent}%`;
      }
      const value = param.data;
      if (param.vConfig.isPercent) {
        return `${this.formatAmount(value, -2)}%`;
      } else {
        return this.formatAmount(value, 8);
      }
    },
    formatAmount(amount, unit, point) {
      return utils.formatAmount(amount, unit, point);
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  font-family: monospace;
  font-size: 14px;
  color: #666;
  font-weight: 400;
  line-height: 1;
}
.icon {
  display: inline-block;
  margin-right: 4px;
  border-radius: 10px;
  width: 10px;
  height: 10px;
}
.label {
  font-size: 14px;
  color: #666;
  font-weight: 400;
  margin-left: 2px;
}
.value {
  float: right;
  margin-left: 20px;
  font-size: 14px;
  color: #666;
  font-weight: 900;
  font-family: monospace;
}
</style>