// pages/search/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList:['综合','商品','专家','问答','案例'],
    currentIndex:0,
    searchValue:'',
    newlist: [],
    titleProduct:'商品',
    titleExpert:'专家',
    titleQuestion:'问答',
    titleRecommend:'相关推荐'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  changeTab(e){
    this.setData({
      currentIndex: e.target.dataset.idx
    })
  },
  searchInput(e){
   console.log('jj',e.detail.value)
   this.setData({
     searchValue:e.detail.value
   })
  },
  cancelInput(){
   this.setData({
    searchValue:''
   })
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