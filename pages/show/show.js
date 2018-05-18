const mock = require('./mock')
const app = getApp()

// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    host: app.globalData.host
  },
    // click:function(e) {
    //   wx.navigateBack({
    //     delta: 1
    //   })ß
    // }

  /**
   * 生命周期函数--监听页面加载
   */
  goToBookingPage: function(e) {
    const data = e.currentTarget.dataset.service
    console.log(22222, data)
    wx.reLaunch({
      url: `/pages/service/service?id=${data.id}&name=${data.name}&description=${data.description}`,
    })
  },

  onLoad: function(options) {
    if (options.id) {
      let that = this
      wx.request({
        url: this.data.host + `users/${options.id}`,
        method: 'GET',
        success(res) {
          console.log(11111111111, res)
          that.setData({ user: res.data })
        }
      }) } else {
        console.log(12,app)
        console.log(app.globalData)
        console.log(13, app.globalData.userId)
      let that = this
      wx.request({
        url: this.data.host + `users/${app.globalData.userId}`,
        method: 'GET',
        success(res) {
          console.log(11111111111, res)
          that.setData({ user: res.data })
        }
      })
      }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
