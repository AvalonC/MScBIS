import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { componentsPlugin } from "vuepress-plugin-components";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/MScBIS/",
  lang: "zh-CN",
  title: "BIS Navigator",
  description: "BIS Navigator",

  theme,
  plugins: [
  ],

  // Enable it with pwa
  shouldPrefetch: false,
});