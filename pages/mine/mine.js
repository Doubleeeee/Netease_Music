//mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    createSongs: '2',
    showView: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    showView: (options.showView == "true" ? true : false)
  },
  /**
   * 改变隐藏显示状态
   */
  onChangeShowState: function() {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },
  /**
   * 插件初始化
   */
  onReady: function() {
    this.sheetInfo = this.selectComponent("#sheetInfo");
    this.dialog = this.selectComponent("#dialog");
  },
  showDialog() {
    this.dialog.showDialog();
  },
  /**
   * 页面跳转
   */
  jump:function(options){
    wx.navigateTo({
      url: '../manage/manage',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})