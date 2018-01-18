// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { question: "红包跑车赛怎么玩？", answer: "你可以设置一个带奖励的语音口令，还有说对口令才能领到奖励" },
      { question: "我支付了但没有发出去？", answer: "请在主页的【我的记录】中找到相应记录，点击进入详情后点击【去转发】可把口令转发给好友或群，你也可以生成朋友圈分享图后发朋友去" },
      { question: "好友可以转发我的口令吗？", answer: "可以的，您分享给好友或者转发到微信的语音口令，其他好友均可在此转发" },
      { question: "发口令会收取服务费吗？", answer: "发语音口令会收取2%的服务费" },
      { question: "未领取的金额会怎么样处理？", answer: "未领取的金额将于24小时后退至包你说小程序余额；同时，未领取金额的服务费也将退回50%" },
      { question: "如何提现到微信钱包？", answer: "在主页的【余额提现】或者详情的【去提现】均可跳转至余额提现页面进行提现，提现金额每次至少一元，每天至多提现3次" },
      {question: "提现会收取服务费吗？多久到账？", answer: "提现不收取服务费；申请提现后会在1-5个工作日内转账到您的微信钱包" },
      {question: "如何联系客服？", answer: "您可以点击本页面右下角的聊天小图标来联系我们的在线客服；您也可以拨打我们的客服电话：020 - 29052945" },
    ]
  },

  cilck: function (e) {
    var _this = this;
    //num 是第几个view  view数组的下标
    var num = e.currentTarget.dataset.mine;

    //flag控制标签是否存在 flag控制答案的view的隐藏/显示
    _this.data.items[num].flag = !_this.data.items[num].flag;


    
    //改变被选中的问题的颜色
    _this.data.items[num].flag ? _this.data.items[num].color = "#a3a3a3" : _this.data.items[num].color = "#000"

    _this.setData(_this.data);
    console.log(e);
    console.log(_this.data.items[num].flag)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求数据
    var _this = this;
    wx.request({
      url: "https://greatplan.com.cn/redpacket/gpa/gpwx/getHelpConter",
      data:{
        data:1,
      },
      method: "GET",
      success: function (sres) {
        console.log("请求成功")
        for (var i = 0; i < sres.data.body.data.length; i++) {
          //将请求到的数据放到e里
          var e = {};
          e.question = sres.data.body.data[i].helpTitle;
          e.answer = sres.data.body.data[i].content;
          e.flag = false;
          _this.data.items.push(e);
        };
        _this.setData(_this.data);
        console.log(sres)
      },
      fail: function (fres) {
        console.log("请求失败");
      }

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
  onShareAppMessage: function () {

  }
})