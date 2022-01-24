今天做的工作很常规，没什么好说的。但是昨天我有一个需求是日期格式化，我觉得可以说一说。

比如把日期格式化成 2022 年 01 月 21 日这种格式。一种思路是用年月日进行拼接，但是昨天我突然想到 ElementUI 是有日期组件的，有一个属性可以控制日期的格式，可以看如下示例：

<template>
  <el-date-picker
    v-model="date"
    format="yyyy年MM月dd日"
    type="date"
    placeholder="选择日期" />
</template>

<script>
export default {
  data() {
    return {
      date: '',
    }
  },
}
</script>

format 传递的是 yyyy 年 MM 月 dd 日，格式化后的效果如下所示：

​

上面就是 picker.vue 组件，猛地一看，代码好多，根本理不清头绪。不过不要紧，看源码不是一行一行看的，我们要根据我们的问题看，比如这次我想知道 format 属性是如何起作用的，那么我就直接在这个组件里搜索看看哪些地方用到了这个属性。

我一搜，发现有 122 个地方有 format
