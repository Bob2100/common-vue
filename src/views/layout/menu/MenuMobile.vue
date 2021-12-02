<template>
  <div class="MenuMobile">
    <i class="el-icon-s-fold" @click="isShowDrawer = true"></i>
    <el-drawer @click.native="isShowDrawer = false" :visible.sync="isShowDrawer"
      :with-header="false" append-to-body>
      <el-menu :default-active="activeIndex" class="header-menu"
        @select="$emit('select', $event)" background-color="#34495e"
        text-color="#fff" active-text-color="#1abc9c">
        <el-menu-item index="GitTeach">Git常用命令
        </el-menu-item>
        <el-menu-item :index="workDiaryUrl">工作日志</el-menu-item>
        <el-menu-item index="https://github.com/Bob2100/common-vue/tags">
          {{version}}
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </div>
</template>

<script>
export default {
  props: {
    activeIndex: String,
    workDiaryUrl: String,
    version: String
  },
  data() {
    return {
      isShowDrawer: false
    };
  },
}
</script>
<style lang="scss" scoped>
.el-icon-s-fold {
  font-size: 36px;
  line-height: 60px;
  color: #fff;
}
</style>