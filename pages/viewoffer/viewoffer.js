// pages/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */

  showService: function (e) {
    const id = e.currentTarget.dataset.id

    wx.navigateTo({
      url: `/pages/service/service?id=${id}`,
    })
  },

  onLoad: function (options) {
    let that = this;

    wx.request({
      url: '/pages/service/service', // WAITING FOR API LINK
      method: 'GET',
      success(res) {
        let services = res.data;
        that.setData(
          service
        )
      }
    })
  },

  acceptTap: function () {
    wx.reLaunch({
      url: '../browse/browse',
    })

    wx.showToast({
      title: 'SUCCESS',

    })
  },

  rejectTap: function () {
    wx.reLaunch({
      url: '../browse/browse',
    })

    wx.showToast({
      title: 'REJECT',
      icon: 'loading',
      duration: 350
    })
  },

  counterTap: function () {
    wx.reLaunch({
      url: '../show/show',
    })

    wx.showToast({
      title: 'Sending...',
      icon: 'loading',
      duration: 350
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */



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