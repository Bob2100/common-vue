<template>
  <div class="BaseSearchBox">
    <el-input
      :value="value"
      :placeholder="placeholder"
      :clearable="clearable"
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
    clearable: Boolean,
  },
}
</script>
<style lang="scss" scoped>
.BaseSearchBox {
  display: flex;
}
</style>
