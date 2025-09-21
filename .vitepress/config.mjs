import { defineConfig } from "vitepress";

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
    css: {
      transformer: "lightningcss",
      lightningcss: {
        // More conservative - only remove obviously unused CSS
        unusedSymbols: [],
        // Modern browser targets for smaller output
        targets: {
          chrome: 90,
          firefox: 90,
          safari: 15,
        },
      },
    },
    build: {
      target: "esnext",
      cssCodeSplit: true,
      cssMinify: "lightningcss", // Use Lightning CSS for minification only
    },
  },
});
