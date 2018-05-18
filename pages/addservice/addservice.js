Page({
  data: {
    files: []
  },

  bindSubmit: function (e) {
    let service = e.detail.value.service;
    let description = e.detail.value.description;
    let id = this.data.id;

    let userservice = {
      service: service,
      description: description
    }


  wx.request({
    url: '/pages/addservice/addservice', //Waiting for Server//
    method: "POST",
    data: userservice,
    success(res){
      wx.redirectTo({
        url: '/pages/show/show'
      })
    }
  })
  }
  ,
  openMap: function () {
    wx.chooseLocation({
      
    })
  },
 

  listenerBtnChooseImage: function (e) {
    var that = this
    // Upload an image
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log('success')
        that.setData({
          src: res.tempFilePaths
        })
        // Get image info
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: function (res) {
            console.log(res.width)
            console.log(res.height)
            console.log(111, res.path)
            let files = that.data.files
            files.push(res.path)
            that.setData({files: files})
          }
        })
        previewImage: (e) {
          console.log(989898, that.data.files)
          wx.previewImage({
            current: e.target.dataset.src, // 当前显示图片的http链接
            urls: that.data.files
          })
        }
         

        // wx.previewImage({
        //   src: res.tempFilePaths[0],
        //   success: function (res) {
        //     console.log(res.width)
        //     console.log(res.height)
        //     console.log(res.path)
        //   }
        // })
      }
    })
  }
})