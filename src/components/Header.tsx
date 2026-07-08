"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

// 导航链接配置数据：集中管理，以后加页面只改这里
const NAV_LINKS = [
  { href: "/", label: "首页" },
  { href: "/posts", label: "文章" },
  { href: "/about", label: "关于" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b border-text-muted/10">
      <div className="container-page flex justify-between items-center h-16">
        {/* Logo / 站名 */}
        <Link href="/" className="text-xl font-bold text-text">
          My Tech Blog
        </Link>

        {/* 桌面端导航 */}
        <nav className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-muted hover:text-text transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          {/* 暗色模式切换按钮 */}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
