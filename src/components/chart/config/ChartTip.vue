<template>
  <div>
    <div class="title">{{title}}</div>
    <template v-for="param in params">
      <div :key="getLabel(param)" class="line-serie">
        <span>
          <span class="icon" :style="{'background-color':param.color}"></span>
          <span class="label">{{getLabel(param)}}</span>
        </span>
        <span class="value">{{getValue(param)}}</span>
      </div>
    </template>
  </div>
</template>

<script>
import utils from "../utils";
export default {
  name: "ChartTip",
  props: {
    params: Array,
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
      if (!param.vConfig) {
        return value;
      }
      return `${utils.number.format(value, { unit: param.vConfig.unit })}${param.vConfig.unitLabel || ''}`;
    }
  },
};
</script>

<style lang="less" scoped>
.line-serie {
  margin: 10px 0 0;
  display: flex;
  justify-content: space-between;
}
.title {
  text-align: left;
  font-family: monospace;
  font-size: 14px;
  color: #fff;
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
  color: #fff;
  font-weight: 400;
}
.value {
  margin-left: 20px;
  font-size: 14px;
  color: #fff;
  font-weight: 900;
  font-family: monospace;
}
</style>