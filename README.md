# My Tech Blog

一个基于 Next.js 14 + TypeScript + Tailwind CSS + MDX 的现代化个人技术博客。

## ✨ 特性

- 🚀 **Next.js 14 App Router** —— React 服务端组件 + SSG/SSR
- 📝 **MDX 支持** —— 在 Markdown 中嵌入 React 组件
- 🔍 **全文搜索** —— 基于 Pagefind 的静态搜索（无需后端）
- 🌙 **暗色模式** —— 平滑切换，持久化用户偏好
- 📱 **响应式设计** —— 完美适配移动端、平板、桌面
- 🎨 **代码高亮** —— rehype-pretty-code 美化代码块
- ⚡ **Lighthouse 90+** —— 性能、SEO、可访问性全部拉满

## 🛠 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 14, React 18, TypeScript 5 |
| 样式 | Tailwind CSS 3, PostCSS |
| 内容 | MDX, gray-matter, remark/rehype 插件生态 |
| 搜索 | Pagefind |
| 规范 | ESLint, Prettier, Husky |

## 🚀 本地开发

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 浏览器打开 http://localhost:3000
```

## 📁 项目结构

```
src/
├── app/              # Next.js App Router 路由
│   ├── layout.tsx    # 全局布局
│   ├── page.tsx      # 首页
│   ├── about/        # 关于页面
│   └── posts/        # 文章列表 + 详情
├── components/       # 可复用组件
├── lib/              # 工具函数（文章读取、MDX 编译）
└── content/          # MDX 文章源文件
```

## 📝 添加新文章

在 `src/content/posts/` 目录下新建 `.mdx` 文件，带上 frontmatter：

```markdown
---
title: "文章标题"
date: "2024-07-08"
description: "文章描述"
tags: ["Next.js", "React"]
---

# 正文从这里开始...
```

## 🌐 部署

支持一键部署到 Vercel、Netlify、Cloudflare Pages 等平台。

## 📄 License

MIT
