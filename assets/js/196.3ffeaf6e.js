(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{614:function(t,a,p){"use strict";p.r(a);var s=p(14),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,p=t._self._c||a;return p("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[p("p",[t._v("先看效果图：")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190822_1566448799962_bcpnwfs3dsj.webp/0",alt:""}})]),t._v(" "),p("p",[t._v("通过上面的日志，可以看出我们是158开头的邮箱给250开头的邮箱发送邮件，下面是成功接收到的邮件。")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190822_1566448859576_bwmp5mdwnu.webp/0",alt:""}})]),t._v(" "),p("h1",{attrs:{id:"准备工作"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),p("ul",[p("li",[t._v("1、qq邮箱一个")]),t._v(" "),p("li",[t._v("2、开通你的qq邮箱的授权码（会具体讲解）")]),t._v(" "),p("li",[t._v("3、注册自己的小程序（因为只有注册的小程序才能使用云开发）")]),t._v(" "),p("li",[t._v("4、电脑要安装node(会用到npm命令行)")]),t._v(" "),p("li",[t._v("5、编写小程序代码")])]),t._v(" "),p("h1",{attrs:{id:"一、准备一个qq邮箱-并启动smtp服务"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#一、准备一个qq邮箱-并启动smtp服务"}},[t._v("#")]),t._v(" 一、准备一个QQ邮箱，并启动SMTP服务")]),t._v(" "),p("p",[t._v("进入qq邮箱以后：")]),t._v(" "),p("h3",{attrs:{id:"_1、点击设置-然后点击账户"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#_1、点击设置-然后点击账户"}},[t._v("#")]),t._v(" 1、点击设置，然后点击账户")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190822_1566448906971_nswkqc5ucgk.webp/0",alt:""}})]),t._v(" "),p("h3",{attrs:{id:"_2、开启pop3-smtp服务-获取授权码"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#_2、开启pop3-smtp服务-获取授权码"}},[t._v("#")]),t._v(" 2、开启POP3/SMTP服务，获取授权码")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190822_1566448929774_dh8s7boe60r.webp/0",alt:""}})]),t._v(" "),p("p",[t._v("具体操作可以看官方文档，官方文档有具体的讲解，这里我就不多说了。\n官方文档："),p("a",{attrs:{href:"https://dwz.cn/SJCibDEi",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dwz.cn/SJCibDEi"),p("OutboundLink")],1),t._v("\n我们获取的授权码如下图。请保存好这个授权码，我们后面发送邮件时会用到。")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190822_1566448992671_65mwikug31j.webp/0",alt:""}})]),t._v(" "),p("h1",{attrs:{id:"二、注册小程序获取appid-创建一个小程序"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#二、注册小程序获取appid-创建一个小程序"}},[t._v("#")]),t._v(" 二、注册小程序获取appid，创建一个小程序")]),t._v(" "),p("p",[t._v("关于小程序的注册和创建就不在此赘述，有需要的同学可以参照官方文档：")]),t._v(" "),p("p",[p("a",{attrs:{href:"https://dwz.cn/HpcWynVz",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dwz.cn/HpcWynVz"),p("OutboundLink")],1)]),t._v(" "),p("p",[t._v("下图是我们创建好的小程序。")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190822_1566449027104_87zyf0pv0mb.webp/0",alt:""}})]),t._v(" "),p("p",[t._v("代码很简单，就只有一个页面，页面上就一个按钮，我们点击这个按钮的时候实现邮件的发送。")]),t._v(" "),p("h1",{attrs:{id:"三、初始化云开发-创建发送邮件的云函数"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#三、初始化云开发-创建发送邮件的云函数"}},[t._v("#")]),t._v(" 三、初始化云开发，创建发送邮件的云函数")]),t._v(" "),p("p",[t._v("关于云开发初始化我这里也不在做具体讲解了，感兴趣或者不会的同学，可以去翻看腾讯云云开发公众号内菜单【技术交流-视频教程】中的教学视频。")]),t._v(" "),p("h4",{attrs:{id:"初始化云开发环境时-需要注意以下几点"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#初始化云开发环境时-需要注意以下几点"}},[t._v("#")]),t._v(" 初始化云开发环境时，需要注意以下几点：")]),t._v(" "),p("p",[t._v("1、一定要是注册的小程序有appid才可以使用云开发\n2、一定要在app.js里初始化云开发环境id")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190822_1566449052108_6j1hx9uxrwt.webp/0",alt:""}})]),t._v(" "),p("p",[t._v("3、在project.config.json里配置云函数目录，如下图箭头所示")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190822_1566449116682_k3te3i6vmye.webp/0",alt:""}})]),t._v(" "),p("h1",{attrs:{id:"四、创建云函数-sendemail"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#四、创建云函数-sendemail"}},[t._v("#")]),t._v(" 四、创建云函数 sendEmail")]),t._v(" "),p("p",[t._v("1、右键cloud文件，新建云函数：")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190822_1566449140632_3jixaa13qym.webp/0",alt:""}})]),t._v(" "),p("p",[t._v("这个函数名你可以随便起，只要是英文，并且调用的时候记得不要写错就行。我这里就用sendEmail。")]),t._v(" "),p("p",[t._v("2、创建完以后，右键sendEmail选择在终端里打开：")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190822_1566449193620_ze804nk2psj.webp/0",alt:""}})]),t._v(" "),p("p",[t._v("这里我们需要用npm安装一个依赖包 nodemailer 使用npm安装依赖包需要用到node，至于node的安装大家自行百度，一大堆的讲解文章。")]),t._v(" "),p("p",[t._v("3、在打开的命令行窗口里输入 npm install nodemailer：")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190822_1566449220398_osyojhxmwq.webp/0",alt:""}})]),t._v(" "),p("p",[t._v("4、等待 nodemailer类库的安装")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190822_1566449245387_ghcr07wyold.webp/0",alt:""}})]),t._v(" "),p("p",[t._v("5、安装成功时，您能看到nodemailer的版本号\n"),p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190822_1566449297424_0l21ud2ndktl.webp/0",alt:""}})]),t._v(" "),p("h1",{attrs:{id:"五、编写发送邮件的核心代码"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#五、编写发送邮件的核心代码"}},[t._v("#")]),t._v(" 五、编写发送邮件的核心代码")]),t._v(" "),p("p",[t._v("这里一定要注意填写你自己的qq邮箱的授权码：")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190822_1566449316993_bjsx2kpch4k.webp/0",alt:""}})]),t._v(" "),p("p",[t._v("代码里都有注释，直接把代码给大家贴出来。")]),t._v(" "),p("div",{staticClass:"language- extra-class"},[p("pre",{pre:!0,attrs:{class:"language-text"}},[p("code",[t._v("const cloud = require('wx-server-sdk')\ncloud.init()\n//引入发送邮件的类库\nvar nodemailer = require('nodemailer')\n// 创建一个SMTP客户端配置\nvar config = {\n  host: 'smtp.qq.com', //网易163邮箱 smtp.163.com\n  port: 465, //网易邮箱端口 25\n  auth: {\n    user: '1587072557@qq.com', //邮箱账号\n    pass: '这里要填你自己的授权码' //邮箱的授权码\n  }\n};\n// 创建一个SMTP客户端对象\nvar transporter = nodemailer.createTransport(config);\n// 云函数入口函数\nexports.main = async(event, context) => {\n  // 创建一个邮件对象\n  var mail = {\n    // 发件人\n    from: '来自小石头 <1587072557@qq.com>',\n    // 主题\n    subject: '来自小石头的问候',\n    // 收件人\n    to: '2501902696@qq.com',\n    // 邮件内容，text或者html格式\n    text: '你好啊，编程小石头' //可以是链接，也可以是验证码\n  };\n\n  let res = await transporter.sendMail(mail);\n  return res;\n}\n")])])]),p("h1",{attrs:{id:"六、上传云函数"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#六、上传云函数"}},[t._v("#")]),t._v(" 六、上传云函数")]),t._v(" "),p("p",[t._v("编写完代码后，一定要记得上传云函数。")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190822_1566449346168_jhgr45nfos.webp/0",alt:""}})]),t._v(" "),p("h1",{attrs:{id:"七、调用云函数发送邮件"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#七、调用云函数发送邮件"}},[t._v("#")]),t._v(" 七、调用云函数发送邮件")]),t._v(" "),p("p",[t._v("我们在index.wxml文件里写一个按钮，当点击这个按钮时就发送邮件。")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190822_1566449370265_t8fexqil4g.webp/0",alt:""}})]),t._v(" "),p("p",[t._v("然后在index.js里调用我们的sendEmail云函数。")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190822_1566449397296_9rv9mhim47t.webp/0",alt:""}})]),t._v(" "),p("h1",{attrs:{id:"八、点击发送邮件-查看效果"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#八、点击发送邮件-查看效果"}},[t._v("#")]),t._v(" 八、点击发送邮件，查看效果")]),t._v(" "),p("p",[t._v("可以看到我们的控制台，打印里发送成功的日志信息：")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190822_1566449421952_ijo7nrgle1.webp/0",alt:""}})]),t._v(" "),p("p",[t._v("然后到我们的邮箱里，可以看到新收到的邮件。")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190822_1566449445847_xrwujrniv9n.webp/0",alt:""}})]),t._v(" "),p("p",[t._v("到这里我们就完整的实现了微信小程序云开发使用云函数发送邮件的功能了。是不是很简单呢？")]),t._v(" "),p("h1",{attrs:{id:"源码地址"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#源码地址"}},[t._v("#")]),t._v(" 源码地址：")]),t._v(" "),p("p",[p("a",{attrs:{href:"https://github.com/qiushi123/cloud-email",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/qiushi123/cloud-email"),p("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);