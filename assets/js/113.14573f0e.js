(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{359:function(a,s,e){"use strict";e.r(s);var t=e(2),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"安全域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全域名","aria-hidden":"true"}},[a._v("#")]),a._v(" 安全域名")]),a._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("⚠️注意事项")]),a._v(" "),e("p",[a._v("所有 CloudBase CLI 命令均在配置文件所在目录执行。")])]),a._v(" "),e("p",[a._v("当您需要在网页应用中使用云开发的身份验证服务时，您需要将您的网站的域名（发起请求的页面的域名）加入安全域名名单中。安全域名是云开发服务认可的用户请求来源域名，所有来自非安全域名名单中的请求都不会被响应。")]),a._v(" "),e("h2",{attrs:{id:"查看安全域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看安全域名","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看安全域名")]),a._v(" "),e("p",[a._v("使用下面的命令查看所有配置的安全域名")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("cloudbase env:domain:list\n")])])]),e("p",[a._v("您会得到类似下面的输出")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("┌────────────────────────────────────┬────────────────┬─────────────────────┬────────┐\n│              Domain Id             │     Domain     │     CreateTime      │ Status │\n├────────────────────────────────────┼────────────────┼─────────────────────┼────────┤\n│ 953e45d7-e182-475b-8320-xxxxxxxxxx │    xxxxx.com   │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2019")]),a._v("-06-21 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("17")]),a._v(":04:00 │  启用中 │\n├────────────────────────────────────┼────────────────┼─────────────────────┼────────┤\n│ 7a6ddc78-b81b-4542-83a4-xxxxxxxxxx │    xxxx.com    │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2019")]),a._v("-07-11 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v(":14:08 │  启用中 │\n└────────────────────────────────────┴────────────────┴─────────────────────┴────────┘\n")])])]),e("h2",{attrs:{id:"新增安全域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新增安全域名","aria-hidden":"true"}},[a._v("#")]),a._v(" 新增安全域名")]),a._v(" "),e("p",[a._v("您可以使用下面的命令添加新的安全域名：")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("cloudbase env:domain:create "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("domian"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("您需要指定被添加的域名 domain，当需要添加多个域名时，需要以 "),e("code",[a._v("/")]),a._v(" 分隔，如 "),e("code",[a._v("abc.com/def.com")]),a._v("。")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加一个域名")]),a._v("\ncloudbase env:domain:create www.xxx.com\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加多个域名")]),a._v("\ncloudbase env:domain:create www.domain1.com/www.domain2.com/www.domain3.com\n")])])]),e("h2",{attrs:{id:"删除安全域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除安全域名","aria-hidden":"true"}},[a._v("#")]),a._v(" 删除安全域名")]),a._v(" "),e("p",[a._v("您可以使用下面的命令删除安全域名：")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("cloudbase env:domain:delete\n")])])]),e("p",[a._v("回车后，CloudBase CLI 会拉取您配置的所有安全域名，您可以选择删除指定的域名。")])])}),[],!1,null,null,null);s.default=n.exports}}]);