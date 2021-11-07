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
          <li>
            <h3>别名相关</h3>
            <ol>
              <CommondLi title="日志" :isShowCase="false">
                <template v-slot:commond>git config --global alias.lg "log
                  --color --graph
                  --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s
                  %Cgreen(%cr) %C(bold blue)&lt;%an&gt;%Creset'
                  --abbrev-commit"</template>
              </CommondLi>
              <CommondLi title="忽略本地修改" :isShowCase="false">
                <template v-slot:commond>git config --global alias.sw
                  "update-index --skip-worktree"</template>
              </CommondLi>
              <CommondLi title="取消忽略本地修改" :isShowCase="false">
                <template v-slot:commond>git config --global alias.nsw
                  "update-index --skip-worktree"</template>
              </CommondLi>
            </ol>
          </li>
          <li>
            <h3>比较不同相关</h3>
            <ol>
              <CommondLi title="比较工具类型" :isShowCase="false">
                <template v-slot:commond>git config --global diff.tool
                  "bc3"</template>
              </CommondLi>
              <CommondLi title="比较工具路径">
                <template v-slot:commond>git config --global
                  difftool.bc3.path</template>
                <template v-slot:placeholder> [path]</template>
                <template v-slot:param> "/Applications/Beyond
                  Compare.app/Contents/MacOS/bcomp"</template>
                <template v-slot:desc>Windows系统的path应该类似C:\software\Beyond
                  Compare 4\BComp.exe</template>
              </CommondLi>
              <CommondLi title="合并工具类型" :isShowCase="false">
                <template v-slot:commond>git config --global merge.tool
                  "bc3"</template>
              </CommondLi>
              <CommondLi title="合并工具路径">
                <template v-slot:commond>git config --global
                  mergetool.bc3.path</template>
                <template v-slot:placeholder> [path]</template>
                <template v-slot:param> "/Applications/Beyond
                  Compare.app/Contents/MacOS/bcomp"</template>
                <template v-slot:desc>Windows系统的path应该类似C:\software\Beyond
                  Compare 4\BComp.exe</template>
              </CommondLi>
            </ol>
          </li>
        </ol>
        <ol type="i">

        </ol>
        <ol type="i">

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