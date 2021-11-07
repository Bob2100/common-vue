<template>
  <el-menu :default-active="activeIndex" class="Header" mode="horizontal"
    @select="handleSelect" background-color="#34495e" text-color="#fff"
    active-text-color="#1abc9c">
    <el-menu-item index="0">
      <span class="logo" @click="$router.push({name:'Layout'})">前端二牛</span>
    </el-menu-item>
    <el-menu-item index="1">Git常用命令</el-menu-item>
    <el-submenu index="2">
      <template slot="title">看文章</template>
      <el-menu-item index="2-1">
        <a href="https://mp.weixin.qq.com/s/TDxxvnu6qkvOJWcQmXbqew"
          target="_blank">工作日志</a>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '0',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
