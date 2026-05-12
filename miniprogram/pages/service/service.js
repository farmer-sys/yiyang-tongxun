// pages/service/service.js
Page({
  data: {
    services: [
      { id: 'anjian', icon: '📹', name: '安防监控', desc: '海康威视/大华监控设备安装调试，POE供电，远程APP查看', tags: ['海康威视', '大华', 'POE'], url: '/pages/webview/webview?goto=anjian' },
      { id: 'wangluo', icon: '📶', name: '网络·全光', desc: '企业网络搭建、华为FTTR全光方案、锐捷AP无线覆盖', tags: ['华为FTTR', '锐捷AP', 'VLAN'], url: '/pages/webview/webview?goto=wangluo' },
      { id: 'shengguang', icon: '🎵', name: '声光系统', desc: '专业音响灯光、LED大屏、会议系统、KTV系统', tags: ['ITC音响', 'LED大屏', '声光设计'], url: '/pages/webview/webview?goto=shengguang' },
      { id: 'tingche', icon: '🚗', name: '停车场系统', desc: '车牌识别、智能道闸、车位引导、收费管理', tags: ['车牌识别', '智能道闸', '无人值守'], url: '/pages/webview/webview?goto=tingche' },
      { id: 'xiaofang', icon: '🔥', name: '智慧消防', desc: '火灾报警联动、智慧消防云平台、电气火灾监控', tags: ['报警联动', '云平台', '三级告警'], url: '/pages/webview/webview?goto=xiaofang' },
      { id: 'menjin', icon: '🔒', name: '门禁·对讲·广播', desc: '人脸识别门禁、IP对讲、公共广播系统', tags: ['人脸识别', 'IP对讲', '广播系统'], url: '/pages/webview/webview?goto=menjin' },
      { id: 'jicheng', icon: '💡', name: '智能化集成', desc: '智能客控、智能家居、工地智能化管理', tags: ['客控系统', '智能家居', '集成管理'], url: '/pages/webview/webview?goto=jicheng' },
      { id: 'buxian', icon: '🔧', name: '综合布线', desc: '桥架线槽、光纤敷设、机柜安装、链路测试', tags: ['六类布线', '光纤施工', '机柜上架'], url: '/pages/webview/webview?goto=buxian' },
    ],
    brands: [
      { id: 1, name: '海康威视', desc: '监控·门禁·消防', color: '#0055aa' },
      { id: 2, name: '大华', desc: '监控·停车·报警', color: '#e74c3c' },
      { id: 3, name: '锐捷', desc: '网络·AP·交换机', color: '#e67e22' },
      { id: 4, name: '华为', desc: '路由·FTTR·智能家居', color: '#cf0a2c' },
    ]
  },

  goDetail(e) {
    wx.navigateTo({ url: e.currentTarget.dataset.url })
  },

  goProducts() {
    wx.navigateTo({ url: '/pages/webview/webview?goto=products' })
  }
})
