<template>
  <li class="CommondLi">
    <h4>{{title}}</h4>
    <p>
      <i>
        <strong>
          <slot name="commond"></slot>
        </strong>
        <slot name="placeholder"></slot>
      </i>
      <span v-if="isShowCase">
        <span class="commond-desc">示例：</span>
        <i>
          <strong>
            <slot name="commond"></slot>
          </strong>
          <slot name="param"> </slot>
        </i>
      </span>

      <span class="commond-desc">
        <slot name="desc"></slot>
      </span>
    </p>
  </li>
</template>

<script>
export default {
  name: 'CommondLi',
  props: {
    title: String,
    isShowCase: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less" scoped>
.commond-desc {
  margin: 0 10px;
}
</style>