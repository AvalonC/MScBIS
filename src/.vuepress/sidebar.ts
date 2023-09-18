import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "管理信息系统方向",
      icon: "book",
      prefix: "MIS/",
      link: "MIS/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],
});
