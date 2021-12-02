<template>
  <el-menu :default-active="activeIndex" class="MenuPc" mode="horizontal"
    @select="$emit('select', $event)" background-color="#34495e"
    text-color="#fff" active-text-color="#1abc9c">
    <el-menu-item index="index">
      <span class="logo" @click="$router.push({name:'Layout'})">前端二牛</span>
    </el-menu-item>
    <el-menu-item index="GitTeach" class="header-menu-item">Git常用命令
    </el-menu-item>
    <el-submenu index="article" class="header-menu-item">
      <template slot="title">看文章</template>
      <el-menu-item :index="workDiaryUrl">
        工作日志</el-menu-item>
    </el-submenu>
    <el-menu-item index="https://github.com/Bob2100/common-vue/tags"
      class="header-menu-item">{{version}}
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  props: {
    activeIndex: String,
    workDiaryUrl: String,
    version: String
  }
}
</script>