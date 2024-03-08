import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/MScBIS/",
  lang: "zh-CN",
  title: "BIS Navigator",
  description: "BIS Navigator",

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});