<template>
  <div class="GitTeach">
    <ol type="I">
      <li>
        <h2>全局配置</h2>
        <ol type="i">
          <li>
            <h3>用户相关</h3>
            <ol>
              <CommondLi title="用户名">
                <template v-slot:commond>git config --global
                  user.name</template>
                <template v-slot:placeholder> [name]</template>
                <template v-slot:param> "wuwenbo"</template>
                <template v-slot:desc> 配置用户名为wuwenbo</template>
              </CommondLi>
              <CommondLi title="邮箱">
                <template v-slot:commond>git config --global
                  user.email</template>
                <template v-slot:placeholder> [email]</template>
                <template v-slot:param> "bob_w@qq.com"</template>
                <template v-slot:desc> 配置邮箱为bob_w@qq.com</template>
              </CommondLi>
            </ol>
          </li>
        </ol>
      </li>
    </ol>

  </div>
</template>

<script>
import CommondLi from './CommondLi.vue'
export default {
  name: 'GitTeach',
  components: {
    CommondLi
  }
}
</script>