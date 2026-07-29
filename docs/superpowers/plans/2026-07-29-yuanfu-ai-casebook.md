# 元附企业 AI 智能化升级案例册 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建并发布一份面向联通 AI 负责人的响应式企业 AI 案例网站。

**Architecture:** 单页 React/Vite 静态站点，以数据配置驱动所有案例内容与素材；组件仅负责布局和交互。生产构建通过 GitHub Actions 发布到 GitHub Pages，所有关键图片都从仓库本地加载。

**Tech Stack:** React 18、TypeScript、Vite、Tailwind CSS 3、Framer Motion、Lucide React、Vitest、Testing Library、GitHub Pages

## Global Constraints

- 主背景固定为 `#0C0C0C`，避免蓝色科技模板、机器人形象和 SaaS 后台感。
- 必须包含 Hero、企业挑战、方法论、五类能力、五个案例、AI OS、联通合作和结尾行动区。
- WB POD 只表述为定制 AI 工作流改造案例，不表述为 ERP 产品。
- 所有专业服务机构与需求沟通素材必须脱敏；不公开姓名、机构名、聊天账号或案件信息。
- dyLIVE 只展示量化分析过程，不承诺销售增长结果。
- 图片必须由 `src/data/siteContent.ts` 统一配置，并从 `public/assets/` 加载。
- 必须适配 GitHub Pages 子路径并支持 `prefers-reduced-motion`。

---

### Task 1: 工程、内容模型与素材基线

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `index.html`
- Create: `src/test/setup.ts`
- Create: `src/data/siteContent.test.ts`
- Create: `src/data/siteContent.ts`
- Create: `src/types/content.ts`
- Create: `public/assets/*`

**Interfaces:**
- Produces: `siteContent`, `capabilities`, `caseStudies`, `methodSteps` and strongly typed `CaseStudy` / `Capability` records.

- [ ] **Step 1: Write the failing content test**

```ts
import { describe, expect, it } from 'vitest'
import { caseStudies, methodSteps } from './siteContent'

describe('site content', () => {
  it('ships five ordered, privacy-safe case studies', () => {
    expect(caseStudies).toHaveLength(5)
    expect(caseStudies[0].slug).toBe('wb-pod')
    expect(JSON.stringify(caseStudies)).not.toMatch(/郭媛媛|张全蛋|liyyyyyyh/i)
  })

  it('describes the full seven-step transformation method', () => {
    expect(methodSteps.map((step) => step.title)).toEqual([
      '企业诊断', '业务流程拆解', 'AI机会识别', 'Workflow重构',
      '应用落地', '智能体建设', '持续优化',
    ])
  })
})
```

- [ ] **Step 2: Run `npm test -- --run src/data/siteContent.test.ts` and verify failure because the module does not exist.**
- [ ] **Step 3: Add the typed content model, exact approved copy, build configuration, and locally named image assets.**
- [ ] **Step 4: Run the same test and verify it passes.**
- [ ] **Step 5: Commit as `build content and asset foundation`.**

### Task 2: Page shell, navigation and core sections

**Files:**
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/App.test.tsx`
- Create: `src/index.css`
- Create: `src/components/SectionHeading.tsx`
- Create: `src/components/FadeIn.tsx`
- Create: `src/sections/HeroSection.tsx`
- Create: `src/sections/ChallengeSection.tsx`
- Create: `src/sections/MethodSection.tsx`
- Create: `src/sections/CapabilitiesSection.tsx`

**Interfaces:**
- Consumes: exported records from `src/data/siteContent.ts`.
- Produces: accessible section IDs `top`, `challenge`, `method`, `capabilities`, `cases`, `ai-os`, and `cooperation`.

- [ ] **Step 1: Write the failing page-shell test** that renders `App` and asserts the hero heading, the four enterprise challenges, all seven method steps and a unique navigation link for each major section.
- [ ] **Step 2: Run `npm test -- --run src/App.test.tsx`; verify the assertions fail because `App` and sections are absent.**
- [ ] **Step 3: Implement the semantic page shell, responsive navigation, Hero, challenge, method and capability sections, using `FadeIn` with reduced-motion support.**
- [ ] **Step 4: Run the page-shell test and verify it passes.**
- [ ] **Step 5: Commit as `build core casebook sections`.**

### Task 3: Sticky case studies, AI OS and cooperation

**Files:**
- Create: `src/components/CaseImage.tsx`
- Create: `src/components/Metric.tsx`
- Create: `src/sections/CaseStudiesSection.tsx`
- Create: `src/sections/AiOsSection.tsx`
- Create: `src/sections/CooperationSection.tsx`
- Modify: `src/App.tsx`
- Modify: `src/App.test.tsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `caseStudies` and `aiOsLayers` from the data module.
- Produces: five keyboard-readable case cards and the cooperation value proposition.

- [ ] **Step 1: Extend the failing app test** to assert five case-study articles, the WB POD values `6–8人`, `1–2人`, `1天`, `30分钟`, the five AI OS layers and the sentence `联通连接企业需求，元附负责AI落地`.
- [ ] **Step 2: Run the focused test and verify the new assertions fail.**
- [ ] **Step 3: Implement sticky stacking cards, safe screenshot captions, AI OS layer visualization, cooperation comparison and final CTA.**
- [ ] **Step 4: Run the focused test and verify all assertions pass.**
- [ ] **Step 5: Commit as `add evidence cases and cooperation story`.**

### Task 4: Visual polish, generated hero and deployment configuration

**Files:**
- Create: `public/assets/hero-digital-universe.png`
- Create: `.github/workflows/deploy-pages.yml`
- Create: `README.md`
- Modify: `src/index.css`
- Modify: `src/sections/HeroSection.tsx`
- Modify: `vite.config.ts`
- Modify: `package.json`

**Interfaces:**
- Produces: `npm run build`, `npm run test`, `npm run lint` and GitHub Pages artifact deployment.

- [ ] **Step 1: Add a failing configuration test or static assertion** confirming Vite `base` is read from `BASE_PATH` and the workflow runs the production build before upload.
- [ ] **Step 2: Run it and verify failure before deployment configuration exists.**
- [ ] **Step 3: Add the generated hero asset, final responsive styling, metadata, README and Pages workflow using `actions/configure-pages`, `actions/upload-pages-artifact`, and `actions/deploy-pages` pinned to current major versions.**
- [ ] **Step 4: Run `npm test -- --run`, `npm run lint`, and `npm run build`; verify all exit successfully.**
- [ ] **Step 5: Commit as `prepare polished github pages release`.**

### Task 5: Browser and content verification, publish

**Files:**
- Modify only files required by verified defects.

**Interfaces:**
- Consumes: production build and deployment workflow.
- Produces: public GitHub Pages URL.

- [ ] **Step 1: Start the built site locally and inspect desktop and mobile layouts in a browser, verifying all section navigation, screenshot loading, sticky cards, reduced motion and no horizontal overflow.**
- [ ] **Step 2: Search the built source and image captions for personal names, local paths, internal domains and unapproved metrics; fix any findings with a regression assertion first.**
- [ ] **Step 3: Run the complete test, lint and build commands again and record the fresh output.**
- [ ] **Step 4: Publish the verified source to a public GitHub repository, enable GitHub Pages through Actions, and wait for the deployment workflow to succeed.**
- [ ] **Step 5: Open the deployed URL and verify the title, hero, all five cases, images and cooperation section load successfully.**

