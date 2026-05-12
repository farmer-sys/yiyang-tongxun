// app.js
App({
  onLaunch() {
    // 检查是否有新版本
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: '更新提示',
              content: '新版本已准备好，是否重启应用？',
              success(res) {
                if (res.confirm) {
                  updateManager.applyUpdate()
                }
              }
            })
          })
        }
      })
    }
  },
  globalData: {
    appName: '怡阳通讯',
    phone: '18107070735',
    website: 'https://farmer-sys.github.io/yiyang-tongxun/'
  }
})
