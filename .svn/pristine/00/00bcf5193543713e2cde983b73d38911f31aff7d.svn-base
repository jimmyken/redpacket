// pages/home/home.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //用户信息
    userInfo: { avatarUrl: "", nickName: "" },

    //红包金额
    command: null,

    //跑车数量
    num: null,

    //服务费
    service: '0.00',

    //余额
    remainder: '0.00',

    //按钮的文字
    btnText: "生成乐跑图"
  },



  //获取输入的赏金数量
  commandInput: function (e) {
    var _this = this;
    var command = e.detail.value;
    _this.setData({
      command:command
    })

    if (!(/^([1-9]\d{0,9}|0)([.]?|(\.\d{1,2})?)$/).test(command)){
      if(command==null ||command == ""){

      }else{
        wx.showModal({
          title: '提示',
          content: '请输入正确的金额',
          success: function (res) {
            if (res.confirm) {
              _this.setData({
                command: null
              })
            } else if (res.cancel) {
              _this.setData({
                command: null
              })
            }
          }
        })
      }
  
    }

    this.setData({
      command: e.detail.value
    })

    //计算服务费 2%
    var command = _this.data.command;
    var service = (command * 0.02).toFixed(2)
    _this.setData({
      service: service,
      btnText: "还需要支付" + service + "元服务费"
    })

  },

  //获取输入的跑车数量
  numInput: function (e) {
    var _this = this;
    var command = _this.data.command;
    _this.setData({
      num: e.detail.value
    })
  },

  //点击生成游戏按钮 进入支付页面
  forwardGameClick: function () {
    //支付
    //  wx.request({
    //    url: "https://greatplan.com.cn/redpacket/gpa/gpwx/packetPay",
    //    data:{
    //      //手机类型
    //      mobileType:"ip",
    //      //红包内容
    //      packetContent: "",
    //      //红包id
    //      contentId: "",
    //      //红包金额
    //      packetPrice: "",
    //      //红包数量
    //      packetNumber: "",
    //      //主题id
    //      themeId: "",
    //      //服务费
    //      serviceCharge: "",  
    //    },
    //    method:"POST",
    //    success:function(res)
    //    {
    //      if(res.data){
    //         out_trade_no = res.data['out_trade_no'];
    //         wx.requestPayment({
    //           timeStamp: '',
    //           nonceStr: '',
    //           package: '',
    //           signType: 'MD5',
    //           paySign: '',
    //           success:function(){
    //             console.log("支付成功")
    //           },
    //           fail:function(res){
    //             console.log(res)
    //           }

    //         })
    //      }
    //    },
    //  })



    //红包金额
    var command = this.data.command;

    //跑车数量
    var num = this.data.num;

    //提示输入
    var string = "";

    //判断输入的金额是否正确 红包最大数额5000元，每个红包至少0.10元
    if (command === null) {
      console.log('请输入有效的金额');
      string = "请输入有效的金额"
      this.pop(string);

    } else if (command == 0) {
      console.log('请输入有效的金额');
      string = "赏金金额不能为0"
      this.pop(string);

    } else if (command > 5000) {
      console.log("红包金额不能大于5000");
      string = "红包金额不能大于5000"
      this.pop(string);

      //判断输入的跑车数量是否正确
    } else if (num === null) {
      console.log("请输入有效的跑车数量");
      string = "请输入有效的跑车数量"
      this.pop(string);

    } else if (num == 0) {
      console.log("请输入有效的跑车数量");
      string = "跑车数量不能为0"
      this.pop(string);

    } else if (command / num < 0.1) {
      console.log("单个红包金额最少0.1元");
      string = "单个红包金额最少0.1元"
      this.pop(string);

    } else {
      console.log("红包金额" + command + "红包个数" + num);
      //跳转到生成跑车赛页面
      wx.navigateTo({
        url: './../forwardGame/forwardGame',
      })
    }
  },
  //弹出对话框的方法
  pop: function (string) {
    wx.showModal({
      title: '提示',
      content: string,
      confirmText: "确定",
      showCancel: 'false'
    })
  },

  // 底部栏页面跳转
  recordCilck: function () {
    wx.navigateTo({
      url: './../record/record',
    })
  },
  remainderCilck: function () {
    wx.navigateTo({
      url: './../remainder/remainder',
    })
  },
  questionCilck: function () {
    wx.navigateTo({
      url: './../question/question',
    })

  },
  reportClick: function () {
    wx.navigateTo({
      url: './../report/report',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取到用户信息
    var _this = this;
    wx.getUserInfo({
      success: function (res) {
        var avatarUrl = res.userInfo.avatarUrl;
        var nickName = res.userInfo.nickName;
        console.log(res.userInfo);
        _this.setData({
          "userInfo.avatarUrl": avatarUrl,
          "userInfo.nickName": nickName,
        });
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
    // 保存用户信息
    var that = this;
    wx.request({
      url: "https://greatplan.com.cn/redpacket/gpa/gpwx/saveWxInfo",
      data: {
        mobileType: "ip",
        openId: "110",
        wxHeadImage: "touxiang",
        wxNickName: "mingzi",
      },
      method: "POST",
      success: function (src) {
        // console.log(src)
        // console.log(src.data.success, src.data.errorCode, src.data.wxNickName);
      }
    })

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