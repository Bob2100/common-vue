<template>
  <div class="UseBoCharts">
    <h2>NPM 安装 BoCharts</h2>
    <p>你可以使用如下命令通过 npm 安装 BoCharts</p>
    <div class="code-wrapper">
      <pre class="language-text"><code>npm i -S bo-charts</code></pre>
    </div>
    <h2>在Vue2中注册 BoCharts</h2>
    <p>你可以使用如下命令将 BoCharts 注册到 Vue</p>
    <div class="code-wrapper">
      <pre class="language-text"><code>import BoCharts from 'bo-charts' 
Vue.use(BoCharts)</code></pre>
    </div>
    <h2>使用示例</h2>
    <p>
      下面示例中 option 的格式和
      <a
        href="https://echarts.apache.org/examples/zh/editor.html?c=line-simple"
        target="_blank"
        >echarts</a
      >
      官方文档保持一致
    </p>
    <div class="code-wrapper">
      <pre
        class="language-text"><code>&lt;bo-chart v-bind="option" /&gt;</code></pre>
    </div>
    <h2>展示效果</h2>
    <bo-chart v-bind="option" />
  </div>
</template>

<script>
export default {
  computed: {
    option() {
      return {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
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
