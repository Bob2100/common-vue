<template>
  <div class="BaseSearchBox">
    <el-input
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event)" />
    <el-button type="primary" icon="el-icon-search" @click="$emit('search')">
      搜索
    </el-button>
  </div>
</template>
<script>
export default {
  name: 'BaseSearchBox',
  props: {
    value: String,
    placeholder: String,
  },
}
</script>
<style lang="scss" scoped>
.BaseSearchBox {
  display: flex;
}
</style>
