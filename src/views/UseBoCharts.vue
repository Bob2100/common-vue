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
      <pre
        class="language-text"><code><span class="token keyword">import</span> BoCharts <span class="token keyword">from</span> <span class="token string">'bo-charts'</span> 

<span class="token object">Vue</span><span>.</span><span class="token function">use</span><span class="token punctuation">(</span>BoCharts<span class="token punctuation">)</span></code></pre>
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
        class="language-text"><code><span class="token punctuation-tag">&lt;</span><span class="token tag">bo-chart</span> v-bind<span class="token punctuation">="</span>option<span class="token punctuation">"</span> <span class="token punctuation-tag">/&gt;</span></code></pre>
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
.token.keyword {
  color: #c586c0;
}
.token.string {
  color: #ce9178;
}
.token.object {
  color: #4ec9b0;
}
.token.function {
  color: #dcdcaa;
}
.token.punctuation {
  color: #d4d4d4;
}
.token.punctuation-tag {
  color: #808080;
}
.token.tag {
  color: #569cd6;
}
pre[class*='language-'] {
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #9cdcfe;
  background: #1e1e1e;
  padding: 14px;
}
</style>
