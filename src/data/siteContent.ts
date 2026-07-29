import type { Capability, CaseStudy, MethodStep, NavigationItem, SectionContent, SiteContent } from '../types/content'

export const capabilities: Capability[] = [
  {
    id: 'design-agent',
    title: 'AI设计智能体',
    description: '将创意方向、视觉规范与可用素材连接为可复用的设计工作流。',
    outcomes: ['辅助创意探索', '保持视觉规范', '保留素材审核环节'],
  },
  {
    id: 'production-agent',
    title: 'AI生产智能体',
    description: '把分散的协作环节拆成可执行、可审核、可追溯的智能生产流程。',
    outcomes: ['明确人机分工', '保留人工决策门禁', '让异常处理可见'],
  },
  {
    id: 'operations-agent',
    title: 'AI运营智能体',
    description: '连接内容审核、发布确认与异常复盘，让运营动作在同一工作流中协同。',
    outcomes: ['统一运营状态', '支持批量处理', '让异常处理可见'],
  },
  {
    id: 'knowledge-agent',
    title: 'AI知识智能体',
    description: '以审核、纠错和沉淀机制，让业务知识持续支持一线服务。',
    outcomes: ['知识统一沉淀', '人工可控复核', '持续优化回答质量'],
  },
  {
    id: 'industry-agent',
    title: '行业智能体建设',
    description: '围绕行业角色、资料与业务规则建设边界明确的专业智能体。',
    outcomes: ['沉淀行业知识', '贴合业务流程', '在可控范围内协作'],
  },
]

export const caseStudies: CaseStudy[] = [
  {
    slug: 'wb-pod',
    title: 'WB POD 上架运营工作流',
    category: '跨境电商运营',
    summary: '俄罗斯 Wildberries 生态 POD 服装卖家工作流案例，不是定制 ERP 产品。',
    challenge: '跨语言、多 SKU 的商品上架依赖多人接力，流程易断、复核成本高。',
    approach: '以自制流程图串联图案上传、AI 买家图、图片审核、俄文文案、定价库存与发布；人工审核是流程中心。',
    safeguards: '展示仅采用脱敏流程说明与演示数据；不公开真实店铺、账号、商品、价格、库存或任务记录。',
    highlights: ['图片审核与俄文草稿审核双门禁', '定价库存与异常续跑', '平台发布前由人工批准'],
    metrics: [
      { value: '6–8 人 → 1–2 人', label: '协作人员（批准指标）' },
      { value: '1 天 → 30 分钟', label: '单套产品处理（批准指标）' },
      { value: '约 200 链接 / 天（原始日处理量）', label: '原始日处理量，仅作背景说明' },
    ],
    disclosure: '案例基于公开技术资料整理，能力表述不等同于经营成效承诺。',
  },
  {
    slug: 'professional-services',
    title: '专业服务机构知识协同',
    category: '专业知识服务',
    summary: '将文档、案例与主题关系结构化，支持团队更快定位可复用的专业知识。',
    challenge: '跨资料检索与经验复用高度依赖个人记忆，协作成本持续累积。',
    approach: '用自制关系图呈现知识关联、检索与工作流衔接，让团队在可控范围内复用专业资料。',
    safeguards: '不公开实际工作设备画面、聊天记录、个人姓名或可识别的专业服务数据。',
    highlights: ['跨资料知识关联', '主题化检索', '匿名化使用反馈'],
    disclosure: '匿名反馈：部分任务从数天缩短至数小时。仅作匿名、非量化使用感受说明。',
  },
  {
    slug: 'dylive',
    title: 'dyLIVE 直播内容诊断',
    category: '直播运营分析',
    summary: '用结构化复盘帮助团队识别留人、互动与转化环节的优化机会。',
    challenge: '直播内容节奏与话术密度难以凭主观感受稳定复盘。',
    approach: '将直播表达拆解为可讨论的内容维度，并以归一化示例数据支持复盘和协作。',
    safeguards: '图表为匿名化示例，不呈现客户、竞品名称或可识别的经营数据。',
    highlights: ['话术节奏诊断', '量化复盘维度', '直播时段结构复盘'],
    assets: [
      {
        src: '/assets/dylive-dialogue-rhythm.png',
        alt: '匿名化的直播内容节奏诊断示例图',
        caption: '示例数据以匿名样本和行业参考呈现内容节奏复盘维度。',
      },
      {
        src: '/assets/dylive-metrics-table.png',
        alt: '匿名化的直播话术量化复盘维度示例图',
        caption: '示例表格用于说明行动引导、互动和商品信息等复盘维度。',
      },
      {
        src: '/assets/dylive-time-structure.png',
        alt: '匿名化的直播时间结构复盘示例图',
        caption: '示例时间结构帮助团队聚焦有效讲解、互动回应与优化环节。',
      },
    ],
    disclosure: '示例数据用于说明方法，不构成对直播效果的承诺。',
  },
  {
    slug: 'dreamsmaker',
    title: 'Dreamsmaker 创意工作台',
    category: 'AI 图文创作',
    summary: '从创意描述到可继续编辑的视觉草图，支持内容团队快速组织创作素材。',
    challenge: '创意产出需要在速度、可控性与素材权利边界之间取得平衡。',
    approach: '以提示词、生成与画布式整理串联创作过程，并在发布前保留素材审核。',
    safeguards: '公开展示只使用权利来源明确的安全样例；不展示人物、未成年人、敏感场景或第三方品牌素材。',
    highlights: ['创意描述输入', '视觉草图生成', '画布式项目整理'],
    disclosure: '示意画面不代表对任何第三方素材、商标或肖像的使用授权。',
  },
  {
    slug: 'ai-service',
    title: 'AI 客服知识运营平台',
    category: '客户服务与知识管理',
    summary: '从业务资料沉淀、知识审核到人工复核，形成可治理、可追溯的服务闭环。',
    challenge: '客服知识分散在资料与经验中，更新和纠错难以形成稳定机制。',
    approach: '以自制知识运营图说明审核、AI 辅助建议与人工纠正的持续运营机制。',
    safeguards: '不展示真实商户、人员、工单、具体业务问答、原始产品文档或原始界面指标。',
    highlights: ['知识审核发布', '人工复核 AI 建议', '客户自助入口'],
    disclosure: '演示界面仅用于描述通用能力，所有内容均为演示数据。',
  },
]

