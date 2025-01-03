import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    link: "/",
    icon: "bi-house-fill"
  },
  {
    text: "MIS方向",
    link: "/MIS/",
    icon: "bi-archive-fill"
  },
  {
    text: "FIT方向",
    link: "/FIT/",
    icon: "bi-archive-fill"
  },
  {
    text: "共享选修课池",
    link: "/elective/",
    icon: "bi-archive-fill"
  },

  {
    text: "实用链接",
    icon: "bi-lightbulb-fill",
    prefix: "/Useful/",
    children: [
      {
        text: "大学相关网站",
        children: [
          { text: "香港城市大学", icon: "bi-link-45deg", link: "https://www.cityu.edu.hk" },
          { text: "商学院", icon: "bi-link-45deg", link: "https://www.cb.cityu.edu.hk" },
          { text: "资讯系统学系", icon: "bi-link-45deg", link: "https://www.cb.cityu.edu.hk/is" },
          { text: "项目官网", icon: "bi-link-45deg", link: "https://www.cb.cityu.edu.hk/is/postgraduate-degrees/taught-postgraduate/msc-business-information-systems" }
        ],
      },
      {
        text: "选课相关",
        prefix: "CourseEnroll/",
        children: [
          { text: "选课基本流程", icon: "bi-bar-chart-steps", link: "how_to" },
          { text: "流程有用信息", icon: "bi-info-circle-fill", link: "useful_data" },
          { text: "选课数量安排", icon: "bi-calendar-week-fill", link: "time_arrangement" },
          { text: "研究生交换项目（PGCE）", icon: "bi-send-check-fill", link: "pgce" },
          { text: "CityU Schedule Planner下载", icon: "bi-cloud-download-fill", link: "extension" }
        ]
      },
      {
        text: "学在城大 Learning@CityU",
        prefix: "Learning/",
        children: [
          { text: "BIS资源网盘", icon: "bi-hdd-network-fill", link: "BIS_resource" },
          { text: "留服认证", icon: "bi-file-earmark-break-fill", link: "cscse_reco" },
          { text: "转换专业认证", icon: "bi-person-lines-fill", link: "trans_mse_tutorial" }
        ]
      }
    ],
  },
  {
    text: "技术支持文档",
    icon: "bi-file-code-fill",
    prefix: "/Tech/",
    children: [
      { text: "信息技术服务", icon: "bi-link", link: "it_services" },
      { text: "在线学习平台Canvas", icon: "bi-link", link: "Canvas" },
      { text: "在线综合平台CityU Portal", icon: "bi-link", link: "CityU_Portal" }
    ]
  }
]);
