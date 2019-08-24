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

