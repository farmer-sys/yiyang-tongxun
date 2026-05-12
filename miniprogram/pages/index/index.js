// pages/index/index.js
const app = getApp()

Page({
  data: {
    phone: app.globalData.phone,
    showServiceDetail: false,
    currentService: {},
    services: [
      {id:"anjian",icon:"📹",name:"安防监控",desc:"海康大华·POE",detail:"海康威视/大华品牌监控设备安装调试\n• 红外网络摄像机\n• NVR硬盘录像机\n• POE供电系统\n• 远程APP实时查看\n• 覆盖范围：停车场、大堂、走廊、仓库等"},
      {id:"wangluo",icon:"📶",name:"网络·全光",desc:"华为FTTR·锐捷AP",detail:"企业级网络方案设计与施工\n• 华为FTTR全光方案\n• 锐捷AP无线覆盖\n• AC+AP无缝漫游\n• VLAN网络隔离\n• 企业级防火墙"},
      {id:"shengguang",icon:"🎵",name:"声光系统",desc:"音响灯光·LED大屏",detail:"专业声光系统设计安装\n• ITC专业音响系统\n• LED全彩大屏（P2.5系列）\n• 舞台灯光系统\n• 会议扩声系统\n• KTV音响系统"},
      {id:"tingche",icon:"🚗",name:"停车场",desc:"车牌识别·道闸",detail:"智能停车场管理系统\n• 大华车牌识别一体机\n• 智能道闸\n• 车位引导系统\n• 无人值守收费\n• 云端管理平台"},
      {id:"xiaofang",icon:"🔥",name:"智慧消防",desc:"联动·智慧平台",detail:"智慧消防系统\n• 火灾自动报警联动\n• 智慧消防云平台\n• 电气火灾监控\n• 消防设备电源监控\n• 应急疏散指示系统"},
      {id:"menjin",icon:"🔒",name:"门禁·对讲·广播",desc:"人脸·IP电话",detail:"门禁对讲广播系统\n• 海康人脸门禁一体机\n• 可视对讲室内机\n• IP电话系统\n• 公共广播系统\n• 访客管理系统"},
      {id:"jicheng",icon:"💡",name:"智能化集成",desc:"客控·家居·工地",detail:"智能化系统集成\n• RCU客房控制系统\n• 智能家居面板（华为智选）\n• 智能灯光/窗帘/空调联动\n• 语音控制（小度/天猫精灵）\n• 工地智能化管理"},
      {id:"buxian",icon:"🔧",name:"综合布线",desc:"桥架·光纤·机柜",detail:"综合布线系统\n• 六类/超五类网线布线\n• 12芯单模光纤敷设\n• 标准机柜上架\n• 桥架线槽安装\n• 链路测试验收"}
    ],
    cases: [
      {id:1,title:"瑞金天沐温泉酒店",tag:"弱电总包",tagClass:"tag-orange",desc:"五星级温泉度假酒店全智能化弱电建设",stats:["300路监控","100+ AP","270间客房","1000㎡声光"]},
      {id:2,title:"赣南医科大学",tag:"智慧消防",tagClass:"tag-blue",desc:"高校多栋楼宇智慧消防系统建设",stats:["多栋楼宇覆盖","云平台实时监控","三级告警联动"]},
      {id:3,title:"多家快递公司站点监控",tag:"快递物流",tagClass:"tag-blue",desc:"赣州多个区县快递分拣中心及营业网点监控覆盖",stats:["多站点覆盖","45天+存储","远程APP巡查"]},
      {id:4,title:"多家企业内网搭建及监控",tag:"企业网络",tagClass:"tag-orange",desc:"经开区及周边企业内网规划与安防建设",stats:["VLAN网段隔离","AC+AP全覆盖","30分钟响应"]}
    ]
  },

  onLoad() {
    wx.setNavigationBarTitle({title:"怡阳通讯"})
  },

  callPhone() {
    wx.makePhoneCall({phoneNumber:this.data.phone})
  },

  goBooking() {
    wx.showModal({
      title:"预约勘测",
      content:"请拨打 18107070735 预约免费上门勘测",
      confirmText:"立即拨打",
      success:(res)=>{if(res.confirm){wx.makePhoneCall({phoneNumber:this.data.phone})}}
    })
  },

  showService(e){
    const id=e.currentTarget.dataset.id
    const service=this.data.services.find(s=>s.id===id)
    if(service){
      this.setData({showServiceDetail:true,currentService:service})
    }
  },

  hideServiceDetail(){
    this.setData({showServiceDetail:false})
  },

  showCase(e){
    const id=e.currentTarget.dataset.id
    const c=this.data.cases.find(x=>x.id===id)
    if(c){
      wx.showModal({title:c.title,content:c.desc+"\n"+c.stats.join(" · "),showCancel:false,confirmText:"知道了"})
    }
  }
})