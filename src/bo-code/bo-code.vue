<script>
import { keywords } from './config'
export default {
  name: 'bo-code',
  props: {
    lang: {
      type: String,
      default: 'text',
    },
  },
  render() {
    let text = this.$slots.default[0].text
    if (this.lang === 'js') {
      keywords.forEach((item) => {
        text = text.replace(
          new RegExp(` ${item} `, 'g'),
          `<span class="keyword"> ${item} </span>`
        )
      })
    }
    return (
      <div class="bo-code">
        <pre>
          <code domPropsInnerHTML={text}></code>
        </pre>
      </div>
    )
  },
}
</script>

<style>
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
</style>
