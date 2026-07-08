import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-text-muted/10 mt-auto">
      <div className="container-page py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-text-muted text-sm">
          © {new Date().getFullYear()} My Tech Blog. Built with Next.js.
        </p>

        <div className="flex items-center gap-4 text-sm">
          {/* GitHub 链接：替换成你的真实地址 */}
          <Link
            href="https://github.com/mingming-jiu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text transition-colors"
          >
            GitHub
          </Link>
          {/* 关于页面 */}
          <Link
            href="/about"
            className="text-text-muted hover:text-text transition-colors"
          >
            关于我
          </Link>
        </div>
      </div>
    </footer>
  );
}
