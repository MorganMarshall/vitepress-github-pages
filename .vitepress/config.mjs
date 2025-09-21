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
    // Temporarily comment out PurgeCSS to test
    // plugins: [
    //   PurgeCSS({
    //     content: [
    //       './.vitepress/**/*.vue',
    //       './.vitepress/**/*.js',
    //       './**/*.md', // all markdown files in project
    //       './**/*.vue', // all vue files
    //       './index.md', // specifically include index
    //       './markdown-examples.md',
    //       './api-examples.md'
    //     ],
    //     safelist: [
    //       // VitePress core classes - be very permissive
    //       /^vp-/,
    //       /^VP/,
    //       /^Layout/,
    //       /^nav/,
    //       /^sidebar/,
    //       /^hero/,
    //       /^home/,
    //       /^feature/,
    //       /^doc/,
    //       /^content/,
    //       /^container/,
    //       /^outline/,
    //       /^theme/,
    //       /^dark/,
    //       /^light/,
    //       // CSS custom properties and root styles
    //       /^:/,
    //       /^html/,
    //       /^body/,
    //       /^\*/,
    //       // Layout and structural classes
    //       /^main/,
    //       /^page/,
    //       /^wrapper/,
    //       /^grid/,
    //       /^flex/,
    //       // Typography and text classes
    //       /^text/,
    //       /^title/,
    //       /^description/,
    //       /^tagline/,
    //       /^link/,
    //       // Code and syntax highlighting
    //       /^language-/,
    //       /^token/,
    //       /^pre/,
    //       /^code/,
    //       // Common utility classes
    //       'skip-link',
    //       'sr-only',
    //       'visually-hidden'
    //     ],
    //     // Only run during build
    //     apply: 'build'
    //   })
    // ],
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
