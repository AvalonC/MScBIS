import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/MIS/": [
    "/MIS/",
    {
      text: "必修课程",
      icon: "bi-file-earmark-check-fill",
      children: [
        "Core_Course/IS5312",
        "Core_Course/IS5313",
        "Core_Course/IS5411",
        "Core_Course/IS5413",
        "/FIT/Core_Course/IS5542",
        "/FIT/Core_Course/IS5740",
      ]
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
      children: [
        "Core_Course/AC5511",
        "Core_Course/EF5042",
        "Core_Course/IS5540",
        "/elective/IS6/IS6200",
        "Core_Course/IS6400",
        "/elective/IS6/IS6423",
      ]
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
      text: "人工智能专题",
      icon: "bi-stars",
      children: ["IS6/IS6423","IS6/IS6620","/FIT/Core_Course/IS5542"]
    },
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
