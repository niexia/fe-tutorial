(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{337:function(t,e,v){t.exports=v.p+"assets/img/javascript-regexp-eg.c11fecb5.png"},463:function(t,e,v){"use strict";v.r(e);var _=v(38),a=Object(_.a)({},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"正则表达式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式","aria-hidden":"true"}},[t._v("#")]),t._v(" 正则表达式")]),t._v(" "),_("p",[t._v("这部分的原文 "),_("a",{attrs:{href:"https://github.com/ziishaned/learn-regex",target:"_blank",rel:"noopener noreferrer"}},[t._v("learn-regex"),_("OutboundLink")],1),t._v("，作者 "),_("a",{attrs:{href:"https://twitter.com/ziishaned",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zeeshan Ahmad"),_("OutboundLink")],1),t._v("。测试正则表达式可以使用 "),_("a",{attrs:{href:"https://regex101.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("regex101"),_("OutboundLink")],1),t._v("。")]),t._v(" "),_("p",[t._v("以下做了一点修改和补充。")]),t._v(" "),_("blockquote",[_("p",[t._v("正在表达式是由字母和符号组成的特殊文本，它可以用来从文中找出满足你想要的格式的句子。")])]),t._v(" "),_("p",[t._v("一个正则表达式是一种从左到右匹配主体字符串的模式。 “Regular expression”这个词比较拗口，我们常使用缩写的术语“regex”或“regexp”。 正则表达式可以从一个基础字符串中根据一定的匹配模式替换文本中的字符串、验证表单、提取字符串等等。")]),t._v(" "),_("p",[t._v("想象你正在写一个应用，然后你想设定一个用户命名的规则，让用户名包含字符、数字、下划线和连字符，以及显示字符串的个数，好让名字看起来没那么丑。")]),t._v(" "),_("p",[_("img",{attrs:{src:v(337),alt:"regexp"}})]),t._v(" "),_("p",[t._v("以上正则表达式可以接受 "),_("code",[t._v("john_doe")]),t._v("、"),_("code",[t._v("jo-hn_doe")]),t._v("、"),_("code",[t._v("john12_as")]),t._v("。 但不匹配 "),_("code",[t._v("Jo")]),t._v("，因为它包含了大写的字母而且太短了。")]),t._v(" "),_("h2",{attrs:{id:"基本匹配"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本匹配","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本匹配")]),t._v(" "),_("p",[t._v("正则表达式其实就是在执行搜索时的格式，它由一些字母和数字组合而成。例如：一个正则表达式 "),_("code",[t._v("the")]),t._v("，它表示一个规则：由字母 "),_("code",[t._v("t")]),t._v(" 开始，接着是 "),_("code",[t._v("h")]),t._v("，再接着是 "),_("code",[t._v("e")]),t._v("。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"the" => The fat cat sat on '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("the")])]),t._v(" mat.\n")]),t._v(" "),_("p",[t._v("正则表达式 "),_("code",[t._v("123")]),t._v(" 匹配字符串 "),_("code",[t._v("123")]),t._v(" 。它逐个字符的与输入的正则表达式做比较。")]),t._v(" "),_("p",[t._v("正则表达式是大小写敏感的，所以 "),_("code",[t._v("The")]),t._v(" 不会匹配 "),_("code",[t._v("the")]),t._v("。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"The" => '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("The")])]),t._v(" fat cat sat on the mat.\n")]),t._v(" "),_("h2",{attrs:{id:"元字符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#元字符","aria-hidden":"true"}},[t._v("#")]),t._v(" 元字符")]),t._v(" "),_("p",[t._v("正则表达式主要依赖于元字符。元字符不代表它们本身的意思，它们都具有特殊的含义。一些元字符写在方括号中有着特殊的意思。一下是一些元字符的介绍：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("元字符")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v(".")]),t._v(" "),_("td",[t._v("句号匹配任意单个字符除了换行符。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("[ ]")]),t._v(" "),_("td",[t._v("字符种类。匹配方括号内的任意字符。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("[^ ]")]),t._v(" "),_("td",[t._v("否定的字符种类。匹配除了方括号里的任意字符")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("*")]),t._v(" "),_("td",[t._v("匹配>=0个重复的在*号之前的字符。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),_("td",[t._v("匹配>=1个重复的+号前的字符。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("?")]),t._v(" "),_("td",[t._v("标记?之前的字符为可选.")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("{n,m}")]),t._v(" "),_("td",[t._v("匹配num个大括号之前的字符 (n <= num <= m).")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("(xyz)")]),t._v(" "),_("td",[t._v("字符集，匹配与 xyz 完全相等的字符串.")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("|")]),t._v(" "),_("td",[t._v("或运算符，匹配符号前或后的字符.")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("\\")]),t._v(" "),_("td",[t._v("转义字符,用于匹配一些保留的字符 "),_("code",[t._v("[ ] ( ) { } . * + ? ^ $ \\ |")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),_("td",[t._v("从开始行开始匹配.")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("$")]),t._v(" "),_("td",[t._v("从末端开始匹配.")])])])]),t._v(" "),_("h3",{attrs:{id:"点运算符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#点运算符","aria-hidden":"true"}},[t._v("#")]),t._v(" 点运算符 "),_("code",[t._v(".")])]),t._v(" "),_("p",[_("code",[t._v(".")]),t._v(" 是元字符中最简单的例子。"),_("code",[t._v(".")]),t._v(" 匹配任意单个字符，但不匹配换行符。例如，表达式 "),_("code",[t._v(".ar")]),t._v(" 匹配一个任意字符后面跟着是 "),_("code",[t._v("a")]),t._v(" 和 "),_("code",[t._v("r")]),t._v(" 的字符串。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('".ar" => The '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("car")])]),t._v(" "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("par")])]),t._v("ked in the "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("gar")])]),t._v("age.\n")]),t._v(" "),_("h3",{attrs:{id:"字符集"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字符集","aria-hidden":"true"}},[t._v("#")]),t._v(" 字符集")]),t._v(" "),_("p",[t._v("字符集也叫做字符类。方括号用来指定一个字符集，在方括号中使用连字符来指定字符集的范围，在方括号中的字符集不关心顺序。例如，表达式"),_("code",[t._v("[Tt]he")]),t._v(" 匹配 "),_("code",[t._v("the")]),t._v(" 和 "),_("code",[t._v("The")]),t._v("。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"[Tt]he" => '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("The")])]),t._v(" car parked in "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("the")])]),t._v(" garage.\n")]),t._v(" "),_("p",[t._v("值得注意的是：方括号的句号就表示句号。表达式 "),_("code",[t._v("ar[.]")]),t._v(" 匹配 "),_("code",[t._v("ar.")]),t._v(" 字符串。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"ar[.]" => A garage is a good place to park a c'),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("ar.")])]),t._v("\n")]),t._v(" "),_("h3",{attrs:{id:"否定字符集"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#否定字符集","aria-hidden":"true"}},[t._v("#")]),t._v(" 否定字符集")]),t._v(" "),_("p",[t._v("一般来说 "),_("code",[t._v("^")]),t._v(" 表示一个字符串的开头，但它用在一个方括号的开头的时候，它表示这个字符集是否定的。例如，表达式 "),_("code",[t._v("[^c]ar")]),t._v(" 匹配一个后面跟着 "),_("code",[t._v("ar")]),t._v(" 的除了"),_("code",[t._v("c")]),t._v("的任意字符。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"[^c]ar" => The car '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("par")])]),t._v("ked in the "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("gar")])]),t._v("age.\n")]),t._v(" "),_("h3",{attrs:{id:"重复次数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重复次数","aria-hidden":"true"}},[t._v("#")]),t._v(" 重复次数")]),t._v(" "),_("p",[t._v("后面跟着元字符 "),_("code",[t._v("+")]),t._v("，"),_("code",[t._v("*")]),t._v(" or "),_("code",[t._v("?")]),t._v(" 的，用来指定匹配子模式的次数。\n这些元字符在不同的情况下有着不同的意思。")]),t._v(" "),_("h4",{attrs:{id:"号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#号","aria-hidden":"true"}},[t._v("#")]),t._v(" "),_("code",[t._v("*")]),t._v(" 号")]),t._v(" "),_("p",[_("code",[t._v("*")]),t._v(" 号匹配 在 "),_("code",[t._v("*")]),t._v(" 之前的字符出现 "),_("code",[t._v("大于等于0")]),t._v(" 次。例如，表达式 "),_("code",[t._v("a*")]),t._v(" 匹配0或更多个以a开头的字符。表达式 "),_("code",[t._v("[a-z]*")]),t._v(" 匹配一个行中所有以小写字母开头的字符串。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"[a-z]*" => T'),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("he")])]),t._v(" "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("car")])]),t._v(" "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("parked")])]),t._v(" "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("in")])]),t._v(" "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("the")])]),t._v(" "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("garage")])]),t._v(" #21.\n")]),t._v(" "),_("p",[_("code",[t._v("*")]),t._v(" 字符和 "),_("code",[t._v(".")]),t._v(" 字符搭配可以匹配所有的字符 "),_("code",[t._v(".*")]),t._v("。"),_("code",[t._v("*")]),t._v(" 和表示匹配空格的符号 "),_("code",[t._v("\\s")]),t._v(" 连起来用，如表达式 "),_("code",[t._v("\\s*cat\\s*")]),t._v(" 匹配 0 或更多个空格开头和 0 或更多个空格结尾的 cat 字符串。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"\\s*cat\\s*" => The fat'),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v(" cat ")])]),t._v("sat on the con"),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("cat")])]),t._v("enation.\n")]),t._v(" "),_("h4",{attrs:{id:"号-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#号-2","aria-hidden":"true"}},[t._v("#")]),t._v(" "),_("code",[t._v("+")]),t._v(" 号")]),t._v(" "),_("p",[_("code",[t._v("+")]),t._v(" 号匹配 "),_("code",[t._v("+")]),t._v(" 号之前的字符出现 >=1 次。例如表达式 "),_("code",[t._v("c.+t")]),t._v(" 匹配以首字母 "),_("code",[t._v("c")]),t._v(" 开头以 "),_("code",[t._v("t")]),t._v(" 结尾，中间跟着至少一个字符的字符串。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"c.+t" => The fat '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("cat sat on the mat")])]),t._v(".\n")]),t._v(" "),_("h4",{attrs:{id:"号-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#号-3","aria-hidden":"true"}},[t._v("#")]),t._v(" "),_("code",[t._v("?")]),t._v(" 号")]),t._v(" "),_("p",[t._v("在正则表达式中元字符 "),_("code",[t._v("?")]),t._v(" 标记在符号前面的字符为可选，即出现 0 或 1 次。例如，表达式 "),_("code",[t._v("[T]?he")]),t._v(" 匹配字符串 "),_("code",[t._v("he")]),t._v(" 和 "),_("code",[t._v("The")]),t._v("。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"[T]he" => '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("The")])]),t._v(" car is parked in the garage.\n")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"[T]?he" => '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("The")])]),t._v(" car is parked in t"),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("he")])]),t._v(" garage.\n")]),t._v(" "),_("h3",{attrs:{id:"号-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#号-4","aria-hidden":"true"}},[t._v("#")]),t._v(" "),_("code",[t._v("{}")]),t._v(" 号")]),t._v(" "),_("p",[t._v("在正则表达式中 "),_("code",[t._v("{}")]),t._v(" 是一个量词，常用来一个或一组字符可以重复出现的次数。例如， 表达式 "),_("code",[t._v("[0-9]{2,3}")]),t._v(" 匹配最少 2 位最多 3 位 0~9 的数字。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"[0-9]{2,3}" => The number was 9.'),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("999")])]),t._v("7 but we rounded it off to "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("10")])]),t._v(".0.\n")]),t._v(" "),_("p",[t._v("我们可以省略第二个参数。例如，"),_("code",[t._v("[0-9]{2,}")]),t._v(" 匹配至少两位 0~9 的数字。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"[0-9]{2,}" => The number was 9.'),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("9997")])]),t._v(" but we rounded it off to "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("10")])]),t._v(".0.\n")]),t._v(" "),_("p",[t._v("如果逗号也省略掉则表示重复固定的次数。例如，"),_("code",[t._v("[0-9]{3}")]),t._v(" 匹配3位数字")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"[0-9]{2,}" => The number was 9.'),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("9997")])]),t._v(" but we rounded it off to "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("10")])]),t._v(".0.\n")]),t._v(" "),_("p",[t._v("如果逗号也省略掉则表示重复固定的次数。例如，"),_("code",[t._v("[0-9]{3}")]),t._v(" 匹配3位数字")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"[0-9]{3}" => The number was 9.'),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("999")])]),t._v("7 but we rounded it off to 10.0.\n")]),t._v(" "),_("h3",{attrs:{id:"特征标群"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特征标群","aria-hidden":"true"}},[t._v("#")]),t._v(" "),_("code",[t._v("(...)")]),t._v(" 特征标群")]),t._v(" "),_("p",[t._v("特征标群是一组写在 "),_("code",[t._v("(...)")]),t._v(" 中的子模式。例如之前说的 "),_("code",[t._v("{}")]),t._v(" 是用来表示前面一个字符出现指定次数。但如果在特征标群之后放一个量词，则表示整个标群内的字符重复 N 次。例如，表达式 "),_("code",[t._v("(ab)*")]),t._v(" 匹配连续出现 0 或更多个 "),_("code",[t._v("ab")]),t._v("。")]),t._v(" "),_("p",[t._v("我们还可以在 "),_("code",[t._v("()")]),t._v(" 中用或字符 "),_("code",[t._v("|")]),t._v(" 表示或。例如，"),_("code",[t._v("(c|g|p)ar")]),t._v(" 匹配 "),_("code",[t._v("car")]),t._v(" 或 "),_("code",[t._v("gar")]),t._v(" 或 "),_("code",[t._v("par")]),t._v(".")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"(c|g|p)ar" => The '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("car")])]),t._v(" is "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("par")])]),t._v("ked in the "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("gar")])]),t._v("age.\n")]),t._v(" "),_("h3",{attrs:{id:"或运算符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#或运算符","aria-hidden":"true"}},[t._v("#")]),t._v(" "),_("code",[t._v("|")]),t._v(" 或运算符")]),t._v(" "),_("p",[t._v("或运算符就表示或，用作判断条件。例如 "),_("code",[t._v("(T|t)he|car")]),t._v(" 匹配 "),_("code",[t._v("(T|t)he")]),t._v(" 或 "),_("code",[t._v("car")]),t._v("。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"(T|t)he|car" => '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("The")])]),t._v(" "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("car")])]),t._v(" is parked in "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("the")])]),t._v(" garage.\n")]),t._v(" "),_("h3",{attrs:{id:"转码特殊字符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#转码特殊字符","aria-hidden":"true"}},[t._v("#")]),t._v(" 转码特殊字符")]),t._v(" "),_("p",[t._v("反斜线 "),_("code",[t._v("\\")]),t._v(" 在表达式中用于转码紧跟其后的字符。用于指定 "),_("code",[t._v("{ } [ ] / \\ + * . $ ^ | ?")]),t._v(" 这些特殊字符。如果想要匹配这些特殊字符则要在其前面加上反斜线 "),_("code",[t._v("\\")]),t._v("。例如 "),_("code",[t._v(".")]),t._v(" 是用来匹配除换行符外的所有字符的。如果想要匹配句子中的 "),_("code",[t._v(".")]),t._v(" 则要写成 "),_("code",[t._v("\\.")]),t._v(" 以下这个例子 "),_("code",[t._v("\\.?")]),t._v("是选择性匹配"),_("code",[t._v(".")])]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"(f|c|m)at\\.?" => The '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("fat")])]),t._v(" "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("cat")])]),t._v(" sat on the "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("mat.")])]),t._v("\n")]),t._v(" "),_("h3",{attrs:{id:"锚点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#锚点","aria-hidden":"true"}},[t._v("#")]),t._v(" 锚点")]),t._v(" "),_("p",[t._v("在正则表达式中，想要匹配指定开头或结尾的字符串就要使用到锚点。"),_("code",[t._v("^")]),t._v(" 指定开头，"),_("code",[t._v("$")]),t._v(" 指定结尾。")]),t._v(" "),_("h4",{attrs:{id:"号-5"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#号-5","aria-hidden":"true"}},[t._v("#")]),t._v(" "),_("code",[t._v("^")]),t._v(" 号")]),t._v(" "),_("p",[_("code",[t._v("^")]),t._v(" 用来检查匹配的字符串是否在所匹配字符串的开头。例如，在 "),_("code",[t._v("abc")]),t._v(" 中使用表达式 "),_("code",[t._v("^a")]),t._v(" 会得到结果 "),_("code",[t._v("a")]),t._v("。但如果使用 "),_("code",[t._v("^b")]),t._v(" 将匹配不到任何结果。因为在字符串 "),_("code",[t._v("abc")]),t._v(" 中并不是以 "),_("code",[t._v("b")]),t._v(" 开头。")]),t._v(" "),_("p",[t._v("例如，"),_("code",[t._v("^(T|t)he")]),t._v(" 匹配以 "),_("code",[t._v("The")]),t._v(" 或 "),_("code",[t._v("the")]),t._v(" 开头的字符串。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"(T|t)he" => '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("The")])]),t._v(" car is parked in "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("the")])]),t._v(" garage.\n")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"^(T|t)he" => '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("The")])]),t._v(" car is parked in the garage.\n")]),t._v(" "),_("h4",{attrs:{id:"号-6"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#号-6","aria-hidden":"true"}},[t._v("#")]),t._v(" "),_("code",[t._v("$")]),t._v(" 号")]),t._v(" "),_("p",[t._v("同理于 "),_("code",[t._v("^")]),t._v(" 号，"),_("code",[t._v("$")]),t._v(" 号用来匹配字符是否是最后一个。例如，"),_("code",[t._v("(at\\.)$")]),t._v(" 匹配以 "),_("code",[t._v("at.")]),t._v(" 结尾的字符串。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"(at\\.)" => The fat c'),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("at.")])]),t._v(" s"),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("at.")])]),t._v(" on the m"),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("at.")])]),t._v("\n")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"(at\\.)$" => The fat cat. sat. on the m'),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("at.")])]),t._v("\n")]),t._v(" "),_("h2",{attrs:{id:"简写字符集"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简写字符集","aria-hidden":"true"}},[t._v("#")]),t._v(" 简写字符集")]),t._v(" "),_("p",[t._v("正则表达式提供一些常用的字符集简写。如下:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("简写")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v(".")]),t._v(" "),_("td",[t._v("除换行符外的所有字符")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("\\w")]),t._v(" "),_("td",[t._v("匹配所有字母数字，等同于 "),_("code",[t._v("[a-zA-Z0-9_]")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("\\W")]),t._v(" "),_("td",[t._v("匹配所有非字母数字，即符号，等同于： "),_("code",[t._v("[^\\w]")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("\\d")]),t._v(" "),_("td",[t._v("匹配数字： "),_("code",[t._v("[0-9]")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("\\D")]),t._v(" "),_("td",[t._v("匹配非数字： "),_("code",[t._v("[^\\d]")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("\\s")]),t._v(" "),_("td",[t._v("匹配所有空格字符，等同于： "),_("code",[t._v("[\\t\\n\\f\\r\\p{Z}]")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("\\S")]),t._v(" "),_("td",[t._v("匹配所有非空格字符： "),_("code",[t._v("[^\\s]")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("\\f")]),t._v(" "),_("td",[t._v("匹配一个换页符")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("\\n")]),t._v(" "),_("td",[t._v("匹配一个换行符")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("\\r")]),t._v(" "),_("td",[t._v("匹配一个回车符")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("\\t")]),t._v(" "),_("td",[t._v("匹配一个制表符")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("\\v")]),t._v(" "),_("td",[t._v("匹配一个垂直制表符")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("\\p")]),t._v(" "),_("td",[t._v("匹配 CR/LF（等同于 "),_("code",[t._v("\\r\\n")]),t._v("），用来匹配 DOS 行终止符")])])])]),t._v(" "),_("p",[t._v("其中 "),_("code",[t._v("\\w")]),t._v(" 和 "),_("code",[t._v("\\W")]),t._v("、"),_("code",[t._v("\\d")]),t._v(" 和 "),_("code",[t._v("\\D")]),t._v("、"),_("code",[t._v("\\s")]),t._v(" 和 "),_("code",[t._v("\\S")]),t._v(" 表示的意思相反，"),_("strong",[t._v("自己为了方便记忆，小写表示某种模式，大写表示非某种模式")]),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"零宽断言（前后预查）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#零宽断言（前后预查）","aria-hidden":"true"}},[t._v("#")]),t._v(" 零宽断言（前后预查）")]),t._v(" "),_("p",[t._v("先行断言和后发断言（也称为 lookaround）都属于"),_("strong",[t._v("非捕获组")]),t._v("（用于匹配模式，但不包括在匹配列表中）。当我们需要一个模式的前面或后面有另一个特定的模式时，就可以使用它们。例如，我们希望从下面的输入字符串 "),_("code",[t._v("$4.44")]),t._v(" 和 "),_("code",[t._v("$10.88")]),t._v(" 中获得所有以 "),_("code",[t._v("$")]),t._v(" 字符开头的数字，我们将使用以下的正则表达式 "),_("code",[t._v("(?<=\\$)[0-9\\.]*")]),t._v("。意思是：获取所有包含 "),_("code",[t._v(".")]),t._v(" 并且前面是 "),_("code",[t._v("$")]),t._v(" 的数字。")]),t._v(" "),_("p",[t._v("下面是正则表达式中使用的零宽断言：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("符号")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("?=")]),t._v(" "),_("td",[t._v("正先行断言-存在")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("?!")]),t._v(" "),_("td",[t._v("负先行断言-排除")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("?<=")]),t._v(" "),_("td",[t._v("正后发断言-存在")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("?<!")]),t._v(" "),_("td",[t._v("负后发断言-排除")])])])]),t._v(" "),_("h3",{attrs:{id:"正先行断言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#正先行断言","aria-hidden":"true"}},[t._v("#")]),t._v(" "),_("code",[t._v("?=...")]),t._v(" 正先行断言")]),t._v(" "),_("p",[_("code",[t._v("?=...")]),t._v(" 正先行断言，表示第一部分表达式之后必须跟着 "),_("code",[t._v("?=...")]),t._v(" 定义的表达式。")]),t._v(" "),_("p",[t._v("返回结果只包含满足匹配条件的第一部分表达式。定义一个正先行断言要使用 "),_("code",[t._v("()")]),t._v("，在括号内部使用一个问号和等号： "),_("code",[t._v("(?=...)")]),t._v("。")]),t._v(" "),_("p",[t._v("正先行断言的内容写在括号中的等号后面。例如，表达式 "),_("code",[t._v("(T|t)he(?=\\sfat)")]),t._v(" 匹配 "),_("code",[t._v("The")]),t._v(" 和 "),_("code",[t._v("the")]),t._v("，在括号中我们又定义了正先行断言 "),_("code",[t._v("(?=\\sfat)")]),t._v(" ，即 "),_("code",[t._v("The")]),t._v(" 和 "),_("code",[t._v("the")]),t._v(" 后面紧跟着 "),_("code",[t._v("(空格)fat")]),t._v("。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"(T|t)he(?=\\sfat)" => '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("The")])]),t._v(" fat cat sat on the mat.\n")]),t._v(" "),_("h3",{attrs:{id:"负先行断言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#负先行断言","aria-hidden":"true"}},[t._v("#")]),t._v(" "),_("code",[t._v("?!...")]),t._v(" 负先行断言")]),t._v(" "),_("p",[t._v("负先行断言 "),_("code",[t._v("?!")]),t._v("  用于筛选所有匹配结果，筛选条件为：其后不跟随着断言中定义的格式。")]),t._v(" "),_("p",[_("code",[t._v("正先行断言")]),t._v("  定义和 "),_("code",[t._v("负先行断言")]),t._v(" 一样，区别就是 "),_("code",[t._v("=")]),t._v(" 替换成 "),_("code",[t._v("!")]),t._v(" 也就是 "),_("code",[t._v("(?!...)")]),t._v("。")]),t._v(" "),_("p",[t._v("例如，表达式 "),_("code",[t._v("(T|t)he(?!\\sfat)")]),t._v(" 匹配 "),_("code",[t._v("The")]),t._v(" 和 "),_("code",[t._v("the")]),t._v("，且其后不跟着 "),_("code",[t._v("(空格)fat")]),t._v("。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"(T|t)he(?!\\sfat)" => The fat cat sat on '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("the")])]),t._v(" mat.\n")]),t._v(" "),_("h3",{attrs:{id:"正后发断言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#正后发断言","aria-hidden":"true"}},[t._v("#")]),t._v(" "),_("code",[t._v("?<= ...")]),t._v(" 正后发断言")]),t._v(" "),_("p",[t._v("正后发断言 记作"),_("code",[t._v("(?<=...)")]),t._v(" 用于筛选所有匹配结果，筛选条件为：其前跟随着断言中定义的格式。")]),t._v(" "),_("p",[t._v("例如，表达式 "),_("code",[t._v("(?<=(T|t)he\\s)(fat|mat)")]),t._v(" 匹配 "),_("code",[t._v("fat")]),t._v(" 和 "),_("code",[t._v("mat")]),t._v("，且其前跟着 "),_("code",[t._v("The")]),t._v(" 或 "),_("code",[t._v("the")]),t._v("。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"(?<=(T|t)he\\s)(fat|mat)" => The '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("fat")])]),t._v(" cat sat on the "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("mat")])]),t._v(".\n")]),t._v(" "),_("h3",{attrs:{id:"负后发断言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#负后发断言","aria-hidden":"true"}},[t._v("#")]),t._v(" "),_("code",[t._v("?<!...")]),t._v(" 负后发断言")]),t._v(" "),_("p",[t._v("负后发断言 记作 "),_("code",[t._v("(?<!...)")]),t._v(" 用于筛选所有匹配结果，筛选条件为 其前不跟随着断言中定义的格式。")]),t._v(" "),_("p",[t._v("例如，表达式 "),_("code",[t._v("(?<!(T|t)he\\s)(cat)")]),t._v(" 匹配 "),_("code",[t._v("cat")]),t._v("，且其前不跟着 "),_("code",[t._v("The")]),t._v(" 或 "),_("code",[t._v("the")]),t._v("。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"(?<!(T|t)he\\s)(cat)" => The cat sat on '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("cat")])]),t._v(".\n")]),t._v(" "),_("h2",{attrs:{id:"标志"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#标志","aria-hidden":"true"}},[t._v("#")]),t._v(" 标志")]),t._v(" "),_("p",[t._v("标志也叫模式修正符，因为它可以用来修改表达式的搜索结果。这些标志可以任意的组合使用，它也是整个正则表达式的一部分。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("标志")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("i")]),t._v(" "),_("td",[t._v("忽略大小写。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("g")]),t._v(" "),_("td",[t._v("全局搜索。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("m")]),t._v(" "),_("td",[t._v("多行修饰符：锚点元字符 "),_("code",[t._v("^")]),t._v(" "),_("code",[t._v("$")]),t._v(" 工作范围在每行的起始。")])])])]),t._v(" "),_("h3",{attrs:{id:"忽略大小写（case-insensitive）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#忽略大小写（case-insensitive）","aria-hidden":"true"}},[t._v("#")]),t._v(" 忽略大小写（Case Insensitive）")]),t._v(" "),_("p",[t._v("修饰语 "),_("code",[t._v("i")]),t._v(" 用于忽略大小写。")]),t._v(" "),_("p",[t._v("例如，表达式 "),_("code",[t._v("/The/gi")]),t._v(" 表示在全局搜索 "),_("code",[t._v("The")]),t._v("，在后面的 "),_("code",[t._v("i")]),t._v(" 将其条件修改为忽略大小写，则变成搜索 "),_("code",[t._v("the")]),t._v(" 和 "),_("code",[t._v("The")]),t._v("，"),_("code",[t._v("g")]),t._v(" 表示全局搜索。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"The" => '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("The")])]),t._v(" fat cat sat on the mat.\n")]),t._v(" "),_("h3",{attrs:{id:"全局搜索（global-search）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#全局搜索（global-search）","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局搜索（Global search）")]),t._v(" "),_("p",[t._v("修饰符 "),_("code",[t._v("g")]),t._v(" 常用于执行一个全局搜索匹配，即（不仅仅返回第一个匹配的，而是返回全部）。")]),t._v(" "),_("p",[t._v("例如，表达式 "),_("code",[t._v("/.(at)/g")]),t._v(" 表示搜索 任意字符（除了换行）+ "),_("code",[t._v("at")]),t._v("，并返回全部结果。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"/.(at)/" => The '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("fat")])]),t._v(" cat sat on the mat.\n")]),t._v(" "),_("h3",{attrs:{id:"多行修饰符（multiline）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多行修饰符（multiline）","aria-hidden":"true"}},[t._v("#")]),t._v(" 多行修饰符（Multiline）")]),t._v(" "),_("p",[t._v("多行修饰符 "),_("code",[t._v("m")]),t._v(" 常用于执行一个多行匹配。")]),t._v(" "),_("p",[t._v("像之前介绍的 "),_("code",[t._v("(^,$)")]),t._v(" 用于检查格式是否是在待检测字符串的开头或结尾。但我们如果想要它在每行的开头和结尾生效，我们需要用到多行修饰符 "),_("code",[t._v("m")]),t._v("。")]),t._v(" "),_("p",[t._v("例如，表达式 "),_("code",[t._v("/at(.)?$/gm")]),t._v(" 表示小写字符 "),_("code",[t._v("a")]),t._v(" 后跟小写字符 "),_("code",[t._v("t")]),t._v(" ，末尾可选除换行符外任意字符。根据 "),_("code",[t._v("m")]),t._v(" 修饰符，现在表达式匹配每行的结尾。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"/.at(.)?$/" => The fat\n                cat sat\n                on the '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("mat.")])]),t._v("\n")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"/.at(.)?$/gm" => The '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("fat")])]),t._v("\n                  cat "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("sat")])]),t._v("\n                  on the "),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("mat.")])]),t._v("\n")]),t._v(" "),_("p",[t._v("自己可以通过换行符输入来测试：")]),t._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/.at(.)?$/gm")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The fat \\r\\n cat sat \\r\\n on the mat."')]),t._v("\nstr"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),_("h3",{attrs:{id:"贪婪匹配与惰性匹配（greedy-vs-lazy-matching）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#贪婪匹配与惰性匹配（greedy-vs-lazy-matching）","aria-hidden":"true"}},[t._v("#")]),t._v(" 贪婪匹配与惰性匹配（Greedy vs lazy matching）")]),t._v(" "),_("p",[t._v("正则表达式默认采用贪婪匹配模式，在该模式下意味着会匹配尽可能长的子串。我们可以使用 "),_("code",[t._v("?")]),t._v(" 将贪婪匹配模式转化为惰性匹配模式。")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"/(.*at)/" => '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("The fat cat sat on the mat")])]),t._v(". \n")]),t._v(" "),_("pre",{staticClass:"nx-pre"},[t._v('"/(.*?at)/" => '),_("a",{attrs:{href:"#learn-regex"}},[_("strong",[t._v("The fat")])]),t._v(" cat sat on the mat. \n")])])},[],!1,null,null,null);e.default=a.exports}}]);