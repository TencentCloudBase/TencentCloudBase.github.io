(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{366:function(t,s,n){"use strict";n.r(s);var a=n(2),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"cli-配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cli-配置文件","aria-hidden":"true"}},[t._v("#")]),t._v(" CLI 配置文件")]),t._v(" "),n("p",[t._v("配置文件可以简化 CloudBase CLI 使用，方便项目开发，当使用命令参数缺省时，CloudBase CLI 会从配置文件中解析相关参数并使用，方便开发者以更简单的方式使用 CloudBase CLI。")]),t._v(" "),n("p",[t._v("默认情况下，使用 "),n("code",[t._v("cloudbase init")]),t._v(" 初始化项目时，会生成 "),n("code",[t._v("cloudbaserc.js")]),t._v(" 或 "),n("code",[t._v("cloudbaserc.json")]),t._v(" 文件作为配置文件，你也可以使用 "),n("code",[t._v("--config-file")]),t._v(" 指定其他文件作为配置文件，文件必须满足格式要求。")]),t._v(" "),n("h2",{attrs:{id:"字段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字段","aria-hidden":"true"}},[t._v("#")]),t._v(" 字段")]),t._v(" "),n("h3",{attrs:{id:"envid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#envid","aria-hidden":"true"}},[t._v("#")]),t._v(" envId")]),t._v(" "),n("p",[n("strong",[t._v("类型")]),t._v(": "),n("code",[t._v("String")])]),t._v(" "),n("p",[t._v("envId 代表环境 ID，是环境的唯一标识。")]),t._v(" "),n("h3",{attrs:{id:"functionroot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#functionroot","aria-hidden":"true"}},[t._v("#")]),t._v(" functionRoot")]),t._v(" "),n("p",[n("strong",[t._v("类型")]),t._v("："),n("code",[t._v("String")])]),t._v(" "),n("p",[t._v("函数代码存放的文件夹路径，相对于项目根目录的路径。")]),t._v(" "),n("h3",{attrs:{id:"functions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#functions","aria-hidden":"true"}},[t._v("#")]),t._v(" functions")]),t._v(" "),n("p",[n("strong",[t._v("类型")]),t._v("： "),n("code",[t._v("Array<CloudFunction>")])]),t._v(" "),n("p",[t._v("函数配置项组成的数组，有关函数配置项的详细信息，请参考"),n("a",{attrs:{href:"https://tencentcloudbase.github.io/2019-09-03-cli-function-config/",target:"_blank",rel:"noopener noreferrer"}},[t._v("函数配置项文档"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"简单参考配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简单参考配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 简单参考配置")]),t._v(" "),n("p",[t._v("下面是一个简单的 CLI 配置文件包含的基本信息：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关联环境 ID")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"envId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dev-xxxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 云函数文件夹名称，相对路径，可以省略 './")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"functionRoot"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"functions"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数配置")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"functions"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// functions 文件夹下函数文件夹的名称，即函数名")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数配置")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"config"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 超时时间，单位：秒 S")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"timeout"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 环境变量")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"envVariables"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);