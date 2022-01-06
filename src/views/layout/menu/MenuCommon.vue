<template>
  <el-menu
    :default-active="activeIndex"
    class="MenuCommon"
    :mode="isPC ? 'horizontal' : ''"
    @select="$emit('select', $event)"
    background-color="#34495e"
    text-color="#fff"
    active-text-color="#1abc9c">
    <el-menu-item index="index" v-if="isPC">
      <span class="logo">前端二牛</span>
    </el-menu-item>
    <el-menu-item index="BoChartsDemo" class="header-menu-item">
      BoCharts
    </el-menu-item>
    <el-menu-item index="UseBase" class="header-menu-item">
      基础组件
    </el-menu-item>
    <el-menu-item index="GitTeach" class="header-menu-item">
      Git常用命令
    </el-menu-item>
    <el-submenu index="article" class="header-menu-item">
      <template slot="title">看文章</template>
      <el-menu-item :index="workDiaryUrl">工作日志</el-menu-item>
    </el-submenu>
    <el-menu-item
      index="https://github.com/Bob2100/common-vue/tags"
      class="header-menu-item">
      {{ version }}
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  props: {
    activeIndex: String,
    workDiaryUrl: String,
    version: String,
    type: String,
  },
  computed: {
    isPC() {
      return this.type === 'PC'
    },
  },
}
</script>
