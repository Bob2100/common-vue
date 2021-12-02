<template>
  <div class="Header">
    <MenuPc class="header-menu" />
    <MenuMobile class="header-menu-more" />
  </div>
</template>

<script>
import MenuPc from './MenuPc.vue'
import MenuMobile from './MenuMobile.vue'
export default {
  name: 'Header',
  components: {
    MenuPc,
    MenuMobile
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
  .header-menu-item {
    display: none;
  }
  .header-menu-more {
    display: block;
  }
}
</style>