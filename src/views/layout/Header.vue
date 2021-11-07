<template>
  <div class="Header navbar">
    <a class="navbar-brand" href="javascript:;"
      @click="$router.push({name:'Layout'})">前端二牛</a>
    <div class="navbar-collapse">
      <bo-navbar v-model="activeItem">
        <bo-navbar-item name="git">
          <a href="javascript:;"
            @click="$router.push({name:'GitTeach'})">Git常用命令</a>
        </bo-navbar-item>
        <bo-navbar-item name="article">
          <a href="https://mp.weixin.qq.com/s/TDxxvnu6qkvOJWcQmXbqew"
            target="_blank">看文章</a>
        </bo-navbar-item>
        <bo-navbar-item name="version">
          <a href="https://github.com/Bob2100/common-vue/tags"
            target="_blank">{{version}}</a>
        </bo-navbar-item>
      </bo-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeItem: 'version'
    }
  },
  computed: {
    version() {
      return `v${process.env.VUE_APP_VERSION}`;
    }
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