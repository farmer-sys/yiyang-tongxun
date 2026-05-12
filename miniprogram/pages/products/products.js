// pages/products/products.js
Page({
  data: {
    brands: [
      {id:1,name:"海康威视",desc:"安防监控·门禁·消防",color:"#0055aa"},
      {id:2,name:"大华",desc:"安防监控·停车·报警",color:"#e74c3c"},
      {id:3,name:"宇视",desc:"安防监控",color:"#2c3e50"},
      {id:4,name:"天地伟业",desc:"安防监控",color:"#16a085"},
      {id:5,name:"锐捷",desc:"网络设备·AP·交换机",color:"#e67e22"},
      {id:6,name:"华为",desc:"路由·FTTR·交换机",color:"#cf0a2c"},
      {id:7,name:"H3C",desc:"网络设备·交换机·路由",color:"#00a854"},
      {id:8,name:"TP-LINK",desc:"网络设备",color:"#1d953f"}
    ],
    categories: [
      {
        id:"camera",name:"监控摄像机",icon:"📹",
        brands:["海康威视","大华","宇视","天地伟业"],
        items:[
          {type:"枪机",specs:["200万像素", "400万像素", "800万像素"],power:["POE供电","DC供电"],feature:"红外夜视、IP67防水、Smart编码"},
          {type:"半球",specs:["200万像素", "400万像素", "800万像素"],power:["POE供电","DC供电"],feature:"红外夜视、防暴设计、室内天花板安装"},
          {type:"球机",specs:["200万像素", "400万像素"],power:["POE供电","DC供电","AC24V"],feature:"20倍/25倍/32倍变焦、智能跟踪、云台控制"},
          {type:"室内云台",specs:["200万像素", "400万像素"],power:["DC供电"],feature:"水平旋转、垂直翻转、双向语音、人形检测"}
        ]
      },
      {
        id:"nvr",name:"NVR硬盘录像机",icon:"💾",
        brands:["海康威视","大华","宇视","天地伟业"],
        items:[
          {type:"NVR",specs:["4路", "8路", "16路", "32路", "64路"],feature:"H.265编码、智能分析、远程访问、HDMI输出"},
          {type:"XVR混合型",specs:["8路", "16路"],feature:"支持模拟+网络混合接入、H.265编码"}
        ]
      },
      {
        id:"router",name:"路由器",icon:"📶",
        brands:["华为","锐捷","H3C","TP-LINK"],
        items:[
          {type:"企业路由器",specs:["千兆", "多WAN口"],feature:"VPN、AC管理、流量控制、行为管理"},
          {type:"工控软路由",specs:["千兆", "万兆"],feature:"高吞吐、多网口、可定制系统"},
          {type:"家用路由器",specs:["千兆", "WiFi6", "WiFi7"],feature:"Mesh组网、APP管理、儿童上网管控"}
        ]
      },
      {
        id:"switch",name:"交换机",icon:"🔌",
        brands:["华为","锐捷","H3C","TP-LINK"],
        items:[
          {type:"百兆交换机",specs:["5口", "8口"],feature:"即插即用、桌面式"},
          {type:"千兆交换机",specs:["5口", "8口", "16口", "24口", "48口"],feature:"POE/非POE可选、网管/非网管可选"},
          {type:"万兆上行",specs:["24口", "48口"],feature:"4个万兆SFP+上行、网管型、VLAN/ACL/QoS"},
          {type:"POE交换机",specs:["8口", "16口", "24口"],feature:"POE+/POE++供电、AF/AT标准、总功率120W-400W"}
        ]
      },
      {
        id:"ap",name:"无线AP",icon:"📶",
        brands:["锐捷","华为","H3C","TP-LINK"],
        items:[
          {type:"吸顶AP",specs:["WiFi5", "WiFi6"] ,feature:"千兆接入、无缝漫游、AC管理、支持POE供电"},
          {type:"面板AP",specs:["WiFi5", "WiFi6"],feature:"86盒安装、千兆网口、支持POE供电"}
        ]
      },
      {
        id:"ac",name:"AC控制器",icon:"⚙️",
        brands:["锐捷","华为","H3C"],
        items:[
          {type:"AC控制器",specs:["6口", "10口"],feature:"统一管理AP、VLAN划分、Portal认证"}
        ]
      }
    ]
  }
})
