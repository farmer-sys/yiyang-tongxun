// pages/cases/cases.js
Page({
  data: {
    cases: [
      {
        id: 1, title: '瑞金天沐温泉酒店', tag: '弱电总包', tagClass: 'tag-orange',
        stats: ['300路海康监控', '100+锐捷AP', '270间智能客控', '1000㎡ITC声光'],
        detail: '五星级温泉度假酒店全系统弱电智能化建设。客房客控与PMS对接，入住自动欢迎、退房自动关闭；监控与公安联网，满足星级酒店安防要求；宴会厅专业演出级声光配置。',
        url: '/pages/webview/webview?goto=ruijin'
      },
      {
        id: 2, title: '赣南医科大学', tag: '智慧消防', tagClass: 'tag-blue',
        stats: ['多栋楼宇覆盖', '云平台实时监控', '手机端三级告警'],
        detail: '高校多栋教学楼及宿舍楼智慧消防系统新建/改造。云平台实时监控所有楼栋消防状态，报警信号自动推送至校保卫处+消控室+物业负责人三级联动。',
        url: '/pages/webview/webview?goto=gnykdx'
      },
      {
        id: 3, title: '多家快递公司站点监控', tag: '快递物流', tagClass: 'tag-blue',
        stats: ['400万高清监控', '45天+存储', '远程APP管理'],
        detail: '覆盖赣州多个区县快递分拣中心及营业网点。分拣区无死角覆盖，全程记录快件流转；总部远程可随时抽查各站点运营情况；按快递行业标准定制存储时长。',
        url: '/pages/webview/webview?goto=kuaidi'
      },
      {
        id: 4, title: '多家企业内网搭建及监控', tag: '企业网络', tagClass: 'tag-orange',
        stats: ['VLAN网络隔离', 'AC+AP全覆盖', '30分钟售后响应'],
        detail: '经开区及周边制造业、商贸类企业内网规划与安防建设。办公网监控网物理隔离，无线漫游不掉线，访客WiFi与内网隔离保障数据安全，提供长期运维服务。',
        url: '/pages/webview/webview?goto=qiye'
      },
      {
        id: 5, title: '经开区办公楼弱电系统', tag: '综合布线', tagClass: 'tag-orange',
        stats: ['80个信息点位', '12芯光纤主干', '万兆预留升级'],
        detail: '6层办公楼综合弱电系统新建。六类线千兆到桌面满足未来5年办公需求，光纤主干预留万兆升级空间，所有点位按国标链路测试验收并出具竣工图纸。',
        url: '/pages/webview/webview?goto=ruijin'
      },
      {
        id: 6, title: '精品酒店/民宿智能客控', tag: '智能客控', tagClass: 'tag-orange',
        stats: ['省电30%+', '小程序控制', '无人化管理'],
        detail: '精品酒店及民宿客房智能化升级。插卡取电自动开启迎宾模式，退房拔卡自动关闭全部设备，手机小程序即可控制客房所有设备，支持存量客房改造无需重新布线。',
        url: '/pages/webview/webview?goto=ruijin'
      }
    ]
  },

  goDetail(e) {
    wx.navigateTo({ url: e.currentTarget.dataset.url })
  }
})
