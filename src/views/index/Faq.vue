<template>
  <div class="Faq">
    <article>
      <h3>
        <a href="https://github.com/Bob2100/common-vue" target="_blank">本站源码</a>
      </h3>
      <p>打开 git bash 键入如下命令并回车：</p>
      <p><i><strong>git clone</strong> git@github.com:Bob2100/common-vue.git</i>
      </p>
      <p>如下图所示：</p>
      <p><img class="common-img" src="../../assets/clone.png"></p>
    </article>
    <article>
      <h3>FAQ</h3>
      <p>如果报了如下图所示的错误，可能的一种原因是第一次使用github，公钥没有配置，不能使用git协议，那么可以尝试下面这条命令：</p>
      <p><i><strong>git clone</strong>
          https://github.com/Bob2100/common-vue.git</i>
      <p><img class="common-img width-middle"
          src="../../assets/imgs/clone-https.png"></p>
    </article>
  </div>
</template>

<script>

export default {
  name: 'Faq'
}
</script>

<style lang="less" scoped>
</style>