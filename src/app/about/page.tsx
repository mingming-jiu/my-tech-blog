export const dynamic = "force-static";

export const metadata = {
  title: "关于我",
  description: "关于这个博客和作者的介绍。",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-text">关于我</h1>

      <section className="card space-y-4">
        <p className="text-text-muted leading-relaxed">
          你好！我是 mingmingjiu，一名热爱技术的 Web 开发者。
        </p>
        <p className="text-text-muted leading-relaxed">
          这个博客是我学习和成长的记录。我在这里分享关于 Web 开发、前端工程化、
          系统设计和面试准备的心得体会。
        </p>
        <p className="text-text-muted leading-relaxed">
          我相信<strong className="text-text">持续学习</strong>和
          <strong className="text-text">动手实践</strong>是最好的成长方式。
          每一篇文章都是我深入学习后的总结，希望能帮助到你。
        </p>
      </section>

      {/* 技能标签 */}
      <section className="card">
        <h2 className="text-xl font-semibold text-text mb-4">技术栈</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Vue.js",
            "Node.js",
            "Tailwind CSS",
            "MySQL",
            "Redis",
            "Git",
          ].map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* 联系方式 */}
      <section className="card">
        <h2 className="text-xl font-semibold text-text mb-4">联系我</h2>
        <ul className="space-y-2 text-text-muted">
          <li>
            📧 Email:{" "}
            <a href="mailto:your-email@example.com" className="text-primary hover:opacity-80">
              your-email@example.com
            </a>
          </li>
          <li>
            🌐 GitHub:{" "}
            <a
              href="https://github.com/mingming-jiu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-80"
            >
              github.com/mingming-jiu
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
