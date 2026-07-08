import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeToggle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// === 字体优化：next/font 自动托管，零 CLS（Cumulative Layout Shift）===
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// === SEO 元数据：影响搜索引擎展示 + 社交分享卡片 ===
export const metadata: Metadata = {
  title: {
    default: "My Tech Blog - 分享技术与思考",
    template: "%s | My Tech Blog", // 子页面标题会拼成 "文章名 | My Tech Blog"
  },
  description: "一个关于 Web 开发、系统设计和工程实践的个人技术博客。",
  authors: [{ name: "mingmingjiu" }],
  keywords: ["Next.js", "React", "TypeScript", "Web 开发", "技术博客"],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    title: "My Tech Blog",
    description: "分享 Web 开发经验与思考",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      {/* suppressHydrationWarning: 暗色模式切换时的 SSR/CSR 不匹配提示 */}
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {/*
          ThemeProvider 是客户端组件，负责管理暗色模式的 class 切换。
          Next.js 里所有交互状态（useState/ useEffect）都必须在客户端组件。
        */}
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container-page py-8">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
