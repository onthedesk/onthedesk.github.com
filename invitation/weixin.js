// weixin.js 实现微信相关业务
wx.config({
    // 配置信息, 即使不正确也能使用 wx.ready
    debug: false,
    appId:"wx1f9dc3bb244623df",
    nonceStr:"oPKX0W4P1ucph0Y",
    signature:"137334c09ec4e2bc2e33212172b099aef891e942",
    timestamp:1566693144,
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
        title: '赵峰&王一雪婚礼邀请函', // 分享标题
        desc: '邀请您和家人于10月27日，在北京饭店诺金，参加赵峰和王一雪的婚礼', // 分享描述
        link: 'https://weixin.youheng-inc.com/invitation/index.html?src=friend', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'https://weixin.youheng-inc.com/invitation/images/o_1c53742l51g721o5d12lb1d5812dvqe.jpg', // 分享图标
        success: function () {
          // 设置成功
        }
    })
});

// 分享到朋友圈
wx.ready(function () {      //需在用户可能点击分享按钮前就先调用
    wx.updateTimelineShareData({ 
        title: '赵峰&王一雪婚礼邀请函', // 分享标题
        desc: '邀请您和家人于10月27日，在北京饭店诺金，参加赵峰和王一雪的婚礼', // 分享描述
        link: 'https://weixin.youheng-inc.com/invitation/index.html?src=circle', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'https://weixin.youheng-inc.com/invitation/images/o_1c53742l51g721o5d12lb1d5812dvqe.jpg', // 分享图标
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
