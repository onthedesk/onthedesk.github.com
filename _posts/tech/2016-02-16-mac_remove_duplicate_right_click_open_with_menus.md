---
layout: post
title: 清除Mac右键菜单中打开方式的重复项目
category : tech
description: 在Mac OS X中，当我们选中一个文件想要以某种方式打开该文件的时候，可以选择 右键-打开方式，这里会提示可能适用于打开该文件的软件。不过有的时候，这个“打开方式”列表中会异常的出现很多重复项，而且这个问题目前很常见，想要解决这个问题也很简单，只需要一段终端命令，重建该列表即可：
tags : [技术]
---
在Mac OS X中，当我们选中一个文件想要以某种方式打开该文件的时候，可以选择 右键-打开方式，这里会提示可能适用于打开该文件的软件。不过有的时候，这个“打开方式”列表中会异常的出现很多重复项，而且这个问题目前很常见，想要解决这个问题也很简单，只需要一段终端命令，重建该列表即可：

![屏幕截图1](/assets/images/post/2016021601.jpg)

1. 打开OS X自带的【终端】程序(可用Spotlight搜索找到)，向终端中复制粘贴一下命令并回车： 

	
		/System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/LaunchServices.framework/Versions/A/Support/lsregister -kill -r -domain local -domain user;killall Finder;echo “Open With has been rebuilt, Finder will relaunch”
	

2. 这样再次右键使用“打开方式”的时候，就不会出现那么多重复项目了：
	
![屏幕截图2](/assets/images/post/2016021602.jpg)

