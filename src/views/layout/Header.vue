<template>
  <div class="Header">
    <MenuPC class="header-menu" @select="handleSelect"
      :activeIndex="activeIndex" :version="version"
      :workDiaryUrl="workDiaryUrl" />
    <MenuMobile class="header-menu-more" @select="handleSelect"
      :activeIndex="activeIndex" :version="version"
      :workDiaryUrl="workDiaryUrl" />
  </div>
</template>

<script>
import MenuPC from './menu/MenuPC'
import MenuMobile from './menu/MenuMobile.vue'
export default {
  name: 'Header',
  components: {
    MenuPC,
    MenuMobile
  },
  data() {
    return {
      activeIndex: '',
    }
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
@media screen and (max-width: 900px) {
  /deep/ .header-menu-item {
    display: none;
  }
  .header-menu-more {
    display: block;
  }
}
</style>