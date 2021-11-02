<template>
  <div class="Header">
    <a class="navbar-brand" href="#">前端二牛</a>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>
<style scoped lang="less">
.Header{
  height: 100%;
}
.navbar-brand {
  font-size: 24px;
  font-weight: 700;
  margin-right: 0;
  color: #fff;
  display: inline-block;
  &:hover {
    color: #1abc9c;
    background-color: transparent;
  }
}
</style>