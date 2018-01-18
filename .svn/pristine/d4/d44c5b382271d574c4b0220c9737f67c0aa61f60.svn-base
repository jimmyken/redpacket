// pages/report/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    items: [
      { value: '欺诈', checked:"true"},
      { value: '色情', checked:""},
      { value: '政治谣言', checked:""},
      { value: '常识性谣言', checked:""},
      { value: '诱导分享', checked:""},
      { value: '恶意营销', checked:""},
      { value: '隐私信息收集', checked:""},
      { value: '其他侵权类（冒名、诽谤、抄袭）', checked:""},
    ],

    //勾选的举报原因
    term:"",

    //电话号
    tele:null,
    
    //微信号
    wx:null,

    value:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  //单选按钮
  checkClick:function(e){
    var _this = this;
    var num = e.currentTarget.dataset.mine;
    //获取到勾选的举报项
    var term = _this.data.items[num].value;
    _this.setData({
      term : term
      });
    console.log(_this.data.term);
  },

  //获取用户输入的手机号和微信号
  teleInput:function(e){
    this.setData({
      tele: e.detail.value
    })
  },
  wxInput:function(e){
    this.setData({
      wx: e.detail.value
    })
  },

//点击提交按钮
  reportCilck:function(){
    var _this = this;
  

    console.log(_this.data.tele)
    var tele = _this.data.tele;
    
    //判断用户有没有输入手机号
    if(tele==null || tele ==""){
      //正在提交弹窗
      // wx.showToast({
      //   title: '正在提交',
      //   icon: 'loading',
      //   duration: 500
      // })
      //跳转到提交成功
      wx.navigateTo({
        url: './../submit/submit',
      })
    }else{
      //如果用户输入手机号 判断是不是一个手机号
      if (!(/^1[34578]\d{9}$/.test(tele))) {
        console.log("输入的手机号码有误");
        wx.showModal({
          title: '提示',
          content: "输入的手机号码有误",
          confirmText: "确定",
          showCancel: 'false',
          success: function (res) {
            //去掉输入的错误的号码
            if (res.confirm) {
              _this.setData({
                value: ""
              })
            } else if (res.cancel) {
              _this.setData({
                value: ""
              })            
            }
          }
        })

      } else {
        //正在提交弹窗
        // wx.showToast({
        //   title: '正在提交',
        //   icon: 'loading',
        //   duration: 500
        // })

        //跳转到提交成功
        wx.navigateTo({
          url: './../submit/submit',
        })
      }
    }
  },

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