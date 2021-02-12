(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{620:function(t,e,a){"use strict";a.r(e);var n=a(14),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[t._v("从一个较早的小程序开发者到第一批使用小程序·云开发的开发者，这期间一直在关注关于小程序各方面的更新，同时也用小程序·云开发做了几款产品，其中包括上次分享的"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg3NTA1NjcyNQ==&mid=2247483701&idx=1&sn=0176e67b7647f6632fe0ce1721beb961&chksm=cec61a0ff9b1931963c221a5fdb3c58ef7a22cf0fc4c58e120672943c9c5d29f63ec65b7189d&token=1242218487&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("随手记Lite小程序"),a("OutboundLink")],1),t._v("，比较上次，这次分享的技术点相对更加全面和实用一些。")]),t._v(" "),a("blockquote",[a("p",[t._v("涉及的技术点有：")])]),t._v(" "),a("ul",[a("li",[t._v("数据上传、数据更新、分页读取、数据删除，AI智能名片识别读取。")]),t._v(" "),a("li",[t._v("单图上传、多图上传，图片URL获取，带参小成码生成。")]),t._v(" "),a("li",[t._v("下发模板消息，云调用使用。")])]),t._v(" "),a("h1",{attrs:{id:"二、主要功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、主要功能"}},[t._v("#")]),t._v(" 二、主要功能")]),t._v(" "),a("ul",[a("li",[t._v("创建电子名片："),a("strong",[t._v("信息存储，图片上传，名片读取（AI智能名片识别）")])]),t._v(" "),a("li",[t._v("转发电子名片："),a("strong",[t._v("专属名片海报（带参小程序码生成）")])]),t._v(" "),a("li",[t._v("电子名片被访问："),a("strong",[t._v("下发模板消息（云调用）")])])]),t._v(" "),a("h1",{attrs:{id:"三、功能实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、功能实现"}},[t._v("#")]),t._v(" 三、功能实现")]),t._v(" "),a("h2",{attrs:{id:"_3-1、准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、准备工作"}},[t._v("#")]),t._v(" 3.1、准备工作")]),t._v(" "),a("p",[t._v("1、注册微信小程序账号：")]),t._v(" "),a("blockquote",[a("p",[t._v("方式一：直接注册（"),a("a",{attrs:{href:"https://mp.weixin.qq.com/wxopen/waregister?action=step1",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mp.weixin.qq.com/wxopen/waregister?action=step1"),a("OutboundLink")],1),t._v("）\n方式二：已经有微信公众号（已认证）朋友可以直接【登录公众号】 -> 【小程序管理】 -> 【添加】->【快速注册并认证小程序】，注册完成后，找到小程序的 AppID和 AppSecret")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ask.qcloudimg.com/http-save/4744530/7ju2s9l158.webp",alt:""}})]),t._v(" "),a("p",[t._v("2、下载微信开发者工具、创建项目 ，打开开发者工具，键入项目目录、项目名称、刚才的 AppID，此时项目创建成功，然后点击开发者工具上方的【云开发】开通云开发。")]),t._v(" "),a("h2",{attrs:{id:"_3-2功能实现一-【创建电子名片】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2功能实现一-【创建电子名片】"}},[t._v("#")]),t._v(" 3.2功能实现一：【创建电子名片】")]),t._v(" "),a("h4",{attrs:{id:"信息存储-图片上传-名片读取-ai智能名片识别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#信息存储-图片上传-名片读取-ai智能名片识别"}},[t._v("#")]),t._v(" 信息存储，图片上传，名片读取（AI智能名片识别）")]),t._v(" "),a("h3",{attrs:{id:"_1-功能简要描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-功能简要描述"}},[t._v("#")]),t._v(" 1.功能简要描述")]),t._v(" "),a("p",[t._v("对于一个名片的小程序，第一步肯定是创建电子名片，除此之外，可以用传统信息录入的方式创建名片，同时也支持纸质名片的识别读取，快速创建名片，这里本地需要导入 "),a("code",[t._v("mapping.js")]),t._v("框架，接下来以纸质名片识别为例。")]),t._v(" "),a("h3",{attrs:{id:"_2-核心代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-核心代码"}},[t._v("#")]),t._v(" 2.核心代码")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  // 上传名片后获取零时链接\n  getTempFileURL() {\n    wx.cloud.getTempFileURL({\n      fileList: [{\n        fileID: this.data.fileID,\n      }],\n    }).then(res => {\n      console.log('获取成功', res);\n      if (res.fileList.length) {\n        this.setData({\n          coverImage: res.fileList[0].tempFileURL\n        }, () => {\n          this.parseNameCard();\n        });\n      } else {\n        Toast('获取图片地址失败');\n      }\n    }).catch(err => {\n      Toast('获取图片地址失败');\n    });\n  },\n  // 读取名片\n  parseNameCard() {\n    wx.cloud.callFunction({\n      name: 'parseCard',\n      data: {\n        url: this.data.coverImage\n      }\n    }).then(res => {\n      if (res.result.data.length == 0) {\n        Toast('解析失败，请上传【纸质名片】或【手动创建】');\n        return;\n      }\n      let data = this.transformMapping(res.result.data);\n      wx.setStorageSync(\"parseCardData\", data)\n      Toast('解析成功');\n    }).catch(err => {\n      console.error('解析失败，请上传【纸质名片】或【手动创建】', err);\n      Toast('解析失败，请上传【纸质名片】或【手动创建】');\n    });\n  },\n\n  // 名片数据解析\n  transformMapping(data) {\n    let record = {};\n    let returnData = [];\n    data.map((item) => {\n      let name = null;\n      if (mapping.hasOwnProperty(item.item)) {\n        name = mapping[item.item];\n        // 写入英文名\n        item.name = name;\n      }\n      return item;\n    });\n    // 过滤重复的字段\n    data.forEach((item) => {\n      if (!record.hasOwnProperty(item.item)) {\n        returnData.push(item);\n        record[item.item] = true;\n      }\n    });\n    return returnData;\n  },\n")])])]),a("h2",{attrs:{id:"_3-3功能实现二-【转发电子名片】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3功能实现二-【转发电子名片】"}},[t._v("#")]),t._v(" 3.3功能实现二：【转发电子名片】")]),t._v(" "),a("h4",{attrs:{id:"专属名片海报-带参小程序码生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#专属名片海报-带参小程序码生成"}},[t._v("#")]),t._v(" 专属名片海报（带参小程序码生成）")]),t._v(" "),a("h3",{attrs:{id:"_1-功能简要描述-转发电子名片有两种方式。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-功能简要描述-转发电子名片有两种方式。"}},[t._v("#")]),t._v(" 1.功能简要描述：转发电子名片有两种方式。")]),t._v(" "),a("blockquote",[a("p",[t._v("1.以小程序的形式直接转发给好友或微信群。\n2.生成专属名片海报分享到朋友圈长按进入对应的电子名片页面。名片海报上除了有对应用户的姓名之外，还有专属的名片小程序码，效果如下：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ask.qcloudimg.com/http-save/4744530/1tcjbf9m3q.webp",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_2-核心代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-核心代码-2"}},[t._v("#")]),t._v(" 2.核心代码")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const cloud = require('wx-server-sdk')\nconst axios = require('axios')\nvar rp = require('request-promise');\ncloud.init()\n\n// 云函数入口函数，小程序端传过来页面和名片id\nexports.main = async (event, context) => {\n  console.log(event)\n  try {\n    const resultValue = await rp('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=appid&secret=secret')\n    const token = JSON.parse(resultValue).access_token;\n    const response = await axios({\n      method: 'post',\n      url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit',\n      responseType: 'stream',\n      params: {\n        access_token: token,\n      },\n      data: {\n        page: event.page,\n        width: 300,\n        scene: event.id,\n      },\n    });\n\n    return await cloud.uploadFile({\n      cloudPath: 'xcxcodeimages/' + Date.now() + '.png',\n      fileContent: response.data,\n    });\n  } catch (err) {\n    console.log('>>>>>> ERROR:', err)\n  }\n}\n")])])]),a("h2",{attrs:{id:"_3-4功能实现三-【电子名片被访问】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4功能实现三-【电子名片被访问】"}},[t._v("#")]),t._v(" 3.4功能实现三：【电子名片被访问】")]),t._v(" "),a("h4",{attrs:{id:"下发模板消息-云调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下发模板消息-云调用"}},[t._v("#")]),t._v(" 下发模板消息（云调用）")]),t._v(" "),a("h3",{attrs:{id:"_1-功能简要描述-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-功能简要描述-2"}},[t._v("#")]),t._v(" 1.功能简要描述")]),t._v(" "),a("p",[t._v("用户名片被访问的时候，用户者会收到【客户来访提醒】的模板消息，同时提醒用户完善名片信息。")]),t._v(" "),a("h3",{attrs:{id:"_2-核心代码-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-核心代码-3"}},[t._v("#")]),t._v(" 2.核心代码")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const cloud = require('wx-server-sdk')\ncloud.init()\nexports.main = async (event, context) => {\n  try {\n    const result = await cloud.openapi.templateMessage.send({\n      touser: event.toUser,\n      page: \"pages/index/index\",\n      data: {\n        keyword1: {\n          value: event.visitDate\n        },\n        keyword2: {\n          value: \"刚刚有人深度访问了您的名片，经常完善名片信息，更容易被查找和访问。\"\n        },\n      },\n      templateId: 'templateId',\n      formId: event.formId,\n    })\n    return result\n  } catch (err) {\n    throw err\n  }\n}\n")])])]),a("h1",{attrs:{id:"四、总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、总结"}},[t._v("#")]),t._v(" 四、总结")]),t._v(" "),a("blockquote",[a("p",[t._v("和传统的小程序 + WEB后台开发模式比起来，云开发在精力和人力上真的是节省了很多，这能使开发者将大部分精力和时间放到功能的开发上。\n云开发上线时间不算太长，但逐步有新的功能开放出来，比如云控制台数据的导入导出、云调用等，希望小程序·云开发开放出更多的接口和功能......")])]),t._v(" "),a("h1",{attrs:{id:"五、项目预览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、项目预览"}},[t._v("#")]),t._v(" 五、项目预览")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ask.qcloudimg.com/http-save/4744530/7crisu2p1h.webp",alt:""}})])])}),[],!1,null,null,null);e.default=r.exports}}]);