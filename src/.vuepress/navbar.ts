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
        text: "选课相关",
        prefix: "CourseEnroll/",
        children: [
          { text: "选课基本流程", icon: "ellipsis", link: "how_to" },
          { text: "流程有用信息", icon: "circle-info", link: "useful_data" },
          { text: "选课数量安排", icon: "ellipsis", link: "time_arrangement" }
        ]
      },
      {
        text: "学在城大 Learning@CityU",
        prefix: "Learning/",
        children: [
          { text: "BIS资源网盘", icon: "box-archive", link: "BIS_resource" },
          { text: "转换专业认证", icon: "clipboard-check", link: "trans_mse_tutorial" }
        ]
      }
    ],
  },
  {
    text: "技术支持文档",
    icon: "laptop-code",
    prefix: "Tech/",
    children: [
      { text: "信息技术服务", icon: "circle-info", link: "it_services" },
      { text: "在线学习平台Canvas", icon: "circle-info", link: "Canvas" },
      { text: "在线综合平台CityU Portal", icon: "circle-info", link: "CityU_Portal" }
    ]
  }
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
