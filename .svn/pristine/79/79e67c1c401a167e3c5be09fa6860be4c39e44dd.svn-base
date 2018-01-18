// pages/forward game/forward game.js
Page({
  onShareAppMessage: function () {
  
    return {
      desc: "红包跑车赛",
      title: '快点击开跑车赢赏金吧！',
      path: '/page/user?id=123',
      success: function (res) {
        
      },
      fail: function (res) {
       
      }
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    //用户信息
    userInfo: { avatarUrl: "",nickName:"" },

    //二维码url
    qrUrl:"./../../image/qr2.jpg",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.getUserInfo({
      success: function (res) {
        var nickName = res.userInfo.nickName;
        var avatarUrl = res.userInfo.avatarUrl;

        _this.setData({
          "userInfo.avatarUrl": avatarUrl,
          "userInfo.nickName":nickName
        });
      }
    })
  },

  /* 【我也要参赛】字体 跳转 */
  gameStartCilck:function(){
  wx.navigateTo({
    url: './../gameStart/gameStart',
  })
  },

  makeImgClick:function(){
     wx.navigateTo({
       url: './../shareimg/shareimg',
     })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */

})