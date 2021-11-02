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
.navbar-brand {
  font-size: 24px;
  height: 53 px;
  font-weight: 700;
  margin-right: 0;
  color: #fff;
  display: inline-block;
  &:hover {
    color: #1abc9c;
    background-color: transparent;
  }
}
a {
  color: #16a085;
  text-decoration: none;
  transition: 0.25s;
}
</style>