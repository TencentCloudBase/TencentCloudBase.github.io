(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{360:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"函数基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数基础","aria-hidden":"true"}},[s._v("#")]),s._v(" 函数基础")]),s._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("⚠️ 注意事项")]),s._v(" "),t("p",[s._v("所有 CloudBase CLI 命令均在配置文件所在目录执行。")])]),s._v(" "),t("p",[s._v("云函数是一段运行在云端的代码，无需管理服务器，在开发工具内编写、一键上传部署即可运行后端代码。云开发中的云函数可让用户将自身的业务逻辑代码上传，并通过云开发的调用触发函数，从而实现后端的业务运作。")]),s._v(" "),t("h2",{attrs:{id:"查看函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看函数","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看函数")]),s._v(" "),t("p",[s._v("您可以使用下面的命令列出所有云函数，查看函数的基本信息：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("cloudbase functions:list\n")])])]),t("p",[s._v("您会得到类似下面的输出：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("┌─────────┬───────────┬───────────┬─────────────────────┬─────────────────────┬──────────┐\n│    Id   │   Name    │  Runtime  │       AddTime       │       ModTime       │  Status  │\n├─────────┼───────────┼───────────┼─────────────────────┼─────────────────────┼──────────┤\n│ lam-xxx │   hello   │ Nodejs8.9 │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-08-20 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":27:23 │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-08-20 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":27:23 │ 部署完成  │\n├─────────┼───────────┼───────────┼─────────────────────┼─────────────────────┼──────────┤\n│ lam-xxx │   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("    │   Java8   │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-08-19 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":31:52 │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-08-19 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":15:39 │ 部署完成  │\n├─────────┼───────────┼───────────┼─────────────────────┼─────────────────────┼──────────┤\n│ lam-xxx │    db     │    Php7   │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-08-09 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":09:09 │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-08-09 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":41:41 │ 部署完成  │\n└─────────┴───────────┴───────────┴─────────────────────┴─────────────────────┴──────────┘\n")])])]),t("h3",{attrs:{id:"指定返回条数和偏移量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指定返回条数和偏移量","aria-hidden":"true"}},[s._v("#")]),s._v(" 指定返回条数和偏移量")]),s._v(" "),t("p",[s._v("默认情况下，"),t("code",[s._v("functions:list")]),s._v(" 命令只会列出前 20 个函数，如果你的函数较多，需要列出其他的函数，你可以通过下面的选项指定命令返回的数据长度以及数据的偏移量：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("-l, --limit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("limit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("    返回数据长度，默认值为 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n-o, --offset "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("offset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  数据偏移量，默认值为 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),t("p",[s._v("如：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回前 10 个函数的信息")]),s._v("\ncloudbase functions:list -l "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回第 3 - 22 个函数的信息（包含 3 和 22）")]),s._v("\ncloudbase functions:list -l "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" -o "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),t("h2",{attrs:{id:"下载云函数代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载云函数代码","aria-hidden":"true"}},[s._v("#")]),s._v(" 下载云函数代码")]),s._v(" "),t("p",[s._v("您可以通过下面的命令下载云函数代码：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("cloudbase functions:download "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("functionName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("destPath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("默认情况下，函数代码会下载到 "),t("a",{attrs:{href:"https://tencentcloudbase.github.io/2019-09-03-cli-config/",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("functionRoot")]),t("OutboundLink")],1),s._v(" 下，以函数名称作为存储文件夹，你可以指定函数存放的文件夹地址，函数的所有代码文件会直接下载到指定的文件夹中。")]),s._v(" "),t("h2",{attrs:{id:"部署函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署函数","aria-hidden":"true"}},[s._v("#")]),s._v(" 部署函数")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("注意")]),s._v(" "),t("code",[s._v("functions:deploy")]),s._v(" 命令必须在包含 "),t("code",[s._v("cloudbaserc.json")]),s._v(" 配置文件的项目根目录下执行。")])]),s._v(" "),t("p",[s._v("您可以通过下面的命令部署函数：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("cloudbase functions:deploy "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("functionName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[t("code",[s._v("functions:deploy")]),s._v(" 会读取 "),t("code",[s._v("cloudbaserc.json")]),s._v(" 文件中指定函数的配置，"),t("code",[s._v("functions:deploy")]),s._v(" 命令会完成以下几项工作：")]),s._v(" "),t("ol",[t("li",[s._v("将函数打包成压缩文件，并上传函数代码。")]),s._v(" "),t("li",[s._v("部署函数配置，包括超时时间、网络配置等。")]),s._v(" "),t("li",[s._v("部署函数触发器。")])]),s._v(" "),t("p",[s._v("举个例子 🌰：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署 app 函数")]),s._v("\ncloudbase functions:deploy app\n")])])]),t("p",[s._v("使用 "),t("code",[s._v("functions:deploy")]),s._v(" 时，"),t("code",[s._v("functionName")]),s._v(" 选项是可以省略的，当 "),t("code",[s._v("functionName")]),s._v(" 省略时，Cloudbase CLI 会部署配置文件中的全部函数：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署配置文件中的全部函数")]),s._v("\ncloudbase functions:deploy\n")])])]),t("h3",{attrs:{id:"覆盖同名函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#覆盖同名函数","aria-hidden":"true"}},[s._v("#")]),s._v(" 覆盖同名函数")]),s._v(" "),t("p",[s._v("部署函数时，很可能会遇到已经存在同名云函数的情况，此时 Cloudbase CLI 会终止部署，询问是否覆盖同名函数，您可以选择覆盖已有的云函数或者终止部署，覆盖操作将会删除原有的云函数，并创建新的云函数。")]),s._v(" "),t("p",[s._v("如果您确定要覆盖可能存在的同名云函数，您可以在命令后附加 "),t("code",[s._v("--force")]),s._v(" 选项指定 Cloudbase CLI 覆盖已存在的云函数。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("cloudbase functions:deploy dev --force\n")])])]),t("p",[t("strong",[s._v("注意")]),s._v("：覆盖函数时，也会覆盖函数的配置和触发器。")]),s._v(" "),t("h3",{attrs:{id:"默认选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认选项","aria-hidden":"true"}},[s._v("#")]),s._v(" 默认选项")]),s._v(" "),t("p",[s._v("Cloudbase CLI 为 Node.js 云函数提供了默认选项，你在部署 Node.js 云函数时可以不用指定云函数的配置，使用默认配置即可部署云函数。")]),s._v(" "),t("p",[s._v("云函数默认配置：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 超时时间 5S")]),s._v("\n    timeout"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 运行时")]),s._v("\n    runtime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Nodejs8.9'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自动安装依赖")]),s._v("\n    installDependency"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  handler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'index.main'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 忽略 node_modules 目录")]),s._v("\n  ignore"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node_modules'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node_modules/**/*'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.git'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"触发函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#触发函数","aria-hidden":"true"}},[s._v("#")]),s._v(" 触发函数")]),s._v(" "),t("p",[s._v("您可以在本地通过 Cloudbase CLI 直接触发您的云函数：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 触发 app 函数")]),s._v("\ncloudbase functions:invoke app\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 触发配置文件中的全部函数")]),s._v("\ncloudbase functions:invoke\n")])])]),t("h2",{attrs:{id:"查看函数详情"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看函数详情","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看函数详情")]),s._v(" "),t("p",[s._v("前面提到的 "),t("code",[s._v("functions:list")]),s._v(" 命令只能查看函数的简单信息，如果您想查看函数的详细信息，您可以使用下面的命令：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 app 函数的详情")]),s._v("\ncloudbase functions:detail app\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看配置文件中的所有函数的详情")]),s._v("\ncloudbase functions:detail\n")])])]),t("p",[s._v("输出")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("\n状态：部署完成\n代码大小（B）：1695\n环境变量"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("：key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value\n函数名称：test\n执行方法：index.main\n内存配置"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("MB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("：256\n修改时间：2019-08-19 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":15:39\n环境 Id：dev-xxx\n运行环境：Nodejs8.9\n超时时间"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("：20\n网络配置：无\n触发器：\nmyTrigger："),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cron"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0 0 2 1 * * *"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n函数代码（Java 函数以及入口大于 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" M 的函数不会显示）：\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'use strict'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nexports.main "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" async "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("event, context, callback"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console.log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello world'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"删除函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除函数","aria-hidden":"true"}},[s._v("#")]),s._v(" 删除函数")]),s._v(" "),t("p",[s._v("您可以通过下面的命令删除函数")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 app 函数")]),s._v("\ncloudbase functions:delete app\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除配置文件中的所有的函数")]),s._v("\ncloudbase functions:delete\n")])])]),t("h2",{attrs:{id:"复制函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制函数","aria-hidden":"true"}},[s._v("#")]),s._v(" 复制函数")]),s._v(" "),t("p",[s._v("您可以通过下面的命令快速复制一个已经存在的函数：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制 app 函数为 app2 函数")]),s._v("\nfunctions:copy app app2\n")])])]),t("p",[s._v("使用 "),t("code",[s._v("functions:copy")]),s._v(" 命令时需要指定原函数名称以及复制后新的函数名称。当前环境 Id 和目标环境环境 Id 是可选的，如果没有指定目标环境 Id，函数会被复制到当前环境中。")]),s._v(" "),t("p",[s._v("如果新函数的名称已经存在，则复制操作会被终止。如果你想要覆盖已经存在的函数，你可以使用下面的命令")]),s._v(" "),t("h3",{attrs:{id:"覆盖同名函数-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#覆盖同名函数-2","aria-hidden":"true"}},[s._v("#")]),s._v(" 覆盖同名函数")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制 app 函数为 app2 函数，如果 app2 函数存在，覆盖已经存在的 app2 函数")]),s._v("\nfunctions:copy app app2 --force\n")])])]),t("p",[t("strong",[s._v("注意")]),s._v("：复制函数操作不会复制函数的函数的触发器。")])])}),[],!1,null,null,null);a.default=e.exports}}]);