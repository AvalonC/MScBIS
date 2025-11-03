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
    enterpriseApplicationPlugin({
      dataPath: '/test.csv', // 相对于public目录
      // defaultCompanies: [
      //   "默认公司1",
      //   "默认公司2"
      // ]
    })
  ]
});
