(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{506:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("h2",{attrs:{id:"当前文档已迁移到新的文档站点-此内容不再维护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当前文档已迁移到新的文档站点-此内容不再维护"}},[t._v("#")]),t._v(" 当前文档已迁移到新的"),s("a",{attrs:{href:"https://docs.cloudbase.net/cli/intro.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档站点"),s("OutboundLink")],1),t._v("，此内容不再维护！")])]),t._v(" "),s("h1",{attrs:{id:"cloudbase-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cloudbase-cli"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://github.com/TencentCloudBase/cloud-base-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("CloudBase CLI"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.shields.io/npm/v/@cloudbase/cli",alt:"npm (tag)"}})]),t._v(" "),s("p",[t._v("云开发是腾讯云为移动开发者提供的一站式后端云服务，可用于开发多种客户端，它帮助开发者统一构建和管理资源，免去了应用开发过程中繁琐的服务器搭建及运维、域名注册及备案、数据接口实现等繁琐流程，让开发者可以专注于业务逻辑的实现，而无需理解后端逻辑及服务器运维知识，开发门槛更低，效率更高。")]),t._v(" "),s("p",[t._v("CloudBase CLI 是一个开源的命令行界面交互工具，用于帮助用户快速、方便的部署项目，管理云开发资源。")]),t._v(" "),s("h2",{attrs:{id:"安装-cloudbase-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-cloudbase-cli"}},[t._v("#")]),t._v(" 安装 CloudBase CLI")]),t._v(" "),s("h3",{attrs:{id:"使用-npm-或-yarn-适用于了解-node-的开发人员"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-npm-或-yarn-适用于了解-node-的开发人员"}},[t._v("#")]),t._v(" 使用 NPM 或 Yarn - 适用于了解 "),s("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node"),s("OutboundLink")],1),t._v(" 的开发人员")]),t._v(" "),s("h4",{attrs:{id:"node-版本要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-版本要求"}},[t._v("#")]),t._v(" Node 版本要求")]),t._v(" "),s("p",[t._v("Node.js 8.6.0+")]),t._v(" "),s("h4",{attrs:{id:"npm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[t._v("#")]),t._v(" npm")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g @cloudbase/cli\n")])])]),s("p",[t._v("由于 NPM 的源在国外，部分用户可能下载速度较慢，你可以使用下面的命令更换 NPM 源，加快 NPM 包下载速度")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry https://r.cnpmjs.org/\n")])])]),s("h4",{attrs:{id:"yarn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[t._v("#")]),t._v(" yarn")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @cloudbase/cli\n")])])]),s("p",[t._v("安装完成后，你可以使用 "),s("code",[t._v("cloudbase -v")]),t._v(" 验证是否安装成功，如果输出了类似下面的版本号，则表明 CloudBase CLI 被成功安装到您的计算机中。")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("0.5.0\n")])])]),s("h3",{attrs:{id:"二进制包-beta-适用于普通的开发人员"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二进制包-beta-适用于普通的开发人员"}},[t._v("#")]),t._v(" 二进制包（beta） - 适用于普通的开发人员")]),t._v(" "),s("p",[t._v("请到 "),s("a",{attrs:{href:"https://github.com/TencentCloudBase/cloudbase-cli/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Release"),s("OutboundLink")],1),t._v(" 下载最新的适用于您的操作系统的二进制文件。")]),t._v(" "),s("p",[t._v("Cloudbase CLI 二进制文件无需安装，可直接在终端中运行")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出帮助信息")]),t._v("\n./cloudbase -h\n\n./cloudbase.exe -h\n")])])]),s("h2",{attrs:{id:"代理设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代理设置"}},[t._v("#")]),t._v(" 代理设置")]),t._v(" "),s("p",[t._v("使用 CloudBase CLI 时，需要你的终端能够访问网络。如果你的终端无法直接访问公网，你可以设置 HTTP 代理使 CLI 能够正常使用，CLI 会读取 "),s("code",[t._v("http_proxy")]),t._v(" 或 "),s("code",[t._v("HTTP_PROXY")]),t._v(" 环境变量，自动设置网络代理服务。")]),t._v(" "),s("p",[t._v("例如，你可以在终端中运行以下命令，设置 CLI 通过 "),s("code",[t._v("http://127.0.0.1:8000")]),t._v(" 的代理服务访问网络：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HTTP_PROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://127.0.0.1:8000\n")])])]),s("p",[t._v("上面的命令只是临时设置，当你关闭终端后，代理会自动失效，下次开启终端后需要重新设置。如果你需要一直通过代理访问公网，可以把命令加入到终端的配置文件中。")]),t._v(" "),s("h2",{attrs:{id:"开通云开发服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开通云开发服务"}},[t._v("#")]),t._v(" 开通云开发服务")]),t._v(" "),s("p",[t._v("在所有开始之前，你需要登录 "),s("a",{attrs:{href:"https://console.cloud.tencent.com/tcb",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云云开发控制台"),s("OutboundLink")],1),t._v("，确保已经开通了云开发服务，并且已经创建了可以使用的环境。如果您不了解怎么创建环境，可以根据"),s("a",{attrs:{href:"https://cloud.tencent.com/document/product/876/34607",target:"_blank",rel:"noopener noreferrer"}},[t._v("此文档指导"),s("OutboundLink")],1),t._v("进行操作。")]),t._v(" "),s("h2",{attrs:{id:"登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录"}},[t._v("#")]),t._v(" 登录")]),t._v(" "),s("p",[t._v("您需要先登录您的腾讯云账号，在获取到您的授权之后，Cloudbase CLI 才能操作您的资源。Cloudbase CLI 提供了两种获取授权的方式：腾讯云-云开发控制台授权和腾讯云-云 API 密钥授权。")]),t._v(" "),s("h3",{attrs:{id:"腾讯云-云开发控制台授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#腾讯云-云开发控制台授权"}},[t._v("#")]),t._v(" 腾讯云-云开发控制台授权")]),t._v(" "),s("p",[t._v("在您的终端中输入下面的命令")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("cloudbase login\n")])])]),s("p",[t._v("CloudBase CLI 会自动打开云开发控制台获取授权，您需要点击同意授权按钮允许 CloudBase CLI 获取授权。如您没有登录，您需要登录后才能进行此操作。")]),t._v(" "),s("h3",{attrs:{id:"腾讯云-云-api-密钥授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#腾讯云-云-api-密钥授权"}},[t._v("#")]),t._v(" 腾讯云-云 API 密钥授权")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("注意")]),t._v("：腾讯云 API 密钥可以操作您名下的所有腾讯云资源，请妥善保存和定期更换密钥，当您更换密钥后，请及时删除旧密钥。")])]),t._v(" "),s("p",[t._v("首先您需要到腾讯云官网获取"),s("a",{attrs:{href:"https://console.cloud.tencent.com/cam/capi",target:"_blank",rel:"noopener noreferrer"}},[t._v("云 API 密钥"),s("OutboundLink")],1),t._v("，然后在终端中输入下面的命令：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("cloudbase login --key\n")])])]),s("p",[t._v("回车后，请按提示输入云 API 密钥的 SecretId 和 SecretKey 既可完成登录。")]),t._v(" "),s("h3",{attrs:{id:"登出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登出"}},[t._v("#")]),t._v(" 登出")]),t._v(" "),s("p",[t._v("如果你需要切换其他账号，可以使用 "),s("code",[t._v("cloudbase logout")]),t._v(" 退出登陆。")]),t._v(" "),s("h2",{attrs:{id:"创建项目与部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建项目与部署"}},[t._v("#")]),t._v(" 创建项目与部署")]),t._v(" "),s("h3",{attrs:{id:"_1-初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始化"}},[t._v("#")]),t._v(" 1. 初始化")]),t._v(" "),s("p",[t._v("您可以使用下面的命令创建一个项目，创建项目时 CloudBase CLI 根据您输入的项目名创建一个文件夹，并写入相关的配置和模板文件。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("cloudbase init\n")])])]),s("h3",{attrs:{id:"_2-编写函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-编写函数"}},[t._v("#")]),t._v(" 2. 编写函数")]),t._v(" "),s("p",[t._v("默认情况下，所有 Node 和 PHP 函数都统一存放在 "),s("code",[t._v("functions")]),t._v(" 目录下，并以函数名作为文件夹名称，如 "),s("code",[t._v("functions/cloudbase/index.js")]),t._v("。"),s("strong",[t._v("对于 Java 函数时，则需要将 jar 文件名修改为函数名称，放在 "),s("code",[t._v("functions")]),t._v(" 目录下即可，如 "),s("code",[t._v("functions/cloudbase.jar")])]),t._v("。")]),t._v(" "),s("p",[t._v("如果你想将函数存放在其他目录，你可以通过配置文件中的 "),s("code",[t._v("functionRoot")]),t._v(" 选项指定你想存放函数的目录，"),s("code",[t._v("functionRoot")]),t._v(" 选项代表了云函数文件夹相对于项目根目录的路径。")]),t._v(" "),s("p",[t._v("例如，创建一个 Node.js 函数 app，下面是 "),s("code",[t._v("functions/app/index.js")]),t._v(" 的内容")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("main")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-修改配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改配置"}},[t._v("#")]),t._v(" 3. 修改配置")]),t._v(" "),s("p",[t._v("默认情况下，项目配置存储在 "),s("code",[t._v("cloudbaserc.json")]),t._v(" 文件中，默认生成的函数配置为 Node 语言相关的配置，其他语言如 PHP，Java 等需要修改对应的 "),s("code",[t._v("handler(运行入口) 和 runtime(运行时)")]),t._v("，参考 "),s("RouterLink",{attrs:{to:"/cli/config/"}},[t._v("cloudbaserc.json 文件说明部分")]),t._v("。")],1),t._v(" "),s("p",[t._v("如果你想指定其他文件作为配置文件，可以在使用 CLI 命令时添加 "),s("code",[t._v("--config-file $configPath")]),t._v(" 参数指定配置文件，目前支持 JS 和 JSON 格式的配置文件。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"envId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"functionRoot"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"functions"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"functions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timeout"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"envVariables"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"runtime"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Nodejs8.9"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"handler"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.main"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_4-部署函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-部署函数"}},[t._v("#")]),t._v(" 4. 部署函数")]),t._v(" "),s("p",[t._v("最后，在项目根目录下（cloudbaserc.json 所在目录）运行 "),s("code",[t._v("cloudbase functions:deploy")]),t._v(" 命令，即可部署 app 函数")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("cloudbase functions:deploy app\n")])])]),s("h2",{attrs:{id:"使用说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用说明"}},[t._v("#")]),t._v(" 使用说明")]),t._v(" "),s("p",[t._v("在介绍文档中，默认省略了环境 Id，您可以使用 "),s("code",[t._v("-e")]),t._v(" 参数指定环境 Id，或者在 "),s("code",[t._v(".cloudbaserc.json")]),t._v(" 文件所在目录使用 CloudBase CLI 命令。")]),t._v(" "),s("h2",{attrs:{id:"关于云开发项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于云开发项目"}},[t._v("#")]),t._v(" 关于云开发项目")]),t._v(" "),s("p",[t._v("云开发项目是和云开发环境资源关联的实体，云开发项目聚合了云函数、数据库、文件存储等服务，您可以在云开发项目中编写函数，存储文件，并通过 CloudBase CLI 工具 快速的操作您的云函数、文件存储、数据库等资源。")]),t._v(" "),s("p",[t._v("云开发项目文件结构：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".\n├── _gitignore\n├── functions // 云函数目录\n│   └── app\n│       └── index.js\n└── cloudbaserc.json // 项目配置文件\n")])])]),s("h2",{attrs:{id:"所有命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#所有命令"}},[t._v("#")]),t._v(" 所有命令")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("cloudbase -h")]),t._v(" 查看所有可用命令")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("cloudbase -h\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Usage: cloudbase [options] [command]\n\nOptions:\n  --config-file <path>                                             设置配置文件，默认为 ./cloudbaserc.js 或 .cloudbaserc.json\n  -V, --version                                                    输出当前 CloudBase CLI 版本\n  -h, --help                                                       输出帮助信息\n\nCommands:\n  init [options]                                                   创建并初始化一个新的项目\n  login [options]                                                  登录腾讯云账号\n  logout                                                           登出腾讯云账号\n  env:list                                                         展示云开发环境信息\n  env:create <alias>                                               创建新的云开发环境\n  env:rename [options] <name>                                      修改云开发环境别名\n  env:login:list [options]                                         列出环境登录配置\n  env:login:create [options]                                       创建环境登录配置\n  env:login:update [options]                                       更新环境登录方式配置\n  env:domain:list [options]                                        列出环境的安全域名列表\n  env:domain:create [options] <domain>                             添加环境安全域名，多个以斜杠 / 分隔\n  env:domain:delete [options]                                      删除环境的安全域名\n  functions:list [options]                                         展示云函数列表\n  functions:download [options] <functionName> [dest]               下载云函数代码\n  functions:deploy [options] [functionName]                        部署云函数\n  functions:delete [options] [functionName]                        删除云函数\n  functions:detail [options] [functionName]                        获取云函数信息\n  functions:code:update [options] <functionName>                   更新云函数代码\n  functions:config:update [options] [functionName]                 更新云函数配置\n  functions:copy [options] <functionName> <newFunctionName>        拷贝云函数\n  functions:log [options] <functionName>                           打印云函数日志\n  functions:trigger:create [options] [functionName]                创建云函数触发器\n  functions:trigger:delete [options] [functionName] [triggerName]  删除云函数触发器\n  functions:invoke [options] [functionName]                        触发云端部署的云函数\n  functions:run [options]                                          本地运行云函数（当前仅支持 Node）\n  storage:upload [options] <localPath> [cloudPath]                 上传文件/文件夹\n  storage:download [options] <cloudPath> <localPath>               下载文件/文件夹，文件夹需指定 --dir 选项\n  storage:delete [options] <cloudPath>                             删除文件/文件夹，文件夹需指定 --dir 选项\n  storage:list [options] [cloudPath]                               获取文件存储的文件列表\n  storage:url [options] <cloudPath>                                获取文件临时访问地址\n  storage:detail [options] <cloudPath>                             获取文件信息\n  storage:get-acl [options]                                        获取文件存储权限信息\n  storage:set-acl [options]                                        设置文件存储权限信息\n  hosting:detail [options]                                         查看静态网站服务信息\n  hosting:deploy [options] [filePath] [cloudPath]                  部署静态网站文件\n  hosting:delete [options] [cloudPath]                             删除静态网站文件/文件夹，文件夹需指定 --dir 选项\n  hosting:list [options]                                           展示文件列表\n  server:deploy [name]                                             部署 node 服务\n  server:log [options] <name>                                      查看日志\n  server:reload <name>                                             重启 node 服务\n  server:stop <name>                                               停止应用\n  server:show                                                      查看状态\n  open [link]                                                      在浏览器中打开云开发相关连接\n  service:create [options]                                         创建 HTTP Service\n  service:delete [options]                                         删除 HTTP Service\n  service:list [options]                                           查询 HTTP Service\n  service:domain:bind [options] <domain>                           绑定 HTTP Service 域名\n  service:domain:unbind [options] <domain>                         解绑 HTTP Service 域名\n  service:domain:list [options]                                    查询 HTTP Service 域名\n\nTips:\n\n– 登录\n\n  $ cloudbase login\n\n– 初始化云开发项目\n\n  $ cloudbase init\n\n– 部署云函数\n\n  $ cloudbase functions:deploy\n\n– 查看命令使用介绍\n\n  $ cloudbase functions:log -h\n")])])]),s("h3",{attrs:{id:"编程式使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编程式使用"}},[t._v("#")]),t._v(" 编程式使用")]),t._v(" "),s("p",[t._v("CloudBase CLI 支持作为单独的 Node 模块使用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CloudBase "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@cloudbase/cli'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果已使用 cloudbase login 登录过，可以不传入 secretId、secretKey 值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cloudbase "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloudBase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("secretId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" secretKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 列出云开发所有环境")]),t._v("\ncloudbase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("编程式 API 接口详情："),s("a",{attrs:{href:"https://tencentcloudbase.github.io/2019-09-03-cli-api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("API 接口"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);