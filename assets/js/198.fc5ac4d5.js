(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{238:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("创意来源于生活，之所以开发这个校园约拍小程序，是因为在摄影选修课上常听老师抱怨外出写生老找不到模特，许多大学生都想拥有一套专属自己记忆的摄影作品，记录下不会磨灭的美好回忆，可如何找到让自己满意的摄影师是他们的难题。悦拍屋是一个校园摄影o2o的约拍平台，提供全方位的约拍服务，同时提供一个自我展示，学习交流，互动娱乐的平台。接下来我将结合项目的讲解给大家分享一些实用技术和对于云开发的一些经验，希望对正在学习小程序的你有帮助。")]),t._v(" "),s("h1",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("在开发一个项目之前首先要进行技术选型从而降低产品开发的技术风险和提高开发效率，技术选型必须得紧紧围绕着业务场景来选择。")]),t._v(" "),s("ul",[s("li",[t._v("产品原型设计：墨刀")]),t._v(" "),s("li",[t._v("UI组件库"),s("br"),t._v("\n1.微信原生样式库"),s("code",[t._v("WeUI")]),t._v(",让用户使用感知更加统一"),s("br"),t._v("\n2.注重视觉交互体验的"),s("code",[t._v("ColorUI")]),t._v("组件库，在感知统一的基础上视觉元素多样化")]),t._v(" "),s("li",[t._v("前端"),s("br"),t._v("\n1.小程序原生语法以及"),s("code",[t._v("API")]),s("br"),t._v("\n2."),s("code",[t._v("Promise")]),t._v("实现异步调用"),s("br"),t._v("\n3."),s("code",[t._v("ES6")]),t._v("编写页面交互逻辑")]),t._v(" "),s("li",[t._v("后端"),s("br"),t._v("\n1.云函数：无需自建服务器，在云端运行的代码，微信私有协议天然鉴权，开发者只需编写自身业务逻辑代码"),s("br"),t._v("\n2.云数据库：无需自建数据库，一个既可在小程序前端操作，也能在云函数中读写的 "),s("code",[t._v("JSON")]),t._v(" 数据库"),s("br"),t._v("\n3.云存储：实现小程序前端直接上传/下载云端文件，在云开发控制台可视化管理"),s("br"),t._v("\n4.云调用：由原生微信服务集成，基于云函数免鉴权使用小程序开放接口的能力，包括服务端调用、获取开放数据等能力")]),t._v(" "),s("li",[t._v("其他"),s("br"),t._v("\n1.使用微信提供的云测试对未上线的小程序进行缺陷测试、性能数据分析、机型覆盖测试，确保小程序上线后正常运营"),s("br"),t._v("\n2.使用基于云开发的"),s("code",[t._v("AI视觉能力")]),t._v("-身份证识别实现实名认证，智能鉴黄结合人工完成发布信息的审核"),s("br"),t._v("\n3.开发工具:微信开发者工具、VScode"),s("br"),t._v("\n4.部分图标使用自阿里巴巴矢量图标库")])]),t._v(" "),s("h1",{attrs:{id:"总体设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总体设计","aria-hidden":"true"}},[t._v("#")]),t._v(" 总体设计")]),t._v(" "),s("h2",{attrs:{id:"功能结构图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能结构图","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能结构图")]),t._v(" "),s("p",[t._v("大家可以通过此图了解整个项目的主要功能点")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/28/16b9d47f9ce9f0a2?w=1312&h=936&f=png&s=94563",alt:"功能结构图"}})]),t._v(" "),s("h2",{attrs:{id:"产品原型图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#产品原型图","aria-hidden":"true"}},[t._v("#")]),t._v(" 产品原型图")]),t._v(" "),s("p",[t._v("此处给出一张主页原型图示例，墨刀还是挺好用的")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/28/16b9d4a362b38a95?w=332&h=591&f=png&s=44050",alt:"主页原型图"}})]),t._v(" "),s("h2",{attrs:{id:"色彩设计图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#色彩设计图","aria-hidden":"true"}},[t._v("#")]),t._v(" 色彩设计图")]),t._v(" "),s("p",[t._v("悦拍屋的整体色调为浅蓝色，各位小伙伴在开发自己项目的时候可以根据色彩标准搭配来设计项目所采用的色彩，合适的色彩搭配可以给用户良好的视觉体验")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/28/16b9d54317dd1896?w=1102&h=318&f=png&s=30919",alt:"色彩设计图"}})]),t._v(" "),s("h1",{attrs:{id:"功能模块详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能模块详解","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能模块详解")]),t._v(" "),s("p",[t._v("接下来我会对部分功能模块以图文结合的形式详细描述，将其中涉及的技术、知识分享给大家")]),t._v(" "),s("h2",{attrs:{id:"约拍邀请"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#约拍邀请","aria-hidden":"true"}},[t._v("#")]),t._v(" 约拍邀请")]),t._v(" "),s("p",[t._v("用户可在首页查看约拍需求，并点击查看需求详情，用户在了解需求后，若自己符合条件即可提交约拍信息，等待发布者的回复，可将此需求收藏方便查看")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/28/16b9e475ac6879b1?w=397&h=700&f=gif&s=2054353",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"技术分享：自定义顶部导航栏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技术分享：自定义顶部导航栏","aria-hidden":"true"}},[t._v("#")]),t._v(" 技术分享：自定义顶部导航栏")]),t._v(" "),s("p",[t._v("官方默认的导航栏只能对背景颜色进行更改，对于想要在导航栏添加一些比较酷炫的效果则需要通过自定义导航栏实现")]),t._v(" "),s("p",[t._v("实现原理：通过设置"),s("code",[t._v("app.json")]),t._v("中页面配置的"),s("code",[t._v("navigationStyle")]),t._v("(导航栏样式)配置项的值为"),s("code",[t._v("custom")]),t._v(",即可实现自定义导航")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"window"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"navigationStyle"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"custom"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("本项目的部分页面自定义导航栏实现使用了"),s("code",[t._v("ColorUI")]),t._v("的导航栏组件，在完成上一步属性设置后再引入导航栏组件即可")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usingComponents"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cu-custom"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/colorui/components/cu-custom"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//该路径替换为自己项目内ColorUI组件所在位置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("主页自定义导航栏通过设置背景图片加上GIF波浪效果")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("page__bd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bg-img padding-tb-xl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'http://wx4.sinaimg.cn/mw690/006UdlVNgy1g2v2t1ih8jj31hc0p0qej.jpg'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("cover"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cu-bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("content text-bold text-white"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          悦拍屋\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("shadow-blur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("image")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://image.weilanwl.com/gif/wave.gif"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("mode")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scaleToFill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("gif-black response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("-100rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("效果图")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/28/16b9e85af5e5db08?w=397&h=120&f=gif&s=150182",alt:""}})]),t._v(" "),s("p",[t._v("使用组件定义的导航栏")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<cu-custom bgImage="https://s2.ax1x.com/2019/05/02/Etiyng.jpg" isBack="{{true}}">\n  <view slot="backText">返回</view>\n  <view slot="content">认证信息说明\n  </view>\n</cu-custom>\n')])])]),s("p",[t._v("效果图")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/28/16b9e88d755efb48?w=391&h=50&f=png&s=23342",alt:""}})]),t._v(" "),s("div",{staticClass:"language-! extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("特别提醒1：使用自定义导航后，页面的返回需要在自定义导航栏中自行设置\n")])])]),s("div",{staticClass:"language-! extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("特别提醒2：导航栏组件需要自行引入ColorUI组件库后才能使用，具体引入教程地址在附录中给出\n")])])]),s("h2",{attrs:{id:"发布约拍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布约拍","aria-hidden":"true"}},[t._v("#")]),t._v(" 发布约拍")]),t._v(" "),s("p",[t._v("选择发布约拍功能填写约拍需求，提交审核通过后可在首页实时查看发布结果\n"),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/29/16ba0fc5309b428e?w=397&h=697&f=gif&s=1176370",alt:"发布约拍"}})]),t._v(" "),s("h3",{attrs:{id:"技术分享：入场动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技术分享：入场动画","aria-hidden":"true"}},[t._v("#")]),t._v(" 技术分享：入场动画")]),t._v(" "),s("p",[t._v("额。。录制可能略微有点卡顿，实际效果挺流畅的，各位大佬有什么好的录制工具推荐可以在评论中回复")]),t._v(" "),s("p",[t._v("实现原理：通过"),s("code",[t._v("toggleDelay")]),t._v("的布尔值为真动态添加动画类名，在生命周期函数"),s("code",[t._v("onReady")]),t._v("中控制"),s("code",[t._v("toggleDelay")]),t._v("的值从而控制整个动画过程(原理与"),s("code",[t._v("Vue")]),t._v("的动态类名相似)")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    toggleDelay；"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onReady")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" that "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//toggleDelay的值为真，动画开始")]),t._v("\n    that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      toggleDelay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//控制整个动画的时长")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        toggleDelay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<view class="padding-xs {{toggleDelay?\'animation-slide-bottom\':\'\'}}" style="animation-delay: {{item.time}}s;" wx:for="{{list}}" wx:key="{{index}}">\n  <image class="img" id=\'img{{index}}\' src="{{item.src}}" mode="widthFix" />\n</view>\n')])])]),s("div",{staticClass:"language-wxss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("//所有动画的定义\n[class*=animation-] {\n    animation-duration: .5s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: both\n}\n//animatioon-slide-bottom所定义的动画\n.animation-slide-bottom {\n    animation-name: slide-bottom\n}\n//动画效果\n@keyframes slide-bottom {\n    0% {\n        opacity: 0;\n        transform: translateY(100%)\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0)\n    }\n}\n")])])]),s("p",[s("code",[t._v("animation-slide-bottom")]),t._v("是动画类名，"),s("code",[t._v("animation-delay")]),t._v("是每一个卡片动画执行的延迟时间，每一个动画的执行时长为0.5s,所以延迟时间是以0.5s递增的，三个卡片的动画总时长就为2s,即2s后就执行"),s("code",[t._v("onReady")]),t._v("中的"),s("code",[t._v("settimeout")]),t._v("事件结束动画")]),t._v(" "),s("div",{staticClass:"language-! extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("特别提醒：动画的延迟时间，执行时间可以自行设计，动画效果过渡自然即可\n")])])]),s("div",{staticClass:"language-! extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("特别提醒：由于触发动画的钩子函数定义在页面初次渲染的生命周期函数中，故只有在页面初次渲染时才执行，避免每次显示页面时加载动画造成用户的视觉疲劳\n")])])]),s("h2",{attrs:{id:"智能推荐约拍对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#智能推荐约拍对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 智能推荐约拍对象")]),t._v(" "),s("p",[t._v("系统会根据约拍需求自动推荐约拍对象(个人开发精力有限，推荐算法后续推出。。。)")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/29/16ba13bfa125f13c?w=397&h=697&f=gif&s=4662891",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"技术分享：css3实现酷炫搜索动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技术分享：css3实现酷炫搜索动画","aria-hidden":"true"}},[t._v("#")]),t._v(" 技术分享：CSS3实现酷炫搜索动画")]),t._v(" "),s("p",[t._v("在模态框内放置两个"),s("code",[t._v("view")]),t._v("标签，以下是标签定义")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" <view id='preloader'>               //外围的圆形框定义\n    <view id='loader'></view>       //内部的线条定义\n</view>\n")])])]),s("div",{staticClass:"language-wxss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('#preloader {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  border: 1px solid #97b2ff;\n}\n#loader {         //中间线条定义\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #97b2ff;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n}\n#loader:before {          //通过伪类元素定义外围线条\n  content: "";\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #97b2ff;\n  -webkit-animation: spin 3s linear infinite;\n  animation: spin 3s linear infinite;\n}\n#loader:after {       //通过伪类元素定义最内部线条\n  content: "";\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #97b2ff;\n  -webkit-animation: spin 1.5s linear infinite;\n  animation: spin 1.5s linear infinite;\n}\n')])])]),s("h2",{attrs:{id:"实名认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实名认证","aria-hidden":"true"}},[t._v("#")]),t._v(" 实名认证")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/29/16ba233da0455a4f?w=397&h=697&f=gif&s=331988",alt:""}})]),t._v(" "),s("p",[t._v("嘿嘿，由于懒得给个人信息打码，就暂时不给大家演示认证过程了。。")]),t._v(" "),s("h3",{attrs:{id:"技术分享：ai视觉能力"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技术分享：ai视觉能力","aria-hidden":"true"}},[t._v("#")]),t._v(" 技术分享：Ai视觉能力")]),t._v(" "),s("p",[t._v("很多小伙伴都有过在自己项目中使用AI技术的想法，但又因为入门AI的难度比较大，并且需要的时间较长就放弃了，现在给大家安利一个可以直接使用的AI服务，让AI不再具有神秘感(AI大佬可以忽略此部分。。)")]),t._v(" "),s("ul",[s("li",[t._v("方案一"),s("br"),t._v("\n在腾讯云中搜索身份证识别，上面会有详细的API文档以及测试工具帮助你快速使用")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/29/16ba1eef2a39d1b8?w=1920&h=902&f=png&s=119398",alt:"身份证识别"}})]),t._v(" "),s("p",[t._v("点击查看"),s("a",{attrs:{href:"https://cloud.tencent.com/document/product/866/33524",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云-身份证识别"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("方案二"),s("br"),t._v("\n方案一是以提供API接口的形式提供身份证识别服务，而接下来要介绍的方案真的就比较简单了，在腾讯云中搜索智能图像,其中的增值服务AI智能图像能力，你可以通过云函数和云存储实现相应功能，基于小程序云开发的 AI DEMO中开发好了部分功能，你只需通过教程将云函数和组件引入你的项目即可使用")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/29/16ba20c7ba9b3aa9?w=1789&h=901&f=png&s=138973",alt:""}})]),t._v(" "),s("p",[t._v("点击查看"),s("a",{attrs:{href:"https://cloud.tencent.com/document/product/876/32345",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云-智能图像"),s("OutboundLink")],1),s("br"),t._v("\n点击查看"),s("a",{attrs:{href:"https://github.com/TencentCloudBase/Cloudbase-Examples/tree/master/miniprogram/tcb-demo-ai",target:"_blank",rel:"noopener noreferrer"}},[t._v("基于小程序云开发的 AI DEMO"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-! extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("特别提醒：当然使用这些服务也并非是完整的解决方案，对于身份证信息的加密、存储方案、安全协议等还是需要各位小伙伴自行设计解决方案哦。\n")])])]),s("h2",{attrs:{id:"云开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#云开发","aria-hidden":"true"}},[t._v("#")]),t._v(" 云开发")]),t._v(" "),s("blockquote",[s("p",[t._v("云开发为开发者提供完整的原生云端支持和微信服务支持，弱化后端和运维概念，无需搭建服务器，使用平台提供的 API 进行核心业务开发，即可实现快速上线和迭代，同时这一能力，同开发者已经使用的云服务相互兼容，并不互斥。")])]),t._v(" "),s("p",[t._v("官方文档中API被分为了小程序端和服务端，一开始看过两端的API之后，感觉好像没有什么不同啊，在查阅相关资料以及实际开发中某些业务的处理总结出一些经验后才明白了两者的不同，下面给各位具体说说两者的不同之处，应该能帮助大家在使用云开发实战时少踩一点坑")]),t._v(" "),s("h3",{attrs:{id:"初始化的不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化的不同","aria-hidden":"true"}},[t._v("#")]),t._v(" 初始化的不同")]),t._v(" "),s("h4",{attrs:{id:"小程序端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序端","aria-hidden":"true"}},[t._v("#")]),t._v(" 小程序端")]),t._v(" "),s("p",[t._v("全局声明一次")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请使用 2.2.3 或以上的基础库以使用云能力'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        traceUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"服务端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务端")]),t._v(" "),s("p",[t._v("每个云函数中声明一次")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cloud "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wx-server-sdk'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"权限不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#权限不同","aria-hidden":"true"}},[t._v("#")]),t._v(" 权限不同")]),t._v(" "),s("h4",{attrs:{id:"小程序端-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序端-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 小程序端")]),t._v(" "),s("p",[t._v("在小程序端可以选择直接操作数据库，但由于是前端操作数据库存在一些安全问题，有较多的权限限制，在云控制中可对每个集合进行权限设置，这也就是为什么有小伙伴在小程序端对某些数据进行更新，显示更新成功但并未更新数据，就是因为小程序端默认只能更新当前用户写入的数据\n"),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/29/16ba28cfebd5f487?w=1308&h=584&f=png&s=54194",alt:""}})]),t._v(" "),s("div",{staticClass:"language-! extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("特别提醒：在小程序端使用创建者的权限对数据进行修改时一定要确保该集合中有_openid字段，否则系统在权限判断时是没有办法识别当前操作为创建者的，数据修改无法执行\n")])])]),s("h4",{attrs:{id:"服务端-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务端")]),t._v(" "),s("p",[t._v("服务端拥有管理员的权限，对所有数据拥有读写权限")]),t._v(" "),s("h3",{attrs:{id:"语法支持不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法支持不同","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法支持不同")]),t._v(" "),s("h4",{attrs:{id:"小程序端-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序端-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 小程序端")]),t._v(" "),s("p",[t._v("在微信开发者工具里，以及Android端手机（浏览器内核是QQ浏览器的X5），"),s("code",[t._v("async")]),t._v("/"),s("code",[t._v("await")]),t._v("是天然支持的，但 iOS 端手机在较低版本则不支持，因此需要引入额外的"),s("code",[t._v("polyfill")]),t._v("。可以在有使用"),s("code",[t._v("async")]),t._v("/"),s("code",[t._v("await")]),t._v(" 的文件当中引入"),s("code",[t._v("polyfill")]),t._v("文件。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" runtime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'相对路径/lib/runtime'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"服务端-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务端")]),t._v(" "),s("p",[t._v("在云函数里，由于 Node 版本最低是 8.9，因此是天然支持 async/await 语法的"),s("br"),t._v("\n示例：获取约拍需求列表")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//云函数入口文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cloud "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wx-server-sdk'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//初始化")]),t._v("\ncloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//连接数据库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" db "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("database")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("collection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ypList'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("orderBy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cameraInfo.launchTime'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'desc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("where")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 云函数入口函数")]),t._v("\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("main")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//此处的action是用来判断该调用哪一个方法")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'getAll'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h1",{attrs:{id:"结语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结语","aria-hidden":"true"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),s("p",[t._v("一个人手撸个全栈项目确实很辛苦，但收获也很多。至少对于小程序的实战开发更为熟练了，对MVVM的思想的理解也更加深刻了。技术发展得很快，学习一项技术如果不深入其本质，那么技术是学不完的。深入学习就是个解决问题的过程，或是帮助别人解决问题，或是借助他人的力量解决问题。目前在正在学习Vue、React、TypeScript等技术，后续会推出相关技术的项目解析文章，希望对于同样在学习的你有帮助。")]),t._v(" "),s("div",{staticClass:"language-! extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("特别说明：本项目已参加2019届中国高校计算机-微信应用开发赛完，开源至github，感兴趣的小伙伴可以看看\n")])])]),s("h1",{attrs:{id:"附录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附录","aria-hidden":"true"}},[t._v("#")]),t._v(" 附录")]),t._v(" "),s("p",[t._v("在此提供一些本项目涉及到的技术、工具等链接供大家学习使用")]),t._v(" "),s("ul",[s("li",[t._v("产品原型设计工具："),s("a",{attrs:{href:"https://modao.cc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("墨刀"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("色彩搭配设计："),s("a",{attrs:{href:"http://www.peise.net/palette/",target:"_blank",rel:"noopener noreferrer"}},[t._v("配色网"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("在线作图："),s("a",{attrs:{href:"https://www.processon.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ProcessOn"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("UI样式库："),s("a",{attrs:{href:"https://github.com/Tencent/weui",target:"_blank",rel:"noopener noreferrer"}},[t._v("WeUI"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("UI样式库："),s("a",{attrs:{href:"https://github.com/weilanwl/ColorUI",target:"_blank",rel:"noopener noreferrer"}},[t._v("ColorUI"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("图标库："),s("a",{attrs:{href:"https://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Iconfont阿里巴巴矢量图标库"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("开发工具："),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信开发者工具"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("开发者工具："),s("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vscode"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("腾讯云服务："),s("a",{attrs:{href:"https://user-gold-cdn.xitu.io/2019/6/29/16ba1eef2a39d1b8?w=1920&h=902&f=png&s=119398",target:"_blank",rel:"noopener noreferrer"}},[t._v("身份证识别"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("腾讯云服务："),s("a",{attrs:{href:"https://cloud.tencent.com/document/product/876/32345",target:"_blank",rel:"noopener noreferrer"}},[t._v("智能图像"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("API文档："),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信官方文档.小程序"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("技术文档："),s("a",{attrs:{href:"https://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES6"),s("OutboundLink")],1)])]),t._v(" "),s("h1",{attrs:{id:"源码链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 源码链接")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/xmc1214/YPW",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xmc1214/YPW"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);