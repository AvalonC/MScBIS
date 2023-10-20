import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/BIS_Navigator_V2/",

  lang: "zh-CN",
  title: "BIS Navigator V2",
  description: "BIS Navigator V2",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
