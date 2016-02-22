---
layout: post
title: 修改git中已经提交的用户信息
category : tech
description: 最近时间相对自由，所以blog更新的多一些，github上的Contributions终于显得不那么空洞了，但是因为从公司出来之后，在修改git全局的email时手误了。将user.email设置成了--get。这下就导致，github不能在profile中显示我的提交记录，为了满足一下自己的虚荣心，就前去折腾了一下。当然，官方文档永远是第一手资料。官方提供了scripts可以很方便的进行修改。而且不会走弯路...
tags : [技术]
---
最近时间相对自由，所以blog更新的多一些，github上的Contributions终于显得不那么空洞了，但是因为从公司出来之后，在修改git全局的email时手误了。将user.email设置成了--get。这下就导致，github不能在profile中显示我的提交记录，为了满足一下自己的虚荣心，就前去折腾了一下。当然，官方文档永远是第一手资料。官方[^1]提供了scripts可以很方便的进行修改。而且不会走弯路...  

在修改成正确的user.email之前，你可能需要知道历史提交中的用户信息，如果是github的话，可以使用在commit URL后面添加.patch后缀的方式进行查看，详见[^2]。

1. 临时创建一个新的clone(git clone的三种方式[^3])  

	
		git clone --bare https://github.com/user/repo.git
		cd repo.git
	

2. 运行下面的脚本  
	需要将 OLD_EMAIL，CORRECT_NAME，CORRECT_EMAIL替换成你想要查找和替换的值

		#!/bin/sh
		git filter-branch --env-filter '
		OLD_EMAIL="your-old-email@example.com"
		CORRECT_NAME="Your Correct Name"
		CORRECT_EMAIL="your-correct-email@example.com"
		if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
		then
    		export GIT_COMMITTER_NAME="$CORRECT_NAME"
    		export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
		fi
		if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
		then
    		export GIT_AUTHOR_NAME="$CORRECT_NAME"
    		export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
		fi
		' --tag-name-filter cat -- --branches --tags

3. 查看新的git history是否有错误信息
4. 将正确的history提交到github

	
		git push --force --tags origin 'refs/heads/*'
	
5. 清除临时创建的文件
	

		cd ..
		rm -rf repo.git
	

参考:  

[^1]: https://help.github.com/articles/changing-author-info/
[^2]: https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile/
[^3]: http://blog.csdn.net/agul_/article/details/7843678

