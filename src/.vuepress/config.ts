import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/BIS_Navigator_V2/",
  lang: "zh-CN",
  title: "BIS Navigator V2",
  description: "BIS Navigator V2",

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