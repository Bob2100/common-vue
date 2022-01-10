<template>
  <div class="Header">
    <MenuCommon class="header-menu" type="PC" />
    <MenuMobile class="header-menu-more" />
  </div>
</template>

<script>
import MenuCommon from './menu/MenuCommon.vue'
import MenuMobile from './menu/MenuMobile.vue'
export default {
  name: 'Header',
  components: {
    MenuCommon,
    MenuMobile,
  },
}
</script>
<style lang="less" scoped>
@import '../../bo-ui/variables.less';
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
