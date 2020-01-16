(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{373:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"应用初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用初始化","aria-hidden":"true"}},[t._v("#")]),t._v(" 应用初始化")]),t._v(" "),a("p",[t._v("参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("secretId")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("腾讯云 API 固定密钥对，在云函数内执行可不填。"),a("a",{attrs:{href:"https://console.cloud.tencent.com/cam/capi",target:"_blank",rel:"noopener noreferrer"}},[t._v("前往获取"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("secretKey")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("同上")])]),t._v(" "),a("tr",[a("td",[t._v("env")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("TCB 环境 ID，不填使用默认环境")])]),t._v(" "),a("tr",[a("td",[t._v("proxy")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("调用接口时使用的 http 代理 url")])]),t._v(" "),a("tr",[a("td",[t._v("timeout")]),t._v(" "),a("td",[t._v("double")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("调用接口的超时时间（s），默认为 15，即 15 秒")])])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化示例")]),t._v("\nuse TencentCloudBase\\"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TCB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化资源")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 云函数下不需要secretId和secretKey。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// env如果不指定将使用默认环境")]),t._v("\n$tcb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tcb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'secretId'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'secretKey'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'env'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//云函数下使用默认环境")]),t._v("\n$tcb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tcb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//云函数下指定环境")]),t._v("\n$tcb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tcb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'env'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//修改请求超时时间")]),t._v("\n$tcb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tcb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timeout'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);