# BIS Navigator

BIS Navigator 是面向香港城市大学 MSc Business Information Systems 学生的中文信息与经验导航，集中整理专业方向、课程资料、选课经验、校园系统和常用学习资源。

[在线阅读](https://avalonc.github.io/MScBIS/)
· [快速开始](https://avalonc.github.io/MScBIS/General/quickstart.html)
· [关于本站](https://avalonc.github.io/MScBIS/General/about.html)

> 本项目由学生与社区维护，不代表 City University of Hong Kong 官方立场。课程开设、任课教师、考核安排和学校政策等高时效信息，请以学校、学院、学系及课程教师发布的最新内容为准；站内学生评价仅代表对应作者与届别的个人经验。

## 主要内容

- MIS 与 FIT 专业方向及必修课程介绍；
- 共享选修课池、课程评价与历届学习经验；
- 选课流程、课表规划和 CityU Schedule Planner；
- Canvas、CityU Portal 与校内信息技术服务说明；
- 基于 GitHub Discussions 的课程补充与社区讨论。

## 技术基线

本站采用 Markdown 驱动的 VuePress 2 架构，并通过 GitHub Pages 发布。

| 层级 | 当前基线 | 作用 |
| --- | --- | --- |
| UI 运行时 | Vue 3.5 | 页面组件与响应式界面 |
| 站点生成器 | VuePress `2.0.0-rc.30` | 将 Markdown 与 Vue 组件构建为静态站点 |
| 主题与组件 | Theme Hope / Components `2.0.0-rc.107` | 导航、搜索、课程页面和主题能力 |
| VuePress 官方插件 | `2.0.0-rc.130` | 搜索、版权、Reveal.js 与 PWA 等插件能力 |
| 构建链 | Vite 8 / Rolldown | 开发服务器与生产构建 |
| 运行环境 | Node.js `>=22.18.0`、pnpm `11.9.0` | 依赖安装与工程命令 |

VuePress 2 仍使用 RC 版本。VuePress 核心、Vite bundler、Theme Hope、Components 与官方插件必须作为兼容组一起评估和升级，不应只更新其中一个包。

## 本地开发

请先安装符合上述版本要求的 Node.js 和 pnpm，然后在仓库根目录运行：

```bash
pnpm install --frozen-lockfile
pnpm docs:dev
```

开发站点使用 `/MScBIS/` 基础路径。生成生产版本：

```bash
pnpm docs:build
```

构建产物位于 `src/.vuepress/dist/`。

## 项目结构

```text
.
├── .github/workflows/       # GitHub Pages 部署工作流
├── src/                     # Markdown 内容
│   ├── .vuepress/           # VuePress 配置、主题、插件与静态资源
│   ├── FIT/                 # FIT 方向课程
│   ├── MIS/                 # MIS 方向课程
│   ├── elective/            # 共享选修课
│   ├── General/             # 新生指南与项目说明
│   ├── Tech/                # 校内技术服务文档
│   └── Useful/              # 选课与学习资源
├── package.json             # 直接依赖与工程命令
├── pnpm-workspace.yaml      # pnpm 构建许可与传递依赖约束
└── pnpm-lock.yaml           # 可复现安装锁文件
```

## 部署与维护

`main` 分支更新后，GitHub Actions 会使用冻结锁文件安装依赖、
执行 `pnpm docs:build`，并把产物发布到 `gh-pages` 分支。

提交变更前建议至少完成：

```bash
pnpm install --frozen-lockfile
pnpm peers check
pnpm docs:build
git diff --check
```

修改课程或学校相关信息时，请标明适用学期或学年，并保留可核验的官方来源；不要把账号、Cookie、API 密钥、个人隐私或其他敏感数据提交到仓库。
