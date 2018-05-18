const app = getApp()
// pages/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  onLoad(options) {
    this.setData({host: app.globalData.host})
    this.setData({ service_id: options.id, service_name: options.name, service_description: options.description})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  bindSubmit: function (e) {
    console.log(e)
    wx.request({
      url: this.data.host + 'contracts',
      method: 'post',
      data: {service_id: this.data.service_id, user_id: app.globalData.userId, note: e.detail.value.detail},
      success(){
        wx.reLaunch({url: '/pages/browse/browse'})
      }
    })
  

    //wx.reLaunch({//
      //url: '/pages/browse/browse',//
    //})//

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