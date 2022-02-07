<template>
  <div class="bo-code">
    <pre><code><slot></slot></code></pre>
  </div>
</template>

<script>
export default {
  name: 'bo-code',
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
