// pages/item-category/item-category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    list: [{
        title: '皮肤管理',
        lower: [{
            name: '光子嫩肤'
          },
          {
            name: '皮秒'
          },
          {
            name: '超皮秒'
          },
          {
            name: '朝批'
          },
          {
            name: '哈哈'
          },
        ]
      },
      {
        title: '玻尿酸',
        lower: [{
            name: '光子嫩肤'
          },
          {
            name: '皮秒'
          },
          {
            name: '超皮秒'
          },
          {
            name: '朝批'
          },
          {
            name: '哈哈'
          },
        ]
      },
      {
        title: '其他',
        lower: [{
            name: '光子嫩肤'
          },
          {
            name: '皮秒'
          },
          {
            name: '超皮秒'
          },
          {
            name: '朝批'
          },
          {
            name: '哈哈'
          },
        ]
      },
      {
        title: '其他',
        lower: [{
            name: '光子嫩肤'
          },
          {
            name: '皮秒'
          },
          {
            name: '超皮秒'
          },
          {
            name: '朝批'
          },
          {
            name: '哈哈'
          },
          {
            name: '光子嫩肤'
          },
          {
            name: '皮秒'
          },
          {
            name: '超皮秒'
          },
          {
            name: '朝批'
          },
          {
            name: '哈哈'
          }
        ]
      }
    ],
    topList: [],
    scrollTop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHieght()
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
  scroll: function (e) {
    console.log('结果', e.detail.scrollTop)
    for (let i = 0; i < this.data.topList.length; i++) {
      if (e.detail.scrollTop <= this.data.topList[i]) {
        this.setData({
          currentIndex: i
        })
        break;
      }
    }

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  //回到顶部
  toTop: function (e) { // 一键回到顶部
    const idx = e.currentTarget.dataset.idx
    this.topScroll(idx)
  },
  topScroll: function (idx) {
     this.setData({
       scrollTop: this.data.topList[idx]-this.data.topList[0]
     })

  },
  getHieght() {
    var that = this
    for (let i = 0; i < this.data.list.length; i++) {
      var query = wx.createSelectorQuery();
      //选择id
      query.select('.itemH' + i).boundingClientRect(function (rect) {
        that.data.topList.push(rect.top)
      }).exec();
    }
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