<script>
export default {
  data() {
    return {
      keyWord: '',
    }
  },
  computed: {
    option() {
      return { placeholder: '请输入关键字', clearable: true }
    },
  },
  methods: {
    doSearch() {
      console.log(this.keyWord)
    },
    input(val) {
      this.keyWord = val
    },
  },
  render() {
    return (
      <div class="UseBase">
        <BaseSearchBox
          value={this.keyWord}
          onInput={this.input}
          {...{ attrs: this.option }}
          onSearch={this.doSearch}
        />
      </div>
    )
  },
}
</script>
<style lang="scss" scoped>
::v-deep .BaseSearchBox {
  width: 25%;
}
</style>
