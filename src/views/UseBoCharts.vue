<template>
  <div class="UseBoCharts">
    <h2>NPM 安装 BoCharts</h2>
    <p>你可以使用如下命令通过 npm 安装 BoCharts</p>
    <div class="code-wrapper">
      <pre class="language-text"><code>npm i -S bo-charts</code></pre>
    </div>
    <bo-chart v-bind="lineOption" />
  </div>
</template>

<script>
export default {
  computed: {
    lineOption() {
      return {
        title: {
          text: '营业收入折线图',
        },
        legend: {
          data: ['营业收入'],
        },
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          name: '年',
          type: 'category',
          data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        },
        yAxis: {
          type: 'value',
          name: '亿元',
        },
        series: [
          {
            name: '营业收入',
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
          },
        ],
      }
    },
  },
}
</script>

<style lang="scss" scoped>
h2 {
  border-bottom: 1px solid #eee;
}
.code-wrapper {
  width: 50%;
}
pre[class*='language-'] {
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #c3cee3;
  background: #263238;
  padding: 14px;
}
</style>
