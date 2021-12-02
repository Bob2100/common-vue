<template>
  <MenuCommon class="MenuPC" @select="$emit('select', $event)"
    :activeIndex="activeIndex" :version="version" :workDiaryUrl="workDiaryUrl"
    type="PC" />
</template>

<script>
import MenuCommon from './MenuCommon.vue'
export default {
  props: {
    activeIndex: String,
    workDiaryUrl: String,
    version: String
  },
  components: {
    MenuCommon
  }
}
</script>