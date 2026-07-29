# 元附企业 AI 智能化升级案例册

面向企业 AI 负责人的静态案例网站。内容以可控、可审、可持续优化的人机协作工作流为主线；页面可直接部署到 GitHub Pages。

## 本地运行

```bash
npm ci
npm run dev
npm run test -- --run
npm run lint
npm run build
```

模拟 GitHub Pages 子路径构建：

```powershell
$env:BASE_PATH='/yuanfu-ai-casebook/'
npm run build
Remove-Item Env:BASE_PATH
```

## 内容与图片

- 所有可替换文案和图片描述集中在 `src/data/siteContent.ts`。
- 公共图片放入 `public/assets/`，并以 `/assets/文件名` 写入内容配置；组件会自动拼接 Vite 的基础路径。
- Hero 图使用 `public/assets/hero-digital-universe.png`。替换时请同步更新其 `alt` 文本。

## 隐私与发布

案例素材必须脱敏：不要加入个人姓名、机构名、聊天账号、客户截图、真实订单或可识别经营数据。dyLIVE 页面只用于展示量化分析方法，不构成销售或经营结果承诺。

在 GitHub 仓库的 **Settings → Pages** 中选择 **GitHub Actions** 作为 Source；推送到 `main` 后，`.github/workflows/deploy-pages.yml` 会执行测试、类型检查和构建，再发布站点。
