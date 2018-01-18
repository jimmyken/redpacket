//app.js
App({
  onLaunch: function () {
    //获取到用户信息
    var _this = this;
    wx.getUserInfo({
      success: function (res) {
        var avatarUrl = res.userInfo.avatarUrl;
        var nickName = res.userInfo.nickName;
        console.log(res.userInfo);
        //将获取到的用户信息保存到缓存中
        wx.setStorage({
          key: 'userInfo',
          data: {
            avatarUrl: avatarUrl,
            nickName: nickName
          },
          success: function () {
            console.log("保存用户信息成功")
          },
          fail: function () {
            console.log("保存用户信息失败")
          }

        })

      }
    })

    // var avatarUrl = _this.data.userInfo.avatarUrl;
    // var nickName = _this.data.userInfo.nickName;


    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  getUserInfo: function (cd) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cd == "function" && cd(this.globaData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function (res) {
          that.globalData.userInfo = res.userInfo;
          typeof cd == "function" && cd(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})