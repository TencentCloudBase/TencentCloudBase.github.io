(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{259:function(_,t,a){"use strict";a.r(t);var v=a(2),r=Object(v.a)({},(function(){var _=this,t=_.$createElement,a=_._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("blockquote",[a("p",[_._v("本文由来自CloudBase的"),a("a",{attrs:{href:"https://github.com/dongyuanxin",target:"_blank",rel:"noopener noreferrer"}},[_._v("「心谭」"),a("OutboundLink")],1),_._v("同学分享。")])]),_._v(" "),a("h2",{attrs:{id:"_1-项目概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-项目概述","aria-hidden":"true"}},[_._v("#")]),_._v(" 1 项目概述")]),_._v(" "),a("p",[_._v("游戏开发，尤其是微信小游戏开发，是最近几年比较热门的话题。")]),_._v(" "),a("p",[_._v("本次「云开发」公开课，将通过实战「在线对战五子棋」，一步步带领大家，在不借助后端的情况下，利用「小程序✖云开发」，独立完成一款微信小游戏的开发与上线。")]),_._v(" "),a("h2",{attrs:{id:"_2-任务目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-任务目标","aria-hidden":"true"}},[_._v("#")]),_._v(" 2 任务目标")]),_._v(" "),a("p",[_._v("根据项目初始框架，阅读教程的同时，逐步完成棋盘绘制、音乐播放、玩家对战、输赢判定等功能，最终实现一个可以快乐玩耍的在线对战五子棋。")]),_._v(" "),a("p",[_._v("在这个过程中，会了解到Serverless的一些概念，并且实际应用它们，比如："),a("strong",[_._v("云数据库")]),_._v("、"),a("strong",[_._v("云存储")]),_._v("、"),a("strong",[_._v("云函数")]),_._v("、"),a("strong",[_._v("增值能力")]),_._v("。除了这些基本功能，还准备了更多的硬核概念与落地实践，比如："),a("strong",[_._v("实时数据库")]),_._v("、"),a("strong",[_._v("聚合搜索")]),_._v("、"),a("strong",[_._v("权限控制")]),_._v("。")]),_._v(" "),a("p",[_._v("完成开发后，上传并且设置为体验版，欢迎邀请更多人来体验。")]),_._v(" "),a("h2",{attrs:{id:"_3-准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-准备工作","aria-hidden":"true"}},[_._v("#")]),_._v(" 3 准备工作")]),_._v(" "),a("p",[_._v("从 "),a("a",{attrs:{href:"https://github.com/TencentCloudBase/Cloudbase-Examples/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[_._v("云开发案例合集"),a("OutboundLink")],1),_._v(" 中下载代码到本地：")]),_._v(" "),a("p",[_._v("找到其中的 "),a("code",[_._v("tcb-demo-gomoku.zip")]),_._v(" 并下载。")]),_._v(" "),a("h2",{attrs:{id:"_4-游戏流程图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-游戏流程图","aria-hidden":"true"}},[_._v("#")]),_._v(" 4 游戏流程图")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/TencentCloudBase/Cloudbase-Examples/raw/master/minigame/tcb-demo-gomoku/static/%E6%9E%B6%E6%9E%84%E5%9B%BE.jpg",alt:""}})]),_._v(" "),a("h2",{attrs:{id:"_5-实战任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-实战任务","aria-hidden":"true"}},[_._v("#")]),_._v(" 5 实战任务")]),_._v(" "),a("h3",{attrs:{id:"_5-1-创建云开发与小游戏环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-创建云开发与小游戏环境","aria-hidden":"true"}},[_._v("#")]),_._v(" 5.1 创建云开发与小游戏环境")]),_._v(" "),a("p",[_._v("1、打开微信IDE，点击左侧的小游戏，选择右侧的导入项目，导入之前下载的「在线对战五子棋」的目录，AppID修改为你已经注册好的小游戏AppID。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686430445_67dhgo46ds9.png/0",alt:""}})]),_._v(" "),a("p",[_._v("2、进入后，点击上方的云开发按钮。如果之前没有开通过云开发，需要开通云开发，新开通的话需要等待10～20分钟。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686451687_pdl8t1onir.png/0",alt:""}})]),_._v(" "),a("p",[_._v("3、进入「云开发/数据库」，创建新的集合，新集合的名称是"),a("code",[_._v("rooms")]),_._v("。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686465563_rx5zo815jmj.png/0",alt:""}})]),_._v(" "),a("p",[_._v("4、进入「云开发/存储」，点击“上传文件”。上传的内容是"),a("code",[_._v("/static/")]),_._v("下的"),a("code",[_._v("bgm.mp3")]),_._v(" 和 "),a("code",[_._v("fall.mp3")]),_._v("。之后的代码中会通过云存储的接口，请求文件的临时url，这样做的目的是"),a("strong",[_._v("减少用户首次进入游戏加载的静态资源")]),_._v("。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686476650_7pts6bn8fr.png/0",alt:""}})]),_._v(" "),a("h3",{attrs:{id:"_5-2-准备配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-准备配置文件","aria-hidden":"true"}},[_._v("#")]),_._v(" 5.2 准备配置文件")]),_._v(" "),a("p",[_._v("创建配置文件：")]),_._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[_._v("cp")]),_._v(" miniprogram/shared/config.example.js miniprogram/shared/config.js\n")])])]),a("p",[_._v("将关键字段的信息，换成自己账号的信息即可：")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686524751_pxxe5yawz6m.png/0",alt:""}})]),_._v(" "),a("h3",{attrs:{id:"_5-3-创建云开发接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-创建云开发接口","aria-hidden":"true"}},[_._v("#")]),_._v(" 5.3 创建云开发接口")]),_._v(" "),a("p",[_._v("打开 "),a("code",[_._v("miniprogram/shared/cloud.js")]),_._v("，在里面初始化云开发能力，并且对外暴露云数据库以及聚合搜索的API。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686536274_yusm5uxcxab.png/0",alt:""}})]),_._v(" "),a("h3",{attrs:{id:"_5-4-获取云存储资源的链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-获取云存储资源的链接","aria-hidden":"true"}},[_._v("#")]),_._v(" 5.4 获取云存储资源的链接")]),_._v(" "),a("p",[_._v("为了减少用户首屏加载的静态资源，音乐资源并没有放在"),a("code",[_._v("miniprogram")]),_._v("目录下，而是放在了云存储中，通过调用云存储的api接口，来返回静态资源的临时链接。")]),_._v(" "),a("p",[_._v("在 "),a("code",[_._v("miniprogram/modules/music.js")]),_._v("中，会调用资源接口，获取资源链接：")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686547006_efn2rd6bu4f.png/0",alt:""}})]),_._v(" "),a("p",[a("code",[_._v("getTempFileURL")]),_._v("函数属于云开发相关，因此放在了 "),a("code",[_._v("miniprogram/shared/cloud.js")]),_._v("中。这里只需要临时链接"),a("code",[_._v("tempFileURL")]),_._v("属性，其它返回值直接过滤调即可。")]),_._v(" "),a("p",[_._v("为了方便外面调用，promise内部不再用reject抛错。对于错误异常，返回空字符串。这样，加载失败的资源不会影响正常资源的加载和Promise.all中逻辑进行。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686556058_24v2t5tkr4c.png/0",alt:""}})]),_._v(" "),a("h3",{attrs:{id:"_5-5-游戏进入与身份判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-游戏进入与身份判断","aria-hidden":"true"}},[_._v("#")]),_._v(" 5.5 游戏进入与身份判断")]),_._v(" "),a("p",[_._v("根据前面的流程图我们可以看到，游戏玩家的身份是分为owner与player。它们的含义如下：")]),_._v(" "),a("ul",[a("li",[_._v("owner：玩家进入游戏后，查找是否有空闲房间，如果不存在空闲房间，那么就会主动创建新的空闲房间。那么对于新创建的房间，玩家就是owner。")]),_._v(" "),a("li",[_._v("player：玩家进入游戏后，查找是否有空闲房间，如果存在空闲房间，那么就加入空闲房间。那么对于空闲房间，玩家就是player。")])]),_._v(" "),a("p",[_._v("判断的依据就是 "),a("code",[_._v("judgeIdentity")]),_._v(" 方法中，读取云数据库集合中的rooms的记录。如果存在多个空闲房间，需要选取创建时间最近的一个房间。因此，这里需要用到「聚合搜索」的逻辑。")]),_._v(" "),a("p",[_._v("聚合搜索的条件，在这里有3个：")]),_._v(" "),a("ol",[a("li",[_._v("标记人数的字段，是否为1")]),_._v(" "),a("li",[_._v("创建时间倒叙排序")]),_._v(" "),a("li",[_._v("只选择1个")])]),_._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686565847_3yze316092d.png/0",alt:""}})]),_._v(" "),a("h3",{attrs:{id:"_5-6-创建新房间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-创建新房间","aria-hidden":"true"}},[_._v("#")]),_._v(" 5.6 创建新房间")]),_._v(" "),a("p",[_._v("在上述的身份判断函数逻辑中，如果聚合搜索查询的结果为空，说明没有空闲房间，玩家需要作为owner来创建新的房间，等待其它玩家加入。")]),_._v(" "),a("p",[_._v("创建房间的逻辑就是将约定好的字段，放进云数据库的记录中。这些字段有：")]),_._v(" "),a("ul",[a("li",[_._v("roomid<"),a("code",[_._v("String")]),_._v(">: 6位房间号，"),a("strong",[_._v("唯一")])]),_._v(" "),a("li",[_._v("nextcolor<"),a("code",[_._v('"white" | "black"')]),_._v(">: 下一步是白棋/黑棋走")]),_._v(" "),a("li",[_._v("chessmen<"),a("code",[_._v("String")]),_._v(">: 编码后的棋盘数据")]),_._v(" "),a("li",[_._v("createTimestamp<"),a("code",[_._v("String")]),_._v(">: 记录创建时间戳，精确到ms")]),_._v(" "),a("li",[_._v("people<"),a("code",[_._v("Number")]),_._v(">: 房间人数")])]),_._v(" "),a("p",[_._v("是的，你可能注意到了，这里需要保证 roomid 是不重复的。因此本地生成的随机roomid，需要先调用云数据库的查询接口，检测是否存在。如果存在，那么递归调用，重新生成随机字符串。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686576953_tjr37rmv9ae.png/0",alt:""}})]),_._v(" "),a("h3",{attrs:{id:"_5-7-监听玩家进入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-监听玩家进入","aria-hidden":"true"}},[_._v("#")]),_._v(" 5.7 监听玩家进入")]),_._v(" "),a("p",[_._v("对于owner身份来说，除了要创建新房间，还需要在创建后监听player身份的玩家进入游戏。")]),_._v(" "),a("p",[_._v("对于player身份的玩家进入游戏后，会更新记录中的people字段（1 => 2）。这时候就需要利用「实时数据库」的功能，监听远程记录的people字段变化。")]),_._v(" "),a("p",[_._v("代码实现上，调用"),a("code",[_._v("watch")]),_._v("方法，并且传递"),a("code",[_._v("onChange")]),_._v("函数参数。一旦有任何风吹草动，都可以在"),a("code",[_._v("onChange")]),_._v("回调函数中获得。对于传递给回调函数的参数，有两个比较重要：")]),_._v(" "),a("ul",[a("li",[_._v("docChanges<"),a("code",[_._v("Array")]),_._v(">: 数组中的每一项对应每条记录的变化类型，变化类型有init、update、delete等。")]),_._v(" "),a("li",[_._v("docs<"),a("code",[_._v("Array")]),_._v(">: 数组中的每一项对应每条记录的当前数据。")])]),_._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686591306_os588ni3m8.png/0",alt:""}})]),_._v(" "),a("h3",{attrs:{id:"_5-8-越权更新字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-8-越权更新字段","aria-hidden":"true"}},[_._v("#")]),_._v(" 5.8 越权更新字段")]),_._v(" "),a("p",[_._v("对于player身份来说，进入房间后，既不需要「创建新房间」，也不需要「监听玩家进入」。但需要更新记录的people字段。由于记录是由owner身份的玩家创建的，而云数据库只有以下4种权限：")]),_._v(" "),a("ul",[a("li",[_._v("所有用户可读，仅创建者可读写")]),_._v(" "),a("li",[_._v("仅创建者可读写")]),_._v(" "),a("li",[_._v("所有用户可读")]),_._v(" "),a("li",[_._v("所有用户不可读写")])]),_._v(" "),a("p",[_._v("以上4种权限，并没有「所有用户可读写」。因此，对于越权读写的情况，需要通过调用云函数来以“管理员”的权限实现。在 "),a("code",[_._v("cloudfunction")]),_._v(" 中创建 "),a("code",[_._v("updateDoc")]),_._v(" 云函数，接收前端传来的collection、docid、data字段。对于data字段来说，就是数据记录的最新更新数据。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686600499_7jw2an2f8er.png/0",alt:""}})]),_._v(" "),a("p",[_._v("在小游戏中，通过"),a("code",[_._v("wx.cloud.callFunction")]),_._v("来调用云函数。传入的data字段指明被调用的云函数，传入的data字段可以在云函数的回调函数的event参数中访问到（如上图所示）。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686609491_51yce50b2tf.png/0",alt:""}})]),_._v(" "),a("h3",{attrs:{id:"_5-9-落子更新逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-9-落子更新逻辑","aria-hidden":"true"}},[_._v("#")]),_._v(" 5.9 落子更新逻辑")]),_._v(" "),a("p",[_._v("不论对于player还是owner身份，都需要处理落子的逻辑。落子逻辑中，下面的两种情况是属于无效落子：")]),_._v(" "),a("ol",[a("li",[_._v("点击位置已经有棋子")]),_._v(" "),a("li",[_._v("对方还未落子，目前依然处于等待情况")])]),_._v(" "),a("p",[_._v("对于以上两种情况，处理的逻辑分别是：")]),_._v(" "),a("ol",[a("li",[_._v("棋盘状态保存在内部类中，调用落子的函数，会返回是否成功的字段标识")]),_._v(" "),a("li",[_._v("只有监听到远程棋盘更新后，才会打开本地的锁，允许落子；落子后，会重新上锁")])]),_._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686620401_gfziqov00gm.png/0",alt:""}})]),_._v(" "),a("p",[_._v("落子成功后，要在本地判断是否胜利。如果胜利，需要调用退出的逻辑。但无论是否胜利，都要将本地的最新状态更新到云端。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686628911_zv5160zwrhb.png/0",alt:""}})]),_._v(" "),a("h3",{attrs:{id:"_5-10-监听远程棋盘更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-10-监听远程棋盘更新","aria-hidden":"true"}},[_._v("#")]),_._v(" 5.10 监听远程棋盘更新")]),_._v(" "),a("p",[_._v("不论对于player还是owner身份的玩家，都需要监听远程棋盘的更新逻辑。当远程棋盘字段更新时，本地根据最新的棋盘状态，重绘整个棋盘。并且进行输赢判定，如果可以判定输赢，则退出游戏；否则，打开本地的锁，玩家可以落子。")]),_._v(" "),a("p",[a("strong",[_._v("因为不同身份均需要监听，因此这一块的监听逻辑可以复用")]),_._v("。"),a("strong",[_._v("不同的是，两种身份的监听启动时间不一样")]),_._v("。owner身份需要等待player身份玩家进入游戏后才开启棋盘监听；player身份是更新了people字段后，开启棋盘监听。")]),_._v(" "),a("p",[_._v("在监听逻辑中，需要判断远程更新的字段是否是 chessmen，这是通过前面提及的 dataType 来实现的。还徐哟啊判断记录中的nextcolor字段是否和本地的color一样，来决定是否打开本地的锁。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686878918_0fvrbmcw7xw.png/0",alt:""}})]),_._v(" "),a("p",[_._v("如果上述的两个条件均满足，则执行更新本地棋盘、判定输赢、打开本地锁的逻辑。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686968256_u9wfsb9tcjj.png/0",alt:""}})]),_._v(" "),a("h3",{attrs:{id:"_5-11-游戏结束与退出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-11-游戏结束与退出","aria-hidden":"true"}},[_._v("#")]),_._v(" 5.11 游戏结束与退出")]),_._v(" "),a("p",[_._v("每次需要判定输赢的地方，如果可以判定输赢，那么都会走到游戏退出逻辑。退出的逻辑分为2个部分，第1个是给用户提示，第2个是调用云函数清空记录。")]),_._v(" "),a("p",[_._v("第1个逻辑中用户提示，需要判定用户胜负状态：")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686982496_8w7g8tn7owp.png/0",alt:""}})]),_._v(" "),a("p",[_._v("第2个逻辑中清除记录的原因是为了方便调试，对于真正的业务场景，一般不会删除历史数据，方便问题定位。同时，这也是一个越权操作，需要调用云函数来实现。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686993095_7g1lsvvydsn.png/0",alt:""}})]),_._v(" "),a("h2",{attrs:{id:"课程完整源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课程完整源码","aria-hidden":"true"}},[_._v("#")]),_._v(" 课程完整源码")]),_._v(" "),a("p",[_._v("课程源码可以在 https://github.com/TencentCloudBase/Cloudbase-Examples/releases/latest 找到 tcb-demo-gomoku 下载")]),_._v(" "),a("h2",{attrs:{id:"联系我们"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系我们","aria-hidden":"true"}},[_._v("#")]),_._v(" 联系我们")]),_._v(" "),a("p",[_._v("更多云开发使用技巧及 大前端Serverless 行业动态，扫码关注我们~")]),_._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190603_1559545575934_lettsbvkvdn.jpeg/0",width:"200px"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);