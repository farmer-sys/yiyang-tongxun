// pages/index/index.js
const app = getApp()

Page({
  data: {
    phone: app.globalData.phone,
    showServiceDetail: false,
    currentService: {},
    services: [
      { 
        id: 'anjian', icon: '馃摴', name: '瀹夐槻鐩戞帶', desc: '娴峰悍澶у崕路POE',
        detail: '娴峰悍濞佽/澶у崕鍝佺墝鐩戞帶璁惧瀹夎璋冭瘯\n鈥?绾㈠缃戠粶鎽勫儚鏈篭n鈥?NVR纭洏褰曞儚鏈篭n鈥?POE渚涚數绯荤粺\n鈥?杩滅▼APP瀹炴椂鏌ョ湅\n鈥?瑕嗙洊鑼冨洿锛氬仠杞﹀満銆佸ぇ鍫傘€佽蛋寤娿€佷粨搴撶瓑'
      },
      { 
        id: 'wangluo', icon: '馃摱', name: '缃戠粶路鍏ㄥ厜', desc: '鍗庝负FTTR路閿愭嵎AP',
        detail: '浼佷笟绾х綉缁滄柟妗堣璁′笌鏂藉伐\n鈥?鍗庝负FTTR鍏ㄥ厜鏂规\n鈥?閿愭嵎AP鏃犵嚎瑕嗙洊\n鈥?AC+AP鏃犵紳婕父\n鈥?VLAN缃戠粶闅旂\n鈥?浼佷笟绾ч槻鐏'
      },
      { 
        id: 'shengguang', icon: '馃幍', name: '澹板厜绯荤粺', desc: '闊冲搷鐏厜路LED澶у睆',
        detail: '涓撲笟澹板厜绯荤粺璁捐瀹夎\n鈥?ITC涓撲笟闊冲搷绯荤粺\n鈥?LED鍏ㄥ僵澶у睆锛圥2.5绯诲垪锛塡n鈥?鑸炲彴鐏厜绯荤粺\n鈥?浼氳鎵╁０绯荤粺\n鈥?KTV闊冲搷绯荤粺'
      },
      { 
        id: 'tingche', icon: '馃殫', name: '鍋滆溅鍦?, desc: '杞︾墝璇嗗埆路閬撻椄',
        detail: '鏅鸿兘鍋滆溅鍦虹鐞嗙郴缁焅n鈥?澶у崕杞︾墝璇嗗埆涓€浣撴満\n鈥?鏅鸿兘閬撻椄\n鈥?杞︿綅寮曞绯荤粺\n鈥?鏃犱汉鍊煎畧鏀惰垂\n鈥?浜戠绠＄悊骞冲彴'
      },
      { 
        id: 'xiaofang', icon: '馃敟', name: '鏅烘収娑堥槻', desc: '鑱斿姩路鏅烘収骞冲彴',
        detail: '鏅烘収娑堥槻绯荤粺\n鈥?鐏伨鑷姩鎶ヨ鑱斿姩\n鈥?鏅烘収娑堥槻浜戝钩鍙癨n鈥?鐢垫皵鐏伨鐩戞帶\n鈥?娑堥槻璁惧鐢垫簮鐩戞帶\n鈥?搴旀€ョ枏鏁ｆ寚绀虹郴缁?
      },
      { 
        id: 'menjin', icon: '馃敀', name: '闂ㄧ路瀵硅路骞挎挱', desc: '浜鸿劯路IP鐢佃瘽',
        detail: '闂ㄧ瀵硅骞挎挱绯荤粺\n鈥?娴峰悍浜鸿劯闂ㄧ涓€浣撴満\n鈥?鍙瀵硅瀹ゅ唴鏈篭n鈥?IP鐢佃瘽绯荤粺\n鈥?鍏叡骞挎挱绯荤粺\n鈥?璁垮绠＄悊绯荤粺'
      },
      { 
        id: 'jicheng', icon: '馃挕', name: '鏅鸿兘鍖栭泦鎴?, desc: '瀹㈡帶路瀹跺眳路宸ュ湴',
        detail: '鏅鸿兘鍖栫郴缁熼泦鎴怽n鈥?RCU瀹㈡埧鎺у埗绯荤粺\n鈥?鏅鸿兘瀹跺眳闈㈡澘锛堝崕涓烘櫤閫夛級\n鈥?鏅鸿兘鐏厜/绐楀笜/绌鸿皟鑱斿姩\n鈥?璇煶鎺у埗锛堝皬搴?澶╃尗绮剧伒锛塡n鈥?宸ュ湴鏅鸿兘鍖栫鐞?
      },
      { 
        id: 'buxian', icon: '馃敡', name: '缁煎悎甯冪嚎', desc: '妗ユ灦路鍏夌氦路鏈烘煖',
        detail: '缁煎悎甯冪嚎绯荤粺\n鈥?鍏被/瓒呬簲绫荤綉绾垮竷绾縗n鈥?12鑺崟妯″厜绾ゆ暦璁綷n鈥?鏍囧噯鏈烘煖涓婃灦\n鈥?妗ユ灦绾挎Ы瀹夎\n鈥?閾捐矾娴嬭瘯楠屾敹'
      },
    ],
    cases: [
      {
        id: 1, title: '鐟為噾澶╂矏娓╂硥閰掑簵', tag: '寮辩數鎬诲寘', tagClass: 'tag-orange',
        desc: '浜旀槦绾ф俯娉夊害鍋囬厭搴楀叏鏅鸿兘鍖栧急鐢靛缓璁?,
        stats: ['300璺洃鎺?, '100+ AP', '270闂村鎴?, '1000銕″０鍏?],
      },
      {
        id: 2, title: '璧ｅ崡鍖荤澶у', tag: '鏅烘収娑堥槻', tagClass: 'tag-blue',
        desc: '楂樻牎澶氭爧妤煎畤鏅烘収娑堥槻绯荤粺寤鸿',
        stats: ['澶氭爧妤煎畤瑕嗙洊', '浜戝钩鍙板疄鏃剁洃鎺?, '涓夌骇鍛婅鑱斿姩'],
      },
      {
        id: 3, title: '澶氬蹇€掑叕鍙哥珯鐐圭洃鎺?, tag: '蹇€掔墿娴?, tagClass: 'tag-blue',
        desc: '璧ｅ窞澶氫釜鍖哄幙蹇€掑垎鎷ｄ腑蹇冨強钀ヤ笟缃戠偣鐩戞帶瑕嗙洊',
        stats: ['澶氱珯鐐硅鐩?, '45澶?瀛樺偍', '杩滅▼APP宸℃煡'],
      },
      {
        id: 4, title: '澶氬浼佷笟鍐呯綉鎼缓鍙婄洃鎺?, tag: '浼佷笟缃戠粶', tagClass: 'tag-orange',
        desc: '缁忓紑鍖哄強鍛ㄨ竟浼佷笟鍐呯綉瑙勫垝涓庡畨闃插缓璁?,
        stats: ['VLAN缃戞闅旂', 'AC+AP鍏ㄨ鐩?, '30鍒嗛挓鍝嶅簲'],
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
    wx.showModal({
      title: '棰勭害鍕樻祴',
      content: '璇锋嫧鎵?18107070735 棰勭害鍏嶈垂涓婇棬鍕樻祴',
      confirmText: '绔嬪嵆鎷ㄦ墦',
      success: (res) => {
        if (res.confirm) {
          wx.makePhoneCall({ phoneNumber: this.data.phone })
        }
      }
    })
  },

  // 鐐瑰嚮鏈嶅姟椤圭洰 - 寮圭獥鏄剧ず璇︽儏
  showService(e) {
    const id = e.currentTarget.dataset.id
    const service = this.data.services.find(s => s.id === id)
    if (service) {
      this.setData({
        showServiceDetail: true,
        currentService: service
      })
    }
  },

  hideServiceDetail() {
    this.setData({
      showServiceDetail: false
    })
  },

  // 鐐瑰嚮妗堜緥 - 寮圭獥鏄剧ず璇︽儏
  showCase(e) {
    const id = e.currentTarget.dataset.id
    const caseItem = this.data.cases.find(c => c.id === id)
    if (caseItem) {
      wx.showModal({
        title: caseItem.title,
        content: caseItem.desc + '\n\n' + caseItem.stats.join(' 路 '),
        showCancel: false,
        confirmText: '鐭ラ亾浜?
      })
    }
  }
})
