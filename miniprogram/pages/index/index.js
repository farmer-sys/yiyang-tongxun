// pages/index/index.js
const app = getApp()

Page({
  data: {
    phone: app.globalData.phone,
    services: [
      { id: 'anjian', icon: '📹', name: '安防监控', desc: '海康大华·POE', url: '/pages/webview/webview?goto=anjian' },
      { id: 'wangluo', icon: '📶', name: '网络·全光', desc: '华为FTTR·锐捷AP', url: '/pages/webview/webview?goto=wangluo' },
      { id: 'shengguang', icon: '🎵', name: '声光系统', desc: '音响灯光·LED大屏', url: '/pages/webview/webview?goto=shengguang' },
      { id: 'tingche', icon: '🚗', name: '停车场', desc: '车牌识别·道闸', url: '/pages/webview/webview?goto=tingche' },
      { id: 'xiaofang', icon: '🔥', name: '智慧消防', desc: '联动·智慧平台', url: '/pages/webview/webview?goto=xiaofang' },
      { id: 'menjin', icon: '🔒', name: '门禁·对讲·广播', desc: '人脸·IP电话', url: '/pages/webview/webview?goto=menjin' },
      { id: 'jicheng', icon: '💡', name: '智能化集成', desc: '客控·家居·工地', url: '/pages/webview/webview?goto=jicheng' },
      { id: 'buxian', icon: '🔧', name: '综合布线', desc: '桥架·光纤·机柜', url: '/pages/webview/webview?goto=buxian' },
    ],
    cases: [
      {
        id: 1, title: '瑞金天沐温泉酒店', tag: '弱电总包', tagClass: 'tag-orange',
        desc: '五星级温泉度假酒店全智能化弱电建设',
        stats: ['300路监控', '100+ AP', '270间客房', '1000㎡声光'],
        url: '/pages/webview/webview?goto=ruijin'
      },
      {
        id: 2, title: '赣南医科大学', tag: '智慧消防', tagClass: 'tag-blue',
        desc: '高校多栋楼宇智慧消防系统建设',
        stats: ['多栋楼宇覆盖', '云平台实时监控', '三级告警联动'],
        url: '/pages/webview/webview?goto=gnykdx'
      },
      {
        id: 3, title: '多家快递公司站点监控', tag: '快递物流', tagClass: 'tag-blue',
        desc: '赣州多个区县快递分拣中心及营业网点监控覆盖',
        stats: ['多站点覆盖', '45天+存储', '远程APP巡查'],
        url: '/pages/webview/webview?goto=kuaidi'
      },
      {
        id: 4, title: '多家企业内网搭建及监控', tag: '企业网络', tagClass: 'tag-orange',
        desc: '经开区及周边企业内网规划与安防建设',
        stats: ['VLAN网段隔离', 'AC+AP全覆盖', '30分钟响应'],
        url: '/pages/webview/webview?goto=qiye'
      }
    ]
  },

  onLoad() {
    wx.setNavigationBarTitle({
      title: '怡阳通讯'
    })
  },

  callPhone() {
    wx.makePhoneCall({
      phoneNumber: this.data.phone,
    })
  },

  goBooking() {
    wx.navigateTo({
      url: '/pages/webview/webview?goto=booking'
    })
  },

  goService(e) {
    const url = e.currentTarget.dataset.url
    wx.navigateTo({ url })
  },

  goWebview(e) {
    const url = e.currentTarget.dataset.url
    wx.navigateTo({ url })
  }
})
