---
layout: post
title: OMOOCData课程作业0w
category : data_science
description: Gapminder是瑞士Gapminder基金会开发的一个统计软件，我们可以形象地看见用世界银行提供数据绘制的的世界各国各项发展指数。它用一种新的方法动态地展示了各个国家的历年的各项发展指数，包括了二氧化碳排放量、儿童死亡率、经济增长率、每1000人网民数量、军事预算、每1000人电话用户、城市人口等等。它用一系列分散的点代表不同的国家，点的位置由轴线对应的指数决定。 
tags : [数据科学]
---

* 你认为用什么样的数字来度量中国人的生活变化？
	* 尝试找到这样的数据源并画出图看看
	* 用这种数字来衡量有什么样的缺点？
* 理解什么是双盲实验
* 学习使用google ngram服务，并研究你关心的某一组词汇的变化。
* 理解什么是Simpson’s悖论
* 学习贝叶斯定理


###一、你认为用什么样的数字来度量中国人的生活变化？

生活的概念好大，如果想精确计量生活的变化，还是比较困难的。我们经常听到的是，人均GDP、GNI、恩格尔系数、人均寿命等等...  
这个题目让我想起之前在coursera课程里了解到的Hans Rosling关于Gapminder的分享.  
Gapminder是瑞士Gapminder基金会开发的一个统计软件，我们可以形象地看见用世界银行提供数据绘制的的世界各国各项发展指数。它用一种新的方法动态地展示了各个国家的历年的各项发展指数，包括了二氧化碳排放量、儿童死亡率、经济增长率、每1000人网民数量、军事预算、每1000人电话用户、城市人口等等。它用一系列分散的点代表不同的国家，点的位置由轴线对应的指数决定。  

以下选取几个指标来反映一下我国的生活变化：  

1. 按照购买力平价（PPP）衡量的人均GDP（单位：国际元）  

![按照购买力平价（PPP）衡量的人均GDP](/assets/images/post/2016011501.jpg)

横轴为时间，竖轴为人均GDP（采用对数坐标）.  
源地址: www.bit.ly/1PvhCdI

2. 人均寿命（单位：年）  
![人均寿命](/assets/images/post/2016011502.png)

横轴为时间，竖轴为人均寿命

3. 女性人均生育次数（单位：次）  
![女性人均生育次数](/assets/images/post/2016011503.png)

横轴为时间，竖轴为女性人均生育次数  
源地址：www.bit.ly/1Wdvi2b

Gapminder还提供一些其他常见经济、环境、健康等指标这里就不简单罗列了。如果只考虑人均GDP和寿命的话，可以看到，人们的生活水平在改革开放（1980s）之后有明显的提升。还有有几个发现：  
1. 抗日战争及解放战争时期，人均GDP明显下滑，可见战争对工农业的影响  
2. “三年自然灾害”期间，人均GDP、人均寿命以及妇女生育人数出现了急剧下降  
3. 19世纪我国妇女剩余人数未发生变化，估计是数据来源单一或直接为估计值  

回到问题上来，在我看来，如果要度量生活水平的变化单纯一两个指标的确不够明确。这里的数据来源于世界银行，肯定存在一些统计误差。对于人均GDP，这里采用的是购买力折算法，还有一种是才有汇率折算法，当然，取对数之后可以更好的观察其趋势性。  

