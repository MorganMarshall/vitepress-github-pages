import { defineConfig } from "vitepress";
import PurgeCSS from "vite-plugin-purgecss";

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
      PurgeCSS({
        content: [
          "./.vitepress/**/*.vue",
          "./.vitepress/**/*.js",
          "./docs/**/*.md",
          "./docs/**/*.vue",
          "./*.md", // for root level markdown files
        ],
        safelist: [
          // VitePress specific classes
          /^vp-/,
          /^VPDoc/,
          /^outline/,
          /^nav/,
          /^sidebar/,
          /^theme/,
          // Common utility classes
          /^container/,
          /^content/,
          // Code highlighting classes
          /^language-/,
          /^token/,
          // Any other classes you want to preserve
          "skip-link",
        ],
        // Only run during build
        apply: "build",
      }),
    ],
    build: {
      target: "esnext", // modern JS reduces polyfills
      cssCodeSplit: true, // split CSS into smaller chunks
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) return "vendor";
          },
        },
      },
    },
  },
});
