import type { Config } from "tailwindcss";

const config: Config = {
  // 暗色模式：用 class 策略（手动切换，不是跟随系统）
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 自定义颜色：用 CSS 变量，方便暗色模式切换
      // <alpha-value> 是 Tailwind 占位符，bg-primary/10 会自动换算成 rgba
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          light: "rgb(var(--color-primary-light) / <alpha-value>)",
        },
        bg: {
          DEFAULT: "rgb(var(--color-bg) / <alpha-value>)",
          card: "rgb(var(--color-bg-card) / <alpha-value>)",
        },
        text: {
          DEFAULT: "rgb(var(--color-text) / <alpha-value>)",
          muted: "rgb(var(--color-text-muted) / <alpha-value>)",
        },
      },
      // 自定义字体
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      // 代码高亮样式
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
