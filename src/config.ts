// 网站标题
const title = "[简历]张大侠-前端开发工程师/杭州";

// 个人信息
const avatar = {
  name: "张大侠",
  info: "前端开发工程师 / 杭州",
  // 这里src是头像图片的名称，在public文件中放自己的头像图片，然后替换这里的文件名，`./`记得加上
  src: "./misaka10032.png",
};

// 基本信息
const baseInfo: Info[] = [
  { label: "个人信息", value: "张大侠 / 男 / 24岁" },
  { label: "工作经验", value: "3年" },
  { label: "毕业院校", value: "XXXX大学" },
  { label: "专业", value: "计算机专业" },
  { label: "学历", value: "本科" },
  { label: "英语水平", value: "CET-6" },
  { label: "计算机水平", value: "软考中级" },
];

// 联系方式
const contacts: Contact[] = [
  { label: "手机", value: "151-****-5219", link: false },
  { label: "邮箱", value: "ze.zh@hotmail.com", link: false },
  {
    label: "个人主页",
    value: "xxxx主页链接",
    link: true,
  },
  { label: "Github", value: "github链接", link: true },
];

// 技能点
const skills: Skill[] = [
  { label: "HTML", progress: 100 },
  { label: "CSS", progress: 100 },
  { label: "JavaScript", progress: 100 },
  { label: "TypeScript", progress: 100 },
  { label: "Vue", progress: 100 },
  { label: "React", progress: 100 },
  { label: "小程序", progress: 100 },
];

// 技术栈
const skillStack: string[] = [
  "熟练掌握HTML、CSS(SASS)、Javascript(TS)",
  "熟练掌握JS语法ES6、ESNEXT、AJAX",
  "熟练掌握Vue2和Vue3项目结构&开发规范",
  "熟悉React的语法与项目开发",
  "熟悉Vue和React的运行机制与原理",
  "熟悉Webpack、Vite等构建工具的运行机制与性能优化",
  "熟悉Git分支管理、GitFlow执行",
];

const educations: Education[] = [
  {
    title: "XXXX大学 - XXX专业（硕士）",
    startTime: "201X.9",
    endTime: "201X.7",
    education: `专业排名
    <mark>X/XX</mark
    >，期间发表国际会议英文摘要X篇，国内核心期刊文章X篇（其中第一作者X篇），获XXX，XXX2次，XXX2次。(此处根据自身情况填写，可以突出自己的亮点，或者跟求职目标相关的内容)`,
  },
  {
    title: "XXXX大学 - XXX专业（硕士）",
    startTime: "201X.9",
    endTime: "201X.7",
    education: `专业排名
    <mark>X/XX</mark
    >，期间发表国际会议英文摘要X篇，国内核心期刊文章X篇（其中第一作者X篇），获XXX，XXX2次，XXX2次。(此处根据自身情况填写，可以突出自己的亮点，或者跟求职目标相关的内容)`,
  },
];

// 工作经历
const workInfo: Work[] = [
  {
    title: "[经历1]XX公司－前端开发工程师（实习）",
    startTime: "2016.X",
    endTime: "2017.X",
    desc: [
      `深度参与XX项目迭代XX的前端开发工作，独立承担并完成XX、XX、XXXX等功能点的开发，主要维护并修复XX、XX、XX等功能点bug若干。项目采用技术栈
      <mark>React+React Router+Node.js+SASS</mark>，实现
      <mark>前后端完全分离</mark>。`,
      `配合UI和后端，根据产品需求提供H5页面嵌入到后台模板，要求
      <mark>移动端显示正常</mark>。`,
      `要参与XXXXXXX的静态页面开发工作，要求
      <mark>在支付宝环境下完全兼容</mark>。`,
    ],
  },
  {
    title: "[经历2]XX－前端开发工程师（实习）",
    startTime: "20XX.10",
    endTime: "20XX.7",
    desc: [
      `深度参与公司主线产品「XXXX」的前端开发工作`,
      [
        `完成帖子快捷回复、<mark>全站图片懒加载</mark>、活动banner、帖子管理（使用Yii框架）等功能`,
        `项目采用技术栈phpWind+NAMP。<a href="#" target="_blank">
        <i class="fa fa-link" aria-hidden="true"></i>博客文章</a>`,
      ],
      `深度参与「智慧物流」项目前端开发`,
      `主要参与公司产品「XXXX」的前端开发工作，实现接入微博、微信、QQ等
      <mark>第三方账号登录</mark>等功能。项目采用技术栈WordPress+NAMP。`,
      `活动页面的开发（七夕活动、抽奖活动以及承接外包页面）。`,
      `论坛
      <mark>图片增量备份</mark>（CentOS+vsftpd+crontab）
      <a href="#" target="_blank">
      <i class="fa fa-link" aria-hidden="true"></i>博客文章</a>。`,
    ],
  },
];

// 个人开源项目
const projects: Project[] = [
  {
    title: "[项目1]医学科学数据管理与共享平台",
    demoLink: "#",
    startTime: "201X.X",
    endTime: "201X.X",
    skill: "ThinkPHP+MongoDB+Axure",
    background: "实现多类型多来源医学科学数据的提交、管理和共享",
    result: "作品最终取得第三届共享杯国家级竞赛“一等奖”",
  },
  {
    title: "[项目2]肿瘤流行病数据可视化",
    demoLink: "#",
    demoName: "repo链接",
    startTime: "201X.X",
    endTime: "201X.X",
    skill: "HTML 5+D3.js+ECharts+MySQL",
    background: "实现常见肿瘤流行病数据多维度可视化展示、数据透视及分析",
    result: "作品取得第二届共享杯国家级竞赛“特等奖”",
  },
  {
    title: "[项目3]肿瘤流行病数据可视化",
    demoLink: "#",
    startTime: "201X.X",
    endTime: "201X.X",
    skill: "HTML 5+D3.js+ECharts+MySQL",
    background: "实现常见肿瘤流行病数据多维度可视化展示、数据透视及分析",
    result: "作品取得第二届共享杯国家级竞赛“特等奖”",
  },
];

const evaluations = [
  `此处如果有一些能够量化的、且比较个性的指标会有加分，比如喜爱跑步坚持夜跑200小时或者200km等`,
  `“多静多思考，反省不张扬”</span>是我给自己总结的“十字箴言”，鞭策自己做人既不能以己度人，也不以人观己，要脚踏实地做事，坚持自己的梦想和本心。`,
];

const rightAside: RightAside[] = [
  {
    link: "https://github.com/mi-saka10032/resume-template",
    label: "源代码",
  },
  {
    link: "https://mi-sa-ka10032.gitee.io/frontend-service-station/",
    label: "Document",
  },
];

// footer
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

export default {
  title,
  avatar,
  baseInfo,
  contacts,
  skills,
  skillStack,
  workInfo,
  educations,
  projects,
  evaluations,
  rightAside,
  year,
  month,
  day,
};
