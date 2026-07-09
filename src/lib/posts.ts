import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

// === 类型定义 ===
export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: number;
}

// 文章存放目录：src/content/posts/
const POSTS_DIR = path.join(process.cwd(), "src", "content", "posts");

// === 1. 获取所有文章元数据（列表页用）===
export async function getAllPosts(): Promise<PostMeta[]> {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  // getPostBySlug 返回 Promise，需要用 Promise.all 等待全部完成
  const posts = await Promise.all(
    files.map((filename) => getPostBySlug(filename.replace(".mdx", "")))
  );

  // 过滤掉 null（防御性编程），按日期倒序（最新文章在前）
  return posts
    .filter((post): post is PostMeta => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

// === 2. 根据 slug 获取单篇文章（详情页用）===
export async function getPostBySlug(slug: string): Promise<PostMeta | null> {
  // 安全检查：防止路径遍历攻击
  if (!/^[a-z0-9-]+$/.test(slug)) return null;

  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(source);

  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString().slice(0, 10),
    description: data.description || "",
    tags: data.tags || [],
    readingTime: estimateReadingTime(source),
  };
}

// === 3. 编译 MDX 为 React 组件（详情页渲染用）===
export async function getCompiledMDX(slug: string) {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf-8");

  const { content } = await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypePrettyCode, { theme: { light: "vitesse-light", dark: "vitesse-dark" } }],
        ],
      },
    },
  });

  return content;
}

// === 工具函数：估算阅读时间 ===
function estimateReadingTime(source: string): number {
  const words = source.replace(/[^\w一-龥]/g, "").length;
  return Math.max(1, Math.ceil(words / 300));
}
