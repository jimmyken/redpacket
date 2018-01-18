// pages/remainder/remainder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //用户输入的提现金额
    num: null,

    //余额
    remainder:"10.00",
  },

  //获取input提现金额 用户输入的提现金额
  numInput: function (e) {
    this.setData({
      num: e.detail.value
    })
  },

 //点击提现按钮
  drawBtn: function () {
    console.log(this.data.num)
    if (this.data.num == null || this.data.num == 0) {
      wx.showModal({
        title: '提示',
        content: '请输入有效提现金额',
        confirmText: "确定",
        showCancel: 'false'
      })
    }else if(this.data.num>10){
      wx.showModal({
        title: '提示',
        content: '您的余额不足',
        confirmText: "确定",
        showCancel: 'false'
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '未实现提现功能',
        confirmText: "确定",
        showCancel: 'false'
      })
    }
  },

//点击全部提现
  wholeClick:function(){
    wx.showModal({
      title: '提示',
      content: '未实现提现功能',
      confirmText: "确定",
      showCancel: 'false'
    })
  },


//点击举报按钮
  reportCilck: function () {
    wx.navigateTo({
      url: './../report/report',
    })
  },
//点击常见问题按钮
  questionCilck: function () {
    wx.navigateTo({
      url: './../question/question',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onShareAppMessage: function () {

  }
})