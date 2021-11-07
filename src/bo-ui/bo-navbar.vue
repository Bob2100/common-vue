<template>
  <ul class="bo-navbar">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'BoNavbar',
  props: {
    value: String
  }
}
</script>

<style lang="less" scoped>
.bo-navbar {
  margin: 0;
  padding-left: 0;
  display: flex;
  list-style: none;
}
</style>