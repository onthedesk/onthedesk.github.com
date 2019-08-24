// weixin.js 实现微信相关业务
wx.config({
    // 配置信息, 即使不正确也能使用 wx.ready
    debug: false,
    appId: '',
    timestamp: 1,
    nonceStr: '',
    signature: '',
    jsApiList: []
});

// 音乐自动播放

wx.ready(function() {
    document.getElementById('playMusic').play();
});

// 分享文案和图标


// 分享给朋友
wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
    wx.updateAppMessageShareData({ 
        title: '赵峰&王一雪婚礼请柬', // 分享标题
        desc: '邀请您参加赵峰和王一雪的婚礼，10月27日', // 分享描述
        link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: '', // 分享图标
        success: function () {
          // 设置成功
        }
    })
});

// 分享到朋友圈
wx.ready(function () {      //需在用户可能点击分享按钮前就先调用
    wx.updateTimelineShareData({ 
        title: '', // 分享标题
        link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: '', // 分享图标
        success: function () {
          // 设置成功
        }
    })
});

// 是否在小程序环境

wx.miniProgram.getEnv(function(res) {
  if (res.miniprogram) {
  	// 小程序中的逻辑
  } else {
  	// 网页的逻辑
  }
})
