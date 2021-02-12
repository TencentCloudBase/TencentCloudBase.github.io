(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{634:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"云函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#云函数"}},[t._v("#")]),t._v(" 云函数")]),t._v(" "),a("h3",{attrs:{id:"执行函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行函数"}},[t._v("#")]),t._v(" 执行函数")]),t._v(" "),a("p",[t._v("callFunction(array)")]),t._v(" "),a("p",[t._v("请求参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("云函数名称")])]),t._v(" "),a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("云函数参数")])])])]),t._v(" "),a("p",[t._v("响应参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("code")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("状态码，操作成功则不返回")])]),t._v(" "),a("tr",[a("td",[t._v("message")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("错误描述")])]),t._v(" "),a("tr",[a("td",[t._v("result")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("云函数执行结果")])]),t._v(" "),a("tr",[a("td",[t._v("requestId")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("请求序列号，用于错误排查")])])])]),t._v(" "),a("p",[t._v("示例代码")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("TencentCloudBase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("TCB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tcb")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tcb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$functions")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tcb")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFunctions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$result")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$functions")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callFunction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'data'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);