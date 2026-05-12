// pages/about/about.js
const app = getApp()

Page({
  data: {
    phone: app.globalData.phone
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
  }
})
