import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "BIS Navigator",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.png",

  repo: "AvalonC/BIS_Navigator_V2",

  docsDir: "src",

  // navbar
  navbar,

  repoDisplay: false,

  // sidebar
  sidebar,

  breadcrumb: false,

  footer: "Profession, Creative, For the world",

  displayFooter: true,

  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //   },
  // },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页(仅限维护组)",
  },

  blog: {
    timeline: "暂无更新",
    sidebarDisplay: "none"
  },

  plugins: {
    blog: true,
    // You should generate and use your own comment service
    comment: {
      provider: "Giscus",
      repo: "AvalonC/BIS_Navigator_V2",
      repoId: "R_kgDOKUhjPg",
      category: "Announcements",
      categoryId: "DIC_kwDOKUhjPs4CaWBw",
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: false,
      codetabs: false,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: false,
      gfm: true,
      imgLazyload: false,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: false,
    },

    // uncomment these if you want a pwa
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      update:"hint",
      themeColor:"#b01861",
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    },
  },
});
