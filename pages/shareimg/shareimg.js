// pages/canvas/canvas.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: "",
    avatarUrl: "",
    nickName: "",
    windowWidth: 0,
    windowHeight: 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //从缓存中拿到用户信息
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        console.log(res.data)
        console.log(res.data.nickName)
        that.data.avatarUrl = res.data.avatarUrl;
        that.data.nickName = res.data.nickName;
        that.setData(that.data);
      },
    })


    // 获取到屏幕的宽高
    wx.getSystemInfo({
      success: function (res) {
        that.data.windowWidth = res.windowWidth;
        that.data.windowHeight = res.windowHeight;
        that.setData(that.data);

        //console.log(that.data.windowWidth);
      }
    })
  },
  shareTap:function(){
    console.log("aaaaa")
    wx.showModal({
      title: '长按分享',
      content: '长按分享朋友圈识别二维码未实现',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    //上面的获取用户信息的方法总在此方法后执行 这样的话此方法就拿不到信息 故做延时
      console.log("url：" + that.data.avatarUrl);
      console.log("名字：" + that.data.nickName);
      console.log("宽度：" + that.data.windowWidth);
      console.log("高度" + that.data.windowHeight);
      var avatarUrl = that.data.avatarUrl;
      var nickName = that.data.nickName;
      var windowWidth = that.data.windowWidth;

      var windowHeight = that.data.windowHeight;

      //创建上下文
      var ctx = wx.createCanvasContext("myCanvas");

      //覆盖整个屏幕的矩形 作为背景
      ctx.setFillStyle('#dedede');
      ctx.fillRect(0, 0, windowWidth, windowHeight);
      // context.stroke()

      //头部白色框
      ctx.setFillStyle('#dedede');
      ctx.fillRect(0, 0, windowWidth, 250);

      //头像
      ctx.drawImage(avatarUrl, windowWidth / 2 - 35, 70, 70, 70);

      //名字
      ctx.setFillStyle("#000000");
      ctx.setTextAlign("center");
      ctx.setFontSize(12);
      ctx.fillText("格陵兰的海", windowWidth / 2, 160);

      // 弧线
      // ctx.drawImage("./../img/arc.jpg", 0, 200, windowWidth, 93);

      //二维码的外圆
      ctx.beginPath();
      ctx.setLineWidth(10);
      ctx.setStrokeStyle("#bababa");
      ctx.arc(windowWidth / 2, windowHeight / 2, 60, 0, 2 * Math.PI, false);
      ctx.closePath();
      ctx.stroke();

      //二维码
      ctx.drawImage("./../../image/qr2.jpg", windowWidth / 2 - 58, windowHeight / 2 - 58, 115, 115);

      //底部两个图标 
      ctx.drawImage("./../../image/qr1.png", windowWidth / 2 - 74, windowHeight - 150, 64, 64);
      ctx.drawImage("./../../image/qr2.png", windowWidth / 2 + 10, windowHeight - 150, 64, 64);

      ctx.setFillStyle("#000000");
      ctx.setTextAlign("center")
      ctx.setFontSize(13);
      ctx.fillText("长按识别小程序，开跑车领赏金", windowWidth / 2, windowHeight - 50);

      ctx.draw()

      setTimeout(function () {
        wx.canvasToTempFilePath({
          canvasId: 'myCanvas',
          success: function success(res) {
            wx.saveFile({
              tempFilePath: res.tempFilePath,
              success: function success(res) {
                console.log('saved::' + res.savedFilePath);

                that.setData({
                  url: res.savedFilePath
                })
              },
              complete: function fail(e) {
                //console.log(e.errMsg);
              }
            });
          },
          complete: function complete(e) {
            // console.log(e.errMsg);
          }
        });
      }, 100)
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