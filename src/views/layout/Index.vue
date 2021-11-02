<template>
  <el-container class="app">
    <el-header class="app-header">
      <Header />
    </el-header>
    <el-main>
      <Main />
    </el-main>
  </el-container>
</template>
<script>
import Header from "./Header.vue";
import Main from "./Main.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Header,
    Main
  },
  computed: {
    ...mapGetters(["isShowAside"]),
  },
  created() {
    this.initAccount();
  },
  methods: {
    initAccount() {
      this.$store.dispatch("account/init");
    },
  },
};
</script>
<style lang="less" scoped>
@dark: #34495e;
@childDark: #bdc3c7;
@green: #1abc9c;
.app {
  height: 100%;
  padding-top: 60px;
}
.app-header {
  box-shadow: 0 0 10px @dark;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: @dark;
  color: white;
  line-height: 60px;
  font-size: 12px;
  .el-dropdown {
    color: white;
  }
  i:hover {
    color: @green;
  }
}
</style>
