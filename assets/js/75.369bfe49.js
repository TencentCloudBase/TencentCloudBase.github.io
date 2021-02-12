(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{594:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("云调用是云开发提供的基于云函数使用"),a("strong",[t._v("小程序")]),t._v("开放接口的能力，目前覆盖以下使用场景：")]),t._v(" "),a("ul",[a("li",[t._v("服务端调用")]),t._v(" "),a("li",[t._v("开放数据调用")]),t._v(" "),a("li",[t._v("消息推送")])]),t._v(" "),a("h2",{attrs:{id:"服务端调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端调用"}},[t._v("#")]),t._v(" 服务端调用")]),t._v(" "),a("p",[t._v("云调用需要在云函数中通过 "),a("code",[t._v("wx-server-sdk")]),t._v(" 使用。在云函数中使用云调用调用服务端接口无需换取 access_token，只要是在从小程序端触发的云函数中发起的云调用都经过微信自动鉴权，可以在登记权限后直接调用如发送模板消息等开放接口。使用方式如下：")]),t._v(" "),a("h3",{attrs:{id:"_1-查看服务端接口是否支持云调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看服务端接口是否支持云调用"}},[t._v("#")]),t._v(" 1.查看服务端接口是否支持云调用")]),t._v(" "),a("p",[t._v("在"),a("RouterLink",{attrs:{to:"/开发指南/能力详解/云调用/小程序端/接口列表.html"}},[t._v("服务端接口列表")]),t._v("中罗列了所有的服务端接口，如果接口支持云调用，则在接口名称旁会带有 云调用 的标签。同时，在每一个服务端接口文档中，如果接口支持云调用，也会有专门的支持说明以及相应的使用文档。")],1),t._v(" "),a("h3",{attrs:{id:"_2-查看接口的云调用文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看接口的云调用文档"}},[t._v("#")]),t._v(" 2.查看接口的云调用文档")]),t._v(" "),a("p",[t._v("在支持云调用的接口文档中，会分别列出 HTTPS 调用的文档及云调用的文档，云调用文档同 HTTPS 调用文档一样包含请求参数、返回值及示例。")]),t._v(" "),a("h3",{attrs:{id:"_3-为云函数声明所需调用的接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-为云函数声明所需调用的接口"}},[t._v("#")]),t._v(" 3.为云函数声明所需调用的接口")]),t._v(" "),a("p",[t._v("接着，需要配置云调用权限，每个云函数需要声明其会使用到的接口，否则无法调用，声明的方法是在云函数目录下的 config.json（如无需新建）配置文件的 permissions.openapi 字段中增加要调用的接口名，permissions.openapi 是个字符串数组字段，值必须为所需调用的服务端接口名称。在每次使用微信开发者工具上传云函数时均会根据配置更新权限，该配置有10分钟的缓存，如果更新后提示没有权限，稍等10分钟后再试。以下是一个示例的声明了使用发送模板消息接口的配置文件：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"permissions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"openapi"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"templateMessage.send"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-在云函数中使用云调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-在云函数中使用云调用"}},[t._v("#")]),t._v(" 4.在云函数中使用云调用")]),t._v(" "),a("p",[t._v("首先云函数中需要使用版本号至少 0.4.0 的 wx-server-sdk，建议 wx-server-sdk 始终保持最新，保证云函数目录下的 package.json 的 wx-server-sdk 字段为 latest，如本地安装依赖，请执行 npm install --save wx-server-sdk@latest。\n接下来，可在云函数中使用云调用 API 了。云调用 API 均挂载在 wx-server-sdk 模块的 openapi 对象下，各个开放接口类别在 openapi 对象下设二级命名空间对象（如模板消息接口的方法均在 openapi.templateMessage 下），该对象下挂载该类别下的所有开放方法（比如模板消息的发送接口是 openapi.templateMessage.send）。各接口从属的类别名称和方法名称可以通过接口名称查看，接口名称均以 <类别>.<方法> 命名，如发送模板消息的接口名称是 templateMessage.send。下面是一个给自己发送模板消息的示例：")]),t._v(" "),a("blockquote",[a("p",[t._v("如需可直接运行的示例，请在 IDE 中创建一个云开发快速启动模板的项目，其中有包含发送模板消息的云调用的示例")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cloud "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wx-server-sdk'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("main")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openapi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("templateMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      touser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWXContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OPENID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过 getWXContext 获取 OPENID")]),t._v("\n      page"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        keyword1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'339208499'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        keyword2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2015年01月05日 12:30'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        keyword3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'腾讯微信总部'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        keyword4"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'广州市海珠区新港中路397号'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      templateId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TEMPLATE_ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      formId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FORMID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      emphasisKeyword"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'keyword1.DATA'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// result 结构")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { errCode: 0, errMsg: 'openapi.templateMessage.send:ok' }")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误处理")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// err.errCode !== 0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"开放数据调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开放数据调用"}},[t._v("#")]),t._v(" 开放数据调用")]),t._v(" "),a("p",[t._v("对返回敏感开放数据的小程序端接口，从基础库 2.7.0 起，如果小程序已开通云开发，则可在开放数据接口的返回值中获取到唯一对应敏感开放数据的 cloudID，通过云调用可以直接获取到开放数据，具体使用方法见 "),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("云调用直接获取开放数据"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"消息推送"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息推送"}},[t._v("#")]),t._v(" 消息推送")]),t._v(" "),a("p",[t._v("云开发也支持通过云函数接收小程序消息推送（如接收到客服消息时触发云函数），具体接入方式见"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/message-push.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("消息推送"),a("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);