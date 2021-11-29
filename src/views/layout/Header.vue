<template>
  <div class="Header">
    <el-menu :default-active="activeIndex" class="header-menu" mode="horizontal"
      @select="handleSelect" background-color="#34495e" text-color="#fff"
      active-text-color="#1abc9c">
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
    <div class="header-menu-more">
      <i class="el-icon-s-fold" @click="isShowDrawer = true"></i>
    </div>
    <el-drawer :visible.sync="isShowDrawer" :with-header="false" append-to-body>
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '',
      isShowDrawer: false
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
<style lang="less" scoped>
@import "../../bo-ui/variables.less";
.Header {
  display: flex;
  justify-content: space-between;
  background-color: @dark;
}
.header-menu-more {
  display: none;
  cursor: pointer;
}
.header-menu {
  flex: 1;
}
.el-icon-s-fold {
  font-size: 36px;
  line-height: 60px;
  color: #fff;
  transition: all 0.3s;
  &:hover {
    color: @green;
  }
}
@media screen and (max-width: 900px) {
  .header-menu-item {
    display: none;
  }
  .header-menu-more {
    display: block;
  }
}
</style>