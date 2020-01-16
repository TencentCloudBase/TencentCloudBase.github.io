(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{357:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"触发器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#触发器","aria-hidden":"true"}},[t._v("#")]),t._v(" 触发器")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️注意事项")]),t._v(" "),a("p",[t._v("所有 CloudBase CLI 命令均在配置文件所在目录执行。")])]),t._v(" "),a("p",[t._v("触发器是按照一定规则触发函数的模块的抽象，除了普通的调用触发函数之外，cloudbase 云函数还支持定时触发器。")]),t._v(" "),a("p",[t._v("如果云函数需要定时/定期执行，即定时触发，您可以使用云函数定时触发器。已配置定时触发器的云函数，会在相应时间点被自动触发，函数的返回结果不会返回给调用方。")]),t._v(" "),a("p",[t._v("定时触发器配置规则请参考"),a("a",{attrs:{href:"https://cloud.tencent.com/document/product/876/32314",target:"_blank",rel:"noopener noreferrer"}},[t._v("此文档"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"创建函数触发器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建函数触发器","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建函数触发器")]),t._v(" "),a("p",[t._v("您可以使用下面的命令创建一个触发器：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建 app 函数配置的触发器")]),t._v("\ncloudbase functions:trigger:create app\n")])])]),a("p",[t._v("Cloudbase CLI 会自动读取 "),a("code",[t._v("cloudbaserc.json")]),t._v(" 文件中指定函数配置的定时触发器，并创建云函数触发器。如果配置文件中没有包含触发器配置，则会创建失败。")]),t._v(" "),a("p",[t._v("一个函数可以包含多个触发器，一个触发器包含了以下 3 个主要信息："),a("code",[t._v("name, type, config")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// name: 触发器的名字，规则见下方说明")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myTrigger'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// type: 触发器类型，目前仅支持 timer （即定时触发器）")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config: 触发器配置，在定时触发器下，config 格式为 cron 表达式")]),t._v("\n    config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0 0 2 1 * * *'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("当没有指定函数名时，Cloudbase CLI 会创建 "),a("code",[t._v("cloudbaserc.json")]),t._v(" 文件包含的"),a("strong",[t._v("所有函数")]),t._v("的"),a("strong",[t._v("所有触发器")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"删除函数触发器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除函数触发器","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除函数触发器")]),t._v(" "),a("p",[t._v("您可以使用下面的命令删除函数的触发器：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除 app 函数的名为 trigger 的触发器")]),t._v("\ncloudbase functions:trigger:delete app trigger\n")])])]),a("p",[t._v("同样，当没有指定函数名时，Cloudbase CLI 会删除 "),a("code",[t._v("cloudbaserc.json")]),t._v(" 文件包含的"),a("strong",[t._v("所有函数")]),t._v("的"),a("strong",[t._v("所有触发器")]),t._v("。当只指定了函数名时，Cloudbase CLI 会删除指定函数的所有触发器，当同时指定了函数名称和触发器名称时，Cloudbase CLI 只会删除指定的触发器。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除 cloudbaserc.json 文件中所有函数的所有触发器")]),t._v("\ncloudbase functions:trigger:delete\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除函数 app 的所有触发器")]),t._v("\ncloudbase functions:trigger:delete app\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除函数 app 的触发器 trigger")]),t._v("\ncloudbase functions:trigger:delete app trigger\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);