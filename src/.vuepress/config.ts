import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { componentsPlugin } from "vuepress-plugin-components";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/BIS_Navigator_V2/",
  lang: "zh-CN",
  title: "BIS Navigator",
  description: "BIS Navigator",

  theme,
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      hotReload: true,
      hotKeys: [{ key: "/", ctrl: true }]
    }),
  ],

  // Enable it with pwa
  shouldPrefetch: false,
});