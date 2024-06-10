import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "BIS Navigator",
  },


  iconAssets: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css",

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
      repo: "AvalonC/MScBIS",
      repoId: "R_kgDOJuLGmQ",
      category: "Announcements",
      categoryId: "DIC_kwDOJuLGmc4CbYdR",
    },

    copyright:{
      global:true,
      disableSelection:true,
    },

    components: {
      rootComponents: {
        // notice: [
        //   {
        //     path: "/",
        //     title: "🧐BIS自2024-2025学年开始的新变化",
        //     content: "请阅读此文了解下一届将会产生的一些变动,浏览后此通知将不再显示。",
        //     actions: [
        //       {
        //         text: "了解详情",
        //         link: "/General/changedata.md",
        //         type: "primary",
        //       },
        //     ],
        //     confirm:true
        //   }
        // ],
      },
      components: [
        "VPBanner",
        "VPCard",
        "Badge"
      ],
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: false,
      codetabs: true,
      demo: false,
      echarts: false,
      figure: true,
      flowchart: false,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: false,
      mark: false,
      mermaid: true,
      revealJs: {
        plugins: ["zoom", "highlight", "search"],
        themes: ["sky"]
      },
      playground: {
        presets: ["ts", "vue"],
      },
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
      tasklist:true,
      sub: false,
      sup: true,
      tabs: true,
      vPre: false,
      vuePlayground: false,
    },
    searchPro: true,
    // uncomment these if you want a pwa
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      appendBase: true,
      update: "hint",
      themeColor: "#b01861",
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
