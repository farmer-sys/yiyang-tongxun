const app = getApp()
Page({
  data: {
    phone: app.globalData.phone,
    service: {}
  },
  onLoad(options) {
    const services = {
      anjian:{icon:"📹",name:"安防监控",detail:"海康威视/大华品牌监控设备安装调试\n• 红外网络摄像机\n• NVR硬盘录像机\n• POE供电系统\n• 远程APP实时查看\n• 覆盖范围：停车场、大堂、走廊、仓库等"},
      wangluo:{icon:"📶",name:"网络·全光",detail:"企业级网络方案设计与施工\n• 华为FTTR全光方案\n• 锐捷AP无线覆盖\n• AC+AP无缝漫游\n• VLAN网络隔离\n• 企业级防火墙"},
      shengguang:{icon:"🎵",name:"声光系统",detail:"专业声光系统设计安装\n• ITC专业音响系统\n• LED全彩大屏（P2.5系列）\n• 舞台灯光系统\n• 会议扩声系统\n• KTV音响系统"},
      tingche:{icon:"🚗",name:"停车场",detail:"智能停车场管理系统\n• 大华车牌识别一体机\n• 智能道闸\n• 车位引导系统\n• 无人值守收费\n• 云端管理平台"},
      xiaofang:{icon:"🔥",name:"智慧消防",detail:"智慧消防系统\n• 火灾自动报警联动\n• 智慧消防云平台\n• 电气火灾监控\n• 消防设备电源监控\n• 应急疏散指示系统"},
      menjin:{icon:"🔒",name:"门禁·对讲·广播",detail:"门禁对讲广播系统\n• 海康人脸门禁一体机\n• 可视对讲室内机\n• IP电话系统\n• 公共广播系统\n• 访客管理系统"},
      jicheng:{icon:"💡",name:"智能化集成",detail:"智能化系统集成\n• RCU客房控制系统\n• 智能家居面板（华为智选）\n• 智能灯光/窗帘/空调联动\n• 语音控制（小度/天猫精灵）\n• 工地智能化管理"},
      buxian:{icon:"🔧",name:"综合布线",detail:"综合布线系统\n• 六类/超五类网线布线\n• 12芯单模光纤敷设\n• 标准机柜上架\n• 桥架线槽安装\n• 链路测试验收"}
    }
    const id = options.id || "anjian"
    const svc = services[id]
    if(svc){
      wx.setNavigationBarTitle({title: svc.name})
      this.setData({service: svc})
    }
  },
  callPhone(){
    wx.makePhoneCall({phoneNumber:this.data.phone})
  }
})