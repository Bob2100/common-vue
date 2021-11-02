<template>
  <div class="Header navbar">
    <a class="navbar-brand" href="#">前端二牛</a>
    <div class="navbar-collapse">
      <ul class="navbar-nav">
        <li>看文章</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>
<style scoped lang="less">
.Header {
  height: 100%;
}
.navbar {
  display: flex;
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
.navbar-collapse {
  flex-grow: 1;
}
.navbar-nav {
  display: flex;
  list-style: none;
}
</style>