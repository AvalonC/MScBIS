import { sidebar } from "vuepress-theme-hope";

export default sidebar({

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
      children: "structure"
    },
    {
      text: "专属选修课程",
      icon: "book",
      prefix: "FIT_Elective/",
      children: "structure"
    },
  ],
  "/elective/": [
    "/elective/",
    {
      text: "较易选修",
      icon: "book",
      prefix: "IS5/",
      children: "structure"
    },
    {
      text: "较难选修",
      icon: "book",
      prefix: "IS6/",
      children: "structure"
    },
  ]
});
