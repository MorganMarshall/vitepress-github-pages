import { defineConfig } from "vitepress";
import { UnCSS } from "vite-plugin-uncss";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  ignoreDeadLinks: true,
  title: "VitePress Github Pages",
  description: "Example",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  vite: {
    plugins: [
      UnCSS({
        // HTML files to analyze for used CSS
        html: [".vitepress/dist/**/*.html"],
        // Ignore patterns for dynamic classes
        ignore: [
          // VitePress specific patterns
          /^\.vp-/,
          /^\.VP/,
          /^\.theme/,
          /^\.dark/,
          /^\.light/,
          // Navigation and layout
          /^\.nav/,
          /^\.sidebar/,
          /^\.hero/,
          /^\.home/,
          /^\.feature/,
          /^\.outline/,
          // Interactive states
          /hover/,
          /focus/,
          /active/,
          /:not/,
          // Code highlighting
          /^\.language-/,
          /^\.token/,
          // Vue transition classes
          /^\..*-enter/,
          /^\..*-leave/,
        ],
        // Only run on build
        apply: "build",
      }),
    ],
    build: {
      target: "esnext",
      cssCodeSplit: true,
    },
  },
});
