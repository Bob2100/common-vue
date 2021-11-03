<template>
  <div class="Header navbar">
    <a class="navbar-brand" href="#">前端二牛</a>
    <div class="navbar-collapse">
      <ul class="navbar-nav">
        <li>
          <a href="https://mp.weixin.qq.com/s/TDxxvnu6qkvOJWcQmXbqew"
            target="_blank">看文章</a>
        </li>
        <li>
          <a href="https://github.com/Bob2100/common-vue/tags"
            target="_blank">v0.1.0</a>
        </li>
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
.navbar {
  display: flex;
}
.navbar-brand {
  height: 53px;
  line-height: 53px;
  padding: 0 21px;
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
  margin: 0;
  padding-left: 0;
  display: flex;
  list-style: none;
  > li > a {
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