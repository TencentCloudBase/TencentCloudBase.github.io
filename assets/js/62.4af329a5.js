(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{575:function(t,n,s){"use strict";s.r(n);var a=s(14),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("云函数是一段运行在云端的代码，无需管理服务器，在开发工具内编写、一键上传部署即可运行后端代码。云开发中的云函数可让用户将自身的业务逻辑代码上传，并通过云开发的调用触发函数，从而实现后端的业务运作。")]),t._v(" "),s("p",[t._v("客户端 SDK 提供了专门用于云函数调用的 API。开发者可以在云函数内获取到每次调用的上下文（包括"),s("code",[t._v("appid")]),t._v("、"),s("code",[t._v("openid")]),t._v(" 等用户的授权信息），无需维护复杂的鉴权机制，即可获取天然可信任的用户登录态（"),s("code",[t._v("openid")]),t._v("）。")]),t._v(" "),s("p",[t._v("云函数的传入参数有两个对象， "),s("code",[t._v("event")]),t._v(" 对象和 "),s("code",[t._v("context")]),t._v(" 对象。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("event")]),t._v(" 对象指的是触发云函数的事件，"),s("code",[t._v("event")]),t._v(" 就是小程序端调用云函数时传入的参数。")]),t._v(" "),s("li",[s("code",[t._v("context")]),t._v(" 对象包含了此处调用的调用信息和运行状态，可以使用 "),s("code",[t._v("context")]),t._v(" 了解服务运行的情况。")])]),t._v(" "),s("p",[t._v("本段代码的含义指将传入的 a 和 b 相加并作为 sum 字段返回给调用端。\n比如，我们定义一个云函数，命名为 add ，功能是将传入的两个参数 a 和 b 相加。示例代码如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js 是入口文件，云函数被调用时会执行该文件导出的 main 方法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// event 包含了调用端调用该函数时传过来的参数，同时还包含了用户登录态 `openId` 和应用 `appId` 信息")]),t._v("\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("main")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sum\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("如需在云函数中操作数据库、管理云文件、调用其他云函数等操作，可使用官方提供的 npm 包 "),s("code",[t._v("tcb-admin-node")]),t._v("进行操作。")])])}),[],!1,null,null,null);n.default=e.exports}}]);