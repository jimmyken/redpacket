// pages/game start/game start.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //用户头像
    userInfo: { avatarUrl: "", nickName: "" },

    //开始游戏时提示框的隐藏显示
    index: "",

    //车子对右边的距离
    car: 0,
    
    //开始按钮
    startDisplay:"",
     
    //退出按钮
    outDisplay:"none",

    //结束按钮
    overDisplay:"none",

    //游戏开始时间
    startTime:"",
   
    //游戏结束提示框的隐藏显示
    visibility: 'hidden',

    //底部页面白色部分中间提示语的隐藏显示
    textDisplay: "",

    //领取红包人员列表的隐藏和显示
    dataDisplay: "none",

    //记录手机加速度的数据
    currentAccelerometer: {
      x: 0,
      y: 0,
      z: 0
    },

    //红包的总金额
    sum:10.00,

    //红包已经被领取了多少个
    num:"0/5",

    //游戏背景图
    endgamebmg:'../../image/congradutaion5.jpg',

    //进度条的left值
    left:-100,

    //领取红包的人员列表数据
    //头像、名字、排名图标、领取金额、比赛用时、比赛时间
    receiveRedPacket: [
      { userImg: "http://pic.cifnews.com/upload/201710/09/201710091543323906.png", name: "1", rankImg: "./../../image/1.png", money: "2.50", time:"00:21:36",date:"11月13日 14:55"},
      { userImg: "http://pic.cifnews.com/upload/201710/09/201710091543323906.png", name: "1", rankImg: "./../../image/2.png", money: "2.50", time: "00:21:36", date: "11月13日 14:55" },
      { userImg: "http://pic.cifnews.com/upload/201710/09/201710091543323906.png", name: "1", rankImg: "./../../image/3.png", money: "2.50", time: "00:21:36", date: "11月13日 14:55" },
      
    ],
  },


  onLoad: function (options) {
    var _this = this;
      //获取用户的信息
    // wx.getUserInfo({
    //   success: function (res) {
    //     var nickName = res.userInfo.nickName;
    //     var avatarUrl = res.userInfo.avatarUrl;
    //     _this.setData({
    //       "userInfo.avatarUrl": avatarUrl,
    //       "userInfo.nickName": nickName
    //     });
    //   }
    // })

    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        _this.setData({
          "userInfo.avatarUrl": res.data.avatarUrl,
          "userInfo.nickName": res.data.nickName
        });
      },
    })
  },

  //获取到当前时间
  getStartTime:function(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    if (month < 10) {
      month = '0' + month;
    };
    if (day < 10) {
      day = '0' + day;
    };
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var startTime = h + ':' + m + ':' + s;
    return startTime;
  },

  //【开始】游戏按钮
  gameStartCilck: function (e) {
    var _this = this;

     //调用监听加速度函数
    this.startAccelerometer();
    
     //获取开始游戏时间
    _this.data.startTime = this.getStartTime();
    _this.setData(_this.data);
    console.log("开始时间" + _this.data.startTime)

     //弹出的摇动小车提示框
    _this.data.index = "2";
   
    _this.data.startDisplay = "none",
    _this.data.outDisplay="",
    // _this.data.visibility="none"
    _this.setData(_this.data);
  },

  //退出游戏 按钮
  gameOutClick:function(){
    var _this = this;
    //停止监听加速度
    wx.stopAccelerometer();
    wx.showModal({
      title: '提示',
      content: "确定要退出游戏吗？",
      confirmText: "确定",
      success:function(res){
        if(res.confirm){
          //点击确定退出游戏放回首页
          wx.navigateTo({
            url: './../home/home',
          })
        }else if(res.cancel){
          //点击取消按钮再次调用监听速度方法
          _this.startAccelerometer();
        }
      }
    })
  },

  // 点击跳转

  homeCilck: function () {
    wx.navigateTo({
      url: './../home/home',
    })
  },
  recordCilck: function () {
    wx.navigateTo({
      url: './../remainder/remainder',
    })
  },
  forwardGameCilck: function () {
    wx.navigateTo({
      url: './../forwardGame/forwardGame',
    })
  },
  reportCilck: function () {
    wx.navigateTo({
      url: './../report/report',
    })
  },


  onShow: function () {

    // 获取领取红包人员列表
    wx.request({
      url: "https://greatplan.com.cn/redpacket/gpa/gpwx/getAwardOfficerByPacketId",
      data: {
        mobileType: "xiaomi",
        packetId: "888"
      },
      method: "GET",
      success: function (e) {
        console.log("以下是请求到的数据")
        console.log(e);
      },
      fail: function (e) {
        console.log("请求失败")
      }

    })
  },

  //监听加速度的方法
  startAccelerometer() {
    var _this = this;

    //进度条的进度和小车的left值 共用 
    var left = -100;

    //根据接口没秒监听5次 每次监听到手机摇动就开始动画 手机不摇动侧没有动画 left值不变
    var a = -100;

    var car =
     0;
    //开始监听加速度
    wx.onAccelerometerChange(function (res) {
    //重新定义三个方向的加速度值
     var { x, y, z } = _this.data.currentAccelerometer;

      //获取新的加速度值与原加速度值相比较 有变化测为手机摇动 Math.abs()该方法返回一个绝对值
      if (Math.abs(res.x - x) > 0.4 || Math.abs(res.y - y) > 0.4 || Math.abs(res.z - z) > 0.4) {
      //var num = Math.abs(res.x) * 2 + Math.abs(res.y) * 2 + Math.abs(res.z) * 2;

        console.log("在摇手机")  

        var timer = setInterval(function () {
          _this.setData({
            left: left,
            car:car
          });
          car = -(left + 100);
          left += 1;

          if(car<-88){

            car = -88;
            a = 0;
            left=0;

            _this.setData({
              index: -9,
              visibility: 'none',
              textDisplay:"none",
              dataDisplay:"",
              outDisplay:"none",
              overDisplay:"",
              textDisplay: "none",
              dataDisplay: "",
            });
             

            console.log("游戏结束时间"+this.getStartTime());
            clearInterval(timer);
            //停止监听加速度
            wx.stopAccelerometer();
          }

          if (left > a) {
            left = a;
            a += 4;
            clearInterval(timer);
          }

          if(left>0){
            left=0;
            clearInterval(timer);
            wx.stopAccelerometer();
          }

        }, 50)

        _this.setData({
          //把上一次加速度的值记录下来 用于比较
          currentAccelerometer: {
            x: res.x,
            y: res.y,
            z: res.z
          },
        })
      } else {
        clearInterval(timer);
      }
    })
  },

  gameoverBtnClick: function () {
    var _this = this;
    // _this.data.visibility = 'hidden';
    // _this.setData(_this.data);
    // console.log(_this.data.visibility)

    _this.setData({
      visibility: 'hidden',
    });
    wx.showModal({
      title: '游戏结束',
      content: '游戏结束',
    })
  },

//随机生成背景图
radombmg:function(){
  var bmglist=[
    { img: "../../image/congradutaion1.jpg" },
    { img: "../../image/congradutaion2.jpg" },
    { img: "../../image/congradutaion3.jpg" },
    { img: "../../image/congradutaion4.jpg" },
    { img: "../../image/congradutaion5.jpg" },
  ]
  var bmglength=bmglist.length;
  var myradom;
  this.data.endgamebmg=Math.floor(Math.random()*bmglength);
  console.log(this.data.endgamebmg);
  this.data.endgamebmg = bmglist[this.data.endgamebmg].img;
  this.setData(this.data);
}
})