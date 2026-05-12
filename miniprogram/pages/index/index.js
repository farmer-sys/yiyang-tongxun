// pages/index/index.js
const app = getApp()

Page({
  data: {
    phone: app.globalData.phone,
    services: [
      { id: 'anjian', icon: '馃摴', name: '瀹夐槻鐩戞帶', desc: '娴峰悍澶у崕路POE', url: '/pages/webview/webview?goto=anjian' },
      { id: 'wangluo', icon: '馃摱', name: '缃戠粶路鍏ㄥ厜', desc: '鍗庝负FTTR路閿愭嵎AP', url: '/pages/webview/webview?goto=wangluo' },
      { id: 'shengguang', icon: '馃幍', name: '澹板厜绯荤粺', desc: '闊冲搷鐏厜路LED澶у睆', url: '/pages/webview/webview?goto=shengguang' },
      { id: 'tingche', icon: '馃殫', name: '鍋滆溅鍦?, desc: '杞︾墝璇嗗埆路閬撻椄', url: '/pages/webview/webview?goto=tingche' },
      { id: 'xiaofang', icon: '馃敟', name: '鏅烘収娑堥槻', desc: '鑱斿姩路鏅烘収骞冲彴', url: '/pages/webview/webview?goto=xiaofang' },
      { id: 'menjin', icon: '馃敀', name: '闂ㄧ路瀵硅路骞挎挱', desc: '浜鸿劯路IP鐢佃瘽', url: '/pages/webview/webview?goto=menjin' },
      { id: 'jicheng', icon: '馃挕', name: '鏅鸿兘鍖栭泦鎴?, desc: '瀹㈡帶路瀹跺眳路宸ュ湴', url: '/pages/webview/webview?goto=jicheng' },
      { id: 'buxian', icon: '馃敡', name: '缁煎悎甯冪嚎', desc: '妗ユ灦路鍏夌氦路鏈烘煖', url: '/pages/webview/webview?goto=buxian' },
    ],
    cases: [
      {
        id: 1, title: '鐟為噾澶╂矏娓╂硥閰掑簵', tag: '寮辩數鎬诲寘', tagClass: 'tag-orange',
        desc: '浜旀槦绾ф俯娉夊害鍋囬厭搴楀叏鏅鸿兘鍖栧急鐢靛缓璁?,
        stats: ['300璺洃鎺?, '100+ AP', '270闂村鎴?, '1000銕″０鍏?],
        url: '/pages/webview/webview?goto=ruijin'
      },
      {
        id: 2, title: '璧ｅ崡鍖荤澶у', tag: '鏅烘収娑堥槻', tagClass: 'tag-blue',
        desc: '楂樻牎澶氭爧妤煎畤鏅烘収娑堥槻绯荤粺寤鸿',
        stats: ['澶氭爧妤煎畤瑕嗙洊', '浜戝钩鍙板疄鏃剁洃鎺?, '涓夌骇鍛婅鑱斿姩'],
        url: '/pages/webview/webview?goto=gnykdx'
      },
      {
        id: 3, title: '澶氬蹇€掑叕鍙哥珯鐐圭洃鎺?, tag: '蹇€掔墿娴?, tagClass: 'tag-blue',
        desc: '璧ｅ窞澶氫釜鍖哄幙蹇€掑垎鎷ｄ腑蹇冨強钀ヤ笟缃戠偣鐩戞帶瑕嗙洊',
        stats: ['澶氱珯鐐硅鐩?, '45澶?瀛樺偍', '杩滅▼APP宸℃煡'],
        url: '/pages/webview/webview?goto=kuaidi'
      },
      {
        id: 4, title: '澶氬浼佷笟鍐呯綉鎼缓鍙婄洃鎺?, tag: '浼佷笟缃戠粶', tagClass: 'tag-orange',
        desc: '缁忓紑鍖哄強鍛ㄨ竟浼佷笟鍐呯綉瑙勫垝涓庡畨闃插缓璁?,
        stats: ['VLAN缃戞闅旂', 'AC+AP鍏ㄨ鐩?, '30鍒嗛挓鍝嶅簲'],
        url: '/pages/webview/webview?goto=qiye'
      }
    ]
  },

  onLoad() {
    wx.setNavigationBarTitle({
      title: '鎬￠槼閫氳'
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
