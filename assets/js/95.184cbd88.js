(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{618:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("h2",{attrs:{id:"当前文档已迁移到新的文档站点-此内容不再维护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当前文档已迁移到新的文档站点-此内容不再维护"}},[t._v("#")]),t._v(" 当前文档已迁移到新的"),s("a",{attrs:{href:"https://docs.cloudbase.net/api-reference/flutter/install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档站点"),s("OutboundLink")],1),t._v("，此内容不再维护！")])]),t._v(" "),s("p",[t._v("CloudBase Flutter SDK 是腾讯云云开发（Tencent Cloud Base）多端 SDK 中的一员，主要支持 Flutter 框架下使用云开发能力。CloudBase 提供 Serverless 云端一体化服务，使用 CloudBase，可以快速构建小程序、移动App、网页等应用。")]),t._v(" "),s("h2",{attrs:{id:"flutter-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flutter-插件"}},[t._v("#")]),t._v(" Flutter 插件")]),t._v(" "),s("p",[t._v("CloudBase Flutter SDK 提供一系列插件，可以根据场景按需加载。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Plugin")]),t._v(" "),s("th",[t._v("Version")]),t._v(" "),s("th",[t._v("文档")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"https://pub.dartlang.org/packages/cloudbase_core",target:"_blank",rel:"noopener noreferrer"}},[t._v("cloudbase_core"),s("OutboundLink")],1)]),t._v(" "),s("td",[s("img",{attrs:{src:"https://img.shields.io/pub/v/cloudbase_core",alt:"pub package"}})]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/docs/开发文档/3.SDK文档/1.客户端SDK/2.FLUTTER SDK/1.初始化.html"}},[t._v("CloudBase Core")])],1),t._v(" "),s("td",[t._v("核心库，初始化环境等")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://pub.dartlang.org/packages/cloudbase_auth",target:"_blank",rel:"noopener noreferrer"}},[t._v("cloudbase_auth"),s("OutboundLink")],1)]),t._v(" "),s("td",[s("img",{attrs:{src:"https://img.shields.io/pub/v/cloudbase_auth",alt:"pub package"}})]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/docs/开发文档/3.SDK文档/1.客户端SDK/2.FLUTTER SDK/2.登录授权.html"}},[t._v("CloudBase Auth")])],1),t._v(" "),s("td",[t._v("鉴权库，支持微信登录、自定义登录、匿名登录等")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://pub.dartlang.org/packages/cloudbase_function",target:"_blank",rel:"noopener noreferrer"}},[t._v("cloudbase_function"),s("OutboundLink")],1)]),t._v(" "),s("td",[s("img",{attrs:{src:"https://img.shields.io/pub/v/cloudbase_function",alt:"pub package"}})]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/docs/开发文档/3.SDK文档/1.客户端SDK/2.FLUTTER SDK/3.文件存储.html"}},[t._v("CloudBase Function")])],1),t._v(" "),s("td",[t._v("支持云函数能力")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://pub.dartlang.org/packages/cloudbase_storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("cloudbase_storage"),s("OutboundLink")],1)]),t._v(" "),s("td",[s("img",{attrs:{src:"https://img.shields.io/pub/v/cloudbase_storage",alt:"pub package"}})]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/docs/开发文档/3.SDK文档/1.客户端SDK/2.FLUTTER SDK/4.云函数.html"}},[t._v("CloudBase Storage")])],1),t._v(" "),s("td",[t._v("支持对象存储能力")])])])]),t._v(" "),s("h2",{attrs:{id:"快速开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),s("h3",{attrs:{id:"_1-配置云开发资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置云开发资源"}},[t._v("#")]),t._v(" 1. 配置云开发资源")]),t._v(" "),s("p",[t._v("在 "),s("a",{attrs:{href:"https://console.cloud.tencent.com/tcb",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云云开发控制台"),s("OutboundLink")],1),t._v(" 创建环境（已有环境可跳过）。")]),t._v(" "),s("img",{attrs:{src:"/flutter/env/1.png"}}),t._v(" "),s("p",[t._v("在"),s("a",{attrs:{href:"https://console.cloud.tencent.com/tcb/user",target:"_blank",rel:"noopener noreferrer"}},[t._v("用户管理页面"),s("OutboundLink")],1),t._v("中，点击“登录设置”，然后"),s("strong",[t._v("启用匿名登录")]),t._v("：")]),t._v(" "),s("img",{attrs:{src:"/flutter/auth/1.png"}}),t._v(" "),s("p",[t._v("新建云函数 "),s("code",[t._v("sum")]),t._v("。")]),t._v(" "),s("img",{attrs:{src:"/flutter/env/2.png"}}),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("sum")]),t._v(" 云函数中添加代码。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use strict"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("main")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-创建-flutter-项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建-flutter-项目"}},[t._v("#")]),t._v(" 2. 创建 Flutter 项目")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ flutter create cloudbase_demo\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" cloudbase_demo\n")])])]),s("h3",{attrs:{id:"_3-添加-cloudbase-插件依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加-cloudbase-插件依赖"}},[t._v("#")]),t._v(" 3. 添加 CloudBase 插件依赖")]),t._v(" "),s("p",[t._v("在项目的 "),s("code",[t._v("pubspec.yaml")]),t._v(" 文件中添加 "),s("code",[t._v("dependencies")]),t._v(" 。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloudbase_core")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ^0.0.2\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloudbase_auth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ^0.0.2\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloudbase_functions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ^0.0.1\n")])])]),s("p",[t._v("从 "),s("code",[t._v("pub")]),t._v(" 安装依赖。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ flutter pub get\n")])])]),s("h3",{attrs:{id:"_4-调用云函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-调用云函数"}},[t._v("#")]),t._v(" 4. 调用云函数")]),t._v(" "),s("p",[t._v("在项目的 "),s("code",[t._v("lib/main.dart")]),t._v(" 文件中进行匿名登录，并调用运用 "),s("code",[t._v("sum")]),t._v(" 云函数。")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package:cloudbase_auth/cloudbase_core.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package:cloudbase_core/cloudbase_autj.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package:cloudbase_function/cloudbase_function.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化 CloudBase")]),t._v("\nCloudBaseCore core "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CloudBaseCore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 填写你的云开发 env")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'env'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your-env-id'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取登录状态")]),t._v("\nCloudBaseAuthState authState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAuthState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 唤起匿名登录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("signInAnonymously")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catchError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理匿名登录错误")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用云函数")]),t._v("\nCloudBaseFunction func "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CloudBaseFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nMap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("dynamic")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nCloudBaseResponse res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sum'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印云函数结果")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);