其他补充：  
1. 数据源的选取：[https://www.zhihu.com/question/20033475](https://www.zhihu.com/question/20033475)  
2. Gapminder: [http://www.gapminder.org/ ](http://www.gapminder.org/)   
3. 统计误差：[https://www.evernote.com/l/ALi7SHa9luVMuauJ9I3umz_9qiNhHtlz2Z4](https://www.evernote.com/l/ALi7SHa9luVMuauJ9I3umz_9qiNhHtlz2Z4)  
4. 「数据会说谎」的真实例子有哪些？[https://www.zhihu.com/question/19578400](https://www.zhihu.com/question/19578400)  


### 二、理解什么是双盲实验  
中学时曾经接触过该方法，一般是生物课上经常使用。最近一次接触是《罗辑思维》在提到中医时，讲解了一下西方医学的发展史。“双盲随机对照实验”，通常适用于以人为研究对象的实验（human subjects），旨在消除可能出现在实验者和参与者意识当中的主观偏差（subjective bias）和个人偏好（personal preferences）。  

### 三、学习使用google ngram服务，并研究你关心的某一组词汇的变化  

1. 中国  
![ngram-china](/assets/images/post/2016011504.png)

鸦片战争以前，因为对外部世界的认知，我们甚至没有国家的概念，我们最多有的是“诸侯国”的概念，中国是一个国家的观念在18世纪后期才慢慢被人们所认识，直到教育的全面普及，人民大众才逐渐认识到我们是一个国家，世界上还有其他的国家。

多说几句，这里是“验证一个已有的概念或想法”。之前在工作当中，我一直坚持不能为了分析而分析，也就是说，实际工作中，我们不能单纯的为了玩弄数据进行数据分析。数据分析能力是每个工种都应具备的能力，其实进行数据分析无非以下几个目的：
1. 验证一个已有的想法或者假设（学术上的话，叫假设）
2. 验证某次工作或任务的结果是否达到了预期

Erich Fromm, Sigmund Freud, Karl Marx

![ngram of Erich Fromm,Sigmund Freud,Karl Marx](/assets/images/post/2016011505.png)  
Erich Fromm  
![ngram of Erich Fromm](/assets/images/post/2016011506.png)


Fromm是我个人非常喜欢的心理学家。前几天在和一个搞心理学的朋友聊天，我问，“在你们圈里，Fromm是大师吗？”。朋友说是大师，但是因为心理学现在分得很细，科学化很多，Fromm那个时代其实还是很偏哲学的。从单人的曲线来看，这些年，Fromm的确有逐步下降的趋势。而Freud和Marx是Fromm先生研究比较多的两位思想家，看来影响力是依次增高啊。

其他补充：  
1. What we learned from 5 million books: [https://www.ted.com/talks/what_we_learned_from_5_million_books](https://www.ted.com/talks/what_we_learned_from_5_million_books)  
2. interesting charts: [http://xkcd.com/ngram-charts/](http://xkcd.com/ngram-charts/)

### 四、理解什么是Simpson’s悖论

Simpson’s悖论的产生是由于“权重”的不同倾斜。至于是什么原因引起权重的这种倾斜，则需要具体问题具体分析。

我们常常会根据一些简单的数据进行决策，但是一定要对事物的本质心存敬畏，统计或者数据分析，只能帮助我们无限地接近于事实的真相，但是一定要应用恰当。


其他补充：  
1.为什么辛普森悖论会使很多学术研究结论不可靠？[https://www.evernote.com/l/ALgp3RVV8TFDAazf7MV7CNYnTjnsZDcLvTI](https://www.evernote.com/l/ALgp3RVV8TFDAazf7MV7CNYnTjnsZDcLvTI)  
2.辛普森悖论及其在数据分析中的应用 [http://t.cn/R4lUAAm](http://t.cn/R4lUAAm)

### 五、学习贝叶斯定理

最近在复习CFA的过程中，对bayes公式有过一次复习，在金融中，其应用为通过新得到的观测数据更新已知的概率，这个概率可以是统计得到的，逻辑推测得到的，甚至是主观判断的。  

已知某种疾病的发病率是0.001，即1000人中会有一个人得病。现有一种试剂可以检验患者是否得病，它的准确率是0.99，即在患者确实得病的情况下，它有99%的可能呈现阳性。它的误报率是5%，即在患者没有得病的情况下，它有5%的可能呈现阳性。现有一个病人的检验结果为阳性，请问他确实得病的可能性有多大？

题目答案：  
0.165413534

其他补充：  
1. 平凡而又神奇的贝叶斯方法 [http://mindhacks.cn/2008/09/21/the-magical-bayesian-method/](http://mindhacks.cn/2008/09/21/the-magical-bayesian-method/)
