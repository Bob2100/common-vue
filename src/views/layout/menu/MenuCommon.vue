<template>
  <el-menu
    class="MenuCommon"
    :default-active="activeIndex"
    :mode="isPC ? 'horizontal' : ''"
    background-color="#34495e"
    text-color="#fff"
    router
    active-text-color="#1abc9c">
    <el-menu-item index="/CommonVue" v-if="isPC">
      <span class="logo">前端二牛</span>
    </el-menu-item>
    <el-menu-item index="/UseBoCharts" class="header-menu-item">
      BoCharts
    </el-menu-item>
    <el-menu-item index="/UseBase" class="header-menu-item">
      基础组件
    </el-menu-item>
    <el-menu-item index="/GitTeach" class="header-menu-item">
      Git常用命令
    </el-menu-item>
    <el-submenu class="header-menu-item" index>
      <template slot="title">看文章</template>
      <el-menu-item>
        <el-link :href="workDiaryUrl">工作日志</el-link>
      </el-menu-item>
    </el-submenu>
    <el-menu-item class="header-menu-item">
      <el-link href="https://github.com/Bob2100/common-vue/tags">{{
        version
      }}</el-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  props: {
    type: String,
  },
  data() {
    return {
      activeIndex: this.$route.path,
    }
  },
  computed: {
    isPC() {
      return this.type === 'PC'
    },
    workDiaryUrl() {
      return window.workDiaryUrl
    },
    version() {
      return `v${process.env.VUE_APP_VERSION}`
    },
  },
}
</script>
