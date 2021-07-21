(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{264:function(t,s,a){"use strict";a.r(s);var e=a(6),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mac使用中的常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac使用中的常见问题"}},[t._v("#")]),t._v(" MAC使用中的常见问题")]),t._v(" "),a("h2",{attrs:{id:"mac应用出现文件损坏的问题解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac应用出现文件损坏的问题解决"}},[t._v("#")]),t._v(" Mac应用出现文件损坏的问题解决")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("打开终端界面")])]),t._v(" "),a("li",[a("p",[t._v("输入如下命令：")])])]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" xattr -r -d com.apple.quarantine 损坏应用的路径\n\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[t._v("点击【前往】->【应用程序】，将应用程序拖至终端操作界面")])]),t._v(" "),a("li",[a("p",[t._v("执行命令，完成重新打开应用")])])]),t._v(" "),a("h2",{attrs:{id:"使用brew安装php以及pecl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用brew安装php以及pecl"}},[t._v("#")]),t._v(" 使用brew安装php以及pecl")]),t._v(" "),a("ol",[a("li",[t._v("执行如下命令")])]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("brew search php  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用此命令搜索可用的PHP版本")]),t._v("\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" php@7.1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用此命令安装指定版本的php")]),t._v("\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" brew-php-switcher "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装php多版本切换工具")]),t._v("\nbrew-php-switcher "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换PHP版本到7.1（需要brew安装多个版本）")]),t._v("\n")])])]),a("p",[t._v("::: waring 注意点：")]),t._v(" "),a("p",[t._v("PHP -v 查询版本信息，确定是否安装成功（如果显示的是系统自带版本，则需要配置环境变量，修改~/.bash_profile中/usr/local/bin的优先级）")]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("通过brew安装的PHP版本中自带了pecl,可以直接使用")])]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("\npecl version "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看版本信息")]),t._v("\npecl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以查看命令帮助")]),t._v("\npecl search xdebug  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 搜索可以安装的扩展信息")]),t._v("\npecl "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" xdebug "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装扩展")]),t._v("\npecl "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" http://pecl.php.net/get/redis-4.2.0.tgz "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装指定版本扩展")]),t._v("\n\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意点：")]),t._v(" "),a("p",[t._v("因为pecl在使用的过程中下载会非常慢，所以可以先下载下来对应的扩展然后安装")])]),t._v(" "),a("h3",{attrs:{id:"目前已经存在的本地库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目前已经存在的本地库"}},[t._v("#")]),t._v(" 目前已经存在的本地库")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("mongodb")]),t._v(" "),a("ul",[a("li",[t._v("http://pecl.28yanyu.cn/mongodb/mongodb-1.8.2.tgz")])])]),t._v(" "),a("li",[a("p",[t._v("swoole")]),t._v(" "),a("ul",[a("li",[t._v("http://pecl.28yanyu.cn/swoole/swoole-4.5.7.tgz")])])]),t._v(" "),a("li",[a("p",[t._v("redis")]),t._v(" "),a("ul",[a("li",[t._v("http://pecl.28yanyu.cn/redis/redis-4.2.0.tgz")]),t._v(" "),a("li",[t._v("http://pecl.28yanyu.cn/redis/redis-5.3.2.tgz")])])])]),t._v(" "),a("h2",{attrs:{id:"mac多开微信命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac多开微信命令"}},[t._v("#")]),t._v(" mac多开微信命令")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" /Applications/WeChat.app/Contents/MacOS/WeChat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);