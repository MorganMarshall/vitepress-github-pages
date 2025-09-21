import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  ignoreDeadLinks: true,
  title: "VitePress Github Pages",
  description: "Example",
  head: [
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
          // Only chunk non-external dependencies
          manualChunks(id) {
            // Group node_modules into vendor chunk
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          // Better file naming for caching
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        },
      },
      // Optimize chunk sizes
      chunkSizeWarningLimit: 1000,
    },
  },
});
