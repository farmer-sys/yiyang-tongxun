// pages/webview/webview.js
const app = getApp()

Page({
  data: {
    url: app.globalData.website
  },

  onLoad(options) {
    let baseUrl = app.globalData.website
    let fullUrl = baseUrl

    if (options.goto) {
      switch(options.goto) {
        case 'anjian':
          fullUrl = baseUrl + 'service.html?goto=anjian'
          wx.setNavigationBarTitle({ title: '安防监控' })
          break
        case 'wangluo':
          fullUrl = baseUrl + 'service.html?goto=wangluo'
          wx.setNavigationBarTitle({ title: '网络·全光' })
          break
        case 'shengguang':
          fullUrl = baseUrl + 'service.html?goto=shengguang'
          wx.setNavigationBarTitle({ title: '声光系统' })
          break
        case 'tingche':
          fullUrl = baseUrl + 'service.html?goto=tingche'
          wx.setNavigationBarTitle({ title: '停车场' })
          break
        case 'xiaofang':
          fullUrl = baseUrl + 'service.html?goto=xiaofang'
          wx.setNavigationBarTitle({ title: '智慧消防' })
          break
        case 'menjin':
          fullUrl = baseUrl + 'service.html?goto=menjin'
          wx.setNavigationBarTitle({ title: '门禁·对讲·广播' })
          break
        case 'jicheng':
          fullUrl = baseUrl + 'service.html?goto=jicheng'
          wx.setNavigationBarTitle({ title: '智能化集成' })
          break
        case 'buxian':
          fullUrl = baseUrl + 'service.html?goto=buxian'
          wx.setNavigationBarTitle({ title: '综合布线' })
          break
        case 'products':
          fullUrl = baseUrl + 'products.html'
          wx.setNavigationBarTitle({ title: '产品展示' })
          break
        case 'booking':
          fullUrl = baseUrl + '#booking'
          wx.setNavigationBarTitle({ title: '在线预约' })
          break
        default:
          fullUrl = baseUrl
          wx.setNavigationBarTitle({ title: '怡阳通讯' })
      }
    }

    this.setData({ url: fullUrl })
  },

  onMessage(e) {
    console.log('WebView message:', e.detail)
  }
})
