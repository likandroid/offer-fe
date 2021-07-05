## .git 目录下关键文件
HEAD: 内容为当前分支的引用，vim 编辑与 git checkout [branchName] 效果一样
config: 内容为当前项目的配置，包含项目源、分支、用户配置信息等
refs: 内容为本地分支、远程分支、项目 tags、stash
objects: 存放每个 commit

### 配置 user 信息
git config --global user.name 'your_name'
git config --global user.email 'your_email@xxx.com'
--global 对当前用户的所有仓库有效
--local 只对某个仓库有效
--system 对系统所有登录的用户有效

显示 config 配置，加 --list
例：git config --list --global

### 开发过程中修复紧急 bug
- git stash: 将当前工作区/暂存区的修改保存起来，再次使用时通过 git stash apply/pop 即可恢复
+ apply 与 pop 区别
apply 将暂存的内容恢复到工作区后并不丢弃，pop 则在恢复后直接删除

- git status 显示有变更的文件
- git reset 回滚(撤销 commit 记录)
- .gitignore 匹配文件规则
- git checkout - 切换到上一个分支
- git merge [branch] 合并指定分支到当前分支
- git cherry-pick [commit] 选择一个commit，合并进当前分支
- git branch -d [branch-name] 删除分支
- git push origin --delete [branch-name] 删除远程分支
- git branch -dr [remote/branch] 删除远程分支
- git fetch [remote] 下载远程仓库的所有变动
- git remote -v 显示所有远程仓库
- git stash 放入暂存区
- git stash 放出暂存区，显示变动的文件
- git revote

在利用github实现多人合作程序开发的过程中，我们有时会出现错误提交的情况，此时我们希望能撤销提交操作，让程序回到提交前的样子，本文总结了两种解决方法：回退（reset）、反做（revert）。


*.sample 　　 # 忽略所有 .sample 结尾的文件
!lib.sample 　　 # 但 lib.sample 除外
/TODO 　　 # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
build/ 　　 # 忽略 build/ 目录下的所有文件
doc/*.txt 　　# 会忽略 doc/notes.txt 但不包括 doc/server/notes.txt