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
      <el-menu-item :index="workDiaryUrl">
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
      activeIndex: '',
    };
  },
  computed: {
    currentPath() {
      return this.$route.path;
    },
    version() {
      return `v${process.env.VUE_APP_VERSION}`;
    },
    workDiaryUrl() {
      return window.workDiaryUrl;
    }
  },
  watch: {
    currentPath() {
      this.initActiveIndex();
    },
    activeIndex(next) {
      if (next.indexOf('http') === 0) {
        this.$nextTick(() => this.initActiveIndex());
        window.open(next);
        return;
      }
      this.$router.push({ name: next })
    }
  },
  created() {
    this.initActiveIndex()
  },
  methods: {
    initActiveIndex() {
      this.activeIndex = this.currentPath.substring(1);
    },
    handleSelect(key) {
      this.activeIndex = key
    }
  }
}
</script>