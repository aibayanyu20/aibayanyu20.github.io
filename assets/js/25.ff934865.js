(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{215:function(t,s,a){"use strict";a.r(s);var n=a(6),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"node项目部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node项目部署"}},[t._v("#")]),t._v(" node项目部署")]),t._v(" "),a("h2",{attrs:{id:"cookie的跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie的跨域问题"}},[t._v("#")]),t._v(" Cookie的跨域问题")]),t._v(" "),a("p",[t._v("Cookie是不能跨域使用的，所以在前后端分离开发的时候，我们当前的代码就会出现问题")]),t._v(" "),a("p",[t._v("跨域(同源协议)：")]),t._v(" "),a("p",[t._v("前端地址：http://127.0.0.1:3001")]),t._v(" "),a("p",[t._v("后端地址：http://127.0.0.1:3000")]),t._v(" "),a("p",[t._v("什么是跨域？")]),t._v(" "),a("p",[t._v("协议/一级域名/二级域名/端口号 有一个不同就是跨域")]),t._v(" "),a("h3",{attrs:{id:"如何解决跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何解决跨域问题"}},[t._v("#")]),t._v(" 如何解决跨域问题")]),t._v(" "),a("ol",[a("li",[t._v("正向代理")])]),t._v(" "),a("p",[t._v("代理服务器是为用户服务，我们称之为正向代理")]),t._v(" "),a("p",[t._v("例如：访问谷歌")]),t._v(" "),a("blockquote",[a("p",[t._v("如果访问不了谷歌，但是我们可以访问一台海外的服务器，这台海外的服务器又可以访问谷歌\n，那么用户就可以先访问海外的服务器，在通过海外的服务器访问谷歌，这就是正向代理")])]),t._v(" "),a("ul",[a("li",[t._v("用途：")])]),t._v(" "),a("ul",[a("li",[t._v("访问原来无法访问的资源，如google")]),t._v(" "),a("li",[t._v("对客户端访问授权，上网认证")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("反向代理")])]),t._v(" "),a("p",[t._v("反向代理服务器是为服务器服务，我们称之为反向代理")]),t._v(" "),a("ul",[a("li",[t._v("用途：")])]),t._v(" "),a("ul",[a("li",[t._v("负载均衡，通过反向代理服务器来优化网站负载")]),t._v(" "),a("li",[t._v("前后端分离，统一请求地址")])]),t._v(" "),a("h2",{attrs:{id:"pm2配置线上环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2配置线上环境"}},[t._v("#")]),t._v(" PM2配置线上环境")]),t._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g pm2\n\n")])])]),a("h3",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前项目的版本")]),t._v("\npm2 --version\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动项目")]),t._v("\n\npm2 start app.js\n\n")])])]),a("h3",{attrs:{id:"常用指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用指令"}},[t._v("#")]),t._v(" 常用指令")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动程序")]),t._v("\npm2 start app.js"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("config\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出启动的所有应用程序")]),t._v("\npm2 list\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启应用程序")]),t._v("\npm2 restart appName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("appId\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看应用程序的详细信息")]),t._v("\npm2 info appName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("appId\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示指定应用程序的日志")]),t._v("\npm2 log appName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("appId "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是通过pm2来启动Node项目，那么会自动将console.log的内容记录到自定义日志")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 监控应用程序")]),t._v("\npm2 monit appName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("appId\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 停止应用程序")]),t._v("\npm2 stop appName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("appId\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除关闭应用程序")]),t._v("\npm2 delete appName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("appId\n\n")])])]),a("h3",{attrs:{id:"进程守护"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程守护"}},[t._v("#")]),t._v(" 进程守护")]),t._v(" "),a("h4",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("ul",[a("li",[t._v("服务器的稳定性，不会因为程序的某个错误或异常导致项目停止")]),t._v(" "),a("li",[t._v("线上日志记录，除了记录访问日志以外，我们还需要记录错误日志和自定义日志")]),t._v(" "),a("li",[t._v("充分利用服务器资源，Node是单线程的，服务器是多喝的，一台服务器只能运行一个Node程序太浪费资源")])]),t._v(" "),a("h4",{attrs:{id:"解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),a("p",[t._v("通过Pm2")]),t._v(" "),a("ul",[a("li",[t._v("PM2的进程守护可以在程序崩溃后自动重启")]),t._v(" "),a("li",[t._v("PM2自带日志记录功能，可以很方便的记录错误日志和自定义日志")]),t._v(" "),a("li",[t._v("PM2能够启动多个Node进程，充分利用服务器资源")])]),t._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("自定义配置pm2配置文件")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"apps"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"script"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否需要监听报错重启")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"watch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那些文件不需要监听")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ignore_watch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node_modules"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logs"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置错误日志的目录和文件")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logs/error.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置自定义日志的目录和文件")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"out_file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logs/custom.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置日志显示输出年月日时分秒")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"log_date_format"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YYYY-MM-DD HH:mm:ss"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("ul",[a("li",[t._v("启动项目")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通过配置文件来启动项目")]),t._v("\npm2 start pm2.config.json\n\n")])])]),a("h3",{attrs:{id:"负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[t._v("#")]),t._v(" 负载均衡")]),t._v(" "),a("p",[t._v("在配置文件中开启多进程")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"apps"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"script"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否需要监听报错重启")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"watch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 那些文件不需要监听")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ignore_watch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node_modules"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logs"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置错误日志的目录和文件")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logs/error.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置自定义日志的目录和文件")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"out_file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logs/custom.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置日志显示输出年月日时分秒")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"log_date_format"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YYYY-MM-DD HH:mm:ss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置多进程")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"instances"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意：")]),t._v(" "),a("p",[t._v("服务器几核就配置几个进程，不要超过服务器的内核数量")])])])}),[],!1,null,null,null);s.default=r.exports}}]);