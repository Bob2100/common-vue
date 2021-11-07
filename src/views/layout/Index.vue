<template>
  <el-container class="app">
    <el-header class="app-header">
      <Header />
    </el-header>
    <el-main style="margin-top:60px">
      <Main />
    </el-main>
  </el-container>
</template>
<script>
import Header from "./Header.vue";
import Main from "./Main.vue";
export default {
  components: {
    Header,
    Main
  }
};
</script>
<style lang="less" scoped>
.app {
  height: 100%;
}
.app-header {
  box-shadow: 0 0 10px #34495e;
  position: fixed;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
}
</style>
