import utils from "./utils";
const { number: numUtils } = utils;

const defaultYaxisLeft = {
  type: "value",
  name: "比率 / %",
  splitLine: {
    lineStyle: {
      type: "dashed",
      color: "#aaa",
    }
  },
  axisLabel: {
    formatter: (val) => {
      return `${numUtils.formatNum(val, { unit: -2, point: 0 })}`;
    }
  }
}

const defaultYaxisRight = {
  type: "value",
  name: "数量 / 亿",
  axisLabel: {
    formatter: (val) => {
      return numUtils.formatNum(val, { unit: 8, point: 0 });
    }
  }
}

export const chartTypes = {
  line: 'line',
  bar: 'bar'
}

export const vConfig = {
  isPercent: false,
}

export default {
  defaultTooltip: {
    show: true,
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        formatter: (param) => {
          if (param.axisDimension === "y") {
            if (param.axisIndex === 0) {
              return `${numUtils.formatNum(param.value, { unit: -2 })}`;
            } else {
              return numUtils.formatNum(param.value, { unit: 8 });
            }
          }
          return param.value;
        },
      },
    }
  },
  defaultYaxis: [defaultYaxisLeft, defaultYaxisRight],
  defaultXaxis: {
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  defaultSeries: [
    {
      name: "A",
      type: chartTypes.line,
      data: [0.12, 0.132, 0.101, 0.134, 0.9, 0.23, 0.21],
      vConfig: { isPercent: true },
    },
    {
      name: "B",
      type: chartTypes.line,
      data: [0.22, 0.182, 0.191, 0.234, 0.29, 0.33, 0.31],
      vConfig: { isPercent: true },
    },
    {
      name: "C",
      type: chartTypes.bar,
      yAxisIndex: 1,
      data: [2e8, 2.5e8, 1e8, 5e8, 6e8, 1.6e8, 3.7e8],
      vConfig: vConfig,
    },
    {
      name: "D",
      type: chartTypes.bar,
      yAxisIndex: 1,
      data: [6e8, 3e8, 1e8, 8.6e8, 5e8, 6e8, 3.5e8],
      vConfig: vConfig,
    },
  ]
}