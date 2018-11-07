// components/sheetInfo/sheetInfo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    createSongs: '2',
    showView: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad: function (options) {
      showView: (options.showView == "true" ? true : false)
    }, onChangeShowState: function () {
      var that = this;
      that.setData({
        showView: (!that.data.showView)
      })
    }
  }
})

