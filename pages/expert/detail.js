// pages/expert/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuHeight: 0,
    menuTop: 0,
    list: [{
        num: 888,
        text: '粉丝'
      },
      {
        num: 888,
        text: '预约人数'
      },
      {
        num: 888,
        text: '点赞'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let menuButton = wx.getMenuButtonBoundingClientRect()
    console.log('按钮', menuButton)
    this.setData({
      menuHeight: menuButton.height,
      menuTop: menuButton.top
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},
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