<script>
export default {
  name: 'bo-code',
  render() {
    console.log(this.$slots)
    return (
      <div class="bo-code">
        <pre>
          <code>{this.$slots.default}</code>
        </pre>
      </div>
    )
  },
}
</script>

<style>
[class*='lang-'] > pre {
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #9cdcfe;
  background: #1e1e1e;
  padding: 14px;
}
</style>
