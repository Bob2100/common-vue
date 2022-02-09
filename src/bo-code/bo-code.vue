<script>
import { JsString } from './config'
export default {
  name: 'bo-code',
  props: {
    lang: {
      type: String,
      default: 'text',
    },
  },
  computed: {
    text() {
      return this.$slots.default[0].text
    },
    formatStrategies() {
      return {
        js: () => {
          return new JsString(this.text)
            .format()
            .replaceString()
            .replaceMethodInvoke()
            .replaceKeywords()
            .toString()
        },
        text: () => {
          return this.text
        },
      }
    },
  },
  render() {
    return (
      <div class="bo-code">
        <pre>
          <code domPropsInnerHTML={this.formatStrategies[this.lang]()}></code>
        </pre>
      </div>
    )
  },
}
</script>

<style scoped>
pre {
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #9cdcfe;
  background: #1e1e1e;
  padding: 14px;
}
.keyword {
  color: #c586c0;
}
.string {
  color: #ce9178;
}
.object {
  color: #4ec9b0;
}
.function {
  color: #dcdcaa;
}
</style>
