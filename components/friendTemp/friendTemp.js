Component({
  properties: {
    // 定义innerText属性，可在组件使用时指定
    comment: Object,
    count: Number
  },
  // 私有数据，组件的初始数据
  data: {
    // 一些组件内部数据
    prised: false,
    action: {},
    showModle: false
  },
  methods: {
    // 自定义方法
    clickPrise: function () {
      var that = this;
      var target = e.currentTarget;
      console.log(target)
      for (let i = 0; i < this.data.count; i++) {
        if (this.data.comment[i].user.userId == target.dataset.userid) {
          var prised = this.data.comment[i].prised;
          var priseNum = this.data.comment[i].priseNum;
          var flag = -1;
          priseNum = priseNum + (prised ? flag : (-1 * flag));
          var prisedup = 'data.comment[${i}].prised';
          var numup = 'data.comment[${i}].priseNum';
          this.setData({
            prisedup: !prised,
            numup: priseNum
          });
        }
      }
    },
    audioPlay: function () {
      this.setData({
        action: {
          method: 'play'
        }
      });
    },
    audioPause: function () {
      this.setData({
        action: {
          method: 'pause'
        }
      });
    },
    showModle: function () {
      this.setData({
        showModle: !this.data.showModle
      });
    }
  },
  ready: function () {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    var flag = 0;
    var audioCtx = this.audioCtx;
    for (var i = 0; i < this.data.count; i++) {
      if (this.data.comment[i].music) {
        audioCtx = wx.createAudioContext('audio' + flag);
        flag++;
      }
    }
  }
})