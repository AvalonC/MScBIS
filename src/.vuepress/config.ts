import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

import { enterpriseApplicationPlugin } from './plugins/enterprise-application'



export default defineUserConfig({
  base: "/MScBIS/",
  lang: "zh-CN",
  title: "BIS Navigator",
  description: "BIS Navigator",

  theme,
  // Enable it with pwa
  shouldPrefetch: false,


  plugins: [
    {
      name: "cscse-page-meta",
      onInitialized(app) {
        const page = app.pages.find(
          (item) => item.path === "/Useful/Learning/trans_mse_tutorial.html",
        );
        if (!page) return;

        // This guide records its editorial update independently of Git authorship.
        page.data.git = {
          ...page.data.git,
          updatedTime: Date.parse(page.frontmatter.contentUpdated),
          contributors: [{ name: page.frontmatter.contentContributor, email: "", commits: 0 }],
        };
      },
    },
    enterpriseApplicationPlugin({
      dataPath: '/test.csv', // 相对于public目录
      // defaultCompanies: [
      //   "默认公司1",
      //   "默认公司2"
      // ]
    })
  ]
});
