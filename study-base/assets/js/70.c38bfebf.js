(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{267:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据库中的数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库中的数据类型"}},[t._v("#")]),t._v(" 数据库中的数据类型")]),t._v(" "),a("p",[t._v("如果没有数据类型，那么MySQL就不知道需要分配多大的存储空间来存储数据。过大会造成资源的浪费，\n体积变大效率变低，过小可能会导致数据溢出不能完整保存数据，所以MySQL提供数据类型的目的就是为了\n让我们合理分配存储空间，降低数据库的体积，完整的保存数据，更好的对数据库进行优化")]),t._v(" "),a("h2",{attrs:{id:"mysql中的数据类型有哪些？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql中的数据类型有哪些？"}},[t._v("#")]),t._v(" MySQL中的数据类型有哪些？")]),t._v(" "),a("ul",[a("li",[t._v("整型、浮点型、定点型、字符型、文本型、枚举型、集合类型、日期类型、布尔类型")])]),t._v(" "),a("h3",{attrs:{id:"整型-专门用来保存整数的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整型-专门用来保存整数的"}},[t._v("#")]),t._v(" 整型 - 专门用来保存整数的")]),t._v(" "),a("ol",[a("li",[t._v("tinyint      1字节 (-128,127) (0,255) 小整数值")]),t._v(" "),a("li",[t._v("smallint     2字节 (-32768, 32767) (0,65535) 大整数值")]),t._v(" "),a("li",[t._v("mediumint    3字节 (-8388608,8388607) (0,16777215) 大整数值")]),t._v(" "),a("li",[t._v("int/integer  4字节 (-2147483648,2147483647) (0,4294967295) 大整数值")]),t._v(" "),a("li",[t._v("bigint       8字节 (-9223372036854775808,9223372036854775807) (0,18446744073709551615)")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意点：")]),t._v(" "),a("ul",[a("li",[t._v("MySQL中的整型和其他编程语言的整型一样，也区分有符号和无符号\n"),a("ul",[a("li",[t._v("默认情况下整型是有符号的")]),t._v(" "),a("li",[t._v("在数据类型的后面加上 "),a("code",[t._v("unsigned")]),t._v(" 则变成无符号类型")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        age "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tinyint")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[t._v("在设计数据库的时候一定要合理的使用数据类型\n"),a("ul",[a("li",[t._v("例如：年龄一般使用 tinyint 类型，人活不到255岁")])])]),t._v(" "),a("li",[t._v("在保存数据的时候，如果超出了当前的数据类型的范围，那么就会报错")]),t._v(" "),a("li",[t._v("在设置整型的时候，还可以设置整型数据将来显示的位宽\n"),a("ul",[a("li",[t._v("现在设置将来显示整型的位宽是2，现在存储的数据是1位，那么将来查询出来的数据就会显示"),a("code",[t._v("1")]),t._v(";")]),t._v(" "),a("li",[t._v("例如：若想让2显示为02，则需要在创建表的时候设置位宽，不够则进行补零操作\n"),a("code",[t._v("create table person (id int,age tinyint(2) zerofill);")])]),t._v(" "),a("li",[t._v("如果存储的数据没有指定的位宽，那么会自动补空格或0，如果大于等于位宽，不做任何操作。")])])])])]),t._v(" "),a("h3",{attrs:{id:"浮点型-专门用于保存小数的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮点型-专门用于保存小数的"}},[t._v("#")]),t._v(" 浮点型 - 专门用于保存小数的")]),t._v(" "),a("p",[t._v("float (m,d)     4字节     单精度\ndouble (m,d)    8字节     双精度\nm为总位数，d为小数位数")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("float和double 的区别")]),t._v(" "),a("ul",[a("li",[t._v("占用存储空间大小不一样")]),t._v(" "),a("li",[t._v("默认保存的小数位数不同")]),t._v(" "),a("li",[t._v("保存数据的有效精度不同")])])]),t._v(" "),a("li",[a("p",[t._v("特点")]),t._v(" "),a("ul",[a("li",[t._v("和其他编程语言中一样，浮点型是不准确的")]),t._v(" "),a("li",[t._v("所以在企业开发中千万不能使用浮点数来保存用户的准确（珍贵）信息（RMB）")])])])]),t._v(" "),a("h3",{attrs:{id:"定点型-也是用于存储小数的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定点型-也是用于存储小数的"}},[t._v("#")]),t._v(" 定点型 - 也是用于存储小数的")]),t._v(" "),a("p",[t._v("decimal (m,d)\nm总位数 d小数位")]),t._v(" "),a("p",[t._v("定点类型的本质：是将数据分为两个部分来存储，每个部分都是整数\n所以定点数不能滥用，因为非常消耗资源")]),t._v(" "),a("h3",{attrs:{id:"字符型-专门用来存储字符串的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符型-专门用来存储字符串的"}},[t._v("#")]),t._v(" 字符型 - 专门用来存储字符串的")]),t._v(" "),a("p",[t._v("char(size) 0-255字节              定长字符串\nvarchar(size) 0-65535字节         变长字符串")]),t._v(" "),a("ul",[a("li",[t._v("区别\n"),a("ul",[a("li",[t._v("能够保存的数据容量不一样")]),t._v(" "),a("li",[t._v("char不会回收多余的字符串，要多少给多少")]),t._v(" "),a("li",[t._v("varchar会回收多余的字符串，用多少给多少\n"),a("ul",[a("li",[t._v("例如使用char(2) 存储'a' ,存储的结果是' a';")]),t._v(" "),a("li",[t._v("使用varchar(2) 存储'a' ,存储的结果是'a';")]),t._v(" "),a("li",[t._v("以上两种方式，如果是超过定义的范围，会报错")])])])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意点：")]),t._v(" "),a("ul",[a("li",[t._v("由于是字符类型，所以传递值建议使用单引号")]),t._v(" "),a("li",[t._v("varchar理论上是存储65535个字符，但是实际会随着当前数据库的字符集改变\n"),a("ul",[a("li",[t._v("如果当前表的字符集为utf8    最大长度就是21845 ---- 65535/3 = 21845 一个字符占用三个字节，所以varchar在utf8表中最多存储21845")]),t._v(" "),a("li",[t._v("如果当前表的字符集为gbk     最大长度就是32767 ---- 65535/2 = 32767 一个字符占用两个字节")])])])])]),t._v(" "),a("h3",{attrs:{id:"大文本类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大文本类型"}},[t._v("#")]),t._v(" 大文本类型")]),t._v(" "),a("p",[t._v("MySQL中每一行存储的数据大小是有限制的，每一行最多只能存储65534个字节")]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    name1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21845")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#在utf8中相当于65535个字节")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("charset")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[a("em",[a("strong",[a("font",{staticStyle:{color:"red"}},[t._v("创建的时候就会报错，因为name1和name2的总长度不能超过65534个字节")])],1)])]),t._v(" "),a("p",[t._v("所以要通过大文本类型来解决这个问题")]),t._v(" "),a("ul",[a("li",[t._v("tinytext        0-255字节             短文本字符串")]),t._v(" "),a("li",[t._v("text            0-65535字节           长文本数据")]),t._v(" "),a("li",[t._v("mediumtext      0-16777215字节        中等长度文本数据")]),t._v(" "),a("li",[t._v("longtext        0-4294967295字节      极大文本数据")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意点：")]),t._v(" "),a("p",[t._v("大文本类型在表中并不会实际占用所能保存的字节数，而是利用10个字节引用了实际保存数据的地址")])]),t._v(" "),a("h3",{attrs:{id:"枚举类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#枚举类型"}},[t._v("#")]),t._v(" 枚举类型")]),t._v(" "),a("p",[t._v("和其他编程语言一样，瑞国某个字段的取值只能是固定的一个值，那么可以使用枚举类型\nenum(值1,值2,...)")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    gender "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'男'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'女'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'未知'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意点：")]),t._v(" "),a("ul",[a("li",[t._v("MySQL中的枚举类型其实是通过整型来实现的\n"),a("ul",[a("li",[t._v("和其他编程语言不同的是，其他语言的枚举是从0开始，而MySQL的枚举是从1开始的。\n"),a("code",[t._v("select gender+0 from person;")])])])]),t._v(" "),a("li",[t._v("由于底层是使用整型来实现的，所以我们也可以通过整数的方式来赋值\n"),a("code",[t._v("insert into values(1,1);")]),t._v("后面的"),a("code",[t._v("1")]),t._v("即代表"),a("code",[t._v("男")])])])]),t._v(" "),a("h3",{attrs:{id:"集合类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集合类型"}},[t._v("#")]),t._v(" 集合类型")]),t._v(" "),a("p",[t._v("和编程开发中一样，如果某个字段的取值只能是几个固定值中的几个，那么就可以使用集合类型\nset(值1,值2,...)")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    hobby "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'篮球'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'足球'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'高尔夫'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'足浴'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[a("code",[t._v("insert into person values(1, '篮球,足球');")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意点：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如果不在固定取值范围内会报错")])]),t._v(" "),a("li",[a("p",[t._v("和枚举一样也是通过整型来实现的\nMySQL的集合类型是按照2(n)的方式来实现的 ----- 2的n次方\n篮球      ----        2(0) = 1\n足球      ----        2(1) = 2\n高尔夫     ----        2(2) = 4\n足浴      ----        2(3) = 8\n主要是为了方便位运算")])])])]),t._v(" "),a("h3",{attrs:{id:"布尔类型-专门用来保存真假的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布尔类型-专门用来保存真假的"}},[t._v("#")]),t._v(" 布尔类型 - 专门用来保存真假的")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    flag "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("insert into person values (1,'男');#会报错")]),t._v(" "),a("p",[t._v("insert into person values(1,true); #不报错")]),t._v(" "),a("p",[t._v("insert into person values(1,false); #不报错")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意点")]),t._v(" "),a("ul",[a("li",[t._v("MySQL中的布尔类型也是使用整型来实现的 0表示假 1表示真\n"),a("ul",[a("li",[t._v("底层的本质使用C/C++ 来实现的所以非0即真")])])])])]),t._v(" "),a("h3",{attrs:{id:"日期类型-专门用于保存日期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日期类型-专门用于保存日期"}},[t._v("#")]),t._v(" 日期类型 - 专门用于保存日期")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("date        3字节     YYYY-MM-DD              日期值")])]),t._v(" "),a("li",[a("p",[t._v("time        3字节     HH:MM:SS                时间值或持续时间")])]),t._v(" "),a("li",[a("p",[t._v("datetime    8字节     YYYY-MM-DD HH:MM:SS     混合日期和时间值")])])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    time1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    time2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    time3 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("datetime")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 时间需要用单引号括起来，不然会报错")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2020-02-02'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'08:08:08'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2020-02-02 08:08:08'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);