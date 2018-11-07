Component({
  properties: {
    // 定义innerText属性，可在组件使用时指定
    
  },
  // 私有数据，组件的初始数据
  data: {
    // 一些组件内部数据
    prised: false,
    comment:{
      "text": true,
      "media": "picture",
      "music": true,
      "commentArr": {
        "content": "你能听出他演奏的是什么歌吗？请快速抢答！",
        "image": ['../../image/cm2_discover_banner_cn-ip6@2x.jpg', '../../image/cm2_discover_banner_jp-ip6@2x.jpg', '../../image/cm2_discover_banner_kr-ip6@2x.jpg'],
        "music": {
          "src": "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46",
          "poster": "../../image/cm2_default_artist_banner@2x.jpg",
          "name": "山外小楼夜听雨",
          "author": "任然",
          "index": 0
        }
      }
    },
    action:{}
  },
  methods: {
    // 自定义方法
    clickPrise: function () {
      this.setData({
        prised: !this.data.prised
      });
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
    }
  },
  onLoad:function(){
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('audio0');
  }
})