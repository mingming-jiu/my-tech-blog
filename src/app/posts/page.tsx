import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const dynamic = "force-static";

// SEO 元数据
export const metadata = {
  title: "所有文章",
  description: "浏览我的全部技术文章，涵盖 Next.js、React、TypeScript 等主题。",
};

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-text">所有文章</h1>
        <p className="mt-2 text-text-muted">共 {posts.length} 篇</p>
      </header>

      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
