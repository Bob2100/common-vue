<template>
  <div class="BaseSearchBox">
    <el-input :value="value" @input="$emit('input', $event)" />
    <el-button @click="$emit('search')" />
  </div>
</template>
<script>
export default {
  props: {
    value: String
  },
}
</script>