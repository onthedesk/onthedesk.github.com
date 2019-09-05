// weixin.js 实现微信相关业务

$(document).ready(function() {

  $.ajax({
    url: "/api/v1/wechat/jsapi_invitation" + "?url=" + encodeURIComponent(location.href.split("#")[0]),
    type: 'get',
    success: function(res){
        var config = res.data
        wx.config({
        // 配置信息, 即使不正确也能使用 wx.ready
        debug: false,
        appId: config.appId,
        nonceStr: config.nonceStr,
        signature: config.signature,
        timestamp: config.timestamp,
        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData']
      });

        // 分享文案和图标


      // 分享给朋友
      wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
          wx.updateAppMessageShareData({ 
              title: '赵峰&王一雪婚礼请柬', // 分享标题
              desc: '邀请您和家人于10月27日光临北京饭店参加赵峰和王一雪的婚礼', // 分享描述
              link: 'https://weixin.youheng-inc.com/invitation/index.html?src=friend', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'https://invitation.youheng-inc.com/images/o_1c53742l51g721o5d12lb1d5812dvqe.jpg', // 分享图标
              success: function () {
                // 设置成功
                // alert(arguments)
              }
          })
      });

      // 分享到朋友圈
      wx.ready(function () {      //需在用户可能点击分享按钮前就先调用
          wx.updateTimelineShareData({ 
              title: '赵峰&王一雪婚礼请柬', // 分享标题
              desc: '邀请您和家人于10月27日光临北京饭店参加赵峰和王一雪的婚礼', // 分享描述
              link: 'https://weixin.youheng-inc.com/invitation/index.html?src=circle', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'https://invitation.youheng-inc.com/images/o_1c53742l51g721o5d12lb1d5812dvqe.jpg', // 分享图标
              success: function () {
                // 设置成功
                // alert(arguments)
              }
          })
      });
    }
  })

})


// 音乐自动播放

wx.ready(function() {
    document.getElementById('playMusic').play();
});


// 是否在小程序环境

wx.miniProgram.getEnv(function(res) {
  $this = this
  var obj = {};
  obj.x = '39.908780';
  obj.y = '116.409270';
  var _addr = '北京市东城区东长安街33号北京饭店B座1层';
  $this.mapUrl = '//apis.map.qq.com/tools/poimarker?type=0&marker=coord:' + obj.x + ',' + obj.y + ';coordtype:3;title:赵峰王一雪婚礼;addr:' + _addr + '&key=2XHBZ-5BDWW-TP4RT-OGP73-2ZCK3-LQBV2&referer=wedding'

  if (res.miniprogram) {

  	// 小程序中的逻辑

  $(document).on('touchstart', '.navigation', function () {
    wx.miniProgram.navigateTo({url: '/pages/map/map'})
  })
  $(document).on('touchstart', '.dwIcon', function () {
    wx.miniProgram.navigateTo({url: '/pages/map/map'})
  })

  } else {
  	// 网页的逻辑
    $(document).on('touchstart', '.navigation', function () {
      if ($this.type) {
        return false
      }
      location.href = $this.mapUrl
    })
    $(document).on('touchstart', '.dwIcon', function () {
      if ($this.type) {
        return false
      }
      location.href = $this.mapUrl
    })
  }
})
