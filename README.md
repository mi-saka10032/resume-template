# 个人简历

- 这是一份基于 Astro 静态框架编写的个人简历模板
- 感谢 https://gitee.com/itsay/resume 提供的 HTML 和 CSS 灵感
- 图标库来源于 font-awesome，需要使用其他图标的请移步官网文档 https://fontawesome.dashgame.com/
- `.github/workflows/deploy.yml`提供 github-pages 自动部署，Gitee 同步部署
- 建议使用`pnpm install` 安装依赖

# 关于框架

简历模板基于 Astro 生成静态的 html 文件，并且 Astro 框架支持多种前端框架如 React、Vue、Svelte、Solid 不同框架混合导入，此处使用 Svelte 编写的简单模板

如果不考虑扩展功能，只做静态演示，只需要在`src/config.ts`中识别数据结构，改动相应内容即可，几乎没有学习成本

# github-pages 部署

github-pages 提供了静态网站的托管功能，在仓库 push 成功后自动执行工作流：检测 -> 打包 -> 将打包内容覆盖到 gh-pages 分支 -> github-pages 重新部署

部署步骤：

1. 在 github 上新建一个空仓库（此处仓库名为：`resume-template`）
2. 将`astro.config.mjs`文件中的 base 属性值替换为 `/${自己的仓库名称}`（比如`/resume-template`）
3. 给`resume-template`这个空仓库的`Repository secrets`添加一个 ACCESS_TOKEN，添加方法链接：https://zhuanlan.zhihu.com/p/371824341，只关注ACCESS_TOKEN的添加方法即可
4. 将仓库 push 到 github 远程仓库，自动执行部署，可以在 github.io 上看到静态页面

# gitee-pages 同步与部署

因为 github 国内网速较慢，因此本模板也提供了 gitee-pages 的同步部署，但步骤也更复杂，嫌麻烦只想用 github 部署的可以去`.github/workflows/deploy.yml`删除 syncToGitee 下的全部步骤

部署步骤：

1. 登录 gitee，创建一个与 github 同名的仓库，gitee 默认空仓库是私有库(private)
2. 创建一对 ssh 非对称密钥，创建方法：https://blog.csdn.net/weixin_39182097/article/details/125110644
3. 将私钥`id_rsa`中的全部内容复制，配置`Repository secrets`的 GITEE_RSA_PRIVATE_KEY
4. 登录 gitee，在个人中心里设置一个 ssh 公钥，公钥名称无限制，可以是 GITEE_RSA_PUBLIC_KEY，把公钥`id_ras_pub`的内容复制进去保存
5. 复制自己 gitee 账号的密码，配置`Repository secrets`的 GITEE_PASSWORD
6. 打开`.github/workflows/deploy.yml`文件，注意更换 syncToGitee 工作流下面的所有相关的仓库名称、仓库地址、用户名等信息，不要有遗漏
7. 关注 gitee 公众号，登录自己的 gitee 账号，等会自动登录会提示登陆地点在美国。不关注公众号好像不允许操作自动登录
8. 将仓库 push 到 github 远程仓库，github 自动执行部署，gitee 代码会同步一次，然后 gitee-pages 的部署会失败，因为私有库不允许开启 gitee-pages，一开始的空仓库又是默认私有的，所以等这次代码同步之后，将 gitee 仓库设置为公开(public)，然后开启 gitee-pages，此处可以手动设置部署分支：gh-pages，然后执行一次手动部署，再后面的 push 改动就都是自动部署了

操作步骤参考链接：https://blog.csdn.net/u010370082/article/details/117535605
