import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getCompiledMDX, getAllPosts } from "@/lib/posts";

// === 动态参数类型 ===
interface PageProps {
  params: { slug: string };
}

// === 1. 静态路径生成：构建时预渲染所有文章页面 ===
export async function generateStaticParams() {
  const posts = await getAllPosts();
  // 返回 [{ slug: "hello-world" }, { slug: "second-post" }, ...]
  return posts.map((post) => ({ slug: post.slug }));
}

// === 2. 动态 SEO：每篇文章有独立的 title/description ===
export async function generateMetadata({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

// === 3. 页面组件 ===
export default async function PostPage({ params }: PageProps) {
  const slug = params.slug;

  // 并行获取元数据和编译后的 MDX 内容
  const [post, content] = await Promise.all([
    getPostBySlug(slug),
    getCompiledMDX(slug),
  ]);

  // 找不到文章 → 404 页面
  if (!post || !content) notFound();

  return (
    <article className="max-w-3xl mx-auto">
      {/* 文章头部 */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-text leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 mt-4 text-sm text-text-muted">
          <time dateTime={post.date}>{post.date}</time>
          <span>·</span>
          <span>{post.readingTime} 分钟阅读</span>
        </div>
        {post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* 正文内容：prose 类是 Tailwind Typography 插件的排版样式 */}
      <div
        className="
          prose-headings:text-text
          prose-p:text-text-muted prose-p:leading-relaxed
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-code:text-primary
          prose-pre:bg-bg-card
          prose-img:rounded-lg
        "
      >
        {content}
      </div>

      {/* 底部返回链接 */}
      <footer className="mt-12 pt-8 border-t border-text-muted/10">
        <Link href="/posts" className="text-primary hover:opacity-80">
          ← 返回文章列表
        </Link>
      </footer>
    </article>
  );
}
