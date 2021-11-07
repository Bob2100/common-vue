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
              <li>
                <h4>邮箱</h4>
                <p>
                  <i><strong>git config --global user.email</strong> [email]</i>
                  <span class="commond-desc">示例</span>
                  <i><strong>git config --global user.email</strong>
                    "bob_w@qq.com"</i>
                  <span class="commond-desc">配置邮箱为bob_w@qq.com</span>
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </li>
      <li>
        <h3>全局配置</h3>
        <ol>
          <li>
            <h4>用户名</h4>
            <p>
              <i><strong>git config --global user.name</strong> [name]</i>
              <span style="margin:0 20px">示例</span>
              <i><strong>git config --global user.name</strong> "wuwenbo"</i>
            </p>
          </li>
          <li>
            <h4>邮箱</h4>
            <p><i><strong>git config --global user.email</strong> [email]</i>
            </p>
            <h4>示例</h4>
            <p><i><strong>git config --global user.email</strong>
                "bob_w@qq.com"</i></p>
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