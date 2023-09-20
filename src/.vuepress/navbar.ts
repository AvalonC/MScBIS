import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "MIS方向",
    link: "/MIS/",
    icon: "book"
  },
  {
    text: "FIT方向",
    link: "/FIT/",
    icon: "book"
  },
  "/elective/",
  {
    text: "实用链接",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "选课指南",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "技术支持文档",
    icon: "laptop-code",
    prefix: "foo/",
    children: []
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
