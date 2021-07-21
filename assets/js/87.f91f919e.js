(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{283:function(v,_,a){"use strict";a.r(_);var e=a(6),l=Object(e.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"redis-持久化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-持久化"}},[v._v("#")]),v._v(" Redis-持久化")]),v._v(" "),a("ol",[a("li",[v._v("Redis数据持久化")])]),v._v(" "),a("p",[v._v("默认情况下Redis是将数据保存在内存中的，保存在内存的数据有一个特点，那就是机器重启之后数据就会丢失")]),v._v(" "),a("p",[v._v("所以为了避免服务器重启死机等问题发生的时候，导致Redis中保存的数据丢失，Redis提供了数据持久化功能")]),v._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[v._v("什么是数据持久化")])]),v._v(" "),a("p",[v._v("数据持久化就是将内存中的数据写入到磁盘中")]),v._v(" "),a("p",[v._v("Redis和大部分主流数据库(MySQL/MongoDB)一样支持RDB和AOF持久化")]),v._v(" "),a("h2",{attrs:{id:"rdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rdb"}},[v._v("#")]),v._v(" RDB")]),v._v(" "),a("p",[v._v("RDB === 快照，也就是内存中保存的数据原封不动的写入磁盘")]),v._v(" "),a("h3",{attrs:{id:"生成rdb文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成rdb文件"}},[v._v("#")]),v._v(" 生成RDB文件")]),v._v(" "),a("ol",[a("li",[v._v("手动执行save命名\n"),a("ul",[a("li",[v._v("同步执行（阻塞线程）")]),v._v(" "),a("li",[v._v("如果已经存在旧的RDB文件，会利用新的覆盖旧的")])])]),v._v(" "),a("li",[v._v("手动执行bgsave命令\n"),a("ul",[a("li",[v._v("异步执行")]),v._v(" "),a("li",[v._v("如果已经存在旧的RDB文件，会利用新的覆盖旧的")])])]),v._v(" "),a("li",[v._v("通过配置文件系统自动生成（不推荐使用）\n"),a("ul",[a("li",[v._v("通过配置文件指定自动生成条件，一旦满足条件就会自动执行bgsave生成RDB文件")])])])]),v._v(" "),a("ul",[a("li",[a("p",[v._v("自动生成弊端：\n无法控制生成的频率，如果频率过高会导致性能消耗较大")])]),v._v(" "),a("li",[a("p",[v._v("推荐配置")])])]),v._v(" "),a("p",[v._v("dir /rdbdiskpath                #由于备份是比较占用磁盘空的, 所以推荐使用一个比较大的磁盘路径")]),v._v(" "),a("p",[v._v("dbfilename dump-${prot}.rdb     #由于一台服务器上可能部署多个Redis, 所以可以给RDB文件添加端口号作为区分")]),v._v(" "),a("p",[v._v("stop-writes-on-bgsave-error yes #bgsave发生错误是否停止写入")]),v._v(" "),a("p",[v._v("rdbcompression yes              #是否采用压缩模式写入")]),v._v(" "),a("p",[v._v("rdbchecksum yes                 #是否对生成的RDB文件进行校验")]),v._v(" "),a("h3",{attrs:{id:"存在的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存在的问题"}},[v._v("#")]),v._v(" 存在的问题")]),v._v(" "),a("ol",[a("li",[v._v("不可控、数据丢失\n"),a("ul",[a("li",[v._v("服务器宕机之前的数据, 如果未写入RDB文件就会丢失")])])]),v._v(" "),a("li",[v._v("耗时、耗性能\n"),a("ul",[a("li",[v._v("RDB是一次性把内存中所有的内容写入到磁盘中, 是一个比较重的操作\n如果需要写入的数据比较多, 那么就比较耗时")]),v._v(" "),a("li",[v._v("RDB每次都是把内存中的所有内容全部写入到磁盘中,\n哪怕内存中的数据已经写入过了也会再次完整写入,\n重复写入相同的数据, 也比较浪费I/O资源")]),v._v(" "),a("li",[v._v("如果通过save命令写入, 会阻塞后续命令执行\n如果是通过bgsave写入, 不会阻塞后续命令执行,\n会开启子进程去专门负责写入, 但是开启子进程会消耗内存空间")]),v._v(" "),a("li",[v._v("... ...")])])])]),v._v(" "),a("h2",{attrs:{id:"aof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aof"}},[v._v("#")]),v._v(" AOF")]),v._v(" "),a("p",[v._v("AOF === 日志，会将用户操作的指令写入到磁盘中")]),v._v(" "),a("h3",{attrs:{id:"生成aof的三种机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成aof的三种机制"}},[v._v("#")]),v._v(" 生成AOF的三种机制")]),v._v(" "),a("ol",[a("li",[v._v("always\n"),a("ul",[a("li",[v._v("每条命令都写入到文件中")]),v._v(" "),a("li",[v._v("优点：不会丢失数据")]),v._v(" "),a("li",[v._v("缺点：磁盘I/O消耗较大")])])]),v._v(" "),a("li",[v._v("everysec(默认)\n"),a("ul",[a("li",[v._v("每隔1秒写入一次，也就是先收集1秒钟的命令，然后再一次性写入")]),v._v(" "),a("li",[v._v("优点：磁盘I/O消耗相对较小")]),v._v(" "),a("li",[v._v("缺点：可能会丢失数据")])])]),v._v(" "),a("li",[v._v("no\n"),a("ul",[a("li",[v._v("让操作系统决什么时候写入，操作系统想什么时候写入就是什么时候写入")]),v._v(" "),a("li",[v._v("不推荐这种方式，不可控，可能丢失大量数据")])])])]),v._v(" "),a("h3",{attrs:{id:"aof重写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aof重写"}},[v._v("#")]),v._v(" AOF重写")]),v._v(" "),a("ol",[a("li",[v._v("随着时间的推移AOF文件会越来越大\n"),a("ul",[a("li",[v._v("文件越来越大带来的问题就是-磁盘消耗越来越大")]),v._v(" "),a("li",[v._v("文件越来越大带来的问题就是-写入速度会越来越慢")]),v._v(" "),a("li",[v._v("文件越来越大带来的问题就是-恢复的时间越来越慢")])])]),v._v(" "),a("li",[v._v("所以AOF提供了重写的机制\n"),a("ul",[a("li",[v._v("我们可以对AOF文件中保存的内容进行优化")]),v._v(" "),a("li",[v._v("从而降低文件的体积")]),v._v(" "),a("li",[v._v("从而提升文件的恢复速度")])])]),v._v(" "),a("li",[v._v("在AOF的重写机制中\n"),a("ul",[a("li",[v._v("可以将自动去除冗余命令")]),v._v(" "),a("li",[v._v("可以自动删除没有用的命令")])])])]),v._v(" "),a("ul",[a("li",[v._v("例如:\n"),a("ul",[a("li",[v._v("优化前: set name lnj; set name zs; set name ls;")]),v._v(" "),a("li",[v._v("优化后: set name ls;")]),v._v(" "),a("li",[v._v("优化前: incr count; incr count; incr count; incr count;")]),v._v(" "),a("li",[v._v("优化后: set count 4;")]),v._v(" "),a("li",[v._v("优化前: expire name 3")]),v._v(" "),a("li",[v._v("优化后: 3秒后由于数据已经被删除, 所以这条命令不用保存")])])])]),v._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[v._v("触发AOF重写两种机制")])]),v._v(" "),a("ul",[a("li",[v._v("bgrewriteaof命令\n"),a("ul",[a("li",[v._v("开启一个新的子进程, 根据内容中的数据生成命令写入到AOF文件中")])])]),v._v(" "),a("li",[v._v("配置文件设置\nauto-aof-rewrite-min-size 200mb   #AOF文件体积达到多大时进行重写\nauto-aof-rewrite-percentage 100   #对比上一次重写后, 增长了百分之多少再次进行重写\n#例如上一次重写后大小是100MB, 如果设置为50, 那么下一次就是增长0.5倍(150M)之后再重写\n#例如上一次重写后大小是100MB, 如果设置为100, 那么下一次就是增长两倍(200M)之后再重写")])]),v._v(" "),a("h3",{attrs:{id:"推荐配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐配置"}},[v._v("#")]),v._v(" 推荐配置")]),v._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v('appendonly yes                           #是否使用AOF\nappendfilename "appendonly-${prot}.aof"  #AOF文件名称\nappendfsync everysec                     #写入命令的同步机制\ndir /rdbdiskpath                         #保存AOF文件路径\nauto-aof-rewrite-min-size 64mb           #AOF文件重写体积\nauto-aof-rewrite-percentage 100          #AOF文件增长率\nno-appendfsync-on-rewrite yes            #AOF重写时是否正常写入当前操作的命令\n\n')])])]),a("h3",{attrs:{id:"rdb和aof对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rdb和aof对比"}},[v._v("#")]),v._v(" RDB和AOF对比")]),v._v(" "),a("ul",[a("li",[v._v("AOF优先级高于RDB\n"),a("ul",[a("li",[v._v("如果Redis服务器同时开启了RDB和AOF, 那么宕机重启之后会优先从AOF中恢复数据")])])]),v._v(" "),a("li",[v._v("RDB体积小于AOF\n"),a("ul",[a("li",[v._v("由于RDB在备份的时候会对数据进行压缩, 而AOF是逐条保存命令, 所以RDB体积比AOF小")])])]),v._v(" "),a("li",[v._v("RDB恢复速度比AOF恢复速度快\n"),a("ul",[a("li",[v._v("由于AOF是通过逐条执行命令的方式恢复数据, 而RDB是通过加载预先保存的数据恢复数据\n所以RDB的恢复速度比AOF快")])])]),v._v(" "),a("li",[v._v("AOF数据安全性高于RDB\n"),a("ul",[a("li",[v._v("由于AOF可以逐条写入命令, 而RDB只能定期备份数据, 所以AOF数据安全性高于RDB")])])]),v._v(" "),a("li",[v._v("所以综上所述, 两者各有所长, 两者不是替代关系而是互补关系")])])])}),[],!1,null,null,null);_.default=l.exports}}]);