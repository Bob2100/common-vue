<template>
  <div class="Header navbar">
    <a class="navbar-brand" href="#">前端二牛</a>
    <div class="navbar-collapse">
      <co-navbar>
        <co-navbar-item>
          <a href="https://mp.weixin.qq.com/s/TDxxvnu6qkvOJWcQmXbqew"
            target="_blank">看文章</a>
        </co-navbar-item>
        <co-navbar-item>
          <a href="https://github.com/Bob2100/common-vue/tags"
            target="_blank">v0.1.1</a>
        </co-navbar-item>
      </co-navbar>
    </div>
  </div>
</template>

<script>
import CoNavbar from '../../ui/co-navbar.vue';
import CoNavbarItem from '../../ui/co-navbar-item.vue';
export default {
  name: "Header",
  components: {
    CoNavbar,
    CoNavbarItem
  }
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
</style>