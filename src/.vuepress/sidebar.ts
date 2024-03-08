import { sidebar } from "vuepress-theme-hope";

export default sidebar({

  "/MIS/": [
    "/MIS/",
    {
      text: "必修课程",
      icon: "bi-file-earmark-check-fill",
      prefix: "Core_Course/",
      children: "structure"
    },
    {
      text: "专属选修课程",
      icon: "bi-file-earmark-check",
      prefix: "MIS_Elective/",
      children: "structure"
    }
  ],
  "/FIT/": [
    "/FIT/",
    {
      text: "必修课程",
      icon: "bi-file-earmark-check-fill",
      prefix: "Core_Course/",
      children: "structure"
    },
    {
      text: "专属选修课程",
      icon: "bi-file-earmark-check",
      prefix: "FIT_Elective/",
      children: "structure"
    },
  ],
  "/elective/": [
    "/elective/",
    {
      text: "较易选修",
      icon: "bi-file-post",
      prefix: "IS5/",
      children: "structure"
    },
    {
      text: "较难选修",
      icon: "bi-file-post",
      prefix: "IS6/",
      children: "structure"
    },
  ]
});
