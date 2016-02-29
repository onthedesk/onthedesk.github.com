---
layout: post
title: 有什么办法提高conda install的速度
category : tech
description: 前几天，因为要用到seaborn去画图表，但是使用conda去安装的时候巨慢无比。Fetching packages...的时候，直接卡在了mkl包的0%，十分的不愉快。这里介绍了三种可以提高conda下载速度的方法。
tags : [技术]
---

前几天，因为要用到seaborn[^1]去画图表，但是使用conda去安装的时候巨慢无比。Fetching packages...的时候，直接卡在了mkl包的0%，十分的不愉快。
![](/assets/images/post/2016/14567500196921.jpg)

因为之前用npm的时候使用过淘宝的中国镜像[^2]。这里也想着找个conda国内的镜像用用。但是一番google之后，发现并没有小伙伴假设conda的国内镜像。然后开始了我的解决问题之旅：

1. 自己使用国内服务器架设Anaconda.org的镜像
2. 让conda能够识别pip安装的package，然后使用pip的国内镜像[^3]
3. 让使用proxifier，让python能够“穿越长城，走向世界”

我依据顺序逐个进行了尝试，最终通过2和3将问题搞定。下面详细说明一下。

### 自主搭建Anaconda.org的镜像
之所以有这个想法，是发现在之前也有朋友找过国内的镜像，但是不得而终[^4]。我就想着一劳永逸的将这个问题解决，而且数据科学会越来越火，说不定自己搭个镜像，到时候还能求打赏，攒钱买胡萝卜...
搜索官方文档，发现了官方是提供镜像服务的[^5]。
![](/assets/images/post/2016/14567520867636.jpg)

阅读完之后，真是一阵窃喜，而且还前去阿里云准备添置机器。阅读这篇文档的时候，我很明显是使用的“异步模式”，因为上面写了，首先你要建立自己的Anconda Server实例。我理解成了随便打个Server装上官方的服务就可以了...
但是，仔细研究后发现，是需要联系sales要token的...因为contimuum是一家商业公司，我看到这个以后，就很老土的以为，是需要购买token的，然后就放弃了这个方案，但是在写这篇文字的时候，我又回去确认了一下，这里的token是可以通过anaconda工具进行生成的，命令如下

		anaconda auth --create --name MyToken

生成token之后，就可以依照文档来搭建自己的镜像了，这个原本没在本文之列，稍后我搭建一台镜像，明天再详细说明过程。
也就是说，到现在为止，上诉三种方案都是可行的。

### 使用conda管理pip的包
折腾镜像未成之后，我去尝试使用pip进行安装

		pip install seaborn
		
瞬间安装完毕，当时已经在镜像上浪费了许多时间，看到结果之后...(求当时内心的阴影面积)
![](/assets/images/post/2016/14567539826837.jpg)

实际上，文档中显示，conda是原生支持pip的包的，因为之前有一次通过pip安装了一个包，在anaconda中的jupyter notebook中引入失败，自己就生成了conda不能管理pip包的认知，但实际上是因为当时安装以来报错，需要重新起到jupyter的原因。

Anaconda Cloud上有pypi的镜像大约100G左右。

### 使用Proxifier，让python能够通过代理访问网络

目前来说，运行一个科学上网工具，是进行科研、学习、开发等工作的必备之举了。但是，一般的科学上网客户端只是利用socks或http进行局部代理，一些不支持代理配置的application是无法通过代理进行网络访问的，那么神器来了，Proxifier就是一款能够实现全局代理的应用。具体下载及使用方式，请参见[^6]。
![](/assets/images/post/2016/14567572335796.jpg)

图中实现了，让python能够通过代理来访问yahoo财经数据，当然，可以编写规则，自定义IP、域名、端口等。

注释：

[^1]: seaborn,一个基于matplotlib的数据可视化库,[http://web.stanford.edu/~mwaskom/software/seaborn/](http://web.stanford.edu/~mwaskom/software/seaborn/)
[^2]: 淘宝NPM镜像[http://npm.taobao.org/](http://npm.taobao.org/)
[^3]: pip的国内镜像：pipy国内镜像目前有：豆瓣,[http://pypi.douban.com/](http://pypi.douban.com/);中国科学技术大学,[http://pypi.mirrors.ustc.edu.cn/](http://pypi.mirrors.ustc.edu.cn/);阿里云,[http://mirrors.aliyun.com/pypi/](http://mirrors.aliyun.com/pypi/)
[^4]: anaconda有国内的镜像嘛?[http://www.newsmth.net/nForum/article/Python/112247](http://www.newsmth.net/nForum/article/Python/112247)
[^5]: Mirroring an Anaconda repository[http://docs.continuum.io/anaconda-server/easy-gui/mirrors/anaconda-repository](http://docs.continuum.io/anaconda-server/easy-gui/mirrors/anaconda-repository)
[^6]: Proxifier,The most advanced proxy client。KEY：P427L-9Y552-5433E-8DSR3-58Z68 [https://www.proxifier.com/](https://www.proxifier.com/)
			  

