const app = getApp()
const mock = require('./mock')
const path = require('./mock')

Page({
  data: {
    inputShowed: false,
    inputVal: ""
  },
  // onLoad: function () {
  //   wx.redirectTo({
  //     url: '/pages/show/show',
  //   })
  //   console.log(3423423432, "test")
  //   console.log(423423423, mock)
  //   console.log(444444, "test")
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

