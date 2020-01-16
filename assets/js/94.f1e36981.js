(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{385:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("目前 Cloudbase Flutter 支持的登录方式有：")]),t._v(" "),s("ul",[s("li",[t._v("微信授权（微信开放平台的移动应用授权）")])]),t._v(" "),s("p",[t._v("后续会支持自定义登录和匿名登录。请在"),s("strong",[t._v("初始化资源后即调用登录授权方法")]),t._v("，登录成功后即可调用 Cloudbase Flutter 提供的功能插件。")]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[t._v("在 flutter 项目的 "),s("code",[t._v("pubspec.yaml")]),t._v(" 文件的 "),s("code",[t._v("dependencies")]),t._v(" 中添加")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloudbase_core")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ^0.0.1\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloudbase_auth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ^0.0.1\n")])])]),s("h2",{attrs:{id:"微信授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信授权","aria-hidden":"true"}},[t._v("#")]),t._v(" 微信授权")]),t._v(" "),s("h3",{attrs:{id:"调用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 调用示例")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package:cloudbase_core/cloudbase_core.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package:cloudbase_auth/cloudbase_auth.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化")]),t._v("\nCloudBaseCore core "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CloudBaseCore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'envId'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wxAppId'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wxUniLink'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxx'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取登录对象")]),t._v("\nCloudBaseAuth auth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CloudBaseWxAuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取登录状态")]),t._v("\nbool isLogin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isLogin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 唤起微信登录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("isLogin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("login")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("success"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录成功")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catchError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录失败")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"微信授权额外配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信授权额外配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 微信授权额外配置")]),t._v(" "),s("p",[t._v("微信授权需要用到微信开放平台的能力，所以需要一些额外配置。")]),t._v(" "),s("h3",{attrs:{id:"申请和绑定微信-appid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#申请和绑定微信-appid","aria-hidden":"true"}},[t._v("#")]),t._v(" 申请和绑定微信 Appid")]),t._v(" "),s("p",[t._v("[1] 请到 "),s("a",{attrs:{href:"https://open.weixin.qq.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信开放平台"),s("OutboundLink")],1),t._v(" 进行登记，登记并选择移动应用进行设置后，将该应用提交审核，审核通过后获得 "),s("code",[t._v("Appid")]),t._v("。")]),t._v(" "),s("p",[t._v("[2] 在 "),s("a",{attrs:{href:"https://console.cloud.tencent.com/tcb",target:"_blank",rel:"noopener noreferrer"}},[t._v("云开发控制台"),s("OutboundLink")],1),t._v(" 绑定微信开放平台的 "),s("code",[t._v("Appid")]),t._v(" ，并启动该登录方式。")]),t._v(" "),s("img",{attrs:{src:"/flutter/wxauth/4.png"}}),t._v(" "),s("h3",{attrs:{id:"添加-android-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加-android-配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加 Android 配置")]),t._v(" "),s("p",[t._v("[1] 在 "),s("code",[t._v("微信开放平台-管理中心-应用详情")]),t._v(" 配置Android开发信息: 包名和应用签名。")]),t._v(" "),s("img",{attrs:{src:"/flutter/wxauth/6.png",width:"70%"}}),t._v(" "),s("p",[t._v("应用签名可以使用微信开放平台提供的 "),s("a",{attrs:{href:"https://res.wx.qq.com/open/zh_CN/htmledition/res/dev/download/sdk/Gen_Signature_Android2.apk",target:"_blank",rel:"noopener noreferrer"}},[t._v("签名生成工具"),s("OutboundLink")],1),t._v(" 。")]),t._v(" "),s("p",[t._v("[2] 在你的包名相应目录下新建一个 "),s("code",[t._v("wxapi")]),t._v(" 目录，并在该 "),s("code",[t._v("wxapi")]),t._v(" 目录下新增一个 "),s("code",[t._v("WXEntryActivity")]),t._v(" 类，该类继承自 "),s("code",[t._v("Activity")]),t._v(" 。")]),t._v(" "),s("img",{attrs:{src:"/flutter/wxauth/3.png",width:"50%"}}),t._v(" "),s("p",[t._v("[3] "),s("code",[t._v("WXEntryActivity")]),t._v(" 类的代码如下:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tcloudbase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fluttersdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wxapi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Activity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("os")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("androidx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nullable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WXEntryActivity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Activity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Nullable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),t._v(" savedInstanceState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInstanceState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("[4] 在 Android 项目的 "),s("code",[t._v("manifest")]),t._v(" 文件里面加上：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("activity")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(".wxapi.WXEntryActivity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("theme")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@android:style/Theme.Translucent.NoTitleBar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("exported")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("taskAffinity")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("net.sourceforge.simcpux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("launchMode")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("singleTask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("activity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"添加-ios-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加-ios-配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加 iOS 配置")]),t._v(" "),s("p",[t._v("[1] 配置应用的 "),s("code",[t._v("Universal Links")])]),t._v(" "),s("p",[t._v("[1.1] 根据"),s("a",{attrs:{href:"https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content",target:"_blank",rel:"noopener noreferrer"}},[t._v("苹果文档"),s("OutboundLink")],1),t._v("配置你应用的 "),s("code",[t._v("Universal Links")]),t._v(" 。")]),t._v(" "),s("p",[t._v("(todo：添加更详细的描述)")]),t._v(" "),s("p",[t._v("[1.2] 打开 "),s("code",[t._v("Associated Domains")]),t._v(" 开关，将Universal Links域名加到配置上。")]),t._v(" "),s("img",{attrs:{src:"/flutter/wxauth/5.png"}}),t._v(" "),s("p",[t._v("[2] 在 "),s("code",[t._v("微信开放平台-管理中心-应用详情")]),t._v(" 配置iOS开发信息: "),s("code",[t._v("Bundle ID")]),t._v(" 和 "),s("code",[t._v("Universal Links")]),t._v(" 。")]),t._v(" "),s("img",{attrs:{src:"/flutter/wxauth/7.png",width:"70%"}}),t._v(" "),s("p",[t._v("[3] 在 Xcode 中，选择你的工程设置项，选中 "),s("code",[t._v("TARGETS")]),t._v(" 一栏，在 "),s("code",[t._v("Info")]),t._v(" 标签栏的 "),s("code",[t._v("URL Types")]),t._v(" 添加 "),s("code",[t._v("URL Schemes")]),t._v(" 为你所注册的 "),s("code",[t._v("Appid")]),t._v(" 。")]),t._v(" "),s("img",{attrs:{src:"/flutter/wxauth/2.png"}}),t._v(" "),s("p",[t._v("[4] 在 Xcode 中，选择你的工程设置项，选中 "),s("code",[t._v("TARGETS")]),t._v(" 一栏，在 "),s("code",[t._v("Info")]),t._v(" 标签栏的 "),s("code",[t._v("LSApplicationQueriesSchemes")]),t._v(" 添加 "),s("code",[t._v("weixin")]),t._v(" 和 "),s("code",[t._v("weixinULAPI")]),t._v(" 。")]),t._v(" "),s("img",{attrs:{src:"/flutter/wxauth/1.png"}})])}),[],!1,null,null,null);a.default=e.exports}}]);