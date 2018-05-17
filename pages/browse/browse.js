
const app = getApp()
const mock = require('./mock')
const path = require('./mock')

Page({
  data: {
    inputShowed: false,
    inputVal: "",
    services: []
  },
  onLoad: function () {
    console.log(444444444,'browse Onload')
    
    
    this.setData({ services: mock.services})
    app.globalData.services = mock.services
    console.log(this.data.mock, this.data.services)
    console.log(245, this.data.services[0].user.username)
    wx.redirectTo({
      url: '/pages/show/show',
    })
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
})

