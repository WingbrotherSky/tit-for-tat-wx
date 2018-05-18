const app = getApp()

Page({
  data: {
    files: [],
    url: app.globalData.host
  },

  bindSubmit: function (e) {
    let service = e.detail.value.service;
    let description = e.detail.value.description;
    let id = this.data.id;

    let userservice = {
      name: service,
      description: description,
      user_id: app.globalData.userId
    }
  console.log(88888888, userservice.user_id)

  wx.request({
    url: this.data.url + 'services',
    method: "POST",
    data: userservice,
    success(res){
      console.log(7777777,res)
      wx.reLaunch({
        url: `/pages/show/show?id=${res.data.userId}`
      })
    }
  })
  }
  ,

  onLoad: function (options) {

  },

  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  }
});
