<script>
import prettier from 'prettier/standalone'
import babel from 'prettier/parser-babel'
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
      const vm = this
      return {
        text:
          text &&
          prettier.format(text, {
            parser: 'babel',
            plugins: [babel],
          }),
        replaceString() {
          return vm.replaceString(this.text)
        },
      }
    },
    replaceString(text) {
      const vm = this
      return {
        text: text.replace(
          /"[\d\D]+"/g,
          (match) => `<span class="string">${match}</span>`
        ),
        replaceKeywords() {
          return vm.replaceKeywords(this.text)
        },
      }
    },
    replaceKeywords(text) {
      ;['import', 'from'].forEach((item) => {
        text = text.replace(
          new RegExp(`${item} `, 'g'),
          `<span class="keyword">${item} </span>`
        )
      })
      return text
    },
  },
  render() {
    let text = this.$slots.default[0].text
    if (this.lang === 'js') {
      text = this.format(text).replaceString().replaceKeywords()
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
.string {
  color: #ce9178;
}
</style>
