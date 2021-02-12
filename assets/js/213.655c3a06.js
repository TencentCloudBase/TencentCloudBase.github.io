(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{482:function(t,e,v){"use strict";v.r(e);var r=v(14),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"入门须知"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#入门须知"}},[t._v("#")]),t._v(" 入门须知")]),t._v(" "),v("h2",{attrs:{id:"概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),v("p",[t._v("云开发是腾讯云为移动开发者提供的一站式后端云服务，可用于开发多种客户端。同时，云开发支持多端web开发。帮助使用者免运维、无服务器快速上线web服务，也可以支持跨平台服务。")]),t._v(" "),v("p",[t._v("关于跨平台支持，云开发的云函数服务、数据库服务、文件存储服务可以通过多种调用方式支持多端调用，可以同时支撑多端的业务联动。")]),t._v(" "),v("p",[t._v("本教程主要通过一些实际的项目，拆分讲解"),v("strong",[t._v("如何完全使用云开发的能力来部署并上线一个动态的web项目。")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("无论你之前是否具备云开发的使用能力。在本教程开始时，都需要同步一下如下脉络，便于你更好的理解和使用云开发")])]),t._v(" "),v("h2",{attrs:{id:"调用方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#调用方式"}},[t._v("#")]),t._v(" 调用方式")]),t._v(" "),v("p",[t._v("云开发是集成的一站式后端云服务，包含多种调用方式：")]),t._v(" "),v("h4",{attrs:{id:"一、使用sdk调用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、使用sdk调用"}},[t._v("#")]),t._v(" 一、使用SDK调用：")]),t._v(" "),v("p",[t._v("微信小程序使用"),v("a",{attrs:{href:"https://tencentcloudbase.github.io/2019-09-28-MINIPROGRAM-SDK-introduction/",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序SDK"),v("OutboundLink")],1),t._v("做云开发统一调用入口；目前云开发还提供"),v("a",{attrs:{href:"https://tencentcloudbase.github.io/2019-09-28-WEB-SDK-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript SDK"),v("OutboundLink")],1),t._v("和"),v("a",{attrs:{href:"https://tencentcloudbase.github.io/docs/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/3.SDK%E6%96%87%E6%A1%A3/1.%E5%AE%A2%E6%88%B7%E7%AB%AFSDK/2.FLUTTER%20SDK/0.%E6%A6%82%E8%BF%B0.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter SDK"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("这些SDK使用的特点是：")]),t._v(" "),v("ul",[v("li",[t._v("必须进行初始化操作，无初始化不能使用")]),t._v(" "),v("li",[t._v("一个端中只能存在一个云开发环境调用")])]),t._v(" "),v("h4",{attrs:{id:"二、使用http触发进行调用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、使用http触发进行调用"}},[t._v("#")]),t._v(" 二、使用HTTP触发进行调用：")]),t._v(" "),v("p",[t._v("为了能够更加灵活的使用云开发的云函数能力，满足更多开发需求。云函数可以对外提供HTTP 访问服务，让开发者可以通过HTTP访问到自己的云开发资源。")]),t._v(" "),v("p",[t._v("也就是说，云开发中的云函数多了一种调用方式，可以用端中"),v("strong",[t._v("正常的request请求")]),t._v("来触发云函数。")]),t._v(" "),v("p",[t._v("这种情况下的云函数可以获取包括headers字段在内的请求体内容，更加灵活的应对各种调用需要。")]),t._v(" "),v("p",[t._v("同时云函数可以返回 string、object、number 等类型的数据，或者返回"),v("a",{attrs:{href:"https://tencentcloudbase.github.io/2019-09-03-access-function-by-http/#%E4%BA%91%E5%87%BD%E6%95%B0%E7%9A%84%E8%BF%94%E5%9B%9E%E5%80%BC",target:"_blank",rel:"noopener noreferrer"}},[t._v("集成响应"),v("OutboundLink")],1),t._v("，随后云接入会将返回值转化为正常的 HTTP 响应。")]),t._v(" "),v("p",[t._v("具体可以访问"),v("a",{attrs:{href:"https://tencentcloudbase.github.io/2019-09-03-access-function-by-http",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用HTTP访问云函数"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("云函数使用HTTP触发具体操作，访问"),v("a",{attrs:{href:"https://tencentcloudbase.github.io/2019-09-03-hosting-nodejs-server/",target:"_blank",rel:"noopener noreferrer"}},[t._v("托管 Node.js 服务"),v("OutboundLink")],1),t._v("，PHP服务端同NodeJS部署方式一致并且可用。")]),t._v(" "),v("p",[t._v("此种方法的特点是：")]),t._v(" "),v("ul",[v("li",[t._v("请求和返回更加灵活")]),t._v(" "),v("li",[t._v("不需要客户端进行任何初始化服务")]),t._v(" "),v("li",[t._v("请求和返回大小依然遵从云函数的限制")]),t._v(" "),v("li",[t._v("不能进行直接操作数据库和文件存储")])]),t._v(" "),v("h4",{attrs:{id:"三、函数定时-定期触发"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、函数定时-定期触发"}},[t._v("#")]),t._v(" 三、函数定时/定期触发")]),t._v(" "),v("p",[t._v("已配置定时触发器的云函数，会在相应时间点被自动触发，函数的返回结果不会返回给调用方。此种调用方式主要用于服务数据的维护，消息发送等业务。")]),t._v(" "),v("p",[t._v("此种方法的特点是：")]),t._v(" "),v("ul",[v("li",[t._v("定时执行，自动执行，没有外部干预")]),t._v(" "),v("li",[t._v("无调用方，执行后无返回结果")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("在WEB端的支持上可以使用"),v("strong",[t._v("SDK调用")]),t._v("和"),v("strong",[t._v("HTTP触发调用")]),t._v("两种方式，与云开发做数据交互。")])]),t._v(" "),v("h2",{attrs:{id:"认证方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#认证方式"}},[t._v("#")]),t._v(" 认证方式")]),t._v(" "),v("p",[v("strong",[t._v("SDK调用")]),t._v("在正式使用之前需要初始化；因为云开发资源在客户端的调用需要一层认证保护，避免资源被盗用和滥用的风险，所以初始化流程中包含登录操作。")]),t._v(" "),v("p",[v("strong",[t._v("需要注意的是，HTTP触发和定时触发不需要认证；认证只在SDK调用中被用到")])]),t._v(" "),v("p",[t._v("目前云开发主要提供的认证方式有以下几个：")]),t._v(" "),v("h4",{attrs:{id:"一、微信授权"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、微信授权"}},[t._v("#")]),t._v(" 一、微信授权：")]),t._v(" "),v("p",[t._v("包括微信公众平台（公众号网页）和开放平台（普通网站应用）的网页授权，具体表现形态就是在打开SDK支持的Web或者应用时，需要进行微信用户授权，授权成功后才可以使用云开发功能性接口。")]),t._v(" "),v("p",[t._v("具体使用可以访问:"),v("a",{attrs:{href:"https://cloud.tencent.com/document/product/876/34609",target:"_blank",rel:"noopener noreferrer"}},[t._v("实例教程"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("实例教程中展示了整个微信平台的授权接入操作，具体的一些细节可能有过时，敬请期待详细关于微信授权的教程。")]),t._v(" "),v("p",[t._v("此认证方式主要应用于：微信H5，公众号业务网页开发，依赖微信用户体系的web和其他端。")]),t._v(" "),v("p",[t._v("此认证方式主要缺点是：初始使用需要微信扫码授权，不适用于展示型的web网页以及游客端。")]),t._v(" "),v("h4",{attrs:{id:"二、自定义登录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、自定义登录"}},[t._v("#")]),t._v(" 二、自定义登录：")]),t._v(" "),v("p",[t._v("自定义登录是开发者自行控制生成用户唯一身份ID的一种认证方式，具体表现形式就是开发者提供一个自定义的Id作为用户的唯一身份标识，然后使用服务端SDK内置的Ticket生成接口，产生Ticket；之后将Ticket作为登录凭据发送给客户端SDK进行登录。")]),t._v(" "),v("p",[v("strong",[t._v("此认证方式主要应用于：")]),t._v(" 有固定使用用户的B2C应用开发，账号注册登录类的应用开发。")]),t._v(" "),v("p",[t._v("一开始的服务端发送给客户端Ticket的流程，可以使用"),v("strong",[t._v("HTTP触发云函数")]),t._v("来实现；或者通过匿名登录转换正式用户来达成。")]),t._v(" "),v("p",[v("strong",[t._v("此认证方式主要缺点是：")]),t._v(" 需要完备服务端的用户管理体系，无第三方用户数据来源。")]),t._v(" "),v("h4",{attrs:{id:"三、匿名登录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、匿名登录"}},[t._v("#")]),t._v(" 三、匿名登录：")]),t._v(" "),v("p",[t._v("相比于自定义登录来讲，匿名登录不同点在于"),v("strong",[t._v("服务端提供用户ID生成Ticket环节")]),t._v("。")]),t._v(" "),v("p",[t._v("云开发直接生成用户ID，这种ID和自定义登录时自定义的用户ID类似，只不过是保留在云开发环境中，开发者无法直接在云函数请求数据中获取到，需要自行传入才可以。")]),t._v(" "),v("p",[t._v("匿名登录的用户也可以转成正式用户，目前仅支持转为使用自定义登录方式的用户。")]),t._v(" "),v("p",[v("strong",[t._v("匿名登录主要特点有：")])]),t._v(" "),v("ul",[v("li",[t._v("使用临时匿名，用户可以无需强制登录也可访问开发者的应用，开发者使用安全规则设置数据库和云存储的访问规则，匿名用户的数据会持续保留，直到开发者删除。")]),t._v(" "),v("li",[t._v("当匿名用户需注册应用，可以将匿名用户转成永久用户，匿名用户产生的数据转移到正式用户下，匿名转为正式用户后，将使用自定义登录方式登录。")])]),t._v(" "),v("p",[v("strong",[t._v("此认证方式结合前两种认证方式，可以实现对目前的大部分应用形态的支持。")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("在确定使用一个认证方式之前，需要前往"),v("a",{attrs:{href:"https://console.cloud.tencent.com/tcb/user",target:"_blank",rel:"noopener noreferrer"}},[t._v("控制台-用户管理"),v("OutboundLink")],1),t._v("-登录设置中选定，可以同时支持多种登录方式，开发应用到不同的端。\n关于认证方式的具体使用和开发过程，请访问"),v("a",{attrs:{href:"https://cloud.tencent.com/document/product/876/34660",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"静态网站"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#静态网站"}},[t._v("#")]),t._v(" 静态网站")]),t._v(" "),v("p",[t._v("由于云开发为集成的一体化后端云服务，主要提供后端支持。")]),t._v(" "),v("p",[t._v("对于小程序、移动APP这种C类应用，有小程序应用分发服务和应用商店服务可以下发给用户使用。")]),t._v(" "),v("p",[t._v("而传统静态Web网页B类应用，需要专门的网页服务器来担任分发任务，这就需要用户自己承担这个任务。")]),t._v(" "),v("p",[t._v("云开发作为一体化的云服务，集成了静态网站服务，为开发者提供静态网页托管的能力，静态资源（HTML、CSS、JavaScript、字体等）的分发由对象存储 COS 和拥有多个边缘网点的 CDN 提供支持。")]),t._v(" "),v("p",[t._v("开发者可以将Web网页部署到云开发的静态网站服务中，不需要自己部署其他服务器。")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("⚠️ 注意事项")]),t._v(" "),v("p",[t._v("仅有付费方式为按量付费的环境可开通静态网页托管能力，预付费方式环境不可开通。\n云开发的静态网页托管能力，目前在开通环境时，静态网页托管服务不会直接开通，而是需要您在环境中单独开通。")])]),t._v(" "),v("p",[t._v("开发者使用CLI工具，将在本地编写的静态网页部署到云开发静态网页托管上")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("- localPath：本地静态网站文件夹\n- cloudPath：云端路径\n- envId：是云开发环境ID\n$ cloudbase hosting:deploy localPath cloudPath -e envId\n")])])]),v("p",[t._v("关于更多部署静态网站操作以及注意事项，请查看"),v("a",{attrs:{href:"https://tencentcloudbase.github.io/docs/%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7/5.%E9%9D%99%E6%80%81%E7%BD%91%E7%AB%99.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("说明文档"),v("OutboundLink")],1),t._v("。")]),t._v(" "),v("hr"),t._v(" "),v("p",[t._v("静态网站提供云开发的默认域名，有默认限速：10K。当您需正式对外开放网站时，请使用您自己注册的域名，添加自定义域名使用。")]),t._v(" "),v("p",[t._v("进入"),v("a",{attrs:{href:"https://console.cloud.tencent.com/tcb/hosting",target:"_blank",rel:"noopener noreferrer"}},[t._v("静态网站控制台"),v("OutboundLink")],1),t._v("，选择【设置】，单击【添加域名】。支持一个默认的静态网站域名,此域名支持 HTTP 与 HTTPS。")]),t._v(" "),v("h2",{attrs:{id:"关于教程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于教程"}},[t._v("#")]),t._v(" 关于教程")]),t._v(" "),v("p",[t._v("在你了解和清楚云开发的调用、认证方式以及静态网站的作用和意义之后。就可以正式的进行Web端应用的开发了。")]),t._v(" "),v("p",[t._v("关于云数据库、云存储、云函数的开发和示例资料请访问"),v("a",{attrs:{href:"https://tencentcloudbase.github.io/2019-10-16-base-feature",target:"_blank",rel:"noopener noreferrer"}},[t._v("云开发文档"),v("OutboundLink")],1)]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("⚠️ 注意事项")]),t._v(" "),v("p",[t._v("在正式开发WEB应用前，需要有云开发在客户端以及服务端的开发基础；如果你有小程序·云开发的使用经验，你将很轻松。")])]),t._v(" "),v("p",[t._v("本教程将以多种应用场景的Web应用项目来进行实际操作和演练。")]),t._v(" "),v("p",[t._v("这些应用项目涉及到所有调用方式以及认证方式，帮助学习者能够更低成本的入门。")]),t._v(" "),v("h4",{attrs:{id:"项目列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#项目列表"}},[t._v("#")]),t._v(" 项目列表：")]),t._v(" "),v("p",[v("strong",[t._v("FILE-S文件转储服务")]),t._v("：匿名登录认证方式；SDK触发、HTTP触发、定时触发三种调用方式。")])])}),[],!1,null,null,null);e.default=_.exports}}]);