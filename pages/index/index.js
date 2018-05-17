const app = getApp()

Page({
  data: {

  },
  getUserInfo: function(e) {
    console.log(343434,e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })

    wx.reLaunch({
      url: '/pages/browse/browse',
    })

  }







})
