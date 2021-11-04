<template>
  <ul class="co-navbar">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'CoNavbar'
}
</script>

<style lang="less" scoped>
.co-navbar {
  margin: 0;
  padding-left: 0;
  display: flex;
  list-style: none;
}
</style>