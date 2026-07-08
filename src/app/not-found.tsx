import Link from "next/link";

// 自定义 404 页面：路由不存在时自动展示
export default function NotFound() {
  return (
    <div className="text-center py-24">
      <h1 className="text-6xl font-bold text-text-muted">404</h1>
      <p className="mt-4 text-lg text-text-muted">
        抱歉，您访问的页面不存在。
      </p>
      <Link href="/" className="btn-primary mt-6">
        返回首页
      </Link>
    </div>
  );
}
