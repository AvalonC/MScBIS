import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/": [
  //   {
  //     text: "管理信息系统方向",
  //     icon: "book",
  //     prefix: "MIS/",
  //     link: "MIS/",
  //     children: "structure",
  //   },
  //   {
  //     text: "文档",
  //     icon: "book",
  //     prefix: "guide/",
  //     children: "structure",
  //   },
  //   "slides",
  // ],
  "/MIS/": [
    "/MIS/",
    {
      text: "必修课程",
      icon: "book",
      prefix: "Core_Course/",
      children: "structure"
    },
    {
      text: "专属选修课程",
      icon: "book",
      prefix: "MIS_Elective/",
      children: "structure"
    }
  ],
  "/FIT/": [
    "/FIT/",
    {
      text: "必修课程",
      icon: "book",
      prefix: "Core_Course/",
      children:"structure"
    },
    {
      text: "专属选修课程",
      icon: "book",
      prefix: "FIT_Elective/",
      children: "structure"
    }

  ]
});
