Component({
  properties: {
    // 定义innerText属性，可在组件使用时指定
    scrollUp: Boolean
  },
  // 私有数据，组件的初始数据
  data: {
    // 一些组件内部数据
    count: 2,
    comment:[
      {
        "text": true,
        "media": "picture",
        "music": true,
        "user": {
          "userId": 0,
          "userImg": "../../image/cm2_default_artist_banner@2x.jpg",
          "userName": "welphenEDM"
        },
        "commentArr": {
          "content": "你能听出他演奏的是什么歌吗？请快速抢答！",
          "video": "http://www.html5videoplayer.net/videos/madagascar3.mp4",
          "image": ['../../image/cm2_discover_banner_cn-ip6@2x.jpg', '../../image/cm2_discover_banner_jp-ip6@2x.jpg', '../../image/cm2_discover_banner_kr-ip6@2x.jpg'],
          "music": {
            "src": "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46",
            "poster": "../../image/cm2_default_artist_banner@2x.jpg",
            "name": "山外小楼夜听雨",
            "author": "任然",
          }
        },
        prised: false,
        commented: false,
        priseNum: 100,
        commentNum: 40
      },
      {
        "text": true,
        "media": "video",
        "music": false,
        "user": {
          "userId": 1,
          "userImg": "../../image/cm2_default_artist_banner@2x.jpg",
          "userName": "卡萨丁"
        },
        "commentArr": {
          "content": "有点小幸福",
          // "image": ['../../image/cm2_discover_banner_cn-ip6@2x.jpg', '../../image/cm2_discover_banner_jp-ip6@2x.jpg', '../../image/cm2_discover_banner_kr-ip6@2x.jpg'],
          "video": "http://www.html5videoplayer.net/videos/madagascar3.mp4",
          "music": {
            "src": "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46",
            "poster": "../../image/cm2_default_artist_banner@2x.jpg",
            "name": "椿",
            "author": "沈以诚",
          }
        },
        prised: false,
        commented: false,
        priseNum: 190,
        commentNum: 60
      }
    ]
  },
  methods: {
    // 自定义方法
  },
  ready:function(){
    
  }
})