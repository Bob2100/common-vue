<template>
  <div class="ChartTip">
    <div class="title">{{title}}</div>
    <div :style="cssVars">
      <div v-for="(param,index) in params" :key="index" class="line-serie">
        <span>
          <span class="icon" :style="{'background-color':param.color}"></span>
          <span class="label">{{getLabel(param)}}</span>
        </span>
        <span class="value">{{getValue(param)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import utils from "../utils";
import { CHART_TYPES } from './index'
export default {
  name: "ChartTip",
  props: {
    params: Array,
  },
  computed: {
    subType() {
      return this.params[0].componentSubType;
    },
    isLikePie() {
      return [CHART_TYPES.pie, CHART_TYPES.radar].indexOf(this.subType) !== -1;
    },
    title() {
      if (this.isLikePie) {
        return this.params[0].seriesName;
      }
      return this.params[0].axisValueLabel;
    },
    cssVars() {
      return {
        '--iconSize': `${this.isLikePie ? 4 : 10}px`,
      }
    }
  },
  methods: {
    getLabel(param) {
      if (this.isLikePie) {
        return param.name;
      }
      return param.seriesName;
    },
    getValue(param) {
      const data = param.data;
      if (!param.vConfig) {
        return data;
      }
      return this.format(data, param.vConfig);
    },
    format(val, vConfig) {
      return `${utils.number.format(val, { unit: vConfig.unit })}${vConfig.unitLabel || ''}`;
    }
  },
};
</script>

<style scoped>
.line-serie {
  line-height: 1;
  margin: 10px 0 0;
  display: flex;
  justify-content: space-between;
}
.title {
  text-align: left;
  font-family: monospace;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
}
.icon {
  display: inline-block;
  vertical-align: middle;
  float: none;
  margin-right: 8px;
  margin-left: 3px;
  border-radius: var(--iconSize);
  width: var(--iconSize);
  height: var(--iconSize);
}
.label {
  font-size: 14px;
  color: #666;
  font-weight: 400;
  margin-left: 2px;
}
.value {
  margin-left: 20px;
  font-size: 14px;
  color: #666;
  font-weight: 900;
}
</style>