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
  {
    text: "共享选修课池",
    link: "/elective/",
    icon: "book"
  },

  {
    text: "实用链接",
    icon: "lightbulb",
    prefix: "/Useful/",
    children: [
      {
        text: "大学相关网站",
        children: [
          { text: "香港城市大学", icon: "circle-info", link: "https://www.cityu.edu.hk" },
          { text: "商学院", icon: "circle-info", link: "https://www.cb.cityu.edu.hk" },
          { text: "资讯系统学系", icon: "circle-info", link: "https://www.cb.cityu.edu.hk/is" },
          { text: "项目官网", icon: "circle-info", link: "https://www.cb.cityu.edu.hk/is/msbis" }
        ],
      },
      {
        text: "学在城大 Learning@CityU",
        prefix: "CourseEnroll/",
        children: [
          { text: "选课基本流程", icon: "ellipsis", link: "how_to" },
          { text: "流程有用信息", icon: "ellipsis", link: "useful_data" },
          { text: "选课界面说明", icon: "circle-info", link: "aims_simluation" },
          { text: "选课数量安排", icon: "circle-info", link: "time_arrangement" }
        ]
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
