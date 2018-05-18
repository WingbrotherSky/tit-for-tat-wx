//app.js
App({
  onLaunch: function () {
    const host = 'http://localhost:3000/'
    console.log('processing to login')
    wx.login({
      success: res => {
        console.log(333333,res)
        // insert next code here
        wx.request({
          url: host + 'api/v1/login',
          method: 'post',
          data: {
            code: res.code
          },
          // insert next code here
          success: res => {
            console.log(res)
            this.globalData.userId = res.data.userId
          }
        })
      }
    })
  },
  globalData: {
    host: 'http://localhost:3000/api/v1/'
  }
})
