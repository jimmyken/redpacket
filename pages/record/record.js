// pages/record/record.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 控制swiprer
    isauto: false,
    currentindex: 0,

    leftColor: "222",
    rightColor: "",

    left_decoration: "",
    right_decoration: "",

    userInfo: { avatarUrl: "", nickName: "" },

    //我发出的红包 当前页、每页数据条数、是否还有数据
    sendPage: 1,
    sendPageSize: 6,
    sendHasMoreData: true,

    //我收到的红包 当前页、每页数据条数、是否还有数据
    receivePage: 1,
    receivePageSize: 4,
    receiveHasMoreData: true,

    //我发出的红包数据 请求到的数据分页存入
    sendRedPacket: [
      { word: "用户名", sum: "12", date: "2017.11.11", num: "123" },
      { word: "用户名", sum: "12", date: "2017.11.11", num: "123" },
      { word: "用户名", sum: "12", date: "2017.11.11", num: "123" },
      { word: "用户名", sum: "12", date: "2017.11.11", num: "123" },
      { word: "用户名", sum: "12", date: "2017.11.11", num: "123" },
      { word: "用户名", sum: "12", date: "2017.11.11", num: "123" },
    ],

    //模拟请求到的我发出的红包的数据 每页六条数据
    test: [
      { word: "模拟数据1", sum: "模拟数据1", date: "模拟数据1", num: "模拟数据1" },
      { word: "模拟数据2", sum: "模拟数据2", date: "模拟数据2", num: "模拟数据2" },
      { word: "模拟数据3", sum: "模拟数据3", date: "模拟数据3", num: "模拟数据3" },
      { word: "模拟数据4", sum: "模拟数据4", date: "模拟数据4", num: "模拟数据4" },
      { word: "模拟数据5", sum: "模拟数据5", date: "模拟数据5", num: "模拟数据5" },
      { word: "模拟数据6", sum: "模拟数据6", date: "模拟数据6", num: "模拟数据6" },
    ],

    //我收到的红包数据
    receiveRedPacket: [
      { imgurl: "https://fj.ikafan.com/attachment/forum/201510/16/154328vvp0vn7vvezpwe77.jpg.thumb.jpg", name: "用户名", sum: "12", date: "2017.11.11", num: "123" },
      { imgurl: "https://fj.ikafan.com/attachment/forum/201510/16/154328vvp0vn7vvezpwe77.jpg.thumb.jpg", name: "用户名", sum: "12", date: "2017.11.11", num: "123" },
      { imgurl: "https://fj.ikafan.com/attachment/forum/201510/16/154328vvp0vn7vvezpwe77.jpg.thumb.jpg", name: "用户名", sum: "12", date: "2017.11.11", num: "123" },
      { imgurl: "https://fj.ikafan.com/attachment/forum/201510/16/154328vvp0vn7vvezpwe77.jpg.thumb.jpg", name: "用户名", sum: "12", date: "2017.11.11", num: "123" },
      { imgurl: "https://fj.ikafan.com/attachment/forum/201510/16/154328vvp0vn7vvezpwe77.jpg.thumb.jpg", name: "用户名", sum: "12", date: "2017.11.11", num: "123" },
    ],

    //模拟请求到的我收到的红包的数据 每页四条数据
    test2: [
      { imgurl: "http://www.aiyingli.com/wp-content/uploads/2016/08/cover.png", name: "模拟数据1", sum: "模拟数据1", date: "模拟数据1", num: "模拟数据1" },
      { imgurl: "http://www.aiyingli.com/wp-content/uploads/2016/08/cover.png", name: "模拟数据2", sum: "模拟数据2", date: "模拟数据2", num: "模拟数据2" },
      { imgurl: "http://www.aiyingli.com/wp-content/uploads/2016/08/cover.png", name: "模拟数据3", sum: "模拟数据3", date: "模拟数据3", num: "模拟数据3" },
      { imgurl: "http://www.aiyingli.com/wp-content/uploads/2016/08/cover.png", name: "模拟数据4", sum: "模拟数据4", date: "模拟数据4", num: "模拟数据4" }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    //获取到用户信息
    var _this = this;
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo;
        var nickName = userInfo.nickName;
        var avatarUrl = res.userInfo.avatarUrl;
        _this.setData({
          "userInfo.avatarUrl": avatarUrl,
          "userInfo.nickName": nickName
        });
      }
    })
  },

  // 点击我发出的 页面转动
  head_left_click: function () {
    var _this = this;
    _this.textFontLeft();
    if (_this.data.currentindex == 0) {
      return false;
    }
    else {
      _this.data.currentindex = 0;
      _this.data.isauto = !_this.data.isauto;
      _this.setData(_this.data);
      setTimeout(function () {
        _this.data.isauto = !_this.data.isauto;
        _this.setData(_this.data);
      }, 400);
    }
  },
  //点击我收到的 页面翻转动
  head_right_click: function () {
    var _this = this;
    _this.textFontRight();
    if (_this.data.currentindex == 1) {
      return false;
    }
    else {
      _this.data.currentindex = 1;
      _this.data.isauto = !_this.data.isauto;
      _this.setData(_this.data);
      setTimeout(function () {
        _this.data.isauto = !_this.data.isauto;
        _this.setData(_this.data);
      }, 400);
    }
  },

  //顶部字体样式
  textFontRight: function () {
    var _this = this;
    _this.data.leftColor = "#aaaaaa";
    _this.data.rightColor = "red";
    // _this.data.left_decoration = "underline",
    // _this.data.right_decoration = "underline",
    _this.setData(_this.data)
  },

  textFontLeft() {
    var _this = this;
    _this.data.leftColor = "red";
    _this.data.rightColor = "#aaaaaa";
    // _this.data.left_decoration = "underline",
    // _this.data.right_decoration = "nome",
    _this.setData(_this.data)
  },

  //监听页面滑动 顶部字体样式跟着改变
  change_swiper(e) {
    var _this = this;
    var p = e.detail.current;
    console.log(p);
    if (p == 0) {
      _this.textFontLeft();
    } else if (p == 1) {
      _this.textFontRight();
    }
  },

  //【常见问题】页面跳转
  questionCilck: function () {
    wx.navigateTo({
      url: './../question/question',
    })
  },

  //我发出的红包 滑动到底部触发事件 每触发一次就请求下一页的数据
  sendLower: function (e) {
    var _this = this;
    //当前页数+1，页面加载进来时已经请求了1页，上拉加载时请求的是第2页
    var sendPage = _this.data.sendPage + 1;

    _this.setData({
      sendPage: sendPage
    });

    //没一页的数据的条数
    var sendPageSize = _this.data.sendPageSize;

    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 500,
      success: function () {

      }
    })

    //请求下一页数据
    wx.request({
      url: "https://greatplan.com.cn/redpacket/gpa/gpwx/getSendRedPacket",
      method: "POST",
      data: {
        sendPage: sendPage,
        sendPageSize: sendPageSize,
      },
      success: function (res) {
        console.log("请求成功"),
          //把请求到的一页数据加到数组里 添加语法有待商榷
          //.concat()方法将链接两个或多个数组
          _this.setData({
            sendRedPacket: _this.data.sendRedPacket.concat(_this.data.test)
          });

        if (res.data.list.length < 6) {
          console.log("每有更多数据了！")
        }
      },
      fail: function (res) {
        wx.showToast({
          title: '加载失败',
          icon: 'loading',
          duration: 500,
          success: function (res) {

          }
        });
        console.log(res)
      }
    })
    //console.log(page)
  },

  //我收到的红包 滑到底部触发事件
  receiveLower: function (e) {
    var _this = this;
    // console.log("我收到的 触底事件")

    //当前页数+1，页面加载进来时已经请求了1页，上拉加载时请求的是第2页
    var receivePage = _this.data.receivePage + 1;
    _this.setData({
      receivePage: receivePage
    });

    //每一页显示的数据的条数
    var receivePageSize = _this.data.receivePageSize;

    //提示加载中
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 500,
      success: function (res) {
    
      }
    });

    //请求下一页数据
    wx.request({
      url: "https://greatplan.com.cn/redpacket/gpa/gpwx/getReceiveRedPacket",
      method: "POST",
      data: {
        receivePage: receivePage,
        receivePageSize: receivePageSize,
      },
      success: function (res) {
        console.log("请求成功"),
          //把请求到的一页数据加到数组里 添加语法有待商榷
          //.concat()方法将链接两个或多个数组
          _this.setData({
          receiveRedPacket: _this.data.receiveRedPacket.concat(_this.data.test2)
          });

        // if (res.data.list.length < 6) {
        //   console.log("每有更多数据了！")
        // }
      },
      fail: function (res) {
        wx.showToast({
          title: '加载失败',
          icon: 'loading',
          duration: 500,
          success: function (res) {

          }
        });
        console.log(res)
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

  //页面一加载进来就请求第一页的数据 
  onShow: function () {
    var _this = this;
    //获取我发出红包记录
    wx.request({
      url: "https://greatplan.com.cn/redpacket/gpa/gpwx/getSendRedPacket",
      data: {
        /* 请求参数 假的 */
        mobileType: "ip",
        openId: "110",
        pageSize: "5",
        pageNo: "1",
      },
      method: "POST",
      success: function (src) {
        console.log("我发出的红")
        console.log(src);
        for (var i = 0; i < src.data.body.data.list.length; i++) {
          var sendArr = {};
          // sendArr.word = "红包跑车赛";
          sendArr.sum = "1.00";
          sendArr.date = src.data.body.data.list[i].createDate;
          sendArr.num = "1/1";
          _this.data.sendRedPacket.push(sendArr);
        };
        // console.log("\n");
        // console.log(_this.data.sendRedPacket);
        _this.setData(_this.data);
      },
      fail: function () {
        console.log("请求失败")
      }

    })

    //获取我收到红包记录
    wx.request({
      url: "https://greatplan.com.cn/redpacket/gpa/gpwx/getReceiveRedPacket",
      data: {
        /* 请求参数 假的 */
        mobileType: "ip",
        openId: "110",
        pageSize: "5",
        pageNo: "1",
      },
      method: "POST",
      success: function (src) {
        // console.log(src.data.body.data.list);
        for (var j = 0; j < src.data.body.data.list.length; j++) {

          var receiveArr = {};
          //头像
          receiveArr.imgurl = src.data.body.data.list[j].wxHeadImage;
          //红包金额
          receiveArr.sum = "1.00";
          //发出的时间
          receiveArr.date = src.data.body.data.list[j].createDate;
          //发出的个数
          receiveArr.num = "1/1";
          //名字
          receiveArr.name = src.data.body.data.list[j].wxNickName;

          _this.data.receiveRedPacket.push(receiveArr);

          // console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");
          // console.log(src.data.body.data.list);
        }


      },
      fail: function () {
        console.log("请求失败")
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

  },


})