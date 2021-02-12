(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{578:function(t,s,a){"use strict";a.r(s);var v=a(14),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"运行环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行环境"}},[t._v("#")]),t._v(" 运行环境")]),t._v(" "),a("p",[t._v("云函数运行在云端 Linux 环境中，一个云函数在处理并发请求的时候会创建多个云函数实例，每个云函数实例之间相互隔离，没有公用的内存或硬盘空间。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("当前运行环境是在 CentOS 7.2 中，编写代码不应依赖特定的操作系统或特定的操作系统版本号，运行环境可能会发生变化。")])]),t._v(" "),a("p",[t._v("云函数实例的创建、管理、销毁等操作由平台自动完成。每个云函数实例都在 "),a("code",[t._v("/tmp")]),t._v(" 目录下提供了一块 512MB 的临时磁盘空间用于处理单次云函数执行过程中的临时文件读写需求。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("这块临时磁盘空间在函数执行完毕后可能被销毁，不应依赖和假设在磁盘空间存储的临时文件会一直存在。如果需要持久化的存储，请使用云存储功能。")])]),t._v(" "),a("h3",{attrs:{id:"无状态函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无状态函数"}},[t._v("#")]),t._v(" 无状态函数")]),t._v(" "),a("p",[t._v("云函数应是无状态的，幂等的，即一次云函数的执行不依赖上一次云函数执行过程中在运行环境中残留的信息。")]),t._v(" "),a("p",[t._v("为了保证负载均衡，云函数平台会根据当前负载情况控制云函数实例的数量，并且会在一些情况下重用云函数实例，这使得连续两次云函数调用如果都由同一个云函数实例运行，那么两者会共享同一个临时磁盘空间，但因为云函数实例随时可能被销毁，并且连续的请求不一定会落在同一个实例，因此云函数不应依赖之前云函数调用中在临时磁盘空间遗留的数据。总的原则即是云函数代码应是无状态的。")]),t._v(" "),a("h3",{attrs:{id:"事件模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件模型"}},[t._v("#")]),t._v(" 事件模型")]),t._v(" "),a("p",[t._v("云函数的调用采用事件触发模型，小程序端的每一次调用即触发了一次云函数调用事件，云函数平台会新建或复用已有的云函数实例来处理这次调用。同理，因为云函数间也可以相互调用，因此云函数间相互调用也是触发了一次调用事件。")]),t._v(" "),a("h3",{attrs:{id:"自动扩缩容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动扩缩容"}},[t._v("#")]),t._v(" 自动扩缩容")]),t._v(" "),a("p",[t._v("开发者无需关心云函数扩容和缩容的问题，平台会根据负载自动进行扩缩容。")])])}),[],!1,null,null,null);s.default=_.exports}}]);