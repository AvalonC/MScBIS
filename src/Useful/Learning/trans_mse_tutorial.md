---
title: 转换专业认证
date: 2026-10-09
contentUpdated: "2026-10-09T00:00:00+08:00"
contentContributor: DavidY
sidebar: false
comment: false
prev: false
next: false
---

<script setup>
import { withBase } from "vuepress/client";
import { ref } from "vue";

const materialsAccepted = ref(false);
const hasExpandedNotice = ref(false);
const downloadAttempted = ref(false);
const noticeElement = ref(null);
const noticeDetails = ref(null);

function onNoticeToggle(event) {
  if (event.target.open) hasExpandedNotice.value = true;
}

function onDownloadClick(event) {
  if (materialsAccepted.value) return;
  event.preventDefault();
  downloadAttempted.value = true;
  noticeElement.value?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    block: "start",
  });
  noticeDetails.value?.querySelector("summary")?.focus({ preventScroll: true });
}
</script>

:::: tabs

@tab 认证成计算机科学与技术

::: warning 阅读前提示
本页为免费的个人经验分享，不保证认证结果或考公、考编报名资格。认证结果以留服中心审核为准，报考资格须向招录单位确认。下载参考资料前，请阅读并确认下方使用须知。
:::

<h2>2026年案例</h2>

今年出现一个新情况：MIS 和 FIT 两个支流均在无相似度证明的情况下，被认证为计算机科学与技术专业。

<h2>申请前须知</h2>

- 先完成学历学位认证；对结果有异议时，再根据个人情况决定是否申请复核。复核并非每位毕业生的必经步骤。
- 按留服官方指南，复核须在认证结果出具之日起 **12个月内** 申请，**仅能申请一次，且不收取复核费用**。本人在线提交时，须说明理由、明确诉求并提供证明材料。
- 2024年10月25日，留服中心建议有意报考事业单位的留学人员无需再提交与专业领域表述相关的复核申请，资格审查应结合所学课程、研究方向等综合判断。公务员及具体招聘岗位的要求，应另行向招录单位确认。

