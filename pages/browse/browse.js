
const app = getApp()
const mock = require('./mock')
const path = require('./mock')

Page({
  data: {
    inputShowed: false,
    inputVal: "",
    services: []
  },

  // clickback:function(e) {
  //   wx.navigateBack({
  //     delta: 1
  //   })
  // },



  onLoad: function () {
    
    
    this.setData({ services: mock.services})
  },

  showUser: function(e) {
    const data = e.currentTarget.dataset
    const user = data.user
    console.log(user)
    // wx.navigateTo({
    //   url: `/pages/show/show?=${user.id}`,
    // })
    wx.switchTab({
      url: `/pages/show/show?=${user.id}`,
    })
    console.log(user.id)
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

