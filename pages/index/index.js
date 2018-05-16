//index.js
//获取应用实例
const app = getApp()

Page({

  data: {
    motto: 'Welcome to PenguinShare'
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo 
   this.setData({
      userInfo: e.detail.userInfo
    })
  }
})
