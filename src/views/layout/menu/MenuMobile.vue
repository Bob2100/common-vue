<template>
  <div class="MenuMobile">
    <i class="el-icon-s-fold" @click="isShowDrawer = true"></i>
    <el-drawer
      @click.native="isShowDrawer = false"
      :visible.sync="isShowDrawer"
      :with-header="false"
      append-to-body>
      <MenuCommon class="header-menu" type="Mobile" />
    </el-drawer>
  </div>
</template>

<script>
import MenuCommon from './MenuCommon.vue'
export default {
  components: {
    MenuCommon,
  },
  props: {
    activeIndex: String,
    workDiaryUrl: String,
    version: String,
  },
  data() {
    return {
      isShowDrawer: false,
    }
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
