import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

/**
 * 文章卡片组件——首页和文章列表页复用它
 * 体现组件化思维：一处定义，多处使用
 */
export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="card hover:shadow-md transition-shadow group">
      {/* 文章标题 */}
      <h2 className="text-xl font-semibold text-text group-hover:text-primary transition-colors">
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>

      {/* 元信息：日期 + 描述 */}
      <div className="flex items-center gap-3 mt-2 text-sm text-text-muted">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>·</span>
        <span>{post.readingTime} 分钟阅读</span>
      </div>

      <p className="mt-3 text-text-muted leading-relaxed">{post.description}</p>

      {/* 标签：用 ?. 防空，兼容 tags 为 undefined 的情况 */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

// 日期格式化：2024-07-08 → 2024年7月8日
function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}
