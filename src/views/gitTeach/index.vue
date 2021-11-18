<template>
  <div class="GitTeach">
    <h3>配置用户名和邮箱</h3>
    <p>git config --global user.name "wuwenbo"</p>
    <p>git config --global user.email "bob_w@qq.com"</p>

    <h3>配置别名</h3>
    <p>git config --global alias.lg "log --color --graph
      --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cd)
      %C(bold blue)&lt;%an&gt;%Creset' --abbrev-commit --date=format:'%Y-%m-%d
      %H:%M:%S'"</p>
    <p>git config --global alias.sw "update-index --skip-worktree"</p>
    <p>git config --global alias.nsw "update-index --skip-worktree"</p>

    <h3>配置比较合并工具</h3>
    <p>git config --global diff.tool "bc3"</p>
    <p>git config --global difftool.bc3.path "C:\software\Beyond Compare
      4\BComp.exe"</p>
    <p>git config --global merge.tool "bc3"</p>
    <p>git config --global mergetool.bc3.path "C:\software\Beyond Compare
      4\BComp.exe"</p>
    <a href="https://blog.csdn.net/xxlcan/article/details/111947885"
      target="_blank">Beyond Compare 4试用期到期解决方案</a>
    
    <h3>常用命令</h3>
    <p>git status --查看工作区状态</p>
    <p>git pull --拉取远程仓库代码</p>
    <p>git push --推送代码到远程</p>
    <p>git add . --将当前修改加入待提交区</p>
    <p>git commit -m '注释' --本地提交</p>
    <p>git checkout dev --本地切换到dev分支</p>
    <p>git checkout -b dev origin/dev --检出远程dev分支到本地</p>
    <p>git checkout -b bug-11 --本地创建并切换到bug-11分支</p>
    <p>git branch -d bug-11 --删除本地bug-11分支</p>
    <p>git push origin --delete bug-11 --删除远程bug-11分支</p>
    <p>git branch --查看本地所有分支</p>
    <p>git branch -a --查看本地和远程所有分支</p>
    <p>git merge dev --本地合并dev分支到当前分支</p>
    <p>git difftool --启动比较工具</p>
    <p>git mergetool --启动合并工具</p>
    <p>git reset --hard a9a89cd --本地回退到a9a89cd这个提交</p>
    <p>git tag -a 'v0.1.0' -m '这是第一个版本' --本地创建一个名称为v0.1.0，描述为“这是第一个版本”的标签</p>
    <p>git tag -d v0.1.0 --删除本地名称为v0.1.0的标签</p>
    <p>git tag --查看所有标签</p>
    <p>git push origin v0.1.0 --将标签v0.1.0推送到远程仓库</p>
    <p>git push origin :refs/tags/v0.1.0 --将标签v0.1.0从远程仓库删除</p>
    <p>git ls-files -v . | grep ^S --查看哪些文件被sw</p>
    <a href="https://www.liaoxuefeng.com/wiki/896043488029600"
      target="_blank">git详细教程</a>
  </div>
</template>

<script>
export default {
  name: 'GitTeach',
}
</script>