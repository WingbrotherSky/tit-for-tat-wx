const app = getApp()

Page({
  data: {
    motto: "Welcome to PenguinShare"
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userinfo = e.detail.userinfo
    this.setData({
      userinfo: e.detail.userinfo
    })

    wx.reLaunch({
      url: '/pages/browse/browse',
    })

  }







})