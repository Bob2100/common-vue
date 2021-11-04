<template>
  <li class="bo-navbar-item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'BoNavbarItem'
}
</script>
<style scoped lang="less">
.bo-navbar-item {
  > a {
    color: #fff;
    font-size: 16px;
    padding: 0 21px;
    line-height: 53px;
    font-weight: 700;
    position: relative;
    display: block;
    &:hover {
      color: #1abc9c;
      background-color: transparent;
    }
  }
}
</style>