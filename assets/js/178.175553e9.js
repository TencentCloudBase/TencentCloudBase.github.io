(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{294:function(t,a,s){"use strict";s.r(a);var n=s(2),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"taro·小程序云开发电商教程示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#taro·小程序云开发电商教程示例","aria-hidden":"true"}},[t._v("#")]),t._v(" Taro·小程序云开发电商教程示例")]),t._v(" "),s("p",[t._v("本 demo 适用于 Taro·小程序云开发")]),t._v(" "),s("h2",{attrs:{id:"关于-taro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于-taro","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于 Taro")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://taro.jd.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Taro"),s("OutboundLink")],1),t._v(" 是由凹凸实验室打造的一套遵循 React 语法规范的多端统一开发解决方案。使用 Taro，我们可以只书写一套代码，再通\n过 Taro 的编译工具，将源代码分别编译出可以在不同端（字节跳动小程序、微信小程序、百度智能小程序、支付宝小程序、QQ\n小程序、跨应用、H5、App 端等）运行的代码。同时 Taro 还提供开箱即用的语法检测和自动补全等功能，有效地提升了开发体验和开发效率。"),s("br"),t._v(" "),s("a",{attrs:{href:"https://taro.jd.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Taro"),s("OutboundLink")],1),t._v(" 作为 "),s("strong",[t._v("凹凸实验室")]),t._v(" 的主要开源产品之一，在 github 上拥有 19,000+ star， Taro 在业界获得广泛的关注。")]),t._v(" "),s("h2",{attrs:{id:"关于云开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于云开发","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于云开发")]),t._v(" "),s("p",[t._v("文章中的几个数据集的模拟数据，已上传至 "),s("code",[t._v("cloud/doc")]),t._v(" 中，可根据需要自行导入。不过购物车，订单类的数据与 "),s("code",[t._v("openId")]),t._v(" 相关联，所以更多的是可以参考其数据结构。\n云函数的代码存放在 "),s("code",[t._v("cloud/functions")]),t._v(" 中，代码是按模块进行分割，每个模块有一个入口文件和一些执行具体逻辑的文件。")]),t._v(" "),s("h2",{attrs:{id:"关于云函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于云函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于云函数")]),t._v(" "),s("p",[t._v("在使用你自己的云函数环境时，需要将云函数初始化换成你小程序的云环境。有以下几个地方需要注意：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("src/app.js")])]),t._v(" "),s("li",[s("code",[t._v("cloud/functions")]),t._v(" 下每个云函数里的 "),s("code",[t._v("index.js")])]),t._v(" "),s("li",[s("code",[t._v("project.config.json")]),t._v(" 里的 appid 需要换成你的小程序的 "),s("code",[t._v("appid")])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/app.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Taro"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxyyzz'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 换成你的云函数环境")]),t._v("\n    traceUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否要捕捉每个用户的访问记录。设置为true，用户可在管理端看到用户访问记录")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" userData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWxUserData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setGlobalData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userData'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 例： cloud/functions/cart/index.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  envName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wushufang-h36jx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 换成你的云函数环境")]),t._v("\n  mpAppId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wx22203329a468e8a1'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 换成你的小程序id")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),s("h2",{attrs:{id:"如果有问题怎么办？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果有问题怎么办？","aria-hidden":"true"}},[t._v("#")]),t._v(" 如果有问题怎么办？")]),t._v(" "),s("blockquote",[s("p",[t._v("您可以到 Taro 社区 "),s("a",{attrs:{href:"https://taro-club.jd.com/category/14/%E5%B0%8F%E7%A8%8B%E5%BA%8F-%E4%BA%91%E5%BC%80%E5%8F%91",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序·云开发"),s("OutboundLink")],1),t._v(" 版块来讨论咯")])]),t._v(" "),s("h2",{attrs:{id:"源码链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 源码链接")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/honlyHuang/eshop",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/honlyHuang/eshop"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);