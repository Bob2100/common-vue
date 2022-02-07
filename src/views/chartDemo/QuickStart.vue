<template>
  <div class="QuickStart">
    <p>
      BoCharts 是针对 echarts 的 Vue 2 组件化封装，目的是帮助开发者在 Vue 2
      中更友好的使用 echarts。
    </p>
    <h2>NPM 安装 BoCharts</h2>
    <p>你可以使用如下命令通过 npm 安装 BoCharts</p>
    <bo-code class="lang-text">npm i -S bo-charts</bo-code>
    <h2>在 Vue2 中注册 BoCharts</h2>
    <p>你可以使用如下命令将 BoCharts 注册到 Vue</p>
    <div>
      <pre
        class="language-text"><code><span class="token keyword">import</span> BoCharts <span class="token keyword">from</span> <span class="token string">'bo-charts'</span> 

<span class="token object">Vue</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>BoCharts<span class="token punctuation">)</span></code></pre>
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
    <div>
      <pre
        class="language-text"><code><span class="token punctuation-tag">&lt;</span><span class="token tag">bo-chart</span> v-bind<span class="token punctuation">="</span>option<span class="token punctuation">"</span> <span class="token punctuation-tag">/&gt;</span></code></pre>
    </div>
    <h2>显示效果</h2>
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
