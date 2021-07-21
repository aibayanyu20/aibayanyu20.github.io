(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{205:function(a,s,t){"use strict";t.r(s);var e=t(6),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mysql算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql算法"}},[a._v("#")]),a._v(" MySQL算法")]),a._v(" "),t("h2",{attrs:{id:"_175-组合两个表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_175-组合两个表"}},[a._v("#")]),a._v(" 175. 组合两个表")]),a._v(" "),t("p",[a._v("表1: "),t("code",[a._v("Person")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("+-------------+---------+\n| 列名         | 类型     |\n+-------------+---------+\n| PersonId    | int     |\n| FirstName   | varchar |\n| LastName    | varchar |\n+-------------+---------+\nPersonId 是上表主键\n")])])]),t("p",[a._v("表2: "),t("code",[a._v("Address")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("+-------------+---------+\n| 列名         | 类型    |\n+-------------+---------+\n| AddressId   | int     |\n| PersonId    | int     |\n| City        | varchar |\n| State       | varchar |\n+-------------+---------+\nAddressId 是上表主键\n\n")])])]),t("p",[a._v("编写一个 SQL 查询，满足条件：无论 person 是否有地址信息，都需要基于上述两表提供 person 的以下信息：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("FirstName, LastName, City, State\n")])])]),t("p",[a._v("解析： 这个题目考察的是使用表与表之间的连接来实现，表的连接分为三种：")]),a._v(" "),t("ul",[t("li",[a._v("内连接 (inner) join\n内联接使用比较运算符根据每个表共有的列的值匹配两个表中的行。例如，检索 students和courses表中学生标识号相同的所有行。")]),a._v(" "),t("li",[a._v("外连接\n"),t("ul",[t("li",[a._v("左外连接 (left) join\n结果表中除了匹配行外，还包括左表有而右表中不匹配的行，对于这样的行，右表选择列置为null。")]),a._v(" "),t("li",[a._v("右外连接 (right) join\n结果表中除了匹配行外，还包括右表有而左表中不匹配的行，对于这样的行，左表选择列置为null。")])])]),a._v(" "),t("li",[a._v("全连接 (full) join\n完整外部联接返回左表和右表中的所有行。当某行在另一个表中没有匹配行时，则另一个表的选择列表列包含空值。如果表之间有匹配行，则整个结果集行包含基表的数据值。")]),a._v(" "),t("li",[a._v("交叉连接 (cross) join\n交叉连接，cross join，交叉连接，实际上就是将两个表进行笛卡尔积运算，结果表的行数等于两表行数之积")])]),a._v(" "),t("h3",{attrs:{id:"题解："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题解："}},[a._v("#")]),a._v(" 题解：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" P"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("FirstName "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" P"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("LastName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" A"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("City"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" A"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("State "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" Person "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" P \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("LEFT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("JOIN")]),a._v(" Address "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" A "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("on")]),a._v(" P"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("PersonId "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" A"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("PersonId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("注意点：")]),a._v(" "),t("p",[a._v("有可能一开始在写代的时候首先想到的不是连接，而是两个表的where查询，如下代码：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("\nselect Person.FirstName, Person.LastName, Address.City, Address.State \nfrom Person, Address \nwhere Person.PersonId = Address.PersonId\n\n")])])]),t("p",[a._v("如果地址表中查询的所有人的地址都存在，那么这么做没有问题。\n但是，题目中强调了，人一定存在，但地址不一定。\n就要考虑后者的情况了。where语句就行不通了。")])]),a._v(" "),t("h2",{attrs:{id:"_176-第二高的薪水"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_176-第二高的薪水"}},[a._v("#")]),a._v(" 176. 第二高的薪水")]),a._v(" "),t("p",[a._v("编写一个 SQL 查询，获取 "),t("code",[a._v("Employee")]),a._v(" 表中第二高的薪水（"),t("code",[a._v("Salary")]),a._v("）。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("+----+--------+\n| Id | Salary |\n+----+--------+\n| 1  | 100    |\n| 2  | 200    |\n| 3  | 300    |\n+----+--------+\n\n")])])]),t("p",[a._v("例如上述 "),t("code",[a._v("Employee")]),a._v(" 表，SQL查询应该返回 200 作为第二高的薪水。如果不存在第二高的薪水，那么查询应返回 "),t("code",[a._v("null")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("+---------------------+\n| SecondHighestSalary |\n+---------------------+\n| 200                 |\n+---------------------+\n\n")])])]),t("h3",{attrs:{id:"题解1："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题解1："}},[a._v("#")]),a._v(" 题解1：")]),a._v(" "),t("p",[a._v("查询"),t("code",[a._v("Salary")]),a._v("的时候排重数据，然后倒叙排序，限制数据取出为1并且从第二开始取，使用了"),t("code",[a._v("IFNULL()")]),a._v("函数，判断如果查询出来是"),t("code",[a._v("null")]),a._v("则返回第二个值")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("\nSELECT IFNULL(( SELECT DISTINCT Salary FROM Employee ORDER BY Salary DESC limit 1,1),null) as SecondHighestSalary;\n")])])]),t("h3",{attrs:{id:"题解2："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题解2："}},[a._v("#")]),a._v(" 题解2：")]),a._v(" "),t("p",[a._v("先查询一次获取最大值，然后排除掉最大值，拿到次大值即可实现。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("SELECT max(Salary) as SecondHighestSalary FROM Employee WHERE Salary < (SELECT max(Salary) FROM Employee);\n\n")])])]),t("h3",{attrs:{id:"扩展题目第n高的薪水"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展题目第n高的薪水"}},[a._v("#")]),a._v(" 扩展题目第N高的薪水")]),a._v(" "),t("p",[a._v("题目通上一样，只是换成N高的薪水：")]),a._v(" "),t("p",[a._v("同样考察的是LIMIT(从第几个开始,取几个值)")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("\nCREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT\nBEGIN\n    declare m INT;\n    SET m = N-1;\n  RETURN (\n      # Write your MySQL query statement below.\n      SELECT DISTINCT Salary FROM Employee ORDER BY Salary DESC LIMIT m,1 \n  );\nEND\n\n")])])]),t("p",[a._v("目前不一定是最完美的解决方式，只是后期继续跟上更多的解决方案")])])}),[],!1,null,null,null);s.default=n.exports}}]);