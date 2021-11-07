<template>
  <el-menu :default-active="activeIndex" class="Header" mode="horizontal"
    @select="handleSelect" background-color="#34495e" text-color="#fff"
    active-text-color="#1abc9c">
    <el-menu-item index="index">
      <span class="logo" @click="$router.push({name:'Layout'})">前端二牛</span>
    </el-menu-item>
    <el-menu-item index="GitTeach">Git常用命令</el-menu-item>
    <el-submenu index="article">
      <template slot="title">看文章</template>
      <el-menu-item index="https://mp.weixin.qq.com/s/TDxxvnu6qkvOJWcQmXbqew">
        工作日志</el-menu-item>
    </el-submenu>
    <el-menu-item index="https://github.com/Bob2100/common-vue/tags">{{version}}
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: 'index',
    };
  },
  computed: {
    version() {
      return `v${process.env.VUE_APP_VERSION}`;
    }
  },
  watch: {
    activeIndex(next) {
      if (next.indexOf('http') === 0) {
        window.open(next);
        return;
      }
      this.$router.push({ name: next })
    }
  },
  methods: {
    handleSelect(key) {
      this.activeIndex = key
    }
  }
}
</script>