export const methodSteps: MethodStep[] = [
  { title: '企业诊断', description: '明确目标、边界与优先级，识别最值得投入的业务问题。' },
  { title: '业务流程拆解', description: '梳理角色、输入、决策与交付物，找到协作中的断点。' },
  { title: 'AI机会识别', description: '评估可由 AI 增强的任务，并区分自动化与人工决策。' },
  { title: 'Workflow重构', description: '重组人机协作路径，将关键状态、审核和异常处理写入流程。' },
  { title: '应用落地', description: '用可验证的场景上线试运行，并保留必要的业务控制点。' },
  { title: '智能体建设', description: '围绕明确职责配置智能体、知识与工具，而非追求无边界自动化。' },
  { title: '持续优化', description: '依据反馈、质量与异常记录迭代流程，让能力在运营中沉淀。' },
]

export const navigation: NavigationItem[] = [
  { id: 'top', label: '首页' },
  { id: 'challenge', label: '挑战' },
  { id: 'method', label: '方法' },
  { id: 'capabilities', label: '能力' },
  { id: 'cases', label: '案例' },
  { id: 'ai-os', label: 'AI OS' },
  { id: 'cooperation', label: '合作' },
]

export const sections: Record<'challenge' | 'method' | 'capabilities', SectionContent> = {
  challenge: {
    id: 'challenge',
    headingId: 'challenge-title',
    eyebrow: 'ENTERPRISE FRICTION',
    title: '让 AI 进入业务，难点不在模型本身',
    description: '从真实业务场景提炼出的四类协作摩擦，构成我们拆解问题的起点。',
  },
  method: {
    id: 'method',
    headingId: 'method-title',
    eyebrow: 'THE METHOD',
    title: '从诊断到持续优化的七步路径',
    description: '以业务目标和人机协作为尺度，将 AI 能力编入可控、可审、可持续的工作系统。',
  },
  capabilities: {
    id: 'capabilities',
    headingId: 'capabilities-title',
    eyebrow: 'CAPABILITY SYSTEM',
    title: '五类能力，连接业务的每一次协作',
    description: '不是孤立的工具堆叠，而是带着职责、边界和复核机制的能力组合。',
  },
}

export const siteContent: SiteContent = {
  brand: {
    name: '元附',
    descriptor: '企业 AI 智能化升级',
  },
  hero: {
    id: 'top',
    headingId: 'hero-title',
    eyebrow: '元附企业 AI 智能化升级',
    title: '让 AI 在真实业务中稳定工作',
    description: '从诊断、流程重构到应用落地，元附帮助团队建立可控、可审、可持续优化的人机协作系统。',
    artwork: {
      src: '/assets/hero-digital-universe.png',
      alt: '由银色轨道、琥珀光点与青绿色光晕构成的抽象数字宇宙',
    },
    cta: {
      label: '探索方法',
      href: '#method',
    },
  },
  navigation,
  sections,
  capabilities,
  caseStudies,
  methodSteps,
}
