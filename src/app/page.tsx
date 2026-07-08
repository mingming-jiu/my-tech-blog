import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

// 首页是静态页面：构建时生成 HTML，不需要每次请求都重新渲染
export const dynamic = "force-static";

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-12">
      {/* === Hero 区域 === */}
      <section className="text-center py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-text">
          你好，我是 mingmingjiu 👋
        </h1>
        <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
          这是我的技术博客，记录 Web 开发、系统设计和工程实践的学习笔记。
          主要关注 Next.js、React、TypeScript 和现代前端工程化。
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Link href="/posts" className="btn-primary">
            浏览文章 →
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-text-muted/30 text-text-muted hover:text-text hover:border-text-muted transition-colors font-medium"
          >
            关于我
          </Link>
        </div>
      </section>

      {/* === 最新文章 === */}
      <section>
        <h2 className="text-2xl font-bold text-text mb-6">最新文章</h2>
        <div className="space-y-6">
          {posts.length === 0 ? (
            <p className="text-text-muted">还没有文章，快写一篇吧！</p>
          ) : (
            posts.slice(0, 5).map((post) => <PostCard key={post.slug} post={post} />)
          )}
        </div>
      </section>
    </div>
  );
}
