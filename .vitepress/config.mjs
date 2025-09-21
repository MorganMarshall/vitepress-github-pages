import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  ignoreDeadLinks: true,
  title: "VitePress Github Pages",
  description: "Example",
  head: [
    // Preload critical resources
    ["link", { rel: "preload", href: "/assets/style.css", as: "style" }],
    // DNS prefetch for external resources
    ["link", { rel: "dns-prefetch", href: "https://fonts.googleapis.com" }],
    // Preconnect to critical origins
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
  ],
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
    build: {
      target: "esnext", // modern JS reduces polyfills
      cssCodeSplit: true, // split CSS into smaller chunks
      rollupOptions: {
        output: {
          // Better chunking strategy
          manualChunks: {
            "vue-vendor": ["vue"],
            "vitepress-theme": ["vitepress/theme"],
          },
          // Reduce chunk size for better loading
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        },
      },
      // Optimize chunk sizes
      chunkSizeWarningLimit: 1000,
    },
    // Enable dependency pre-bundling optimizations
    optimizeDeps: {
      include: ["vue"],
      exclude: ["vitepress"],
    },
  },
});
