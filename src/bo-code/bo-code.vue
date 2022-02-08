<script>
import prettier from 'prettier/standalone'
import babel from 'prettier/parser-babel'
import { keywords } from './config'
export default {
  name: 'bo-code',
  props: {
    lang: {
      type: String,
      default: 'text',
    },
  },
  methods: {
    format(text) {
      return (
        text &&
        prettier.format(text, {
          parser: 'babel',
          plugins: [babel],
        })
      )
    },
  },
  render() {
    let text = this.$slots.default[0].text
    if (this.lang === 'js') {
      text = this.format(text)
      keywords.forEach((item) => {
        text = text.replace(
          new RegExp(`${item} `, 'g'),
          `<span class="keyword">${item} </span>`
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