官方依据：[国（境）外学历学位认证指南](https://www.cscse.edu.cn/zwfw/lxfwzxwsfwdt2020/xlxwrz32/qtxx/2026042823585825550/index.html)、[关于修改专业领域表述复核服务的重要通知](https://www.cscse.edu.cn/cscse/sy/tzgg/2024102513353082042/index.html)。

<h2>参考资料下载</h2>

材料贡献者：Leon

相关小红书笔记：[🇭🇰藏不住了，港城BIS双分支都认证计算机！](https://xhslink.cn/o/9qo9omCe3K6)

以下6份文件供需要申请复核的同学参考，保留原文件内容。点击“下载”即可保存，无需登录GitHub。Word文件可编辑，PDF文件作为培养方案参考。

<section ref="noticeElement" class="cscse-notice" :class="{ 'cscse-notice-attention': downloadAttempted && !materialsAccepted }" aria-labelledby="cscse-notice-title">
  <h3 id="cscse-notice-title">重要免责声明与使用须知</h3>
  <p class="cscse-notice-intro">资料免费提供，仅供个人学习与参考。下载前，请阅读以下说明并确认使用条件。</p>
  <details ref="noticeDetails" class="cscse-notice-details" @toggle="onNoticeToggle">
    <summary>展开阅读完整声明（5项）</summary>
    <div class="cscse-notice-body">
      <h4>1. 认证结果的不确定性</h4>
      <p>本教程分享个人经验，不构成认证结果的保证或承诺。政策、个人修课情况、专业表述、认证年份及个案审核情况均可能影响结果，案例不能保证您的学位被认证为“计算机科学与技术”。最终结果以教育部留学服务中心的官方审核为准。</p>
      <h4>2. 考公、考编报名风险</h4>
      <p>认证成功不代表自动取得公务员或事业单位岗位的报考资格。各招录单位对专业名称、专业代码及课程匹配度的要求不同，能否报名须另行向招录单位确认。资料提供者不承诺任何报考资格审核结果。</p>
      <h4>3. 学校支持文件</h4>
      <p>本计算机认证经验不包含学校支持文件，资料提供者不承诺学系或学校相关部门提供课程对比、专业等同等证明。请勿以本资料为依据要求学校必须出具相关证明。本条针对计算机认证参考资料，原管理科学与工程路径的历史证明信安排须另向学系确认。</p>
      <h4>4. 信息与责任边界</h4>
      <p>资料提供者已尽合理努力整理信息，但不保证其准确性、完整性、时效性或对个人申请的适用性。使用者应核对官方政策，并按实际学习经历整理材料，自行作出申请与报考决定。本声明不免除法律规定不得免除的责任。</p>
      <h4>5. 使用与传播限制</h4>
      <p>个人模板仅供本人学习、参考使用。未经相关权利人许可，不得转载、打包传播、二次售卖或用于商业盈利。欢迎分享本页链接。高校培养方案等第三方资料的使用，应遵循原权利人的相关要求。</p>
    </div>
  </details>
  <label class="cscse-notice-confirm" :class="{ 'cscse-confirm-locked': !hasExpandedNotice }">
    <input v-model="materialsAccepted" :disabled="!hasExpandedNotice" type="checkbox" aria-describedby="cscse-download-status" />
    <span>我已阅读并同意以上资料使用须知</span>
  </label>
  <p id="cscse-download-status" class="cscse-download-status" role="status" aria-live="polite">{{ materialsAccepted ? "已确认，可以下载下方6份资料。" : !hasExpandedNotice ? "请先展开阅读完整声明，再勾选同意后下载。" : "请勾选同意使用须知后，再下载资料。" }}</p>
  <p class="cscse-notice-version">声明更新于2026年10月9日</p>
</section>

| 附件 | 内容 | 文件 |
| --- | --- | --- |
| 1 | 留学服务认证复核申请模板，含案例截图 | <a :href="materialsAccepted ? withBase('/downloads/cscse/2026/01-review-application-template.docx') : '#cscse-notice-title'" @click="onDownloadClick" :class="{ 'cscse-download-pending': !materialsAccepted }" :title="materialsAccepted ? '下载资料' : '请先阅读并同意使用须知'" class="cscse-download-link" :download="materialsAccepted ? '附件1、留学服务认证复核申请模板_开源版本.docx' : undefined">下载 Word</a> |
| 2 | 与内地高校计算机科学与技术专业课程对比说明 | <a :href="materialsAccepted ? withBase('/downloads/cscse/2026/02-course-comparison.docx') : '#cscse-notice-title'" @click="onDownloadClick" :class="{ 'cscse-download-pending': !materialsAccepted }" :title="materialsAccepted ? '下载资料' : '请先阅读并同意使用须知'" class="cscse-download-link" :download="materialsAccepted ? '附件2、与内地高校计算机科学与技术专业课程对比说明（开源版本）.docx' : undefined">下载 Word</a> |
| 3 | 清华大学工程（计算机技术）硕士培养方案 | <a :href="materialsAccepted ? withBase('/downloads/cscse/2026/03-tsinghua-computer-technology.pdf') : '#cscse-notice-title'" @click="onDownloadClick" :class="{ 'cscse-download-pending': !materialsAccepted }" :title="materialsAccepted ? '下载资料' : '请先阅读并同意使用须知'" class="cscse-download-link" :download="materialsAccepted ? '附件3、清华大学计算机技术硕士培养方案.pdf' : undefined">下载 PDF</a> |
| 4 | 南京大学计算机科学与技术硕士培养方案 | <a :href="materialsAccepted ? withBase('/downloads/cscse/2026/04-nju-computer-science.pdf') : '#cscse-notice-title'" @click="onDownloadClick" :class="{ 'cscse-download-pending': !materialsAccepted }" :title="materialsAccepted ? '下载资料' : '请先阅读并同意使用须知'" class="cscse-download-link" :download="materialsAccepted ? '附件4、南京大学计算机科学与技术硕士培养方案.pdf' : undefined">下载 PDF</a> |
| 5 | 中国科学技术大学计算机科学与技术培养方案 | <a :href="materialsAccepted ? withBase('/downloads/cscse/2026/05-ustc-computer-science.pdf') : '#cscse-notice-title'" @click="onDownloadClick" :class="{ 'cscse-download-pending': !materialsAccepted }" :title="materialsAccepted ? '下载资料' : '请先阅读并同意使用须知'" class="cscse-download-link" :download="materialsAccepted ? '附件5、中国科学技术大学计算机科学与技术培养方案.pdf' : undefined">下载 PDF</a> |
| 6 | 香港城市大学2026年BIS金融与智能科技方向招生介绍 | <a :href="materialsAccepted ? withBase('/downloads/cscse/2026/06-cityu-bis-fit-programme.pdf') : '#cscse-notice-title'" @click="onDownloadClick" :class="{ 'cscse-download-pending': !materialsAccepted }" :title="materialsAccepted ? '下载资料' : '请先阅读并同意使用须知'" class="cscse-download-link" :download="materialsAccepted ? '附件6、香港城市大学商务资讯系统金融与智能科技方向介绍.pdf' : undefined">下载 PDF</a> |

::: warning 按个人学习经历整理材料
附件是参考样例，不能直接替代本人成绩单和课程资料。请替换姓名、编号、日期、实际修读课程、成绩和项目内容，并使用对应修读学年的官方课程说明。

原模板仍有“管理科学与工程”的文字残留，附件2写有“2025届”但引用了2026/27课程页面；“相似度90%以上”“完全一致”等表述也未附计算依据。提交前应逐项核实、修改，不宜直接沿用。清华附件属于085211工程（计算机技术）专业学位培养方案，应如实标注其类别。
:::

<h2>如何整理自己的复核材料</h2>

1. 写明原认证结果、申请修改的专业领域表述及具体理由。
2. 提供本人的完整成绩单，并按实际修读课程建立对比表。
3. 为每项课程对比附上双方官方课程说明、来源链接和适用年份，说明相关内容及差异。
4. 项目经历、研究内容及学校证明应与本人实际情况一致；其他人的成功案例仅作辅助参考。
5. 在认证系统中本人提交复核申请，并按系统通知补充材料。

另可参考：[留服认证流程](./cscse_reco.md)。

@tab 认证成管理科学与工程

::: danger 仅供参考
此材料的可用性不能做永久保证，申请前应当与programme leader确认。
:::
::: warning 妥善保管
此材料每人仅能获得一份，遗失损毁不补。
:::
::: danger 取之有道
该材料不属于大学规定的必须材料， 学系已尽最大努力提供，请善加利用，切莫提出额外要求。
:::
::: tip 名义专用
任何学生都只能以“考公”这一理由申请专业的转换认证，申请此材料时不可以“博士申请”或其他理由发起。
:::

<h2>前言</h2>

专业转换认证是BIS特有的材料*，这份材料将可以转换留服认证，解除原本在考公上只有三不限的尴尬局面。

_*：此材料仅限BIS学生可申请，其他专业无类似材料_

<h2>你会得到什么？</h2>

留服认证变更：

**原始认证名称：商务资讯系统**

**转换后认证名称：管理科学与工程（商务资讯系统）**

转换后，将能报考“管科”限制的岗位

::: danger 取之有道
考虑到BIS的课程设置与学系的定位，本页所述证明信用于支持管理科学与工程方向的复核申请，属于历史经验。学系目前是否提供证明信、可支持哪些表述，应向学系确认；复核结果由留服中心按个人材料核查认定。
:::

<h2>流程</h2>

<h3>1.取得证明信</h3>

请编辑邮件并将其发送给Programme Leader,内容如下：

---

Dear XXX _(Programme Leader)_:

This letter is written for the application for the major certificate, and the necessary information is given below:

Student Number: *Your 8-digit number*

Student Name: *Your name in English*

Purpose: **To gain the chance to enrol on the national examination for admission to the civil service with major restrictions.**

I appreciate your help and look forward to your reply!

Best Regards,

*Your name*

---

耐心等待直到Programme Leader提醒信件已经在ISGO准备好领取。线下领取证明信并妥善保存。

<h3>2.申请留服认证</h3>

请按照正常流程完成留服认证，转换操作在复核中进行

<h3>3.准备复核材料</h3>

请准备下列复核材料：

- 证明信
- 相似专业对比
- 专业名称复核情况说明

<h3>4.开始复核，完成转换</h3>

复核成功后，专业认证将变化为**管理科学与工程（商务资讯系统）**

<h2>关于相似专业对比</h2>

这应当是一份Excel表格，样式如下：
|香港城市大学||XX大学管理科学与工程培养方案|XX大学管理科学与工程培养方案|XX大学管理科学与工程培养方案|
|---|----|---|---|---|
|课程介绍（中文版）|课程介绍（英文版）|||||
|ISXXXX 课程中文名|ISXXXX 课程英文名|对应课程|对应课程|对应课程|
|...|...|...|...|...|...|
|||来源|来源|来源|

将你修习的10门课程与其他大学的管理科学与工程硕士__相似__课程写在这张表格中，体现出课程的相似性。

此处，列出部分可用的大学：

- 天津大学 管理科学与工程（硕）
- 大连理工大学 管理科学与工程 学科硕士
- 东北大学 管理科学与工程（学术型）
- 中国人民大学 管理科学与工程
- 中央财经大学 管理科学与工程 全日制学术型硕士
- 中南大学 管理科学与工程专业硕士研究生

<h2>关于专业名称复核情况说明</h2>

这应当是一份word文档，讲述你为何要申请复核

<h3>整体思路&格式</h3>

致：教育部留学服务中心

国外学历学位认证书编号：*编号*

第一自然段，讲述自己何时在香港城市大学学习，何时获得学位，何时取得认证

第二自然段，讲述自己报考公务员考试无法找到逐字对应专业，报名受限，希望专业认证名称添加管理科学与工程大类（一级学科代码A1201)，重新认证为管理科学与工程（商务资讯系统）

第三自然段，讲述自己比对了哪几所大学的培养方案，发现培养方案高度一致，并且我系已经开具证明信（我系全称：香港城市大学商学院资讯系统学系）

最后，总结全文思想，表达恳请与谢意。

::::

<style scoped>
.cscse-notice {
  scroll-margin-top: 5rem;
  margin: 1.25rem 0;
  padding: 1.15rem 1.25rem;
  border: 1px solid var(--vp-c-border, #d8dce3);
  border-radius: 10px;
  background: var(--vp-c-bg-soft, #f6f7f9);
}
.cscse-notice-attention { border-color: var(--vp-c-accent, #b15b12); }
.cscse-confirm-locked { opacity: 0.6; cursor: not-allowed; }
.cscse-notice h3 { margin: 0 0 0.65rem; }
.cscse-notice-intro { margin: 0 0 0.75rem; }
.cscse-notice-details summary {
  padding: 0.5rem 0;
  color: var(--vp-c-accent, #b15b12);
  cursor: pointer;
  font-weight: 600;
}
.cscse-notice-body h4 { margin: 1rem 0 0.35rem; }
.cscse-notice-body p { margin: 0 0 0.75rem; }
.cscse-notice-confirm {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  margin-top: 1rem;
  cursor: pointer;
  font-weight: 600;
}
.cscse-notice-confirm input { flex: none; width: 1.1rem; height: 1.1rem; margin: 0.25rem 0 0; }
.cscse-download-status { margin: 0.5rem 0; }
.cscse-notice-version { margin: 0; font-size: 0.85rem; opacity: 0.7; }
.cscse-download-link.cscse-download-pending { color: var(--vp-c-text-mute, #777); cursor: pointer; text-decoration: none; }
</style>
