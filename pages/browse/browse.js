
const app = getApp()
const mock = require('./mock')
const path = require('./mock')

Page({
  data: {
    host: app.globalData.host,
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
    let that = this
    wx.request({
      url: this.data.host + 'services',
      method: 'GET',
      success(res) {
        that.setData({ services: res.data.services })
      }
    })
  },

  showUser: function(e) {
    const data = e.currentTarget.dataset
    const user = data.user
    // wx.navigateTo({
    //   url: `/pages/show/show?=${user.id}`,
    // })
    wx.reLaunch({
      url: `/pages/show/show?id=${user.id}`,
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
    let that = this
    wx.request({
      url: this.data.host + 'services',
      method: 'GET',
      success(res) {
        that.setData({ services: res.data.services })
      }
    })
  },
  inputTyping: function (e) {
    console.log(e.detail.value)
    this.setData({
      inputVal: e.detail.value
    });
    if (this.data.inputVal.length >= 1) {
      let that = this
      wx.request({
        url: this.data.host + 'services',
        method: 'GET',
        data: {query: this.data.inputVal},
        success(res) {
          that.setData({ services: res.data.services })
        }
      })
    } else {
      let that = this
      wx.request({
        url: this.data.host + 'services',
        method: 'GET',
        success(res) {
          that.setData({ services: res.data.services })
        }
      })
    }
  }
})

