(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{500:function(t,a,s){t.exports=s.p+"assets/img/engineering-git-commitMessage-step1.9a5c126e.png"},501:function(t,a,s){t.exports=s.p+"assets/img/engineering-git-commitMessage-step2.8569434c.png"},502:function(t,a,s){t.exports=s.p+"assets/img/engineering-git-commitMessage-step3.21d4a038.png"},643:function(t,a,s){"use strict";s.r(a);var e=s(54),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"如何配置-git-提交规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何配置-git-提交规范"}},[t._v("#")]),t._v(" 如何配置 git 提交规范")]),t._v(" "),e("p",[t._v("git 是现在最流行的版本控制工具，规范 commit message 能大大提高代码维护的效率。但是在日常开发中由于缺少对于 commit message 的约束，导致填写内容随意、质量参差不齐，可读性低亦难以维护。那就考虑在项目中引入 commit message 规范吧。")]),t._v(" "),e("h2",{attrs:{id:"选择什么规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择什么规范"}},[t._v("#")]),t._v(" 选择什么规范")]),t._v(" "),e("p",[t._v("现在比较流行的方案是"),e("strong",[t._v("约定式提交规范")]),t._v("（Conventional Commits），它受到了 Angular 提交准则的启发，并在很大程度上以其为依据。")]),t._v(" "),e("p",[t._v("约定式提交规范是一种基于提交消息的轻量级约定。它提供了一组用于创建清晰的提交历史的简单规则，这使得编写基于规范的自动化工具变得更容易，这个约定与 semver 相吻合，在提交信息中描述新特性、bug 修复和破坏性变更。")]),t._v(" "),e("p",[t._v("下面介绍 Angular 规范。它的 message 格式如下:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<type>(<scope>): <subject>\n// 空一行\n<body>\n// 空一行\n<footer>\n")])])]),e("p",[t._v("其中，Header 是必需的，Body 和 Footer 可以省略。")]),t._v(" "),e("h3",{attrs:{id:"header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[t._v("#")]),t._v(" header")]),t._v(" "),e("p",[t._v("Header 部分只有一行，包括三个字段：")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("type")]),t._v("：必需")]),t._v(" "),e("li",[e("code",[t._v("scope")]),t._v("：可选")]),t._v(" "),e("li",[e("code",[t._v("subject")]),t._v("：必需。")])]),t._v(" "),e("h4",{attrs:{id:"_1-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-type"}},[t._v("#")]),t._v(" 1. type")]),t._v(" "),e("p",[e("code",[t._v("type")]),t._v(" 用于说明 commit 的类别，常用下面 7 个标识：")]),t._v(" "),e("ul",[e("li",[t._v("feat：新功能（feature）")]),t._v(" "),e("li",[t._v("fix：修补bug")]),t._v(" "),e("li",[t._v("docs：文档（documentation）")]),t._v(" "),e("li",[t._v("style： 格式（不影响代码运行的变动）")]),t._v(" "),e("li",[t._v("refactor：重构（即不是新增功能，也不是修改bug的代码变动）")]),t._v(" "),e("li",[t._v("test：增加测试")]),t._v(" "),e("li",[t._v("chore：构建过程或辅助工具的变动")])]),t._v(" "),e("h4",{attrs:{id:"_2-scope"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-scope"}},[t._v("#")]),t._v(" 2. scope")]),t._v(" "),e("p",[e("code",[t._v("scope")]),t._v(" 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。")]),t._v(" "),e("h4",{attrs:{id:"_3-subject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-subject"}},[t._v("#")]),t._v(" 3. subject")]),t._v(" "),e("p",[e("code",[t._v("subject")]),t._v(" 是 commit 目的的简短描述，不超过50个字符。")]),t._v(" "),e("ul",[e("li",[t._v("以动词开头，使用第一人称现在时，比如change，而不是changed或changes")]),t._v(" "),e("li",[t._v("第一个字母小写")]),t._v(" "),e("li",[t._v("结尾不加句号（.）")])]),t._v(" "),e("h3",{attrs:{id:"body"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" Body")]),t._v(" "),e("p",[t._v("Body 部分是对本次 commit 的详细描述，可以分成多行。下面是一个范例。")]),t._v(" "),e("p",[t._v("有两个注意点：")]),t._v(" "),e("ul",[e("li",[t._v("使用第一人称现在时，比如使用change而不是changed或changes。")]),t._v(" "),e("li",[t._v("应该说明代码变动的动机，以及与以前行为的对比。")])]),t._v(" "),e("h3",{attrs:{id:"footer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#footer"}},[t._v("#")]),t._v(" Footer")]),t._v(" "),e("p",[t._v("Footer 部分只用于两种情况。")]),t._v(" "),e("h4",{attrs:{id:"_1-不兼容变动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-不兼容变动"}},[t._v("#")]),t._v(" 1. 不兼容变动")]),t._v(" "),e("p",[t._v("如果当前代码与上一个版本不兼容，则 Footer 部分以 BREAKING CHANGE 开头，后面是对变动的描述、以及变动理由和迁移方法。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("BREAKING CHANGE: isolate scope bindings definition has changed.\n\n    To migrate the code follow the example below:\n\n    Before:\n\n    scope: {\n      myAttr: 'attribute',\n    }\n\n    After:\n\n    scope: {\n      myAttr: '@',\n    }\n\n    The removed `inject` wasn't generaly useful for directives so there should be no code using it.\n")])])]),e("h4",{attrs:{id:"_2-关闭-issue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-关闭-issue"}},[t._v("#")]),t._v(" 2. 关闭 Issue")]),t._v(" "),e("p",[t._v("如果当前 commit 针对某个i ssue，那么可以在 Footer 部分关闭这个 issue 。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Closes #234\n")])])]),e("p",[t._v("也可以一次关闭多个 issue 。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Closes #123, #245, #992\n")])])]),e("h3",{attrs:{id:"revert"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#revert"}},[t._v("#")]),t._v(" Revert")]),t._v(" "),e("p",[t._v("还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以revert:开头，后面跟着被撤销 Commit 的 Header。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("revert: feat(pencil): add 'graphiteWidth' option\n\nThis reverts commit 667ecc1654a317a13331b17617d973392f415f02.\n")])])]),e("p",[t._v("Body 部分的格式是固定的，必须写成This reverts commit <hash>.，其中的 hash 是被撤销 commit 的 SHA 标识符。")]),t._v(" "),e("p",[t._v("如果当前 commit 与被撤销的 commit，在同一个发布（release）里面，那么它们都不会出现在 Change log 里面。如果两者在不同的发布，那么当前 commit，会出现在 Change log 的 Reverts 小标题下面。")]),t._v(" "),e("h2",{attrs:{id:"进行配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进行配置"}},[t._v("#")]),t._v(" 进行配置")]),t._v(" "),e("h3",{attrs:{id:"替代-git-commit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#替代-git-commit"}},[t._v("#")]),t._v(" 替代 git commit")]),t._v(" "),e("ul",[e("li",[t._v("commitizen/cz-cli: 是一个格式化commit message的工具，可以约束提交者按照制定的规范一步一步的填写commit message。")]),t._v(" "),e("li",[t._v("cz-conventional-changelog： 为 commitizen 指定一个 Adapter ,一个符合 Angular 团队规范的 preset（按照我们指定的规范帮助我们生成 commit message）")])]),t._v(" "),e("h4",{attrs:{id:"_1-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[t._v("#")]),t._v(" 1. 安装")]),t._v(" "),e("p",[t._v("这里使用的局部安装，也就是仅在项目里配置。也可以全局安装，但配置上会有点不同。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 局部安装")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D commitizen\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D cz-conventional-changelog\n")])])]),e("h4",{attrs:{id:"_2-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置"}},[t._v("#")]),t._v(" 2. 配置")]),t._v(" "),e("p",[t._v("修改在 package.json：")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commit"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git-cz"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commitizen"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node_modules/cz-conventional-changelog"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("这样就可以了，现在执行 "),e("code",[t._v("npm run commit")]),t._v(" 就出现提示了，如下图:")]),t._v(" "),e("p",[e("img",{attrs:{src:s(500),alt:"commitizen"}})]),t._v(" "),e("p",[t._v("上面直接使用了 "),e("code",[t._v("cz-conventional-changelog")]),t._v(" 作为 Adapter，如果需要自定义 Adapter，比如：默认的提交 types 可能特别多，有些时候我们可能只需要其中的某些 type，或者自定义type，那么可以通过 "),e("code",[t._v("cz-customizable")]),t._v("，这里不详细介绍了。")]),t._v(" "),e("h3",{attrs:{id:"校验-commit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#校验-commit"}},[t._v("#")]),t._v(" 校验 commit")]),t._v(" "),e("p",[t._v("前面已经约束了一套代码提交规范，但是还是有人不按照规范提交代码怎么办呢？需要 commitlint，帮助我们校验commit message，拒绝不符合规范的commit message。")]),t._v(" "),e("ul",[e("li",[t._v("@commitlint/cli：命令行工具")]),t._v(" "),e("li",[t._v("@commitlint/config-conventional：校验规则，符合 Angular团队规范（不同于代码规范），当然还有其它规范。")])]),t._v(" "),e("h4",{attrs:{id:"_1-安装-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-2"}},[t._v("#")]),t._v(" 1. 安装")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev @commitlint/config-conventional @commitlint/cli\n")])])]),e("h4",{attrs:{id:"_2-配置-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置-2"}},[t._v("#")]),t._v(" 2. 配置")]),t._v(" "),e("blockquote",[e("p",[t._v("Configuration is picked up from commitlint.config.js, .commitlintrc.js, .commitlintrc.json, or .commitlintrc.yml file or a commitlint field in package.json")])]),t._v(" "),e("p",[t._v("也就是可以通过多种文件配置，这里，新建了 commitlint.config.js，并添加以下内容：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@commitlint/config-conventional'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("img",{attrs:{src:s(501),alt:"commitlint"}})]),t._v(" "),e("h3",{attrs:{id:"git-hook"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-hook"}},[t._v("#")]),t._v(" git hook")]),t._v(" "),e("p",[t._v("上面已经配置了校验，但是如果提交的时候根据 "),e("code",[t._v("npm run commit")]),t._v(" 的提示规范填写，那么就不会通过我们配置好的规范来填写。")]),t._v(" "),e("p",[t._v("所以还需要 git hook，可以通过 git hook 在 pre-commit 进行 eslint，在 commit-msg 阶段进行 commit message lint。这样即使直接通过 "),e("code",[t._v('git commit -m "xxx"')]),t._v(" 也进行格式校验。")]),t._v(" "),e("ul",[e("li",[t._v("husky：git 钩子变得简单，可以防止错误糟糕的 git 提交，推送等。")])]),t._v(" "),e("h4",{attrs:{id:"_1-安装-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-3"}},[t._v("#")]),t._v(" 1. 安装")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" husky --save-dev\n")])])]),e("h4",{attrs:{id:"_2-配置-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置-3"}},[t._v("#")]),t._v(" 2. 配置")]),t._v(" "),e("p",[t._v("同样的，husky 也支持多种方式配置 .huskyrc、 .huskyrc.json、.huskyrc.js 或者 husky.config.js file。")]),t._v(" "),e("p",[t._v("这里新建文件 .huskyrc，然后配置内容如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n  "hooks": {\n    "commit-msg": "commitlint -e $GIT_PARAMS"\n  }\n}\n')])])]),e("p",[t._v("这样就完成了！")]),t._v(" "),e("p",[e("img",{attrs:{src:s(502),alt:"husky"}})]),t._v(" "),e("h3",{attrs:{id:"版本管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本管理"}},[t._v("#")]),t._v(" 版本管理")]),t._v(" "),e("p",[t._v("以上配置已经可以满足提交代码的常规要求，但是如果我们想自动生成 CHANGELOG，语义化我们的版本，就需要借助 standard-version。")]),t._v(" "),e("ul",[e("li",[t._v("standard-version：生成 changelog，更新 package.json 和 package.lock.json 中的 version 字段。")])]),t._v(" "),e("h4",{attrs:{id:"_1-安装-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-4"}},[t._v("#")]),t._v(" 1. 安装")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" standard-version --save-dev\n")])])]),e("h4",{attrs:{id:"_2-配置-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置-4"}},[t._v("#")]),t._v(" 2. 配置")]),t._v(" "),e("p",[t._v("修改 package.json 的配置：")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"release"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"standard-version"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("执行 "),e("code",[t._v("npm run release")]),t._v(" 指令实际执行了五个动作：")]),t._v(" "),e("ul",[e("li",[t._v("修改 package.json 中的版本号")]),t._v(" "),e("li",[t._v("修改 package-lock.json 中的版本号")]),t._v(" "),e("li",[t._v("生成 CHANGELOG.md 文件")]),t._v(" "),e("li",[t._v("提交 package.json、package-lock.json、CHANGELOG.md 文件")]),t._v(" "),e("li",[t._v("给这次提交记录打上 tag")])]),t._v(" "),e("h4",{attrs:{id:"cli-的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cli-的使用"}},[t._v("#")]),t._v(" cli 的使用")]),t._v(" "),e("ul",[e("li",[t._v("发布第一个版本 First Release")])]),t._v(" "),e("p",[t._v("要为你的第一个版本生成 changelog，只需执行以下操作：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run release -- --first-release\n")])])]),e("ul",[e("li",[t._v("迭代升级 Cutting Releases")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run release\n")])])]),e("p",[t._v("只要你的git commit消息是 conventional 且准确的，你就不再需要指定 semver 类型-你将免费获得 CHANGELOG 生成！")]),t._v(" "),e("ul",[e("li",[t._v("作为一个预发行版本 Release as a Pre-Release")])]),t._v(" "),e("p",[t._v("使用标志 "),e("code",[t._v("--prerelease")]),t._v(" 生成预发布。假设你的代码的最新版本是 "),e("code",[t._v("1.0.0")]),t._v("，并且你要提交的代码已修补了更改。那么执行")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run release -- --prerelease\n")])])]),e("p",[t._v("这将你的版本标记为 "),e("code",[t._v("1.0.1-0")]),t._v("。")]),t._v(" "),e("p",[t._v("如果你想命名预发版本，那么可以通过 "),e("code",[t._v("--prerelease <name>")]),t._v(" 指定名称。例如，假设你的预发版本应该包含前缀 "),e("code",[t._v("alpha")]),t._v("，那么可以执行")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run release -- --prerelease alpha\n")])])]),e("p",[t._v("这将标记的版本为 "),e("code",[t._v("1.0.1-alpha.0")]),t._v("。")]),t._v(" "),e("ul",[e("li",[t._v("强制发布为目标类型 Release as a Target Type Imperatively (npm version-like)")])]),t._v(" "),e("p",[t._v("要放弃自动版本更改，请使用 "),e("code",[t._v("--release-as")]),t._v(" 以及参数 "),e("code",[t._v("major")]),t._v("，"),e("code",[t._v("minor")]),t._v(" 或 "),e("code",[t._v("patch")]),t._v("。")]),t._v(" "),e("p",[t._v("假设你代码最新的版本是 "),e("code",[t._v("1.0.0")]),t._v("，你只是完成了一个 "),e("code",[t._v("fix:")]),t._v(" 的提交，但是你想下一个版本是一个 "),e("code",[t._v("minor")]),t._v("，很简单，只需要执行一下命令")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run release -- --release-as minor\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run release -- --release-as "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(".0\n")])])]),e("p",[t._v("这样你的版本将变为 "),e("code",[t._v("1.1.0")]),t._v("，而不是自动生成的版本号 "),e("code",[t._v("1.0.1")]),t._v("。")]),t._v(" "),e("h4",{attrs:{id:"关于版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于版本"}},[t._v("#")]),t._v(" 关于版本")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 版本\nmajor：主版本号，不兼容的API修改\nminor：次版本号，向下兼容，功能性增加\npatch：修订号，向下兼容，bug fixed\n\n// 版本发布进度\nalpha（内测）\nbeta（公测）\nrc （正式版本的候选版本）  Release Candiate\n")])])]),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/commitizen/cz-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("commitizen"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"}},[t._v("commitlint"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"}},[t._v("husky"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/conventional-changelog/standard-version",target:"_blank",rel:"noopener noreferrer"}},[t._v("standard-version"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5c85bdde5188257dfa07da6b#heading-9",target:"_blank",rel:"noopener noreferrer"}},[t._v("快速搭建基于angular团队代码提交规范的工作流"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/69635847",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何配置 Git Commit Message"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commit message 和 Change log 编写指南"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5d0b3f8c6fb9a07ec07fc5d0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git commit message 规范"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);